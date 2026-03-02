import SectionHeader from "@/components/SectionHeader";
import React from "react";

export default function OverPage() {
    return (
        <div className="flex flex-col w-full min-h-full pb-48 relative bg-white">
            <div className="w-full max-w-[900px] mx-auto p-6 md:p-12">
                <SectionHeader title="over dwars" />

                <div className="mt-12 flex flex-col gap-10">
                    <section>
                        <h3 className="font-heading text-3xl md:text-4xl mb-4 uppercase tracking-wide">Kritische Meerwaarde</h3>
                        <p className="font-sans text-lg leading-relaxed text-gray-800 mb-4">
                            Al sinds haar oprichting ligt dwars graag dwars. In een eigenzinnige stijl uit ze eigenzinnige zorgen. Net als vorige generaties blijven we het als onze taak zien om een kritisch blad te zijn dat kwaliteit en meerwaarde biedt aan (universiteits)studenten. Daarbij uiten we niet alleen de zorgen van onze eigen redactie, maar leggen we actief ons oor te luister in het studentenleven. We reflecteren op wat speelt onder studenten, waarbij we zowel aandacht hebben voor universiteitsgerelateerde onderwerpen als breder maatschappelijke thema’s. Daarbij streven we ernaar dieper op de zaken in te gaan en de nuance op te zoeken, eerder dan in te zetten op snelheid. Daarnaast zetten we extra in op opiniërende artikels en stellen we ons actief open voor open brieven.
                        </p>
                        <p className="font-sans text-lg leading-relaxed text-gray-800">
                            Die eigenzinnigheid en kritische ingesteldheid proberen we ook vormelijk weer te geven in onze nieuwe huisstijl. We durven onze plek innemen en afwijken van de norm. Sinds kort vermelden we bij een artikel niet alleen de auteur en fotograaf of illustrator, maar ook de lay-outer. Zo onderstrepen we het belang dat we hechten aan lay-out.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-heading text-3xl md:text-4xl mb-4 uppercase tracking-wide">Taak</h3>
                        <p className="font-sans text-lg leading-relaxed text-gray-800 mb-4">
                            We zijn ervan overtuigd dat onze taak verder reikt dan het bieden van kritische meerwaarde. Hoewel we onszelf enerzijds zien als onofficieel controleorgaan op de universiteit en studentengemeenschap, willen we anderzijds bijdragen aan de integratie van studenten in die (universitaire) gemeenschap. Al enkele jaren maakt de verkenningsdwars eerstejaars wegwijs in het kluwen dat onze universiteit is. Ook voor ouderejaars willen we een informatiebron zijn, wat zeker in de huidige periode van rectorverkiezingen, regelgeving rond ChatGPT en een snel veranderende samenleving van cruciaal belang is.
                        </p>
                        <p className="font-sans text-lg leading-relaxed text-gray-800">
                            Om onze taak te kunnen vervullen, willen we blijvend inzetten op de bekendheid van dwars. Dat doen we door onze papieren magazines te verspreiden op de verschillende campussen en verder ook sterk in te zetten op onze sociale media. Daarnaast organiseren we evenementen en zijn we aanwezig op die van andere verenigingen. Dit alles zonder de eigenheid van dwars uit het oog te verliezen.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-heading text-3xl md:text-4xl mb-4 uppercase tracking-wide">Redactie</h3>
                        <p className="font-sans text-lg leading-relaxed text-gray-800 mb-4">
                            De redactie van dwars bestaat uit studenten uit diverse studierichtingen. Hoewel de meerderheid aan UAntwerpen studeert, zijn studenten van alle hogere onderwijsinstellingen in Antwerpen welkom. Al onze redacteurs zetten zich vrijwillig in voor dwars. We focussen op enthousiasme eerder dan ervaring en zetten vooral in op het ondersteunen en bijleren van elkaar. Daarbij vinden we de eigenheid van onze redacteurs belangrijk en moedigen ze aan die te behouden en zelfs verder te ontwikkelen.
                        </p>
                        <p className="font-sans text-lg leading-relaxed text-gray-800">
                            Al langer maakt dwars onderscheid tussen ‘redactieleden’ en ‘freelancers’, een onderscheid dat we opnieuw willen aanscherpen. Dat onderscheid laat ons toe de verwachtingen naar onze redactieleden duidelijk te kunnen communiceren. Dat neemt niet weg dat we ernaar streven om toegankelijk te blijven voor alle studenten, rekening houdend met ieders mogelijkheden en grenzen.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-heading text-3xl md:text-4xl mb-4 uppercase tracking-wide">Verantwoordelijkheid</h3>
                        <p className="font-sans text-lg leading-relaxed text-gray-800 mb-4">
                            Tot slot zijn we ervan overtuigd dat dwars enkele belangrijke verantwoordelijkheden heeft. In de eerste plaats vinden we het belangrijk dat redactieleden zich veilig kunnen voelen bij dwars. Daarbij staat respect voor elkaar centraal en willen we erover waken dat ieders mening gehoord wordt, zowel dwarsgerelateerd als daarbuiten. Ook naar onze lezers toe vinden we het belangrijk om zoveel mogelijk verschillende stemmen te laten horen in ons magazine, opnieuw met het nodige respect. Daarbij schuwen we geen controverse, maar benaderen we haar in al haar complexiteit. We gaan er steeds vanuit dat de lezer een eigen kritisch oordeel zal vellen.
                        </p>
                        <p className="font-sans text-sm font-bold text-gray-500 italic mt-8">
                            Deze visietekst werd goedgekeurd door de dwarsredactie op 12 december 2023.
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
