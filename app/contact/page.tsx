import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full min-h-full pb-48 relative bg-white">
            <div className="w-full max-w-[900px] mx-auto p-6 md:p-12">
                <SectionHeader title="contacteren" />

                <div className="mt-12 flex flex-col gap-10">

                    <section className="bg-dwars-gray/10 p-8 border-2 border-black">
                        <h3 className="font-heading text-4xl mb-4 uppercase tracking-wide text-dwars-pink">Algemene Gegevens</h3>

                        <p className="font-sans text-xl leading-relaxed text-gray-900 font-bold mb-2">
                            dwars | studentenblad Universiteit Antwerpen
                        </p>
                        <p className="font-sans text-lg text-gray-800 mb-1">Prinsesstraat 16, B-2000 Antwerpen</p>
                        <p className="font-sans text-lg text-gray-800 mb-6">Telefoonnummer: 03 265 8777</p>

                        <div className="flex flex-col gap-2">
                            <p className="font-sans text-lg text-gray-800">
                                <strong>Algemene info:</strong> <a href="mailto:contact@dwars.be" className="text-dwars-pink underline hover:text-black transition-colors">contact@dwars.be</a>
                            </p>
                            <p className="font-sans text-lg text-gray-800">
                                <strong>Adverteren:</strong> <a href="mailto:adverteren@dwars.be" className="text-dwars-pink underline hover:text-black transition-colors">adverteren@dwars.be</a>
                            </p>
                            <p className="font-sans text-lg text-gray-800">
                                <strong>Meewerken:</strong> <a href="mailto:werving@dwars.be" className="text-dwars-pink underline hover:text-black transition-colors">werving@dwars.be</a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h3 className="font-heading text-3xl md:text-4xl mb-4 uppercase tracking-wide">Hoofdredactie</h3>
                        <p className="font-sans text-lg leading-relaxed text-gray-800 mb-6">
                            Voor alle vragen die betrekking hebben op advertenties, werving, artikelen en samenwerking gelieve u te richten tot de contactgegevens hierboven.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border border-gray-300 p-6 flex flex-col items-center text-center hover:border-black transition-colors">
                                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4 border-2 border-dwars-pink">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Thijs" alt="Thijs van Dam" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-heading text-2xl uppercase tracking-wide">Thijs van Dam</h4>
                                <p className="font-sans text-sm font-bold text-gray-500 uppercase tracking-widest">Hoofdredacteur</p>
                            </div>

                            <div className="border border-gray-300 p-6 flex flex-col items-center text-center hover:border-black transition-colors">
                                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4 border-2 border-dwars-pink">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Laura" alt="Laura Aerts" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-heading text-2xl uppercase tracking-wide">Laura Aerts</h4>
                                <p className="font-sans text-sm font-bold text-gray-500 uppercase tracking-widest">Adjunct-Hoofdredacteur</p>
                            </div>
                        </div>
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
