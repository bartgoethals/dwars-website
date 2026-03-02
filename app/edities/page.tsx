import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata = {
    title: 'Archief | dwars',
    description: 'Alle vorige edities van dwars.',
};

export default function EditiesPage() {
    const editiesDirectory = path.join(process.cwd(), 'public', 'tags-edities');

    let editionFiles: string[] = [];
    try {
        editionFiles = fs.readdirSync(editiesDirectory);
    } catch (err) {
        console.error("Error reading tags-edities directory:", err);
    }

    // Filter for image files and extract edition data
    const editions = editionFiles
        .filter((file) => file.match(/\.(png|jpe?g|svg)$/i))
        .map((file) => {
            // Assuming filenames are like 'dwarseditites-250.png'
            const match = file.match(/dwarseditites?-(\d+)\./i);
            const number = match ? parseInt(match[1], 10) : 0;
            return {
                filename: file,
                number,
            };
        })
        .filter((edition) => edition.number > 0 && edition.number <= 169)
        .sort((a, b) => b.number - a.number); // Sort newest to oldest

    return (
        <div className="flex flex-col flex-1 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 min-h-screen">
            <main className="flex-grow pb-12 pt-16 lg:pt-24 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
                {/* Header Section */}
                <div className="mb-12 border-b border-black dark:border-white pb-6 pt-12 md:pt-0">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl uppercase tracking-widest text-[#FF007F]">
                        Archief
                    </h1>
                    <p className="mt-4 font-body text-lg md:text-xl max-w-3xl">
                        Ontdek hier alle vorige edities van dwars.
                    </p>
                </div>

                {/* Editions Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
                    {editions.map((edition) => (
                        <Link
                            key={edition.filename}
                            href={`#`} // Currently just linking to # as per instructions (or could be left as a purely visual grid, but button images imply interaction)
                            className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
                        >
                            <div className="relative w-full aspect-[4/3] mb-4">
                                <Image
                                    src={`/tags-edities/${edition.filename}`}
                                    alt={`dwars editie ${edition.number}`}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                                    className="object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
                                />
                            </div>
                            <span className="font-heading text-xl uppercase tracking-wider text-black dark:text-white group-hover:text-[#FF007F] transition-colors duration-300">
                                EDITIE {edition.number}
                            </span>
                        </Link>
                    ))}
                </div>

                {editions.length === 0 && (
                    <div className="text-center py-20 font-body text-xl">
                        Geen edities gevonden in het archief.
                    </div>
                )}
            </main>
        </div>
    );
}
