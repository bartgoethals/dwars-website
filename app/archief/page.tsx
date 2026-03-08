import React from 'react';
import ArticleCard from '@/components/ArticleCard';
import SectionHeader from '@/components/SectionHeader';

export default function ArchiefPage() {
    return (
        <div className="flex flex-col lg:flex-row w-full h-full relative transition-colors duration-300">
            {/* Main Content Area: Articles List */}
            <div className="flex-1 p-6 md:p-12 md:pr-6 max-w-5xl">
                <SectionHeader title="archief" />

                <div className="flex flex-col mt-8">
                    <ArticleCard
                        title="UAntwerpen opgelicht: subsidies van overheid blijken sinterklaas-munten te zijn"
                        excerpt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis..."
                        slug="uantwerpen-opgelicht"
                        layout="row"
                        imageUrl="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=300&auto=format&fit=crop"
                    />

                    <ArticleCard
                        title="Comac spreekt fatwa uit op dwars"
                        excerpt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis..."
                        slug="comac-fatwa"
                        layout="row"
                        imageUrl="https://images.unsplash.com/photo-1596683720379-b8fb7b227c8e?q=80&w=300&auto=format&fit=crop"
                    />

                    <ArticleCard
                        title="Mental Health-hond bijt 4 studenten -- 3 studenten zwaargewond afgevoerd naar het ziekenhuis"
                        excerpt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis..."
                        slug="mental-health-hond"
                        layout="row"
                        imageUrl="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=300&auto=format&fit=crop"
                    />

                    <ArticleCard
                        title="Studentenraad sponsort met overgebleven budget Formule 1-team: vanaf 2026 &quot;McLaren-Stura&quot;"
                        excerpt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis..."
                        slug="formule-1"
                        layout="row"
                        imageUrl="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=300&auto=format&fit=crop"
                    />

                    <ArticleCard
                        title="Vanaf 2026 kleinere porties in komida met campagne &quot;Nothing tastes as good as skinny feels&quot;"
                        excerpt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis..."
                        slug="kleinere-porties"
                        layout="row"
                        imageUrl="https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=300&auto=format&fit=crop"
                    />

                    <ArticleCard
                        title="Na Pano-reportage over Julien De Wit: hoe ontduik je wél onopgemerkt belastingen?"
                        excerpt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis..."
                        slug="pano-julien"
                        layout="row"
                        imageUrl="https://images.unsplash.com/photo-1552687103-63870bca5c75?q=80&w=300&auto=format&fit=crop"
                    />

                    <ArticleCard
                        title="UAntwerpen dicht gat in begroting door Brantijser te verkopen aan dwars"
                        excerpt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"
                        slug="brantijser-dwars"
                        layout="row"
                        imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=300&auto=format&fit=crop"
                    />
                </div>
            </div>

            {/* Right Sidebar: Filters */}
            <aside className="w-full lg:w-[320px] p-6 md:p-8 lg:pl-6 border-t-2 lg:border-t-0 lg:border-l-2 border-dashed border-white md:border-gray-200 dark:border-gray-700 shrink-0 bg-transparent md:bg-[#fefefe] dark:bg-[#222222] transition-colors">
                <div className="sticky top-8 space-y-10">

                    {/* Search Term */}
                    <div>
                        <h3 className="font-heading text-2xl mb-4 lowercase tracking-wide text-white md:text-black dark:text-white transition-colors">zoekterm</h3>
                        <input type="text" defaultValue="studentenraad" className="w-full bg-gray-800 md:bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-dwars-pink transition-colors text-white md:text-black dark:text-gray-100" />
                    </div>

                    {/* Tags Filter */}
                    <div>
                        <h3 className="font-heading text-2xl mb-4 lowercase tracking-wide text-white md:text-black dark:text-white transition-colors">tags</h3>
                        <div className="flex flex-col gap-2 font-bold text-sm">
                            {['unief', 'maatschappij', 'cultuur', 'onderzoek', "'t stad", 'opinie', 'satire', 'editoriaal', 'poëzie', 'mentaal welzijn', 'politiek'].map((tag) => (
                                <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded-sm border ${tag === 'maatschappij' ? 'bg-white md:bg-black dark:bg-white border-white md:border-black dark:border-white text-black md:text-white dark:text-black' : 'border-white md:border-gray-400 bg-transparent md:bg-white dark:bg-gray-800 group-hover:border-white md:group-hover:border-black dark:group-hover:border-white'} flex items-center justify-center transition-colors`}>
                                        {tag === 'maatschappij' && <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <span className="text-gray-200 md:text-black dark:text-white md:dark:text-white group-hover:text-dwars-pink dark:group-hover:text-dwars-pink transition-colors">{tag}</span>
                                </label>
                            ))}
                        </div>
                        <button className="text-xs font-bold mt-4 underline text-gray-300 md:text-black dark:text-white md:dark:text-white hover:text-dwars-pink transition-colors">toon meer...</button>
                    </div>

                    {/* Edition Filter */}
                    <div>
                        <h3 className="font-heading text-2xl mb-4 lowercase tracking-wide text-white md:text-black dark:text-white transition-colors">verschenen in editie</h3>
                        <div className="flex flex-col gap-2 font-bold text-sm">
                            {['168', '167', '166', '165', '164'].map((ed) => (
                                <label key={ed} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded-sm border ${ed === '167' ? 'bg-white md:bg-black dark:bg-white border-white md:border-black dark:border-white text-black md:text-white dark:text-black' : 'border-white md:border-gray-400 bg-transparent md:bg-white dark:bg-gray-800 group-hover:border-white md:group-hover:border-black dark:group-hover:border-white'} flex items-center justify-center transition-colors`}>
                                        {ed === '167' && <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <span className="text-gray-200 md:text-black dark:text-white md:dark:text-white group-hover:text-dwars-pink dark:group-hover:text-dwars-pink transition-colors">{ed}</span>
                                </label>
                            ))}
                        </div>
                        <button className="text-xs font-bold mt-4 underline text-gray-300 md:text-black dark:text-white md:dark:text-white hover:text-dwars-pink transition-colors">toon meer...</button>
                    </div>

                    {/* Author Filter */}
                    <div>
                        <h3 className="font-heading text-2xl mb-4 lowercase tracking-wide text-white md:text-black dark:text-white transition-colors">auteur</h3>
                        <div className="flex flex-col gap-2 font-bold text-sm">
                            {['Thijs van Dam', 'Laura van Dam', 'Laurens S van Dam', 'Laurens V van Dam', 'Laure-Anne van Dam'].map((auteur) => (
                                <label key={auteur} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded-sm border ${auteur === 'Laura van Dam' ? 'bg-white md:bg-black dark:bg-white border-white md:border-black dark:border-white text-black md:text-white dark:text-black' : 'border-white md:border-gray-400 bg-transparent md:bg-white dark:bg-gray-800 group-hover:border-white md:group-hover:border-black dark:group-hover:border-white'} flex items-center justify-center transition-colors`}>
                                        {auteur === 'Laura van Dam' && <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <span className="text-gray-200 md:text-black dark:text-white md:dark:text-white group-hover:text-dwars-pink dark:group-hover:text-dwars-pink transition-colors">{auteur}</span>
                                </label>
                            ))}
                        </div>
                        <button className="text-xs font-bold mt-4 underline text-gray-300 md:text-black dark:text-white md:dark:text-white hover:text-dwars-pink transition-colors">toon meer...</button>
                    </div>

                </div>
            </aside>
        </div>
    );
}
