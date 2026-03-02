import { mockArticles, mockFiles, DrupalArticle } from "./mockData";

const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true";
const DRUPAL_URL = process.env.NEXT_PUBLIC_DRUPAL_URL || "https://www.dwars.be";

export interface FormattedArticle {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    imageUrl?: string;
    created: string;
}

/**
 * Normalizes a JSON:API Drupal Node into a simpler FormattedArticle object
 * suitable for our frontend components.
 */
function normalizeArticle(node: DrupalArticle, includedFiles?: any[]): FormattedArticle {
    let imageUrl: string | undefined = undefined;

    // Resolve the image relationship if it exists
    const imageId = node.relationships?.field_image?.data?.id;
    if (imageId) {
        if (USE_MOCK_DATA) {
            imageUrl = mockFiles[imageId]?.attributes.uri.url;
        } else if (includedFiles) {
            const file = includedFiles.find((f: any) => f.id === imageId && f.type === "file--file");
            if (file && file.attributes.uri.url) {
                // Drupal returns relative URLs for files, usually starting with /sites/...
                // We prepend the base URL.
                const path = file.attributes.uri.url;
                imageUrl = path.startsWith("http") ? path : `${DRUPAL_URL}${path}`;
            }
        }
    }

    // Extract the slug from the path alias.
    // path.alias usually looks like "/artikels/my-slug"
    let slug = node.attributes.path.alias || "";
    if (slug.startsWith("/artikels/")) {
        slug = slug.replace("/artikels/", "");
    }

    return {
        id: node.id,
        title: node.attributes.title,
        slug: slug,
        excerpt: node.attributes.field_excerpt,
        imageUrl: imageUrl,
        created: node.attributes.created,
    };
}

/**
 * Gets a list of recent articles from Drupal or Mock Data
 */
export async function getRecentArticles(limit: number = 10): Promise<FormattedArticle[]> {
    if (USE_MOCK_DATA) {
        // Return mock data, formatted
        return mockArticles.slice(0, limit).map(article => normalizeArticle(article));
    }

    try {
        // REAL DRUPAL FETCH
        // Using include=field_image to get the media URL in the same request
        const response = await fetch(
            `${DRUPAL_URL}/jsonapi/node/article?sort=-created&page[limit]=${limit}&include=field_image`,
            { next: { revalidate: 60 } }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch articles from Drupal: ${response.status}`);
        }

        const json = await response.json();

        // Normalize mapping
        return json.data.map((node: any) => normalizeArticle(node as DrupalArticle, json.included));

    } catch (error) {
        console.error("Error fetching recent articles:", error);
        return [];
    }
}
