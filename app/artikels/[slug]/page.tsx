import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TapeTag from '@/components/TapeTag';

export default function ArticlePage({ params }: { params: { slug: string } }) {
    // This is a mockup page, normally we'd fetch the article by slug.

    return (
        <div className="flex w-full h-full relative bg-white">
            {/* Article Content Area */}
            <div className="flex-1 p-12 pr-6 max-w-4xl mx-auto">

                {/* Hero Image */}
                <div className="w-[110%] -ml-[5%] relative aspect-[21/9] bg-dwars-gray mb-12 grayscale hover:grayscale-0 transition-all duration-700">
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
                <h1 className="text-6xl font-heading leading-tight mb-8 uppercase tracking-wide px-2 drop-shadow-sm">
                    UAntwerpen opgelicht: subsidies overheid blijken sinterklaas-munten te zijn
                </h1>

                {/* Intro / Excerpt */}
                <p className="text-xl font-bold font-sans mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </p>

                {/* Meta */}
                <div className="text-sm font-bold tracking-widest uppercase mb-12 border-b-2 border-dashed border-gray-300 pb-4">
                    12 DECEMBER 2025 — THIJS VAN DAM
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none text-gray-800 font-sans leading-loose space-y-6">
                    <h2 className="text-3xl font-heading uppercase tracking-wide mt-12 mb-4 bg-black text-white inline-block px-4 py-1 transform -rotate-1">Tussentitel</h2>
                    <p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nisl ut aliquip ex ea commodo consequat.
                    </p>

                    <h2 className="text-3xl font-heading uppercase tracking-wide mt-12 mb-4">Andere tussentitel</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Credits */}
                <div className="mt-16 pt-8 border-t-2 border-black text-sm">
                    <p>Auteur: <span className="underline font-bold cursor-pointer hover:text-dwars-pink">Thijs Colémont</span></p>
                    <p className="flex items-center gap-2">
                        Beeld: <span className="underline font-bold cursor-pointer hover:text-dwars-pink">Laura Verhaegen</span>
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-dwars-pink transform -rotate-45">
                            <path d="M4 0l16 12-7 2 4 8-4 2-4-8-3 5z" />
                        </svg>
                    </p>
                </div>
            </div>

            {/* Right Sidebar (Related & Ads) */}
            <aside className="w-[320px] p-8 pl-6 border-l-2 border-dashed border-gray-200 shrink-0 bg-[#fefefe]">
                <div className="sticky top-8 space-y-12">
                    {/* Gerelateerde Artikels styling as a taped note */}
                    <div className="bg-[#f8f8f8] p-6 shadow-sm relative border border-gray-200">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-tape/30 backdrop-blur-sm shadow-sm rotate-2 z-10" />
                        <h3 className="font-heading text-2xl mb-6 uppercase">Gerelateerde artikels</h3>
                        <div className="flex flex-col gap-4">
                            {[1, 2, 3].map((i) => (
                                <Link href="#" key={i} className="flex gap-4 group cursor-pointer border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                    <div className="w-16 h-16 bg-gray-200 shrink-0 grayscale group-hover:grayscale-0 transition-colors">
                                        <img src={`https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=200&auto=format&fit=crop`} alt="thumb" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm leading-tight group-hover:text-dwars-pink transition-colors">Lorem ipsum dolor sit amet {i}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Ad 2 */}
                    <div className="bg-[#f0f0f0] aspect-[4/5] w-full p-6 flex flex-col relative border border-gray-300 pointer-events-none overflow-hidden">
                        <div className="absolute top-4 right-4 bg-black text-white text-[10px] uppercase px-2 py-1 rounded-full font-bold transform rotate-12 z-10">Alleen voor<br />-26<br />jaar</div>
                        <h4 className="font-heading text-3xl leading-tight mb-4 relative z-10">Betrouwbare journalistiek is nooit gratis.</h4>
                        <p className="font-heading text-5xl border-y-4 border-black py-2 mb-4 relative z-10">Daarom<br />betalen<br /><span className="border-4 border-black px-2 inline-block -rotate-3 mt-1 bg-white">wij!</span></p>
                    </div>
                </div>
            </aside>
        </div>
    );
}
