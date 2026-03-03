import React from 'react';
import { notFound } from 'next/navigation';
import { getAuthorBySlug } from '@/lib/redactieData';

// In Next.js 15, route segment params is a Promise that needs to be unwrapped.
export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const author = getAuthorBySlug(slug);

    if (!author) {
        notFound();
    }

    return (
        <div className="flex w-full min-h-full relative transition-colors duration-300 flex-col items-center justify-center p-12">
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase tracking-wide dark:text-white transition-colors text-center drop-shadow-sm transform -rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer text-dwars-text">
                {author.name}
            </h1>
        </div>
    );
}
