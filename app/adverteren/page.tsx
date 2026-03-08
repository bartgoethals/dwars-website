import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function AdverterenPage() {
    return (
        <div className="flex flex-col w-full min-h-full pb-48 relative transition-colors duration-300">
            <div className="w-full max-w-[900px] mx-auto p-6 md:p-12">
                <SectionHeader title="adverteren" />

                <div className="mt-12 flex flex-col gap-10">

                    <p className="font-sans text-xl leading-relaxed text-gray-200 md:text-gray-800 dark:text-gray-200 font-medium transition-colors">
                        Contacteer ons voor meer informatie via <a href="mailto:adverteren@dwars.be" className="text-dwars-pink font-bold underline hover:text-white md:hover:text-black dark:hover:text-white transition-colors">adverteren@dwars.be</a>!
                    </p>

                    <section>
                        <h3 className="font-heading text-3xl md:text-4xl mb-4 uppercase tracking-wide dark:text-white transition-colors">Adverteren in het magazine</h3>
                        <p className="font-sans text-lg leading-relaxed text-gray-200 md:text-gray-800 dark:text-gray-300 transition-colors">
                            Uw advertentie in onze papieren editie, verdeeld over alle campussen in Antwerpen.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-heading text-3xl md:text-4xl mb-4 uppercase tracking-wide dark:text-white transition-colors">Adverteren op de website</h3>
                        <p className="font-sans text-lg leading-relaxed text-gray-200 md:text-gray-800 dark:text-gray-300 transition-colors">
                            Bereik online een doelgericht publiek van studenten en academici.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 transition-colors">
                            <h4 className="font-heading text-2xl uppercase tracking-wide mb-2 text-dwars-pink">Prijzen Corporate</h4>
                            <p className="font-sans text-base text-gray-300 md:text-gray-700 dark:text-gray-300">Voor bedrijven en profit-organisaties. Prijzen op aanvraag.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 transition-colors">
                            <h4 className="font-heading text-2xl uppercase tracking-wide mb-2 text-dwars-pink">Prijzen Non-Profit</h4>
                            <p className="font-sans text-base text-gray-300 md:text-gray-700 dark:text-gray-300">Aangepast tarief voor VZW&apos;s, studentenverenigingen en universiteitsdiensten.</p>
                        </div>
                    </div>

                    <section>
                        <h3 className="font-heading text-3xl md:text-4xl mb-4 uppercase tracking-wide dark:text-white transition-colors">Aanlevering</h3>
                        <p className="font-sans text-lg leading-relaxed text-gray-200 md:text-gray-800 dark:text-gray-300 transition-colors">
                            Alle afbeeldingen via WeTransfer t.a.v. <a href="mailto:adverteren@dwars.be" className="text-dwars-pink font-bold underline hover:text-white md:hover:text-black dark:hover:text-white transition-colors">adverteren@dwars.be</a>
                        </p>
                    </section>

                    <section className="bg-black text-white p-8 mt-8">
                        <h3 className="font-heading text-3xl md:text-4xl mb-6 uppercase tracking-wide text-dwars-pink">Aankomende dwarsedities</h3>
                        <p className="font-sans text-lg leading-relaxed mb-4">
                            We brengen doorheen het werkingsjaar (2025-2026) verschillende edities uit. Zorg dat je tijdig een plek reserveert voor jouw advertentiecampagne!
                        </p>
                    </section>

                </div>
            </div>

            {/* Copyright Image Bottom Right */}
            <div className="absolute bottom-0 right-0 z-50 pointer-events-none w-[200px] md:w-[300px] lg:w-[400px] flex items-end justify-end">
                <img src="/assets/sidebar/copyrighthoekje_zwart.png" alt="Copyright Background" className="w-full h-auto object-contain object-bottom drop-shadow-sm opacity-90" />
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 text-white font-sans text-[10px] md:text-xs opacity-80 text-right">
                    © {new Date().getFullYear()} Dwars
                </div>
            </div>
        </div>
    );
}
