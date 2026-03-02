import React from 'react';
import Link from 'next/link';

interface ArticleCardProps {
    title: string;
    excerpt?: string;
    imageUrl?: string;
    slug: string;
    layout?: 'row' | 'column' | 'masonry';
    tags?: string[];
    date?: string;
}

export default function ArticleCard({ title, excerpt, imageUrl, slug, layout = 'column', date }: ArticleCardProps) {
    const isRow = layout === 'row';
    const isMasonry = layout === 'masonry';

    if (isMasonry) {
        return (
            <article className="group mb-6 pb-4 border-b-2 border-black break-inside-avoid relative bg-white transition-all duration-300 cursor-pointer">
                <Link href={`/artikels/${slug}`} className="block w-full h-full relative">
                    {imageUrl ? (
                        <div className="relative w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src={imageUrl} alt={title} className="w-full h-auto object-cover block" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full pointer-events-none">
                                <h3 className="text-xl md:text-2xl font-heading leading-tight text-white uppercase drop-shadow-md tracking-wide group-hover:text-dwars-pink transition-colors line-clamp-3">
                                    {title}
                                </h3>
                            </div>

                            {/* Pink Cursor pseudo-element effect on hover */}
                            <div className="absolute opacity-0 group-hover:opacity-100 right-4 bottom-4 w-8 h-8 pointer-events-none transition-opacity text-dwars-pink">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform -rotate-45 drop-shadow-md">
                                    <path d="M4 0l16 12-7 2 4 8-4 2-4-8-3 5z" />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <div className="py-2 mb-2 group-hover:bg-gray-50 transition-colors">
                            <h3 className="text-xl md:text-2xl font-heading mb-3 leading-tight uppercase text-black tracking-wide group-hover:text-dwars-pink transition-colors line-clamp-3">
                                {title}
                            </h3>
                            {excerpt && (
                                <p className="text-sm md:text-base text-gray-800 leading-snug font-sans font-medium line-clamp-4">
                                    {excerpt}
                                </p>
                            )}
                        </div>
                    )}
                </Link>
            </article>
        );
    }

    return (
        <article className={`group flex ${isRow ? 'flex-row gap-6 items-start' : 'flex-col gap-4'} mb-12`}>
            {imageUrl && (
                <div className={`${isRow ? 'w-1/3 shrink-0' : 'w-full'} overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer`}>
                    <Link href={`/artikels/${slug}`}>
                        <img src={imageUrl} alt={title} className="w-full h-auto object-cover aspect-video bg-dwars-gray" />

                        {/* Pink Cursor pseudo-element effect on hover, a nice visual Easter egg */}
                        <div className="absolute opacity-0 group-hover:opacity-100 right-4 bottom-4 w-8 h-8 pointer-events-none transition-opacity text-dwars-pink">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform -rotate-45 drop-shadow-md">
                                <path d="M4 0l16 12-7 2 4 8-4 2-4-8-3 5z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            )}

            <div className={`flex flex-col ${isRow ? 'w-2/3' : 'w-full'}`}>
                <Link href={`/artikels/${slug}`} className="hover:text-dwars-pink transition-colors">
                    <h3 className="text-2xl font-heading mb-2 leading-tight uppercase tracking-wide">
                        {title}
                    </h3>
                </Link>
                {date && <p className="text-xs font-bold uppercase tracking-wider mb-2">{date}</p>}
                {excerpt && (
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                        {excerpt}
                    </p>
                )}
            </div>
        </article>
    );
}
