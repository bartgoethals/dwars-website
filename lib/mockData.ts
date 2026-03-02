export interface DrupalArticle {
    id: string;
    type: "node--article";
    attributes: {
        title: string;
        path: { alias: string };
        created: string;
        body?: { value: string; summary?: string };
        field_excerpt?: string;
    };
    relationships?: {
        field_image?: {
            data?: { id: string; type: "file--file" } | null;
        };
        field_author?: {
            data?: { id: string; type: "node--author" } | null;
        };
        field_category?: {
            data?: { id: string; type: "taxonomy_term--category" } | null;
        };
    };
}

export interface DrupalFile {
    id: string;
    type: "file--file";
    attributes: {
        uri: { url: string };
    };
}

export const mockFiles: Record<string, DrupalFile> = {
    "file-1": {
        id: "file-1",
        type: "file--file",
        attributes: { uri: { url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2669&auto=format&fit=crop" } }
    },
    "file-2": {
        id: "file-2",
        type: "file--file",
        attributes: { uri: { url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2670&auto=format&fit=crop" } }
    },
    "file-3": {
        id: "file-3",
        type: "file--file",
        attributes: { uri: { url: "https://images.unsplash.com/photo-1473621038933-40e94eab08c5?q=80&w=2671&auto=format&fit=crop" } }
    },
    "file-4": {
        id: "file-4",
        type: "file--file",
        attributes: { uri: { url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2594&auto=format&fit=crop" } }
    },
    "file-5": {
        id: "file-5",
        type: "file--file",
        attributes: { uri: { url: "https://images.unsplash.com/photo-1540324155970-1c8bfaf54d4f?q=80&w=2670&auto=format&fit=crop" } }
    },
    "file-6": {
        id: "file-6",
        type: "file--file",
        attributes: { uri: { url: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2656&auto=format&fit=crop" } }
    }
};

export const mockArticles: DrupalArticle[] = [
    {
        id: "art-1",
        type: "node--article",
        attributes: {
            title: "UAntwerpen opgelicht: subsidies overheid blijken sinterklaas-munten te zijn",
            path: { alias: "/artikels/uantwerpen-opgelicht" },
            created: "2026-03-01T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
        },
        relationships: {
            field_image: { data: { id: "file-1", type: "file--file" } }
        }
    },
    {
        id: "art-2",
        type: "node--article",
        attributes: {
            title: "Scharen bij kabinet Demir gestolen: knip uitgesteld",
            path: { alias: "/artikels/scharen-demir" },
            created: "2026-02-28T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
        }
    },
    {
        id: "art-3",
        type: "node--article",
        attributes: {
            title: "UA Sportraad loopt per ongeluk in verkeerde richting tijdens Campusrun en zamelt -1272 euro in voor Tejo",
            path: { alias: "/artikels/ua-sportraad" },
            created: "2026-02-27T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
        },
        relationships: {
            field_image: { data: { id: "file-2", type: "file--file" } }
        }
    },
    {
        id: "art-4",
        type: "node--article",
        attributes: {
            title: "\"Skibidi Gangnam, what's up?\": Rector richt zich in speech Academische Opening tot eerstejaars",
            path: { alias: "/artikels/skibidi-gangnam" },
            created: "2026-02-26T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
        },
        relationships: {
            field_image: { data: { id: "file-3", type: "file--file" } }
        }
    },
    {
        id: "art-5",
        type: "node--article",
        attributes: {
            title: "Komida komt erachter dat porselein herbruikbaar is",
            path: { alias: "/artikels/komida-porselein" },
            created: "2026-02-25T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        }
    },
    {
        id: "art-6",
        type: "node--article",
        attributes: {
            title: "Bouwwerken Making CDE in schaduw aantijgingen onbetaalde kinderarbeid",
            path: { alias: "/artikels/bouwwerken-cde" },
            created: "2026-02-24T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
        }
    },
    {
        id: "art-7",
        type: "node--article",
        attributes: {
            title: "Politie waarschuwt: sudoku-killer zal volgende keer 1, 4 of 9 slachtoffers maken",
            path: { alias: "/artikels/sudoku-killer" },
            created: "2026-02-23T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        }
    },
    {
        id: "art-8",
        type: "node--article",
        attributes: {
            title: "Mental Health-hond bijt 4 studenten -- 3 studenten zwaargewond afgevoerd naar het ziekenhuis",
            path: { alias: "/artikels/mental-health-hond" },
            created: "2026-02-22T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
        },
        relationships: {
            field_image: { data: { id: "file-4", type: "file--file" } }
        }
    },
    {
        id: "art-9",
        type: "node--article",
        attributes: {
            title: "Vanaf 2026 kleinere porties in komida met campagne \"Nothing tastes as good as skinny feels\"",
            path: { alias: "/artikels/kleinere-porties" },
            created: "2026-02-21T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
        }
    },
    {
        id: "art-10",
        type: "node--article",
        attributes: {
            title: "Afas-dome na nieuwe sponsordeal omgedoopt tot komida-dome",
            path: { alias: "/artikels/afas-dome" },
            created: "2026-02-20T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
        },
        relationships: {
            field_image: { data: { id: "file-5", type: "file--file" } }
        }
    },
    {
        id: "art-11",
        type: "node--article",
        attributes: {
            title: "Ben Weyts viert 5000ste \"geknipte\" student met eenzame avond alleen, zoals elke avond",
            path: { alias: "/artikels/ben-weyts" },
            created: "2026-02-19T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
        },
        relationships: {
            field_image: { data: { id: "file-6", type: "file--file" } }
        }
    },
    {
        id: "art-12",
        type: "node--article",
        attributes: {
            title: "Studentenraad sponsort met overgebleven budget Formule 1-team: vanaf 2026 \"McLaren-Stura\"",
            path: { alias: "/artikels/formule-1" },
            created: "2026-02-18T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex."
        }
    },
    {
        id: "art-13",
        type: "node--article",
        attributes: {
            title: "Refter wordt omgetoverd tot luxerestaurant: \"We serveren vanaf nu enkel nog kaviaar op toast\"",
            path: { alias: "/artikels/refter-luxerestaurant" },
            created: "2026-02-17T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi."
        }
    },
    {
        id: "art-14",
        type: "node--article",
        attributes: {
            title: "Nieuwe AI-cursus blijkt gewoon een manilla map vol memes te zijn",
            path: { alias: "/artikels/ai-cursus-memes" },
            created: "2026-02-16T12:00:00Z",
            field_excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
        }
    }
];
