import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TapeTag from '@/components/TapeTag';

export default function ArticlePage({ params }: { params: { slug: string } }) {
    // This is a mockup page, normally we'd fetch the article by slug.

    return (
        <div className="flex flex-col lg:flex-row w-full h-full relative transition-colors duration-300">
            {/* Article Content Area */}
            <div className="flex-1 p-6 md:p-12 md:pr-6 max-w-4xl mx-auto w-full">

                {/* Hero Image */}
                <div className="w-[110%] -ml-[5%] relative aspect-[21/9] bg-dwars-gray dark:bg-gray-800 mb-12 grayscale hover:grayscale-0 transition-all duration-700">
                    <img
                        src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2669&auto=format&fit=crop"
                        alt="Rector UAntwerpen"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Tags */}
                <div className="flex gap-4 mb-8">
                    <TapeTag label="maatschappij" />
                    <TapeTag label="lol" />
                    <TapeTag label="krom" />
                    <TapeTag label="168" />
                </div>

                {/* Title */}
                <h1 className="text-6xl font-heading leading-tight mb-8 uppercase tracking-wide px-2 drop-shadow-sm dark:text-white transition-colors">
                    UAntwerpen opgelicht: subsidies overheid blijken sinterklaas-munten te zijn
                </h1>

                {/* Intro / Excerpt */}
                <p className="text-xl font-bold font-sans mb-8 leading-relaxed dark:text-gray-200 transition-colors">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </p>

                {/* Meta */}
                <div className="text-sm font-bold tracking-widest uppercase mb-12 border-b-2 border-dashed border-gray-600 md:border-gray-300 dark:border-gray-600 md:dark:border-gray-600 pb-4 transition-colors">
                    12 DECEMBER 2025 — THIJS VAN DAM
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none text-gray-200 md:text-gray-800 dark:text-gray-300 md:dark:text-gray-300 font-sans leading-loose space-y-6 transition-colors">
                    <h2 className="text-3xl font-heading uppercase tracking-wide mt-12 mb-4 bg-black dark:bg-white text-white dark:text-black inline-block px-4 py-1 transform -rotate-1 transition-colors">Tussentitel</h2>
                    <p className="dark:text-gray-300 transition-colors">
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </p>
                    <p className="dark:text-gray-300 transition-colors">
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nisl ut aliquip ex ea commodo consequat.
                    </p>

                    <h2 className="text-3xl font-heading uppercase tracking-wide mt-12 mb-4 dark:text-white transition-colors">Andere tussentitel</h2>
                    <p className="dark:text-gray-300 transition-colors">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Credits */}
                <div className="mt-16 pt-8 border-t-2 border-black dark:border-white text-sm transition-colors">
                    <p>Auteur: <span className="underline font-bold cursor-pointer hover:text-dwars-pink dark:hover:text-dwars-pink transition-colors">Thijs Colémont</span></p>
                    <p className="flex items-center gap-2">
                        Beeld: <span className="underline font-bold cursor-pointer hover:text-dwars-pink dark:hover:text-dwars-pink transition-colors">Laura Verhaegen</span>
                    </p>
                </div>
            </div>

            {/* Right Sidebar (Related & Ads) */}
            <aside className="hidden lg:block w-[320px] p-8 pl-6 border-l-2 border-dashed border-gray-700 md:border-gray-200 dark:border-gray-700 shrink-0 bg-black md:bg-[#fefefe] dark:bg-[#222222] transition-colors">
                <div className="sticky top-8 space-y-12">
                    {/* Gerelateerde Artikels styling as a taped note */}
                    <div className="bg-[#f8f8f8] dark:bg-gray-800 p-6 shadow-sm relative border border-gray-700 md:border-gray-200 dark:border-gray-700 transition-colors">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-tape/30 backdrop-blur-sm shadow-sm rotate-2 z-10" />
                        <h3 className="font-heading text-2xl mb-6 uppercase text-white md:text-black dark:text-white transition-colors">Gerelateerde artikels</h3>
                        <div className="flex flex-col gap-4">
                            {[1, 2, 3].map((i) => (
                                <Link href="#" key={i} className="flex gap-4 group cursor-pointer border-b border-gray-700 md:border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0 transition-colors">
                                    <div className="w-16 h-16 bg-gray-200 shrink-0 grayscale group-hover:grayscale-0 transition-colors">
                                        <img src={`https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=200&auto=format&fit=crop`} alt="thumb" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm leading-tight text-white md:text-black dark:text-gray-200 group-hover:text-dwars-pink md:group-hover:text-dwars-pink dark:group-hover:text-dwars-pink transition-colors">Lorem ipsum dolor sit amet {i}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Ad 2 */}
                    <div className="bg-[#f0f0f0] dark:bg-gray-800 aspect-[4/5] w-full p-6 flex flex-col relative border border-gray-300 dark:border-gray-700 pointer-events-none overflow-hidden transition-colors">
                        <div className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black text-[10px] uppercase px-2 py-1 rounded-full font-bold transform rotate-12 z-10 transition-colors">Alleen voor<br />-26<br />jaar</div>
                        <h4 className="font-heading text-3xl leading-tight mb-4 relative z-10 text-black md:text-black dark:text-white transition-colors">Betrouwbare journalistiek is nooit gratis.</h4>
                        <p className="font-heading text-5xl border-y-4 border-black dark:border-white py-2 mb-4 relative z-10 dark:text-white transition-colors">Daarom<br />betalen<br /><span className="border-4 border-black dark:border-white px-2 inline-block -rotate-3 mt-1 bg-white dark:bg-black text-black dark:text-white transition-colors">wij!</span></p>
                    </div>
                </div>
            </aside>
        </div>
    );
}
