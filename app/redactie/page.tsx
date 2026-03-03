import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import AvatarPlaceholder from '@/components/AvatarPlaceholder';
import Link from 'next/link';
import { REDACTIE_DATA, generateAuthorSlug } from '@/lib/redactieData';

export default function RedactiePage() {
    return (
        <div className="flex w-full h-full relative transition-colors duration-300">
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
                        <Link href="/freelance" className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-2 uppercase tracking-wide font-heading hover:bg-dwars-pink dark:hover:bg-dwars-pink transition-colors">
                            Freelance meewerken?
                        </Link>
                        <Link href="/oud-redactie" className="inline-block border-2 border-black dark:border-white bg-white dark:bg-black px-6 py-2 uppercase tracking-wide font-heading hover:bg-dwars-gray dark:hover:bg-gray-800 transition-colors">
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
                                    const slug = generateAuthorSlug(member.name);

                                    return (
                                        <Link
                                            href={`/redactie/${slug}`}
                                            key={member.name}
                                            className={`relative group ${rotationClass} hover:rotate-0 transition-transform duration-300 block w-full h-full cursor-pointer`}
                                        >
                                            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 z-0" />
                                            <div className="relative z-10 bg-white dark:bg-[#111] border-2 border-black dark:border-gray-500 p-3 h-full flex flex-col justify-center transition-colors">
                                                {member.image ? (
                                                    <div className="w-full aspect-[4/5] object-cover mb-2 border border-black overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                                        <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                                                    </div>
                                                ) : (
                                                    <div className="w-full aspect-[4/5] object-cover mb-2 border border-black overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                                        <AvatarPlaceholder name={member.name} />
                                                    </div>
                                                )}
                                                <h4 className="font-heading text-lg uppercase leading-none mb-1 text-black dark:text-white group-hover:text-dwars-pink dark:group-hover:text-dwars-pink transition-colors">
                                                    {member.name}
                                                </h4>
                                                <p className="font-sans text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-tight transition-colors">
                                                    {member.role === "Lid" ? "" : member.role}
                                                </p>
                                            </div>
                                        </Link>
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
