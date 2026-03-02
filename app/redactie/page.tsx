import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import AvatarPlaceholder from '@/components/AvatarPlaceholder';
import Link from 'next/link';

type RedactieLid = {
    name: string;
    role: string;
    image?: string;
};

type Category = {
    title: string;
    members: RedactieLid[];
};

const REDACTIE_DATA: Category[] = [
    {
        title: "Hoofdredactie",
        members: [
            { name: "Thijs van Dam", role: "Hoofdredacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Thijs.jpg?itok=bJmUy9fb" },
            { name: "Laura Aerts", role: "Adjunct-Hoofdredacteur" },
        ]
    },
    {
        title: "Redactie",
        members: [
            // Verantwoordelijken
            { name: "Hanne Colémont", role: "Beeld", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Hanne.jpeg?itok=AMIYRdrn" },
            { name: "Lena Vercammen", role: "Lay-out", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1178/Redactieprofiel-09-min.jpg?itok=bEmONZf6" },
            { name: "Laurens Verhaegen", role: "PR", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%283%20van%2033%29.jpg?itok=2jC_3bVF" },
            { name: "Anne-Marie Dimitrov", role: "Sociale Media", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Anne-Marie.jpeg?itok=1rh0dDok" },
            { name: "Merel Naudts", role: "Eindredactie", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Merel_0.jpeg?itok=alDqfGYV" },
            { name: "Stijn Crick", role: "Eindredactie", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Stijn.jpeg?itok=bFHsllOk" },

            // Eindredactie
            { name: "Elena Ceuppens", role: "Eindredacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Elena.jpg?itok=rQixC950" },
            { name: "Pauline Bongaerts", role: "Eindredacteur" },
            { name: "Stien Loos", role: "Eindredacteur" },
            { name: "Bjorn De Busschere", role: "Eindredacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2815%20van%2033%29.jpg?itok=FudLomOA" },
            { name: "Eline Van de Weyer", role: "Eindredacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2827%20van%2033%29.jpg?itok=ewWRs6qF" },

            // Creatief
            { name: "Ine Cuypers", role: "Fotograaf", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1178/Redactieprofiel-01-min.jpg?itok=awyUVAUT" },
            { name: "Felix Bal", role: "Fotograaf" },
            { name: "Margot Franckx", role: "Illustrator" },
            { name: "Mila de Jager", role: "Illustrator" },
            { name: "Silke Ramaekers", role: "Illustrator" },
            { name: "Otto Van Kerckhove", role: "Illustrator" },
            { name: "Ezri Hofstede", role: "Illustrator" },
            { name: "Casper Schramme", role: "Illustrator" },
            { name: "Gabrielle Hamilton", role: "Illustrator" },
            { name: "Lotte Mertens", role: "Illustrator", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2825%20van%2033%29.jpg?itok=BgR_JNA7" },
            { name: "Rabiatou Jalloh", role: "Lay-outer" },

            // Redactie
            { name: "Julie Vanstraelen", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Julie_vierkant.jpg?itok=D3E9sTJ9" },
            { name: "Remco Terryn", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/985/Remco_Kleur.jpg?itok=Xx4gL1aA" },
            { name: "Casper Peeters", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1178/Redactieprofiel-08-min.jpg?itok=TOctms6h" },
            { name: "Lotte Helmerhorst", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/Lotte.jpeg?itok=b63hu3P2" },
            { name: "Cato Van Lerberghe", role: "Redacteur" },
            { name: "Lena Bernaerts", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1189/LenaB.jpeg?itok=pXePJTkC" },
            { name: "Jana Geets", role: "Redacteur" },
            { name: "Ainize Casal Demaeght", role: "Redacteur" },
            { name: "Samuël van Dam", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%285%20van%2033%29.jpg?itok=rJxvwk8S" },
            { name: "Milan De Meyere", role: "Redacteur" },
            { name: "Pieter Vierstraete", role: "Redacteur" },
            { name: "Finne Rumes", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2823%20van%2033%29.jpg?itok=TRNHqBwa" },
            { name: "Robin Rutten", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2829%20van%2033%29.jpg?itok=gV46yVms" },
            { name: "Fien Verberckmoes", role: "Redacteur" },
            { name: "Léah De Roy", role: "Redacteur" },
            { name: "Willem Cretskens", role: "Redacteur" },
            { name: "Liesbeth Brusselmans", role: "Redacteur" },
            { name: "Kaat Heylen", role: "Redacteur" },
            { name: "Maxwell Vormezeele", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2811%20van%2033%29.jpg?itok=bCWR6mEO" },
            { name: "Andries Bigaré", role: "Redacteur", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2821%20van%2033%29.jpg?itok=vBm0j6ah" },

            // Overig
            { name: "Laurens Severin", role: "Boekhouder" },
            { name: "Hanne Ghoos", role: "Sociale Media" },
            { name: "Lina Goethals", role: "Lid" },
            { name: "Simon-Leander Schelstraete", role: "Lid", image: "https://www.dwars.be/sites/default/files/styles/teaser_profielfotos/public/1190/dwarsredactie%20oktober%202025%20%2819%20van%2033%29.jpg?itok=18rCir_Y" },
            { name: "Tailah Baert", role: "Lid" },
            { name: "Annemarie Bahro", role: "Lid" },
            { name: "Merel Haverkamp", role: "Lid" },
            { name: "Poline Starovoyt", role: "Lid" },
            { name: "Thijs Sneeuwloper", role: "Lid" },
        ]
    }
];

export default function RedactiePage() {
    return (
        <div className="flex w-full h-full relative">
            {/* Main Content Area */}
            <div className="flex-1 p-12 pr-6 max-w-5xl mx-auto">

                {/* Page Header */}
                <section className="mb-16">
                    <SectionHeader title="ONZE REDACTIE" />
                    <div className="mt-8 text-xl max-w-2xl font-sans mb-8">
                        <p>
                            dwars wordt gemaakt door een gedreven team van vrijwilligers: studenten die naast hun studies een passie hebben voor journalistiek, fotografie, illustratie, of gewoonweg het studentenleven in Antwerpen in al haar facetten.
                        </p>
                    </div>

                    <div className="flex gap-4 mb-4">
                        <Link href="/freelance" className="inline-block bg-black text-white px-6 py-2 uppercase tracking-wide font-heading hover:bg-dwars-pink transition-colors">
                            Freelance meewerken?
                        </Link>
                        <Link href="/oud-redactie" className="inline-block border-2 border-black bg-white px-6 py-2 uppercase tracking-wide font-heading hover:bg-dwars-gray transition-colors">
                            Onze oud-redactie
                        </Link>
                    </div>
                </section>

                {/* Categories */}
                <div className="space-y-16">
                    {REDACTIE_DATA.map((category) => (
                        <section key={category.title}>
                            <h3 className="text-4xl font-heading mb-6 border-b-4 border-dwars-pink inline-block pb-1 uppercase tracking-wide">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.members.map((member, idx) => {
                                    // A simple pseudo-random rotation for the grunge effect based on index
                                    const rotationClass = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0"][idx % 5];

                                    return (
                                        <div
                                            key={member.name}
                                            className={`relative group ${rotationClass} hover:rotate-0 transition-transform duration-300`}
                                        >
                                            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 z-0" />
                                            <div className="relative z-10 bg-white border-2 border-black p-3 h-full flex flex-col justify-center">
                                                {member.image ? (
                                                    <div className="w-full aspect-[4/5] object-cover mb-2 border border-black overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                                        <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                                                    </div>
                                                ) : (
                                                    <div className="w-full aspect-[4/5] object-cover mb-2 border border-black overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                                        <AvatarPlaceholder name={member.name} />
                                                    </div>
                                                )}
                                                <h4 className="font-heading text-lg uppercase leading-none mb-1 group-hover:text-dwars-pink transition-colors">
                                                    {member.name}
                                                </h4>
                                                <p className="font-sans text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                                                    {member.role === "Lid" ? "" : member.role}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Bottom spacing */}
                <div className="h-32"></div>

            </div>

            {/* Torn paper texture overlay for bottom */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-black clip-torn-paper rotate-180 transform z-20 pointer-events-none flex items-end justify-end px-8 py-2">
                <div className="text-white text-xs font-mono opacity-80 rotate-180 tracking-widest">
                    © dwars vzw 2025<br />1007.10.927
                </div>
            </div>
        </div>
    );
}
