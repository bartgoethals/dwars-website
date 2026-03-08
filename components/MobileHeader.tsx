'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import TapeTag from './TapeTag';

const navItems = [
    { label: 'Edities', icon: '/assets/icons/icons_edities.png', href: '/edities' },
    { label: 'Redactie', icon: '/assets/icons/icons_redactie.png', href: '/redactie' },
    { label: 'Over', icon: '/assets/icons/icons_over.png', href: '/over' },
    { label: 'Redacteur worden', icon: '/assets/icons/icons_redacteur_worden.png', href: '/redacteur-worden' },
    { label: 'Adverteren', icon: '/assets/icons/icons_adverteren.png', href: '/adverteren' },
    { label: 'Contact', icon: '/assets/icons/icons_contact.png', href: '/contact' },
    { label: 'Krom', icon: '/assets/icons/icons_krom.png', href: '/krom' },
];

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            setMenuOpen(false);
            router.push(`/archief?search=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <header className="md:hidden flex flex-col w-full z-50 sticky top-0 bg-black">
            {/* Top Bar: Logo & Hamburger */}
            <div className="flex items-center justify-between px-4 py-3 relative">
                <Link href="/" className="relative w-[120px] h-[30px]" onClick={() => setMenuOpen(false)}>
                    {pathname?.startsWith('/krom') ? (
                        <Image src="/assets/krom_logo.png" alt="Krom Logo" fill className="object-contain object-left" priority />
                    ) : (
                        <Image src="/assets/dwarslogo_website.png" alt="Dwars Logo" fill className="object-contain object-left" priority />
                    )}
                </Link>

                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-2">
                    {/* SVG Hamburger Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {menuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Torn Paper Divider below header */}
            <div className="w-full h-[25px] sm:h-[35px] relative overflow-hidden bg-black z-10 -mt-[1px] flex justify-center items-center">
                <img
                    src="/assets/sidebar/scheur_zijbalk_transp.png"
                    alt="papieren scheur"
                    className="absolute min-h-[400vw] sm:min-h-[200vw] object-fill transform rotate-90 scale-x-[-1]"
                    style={{ width: '35px' }}
                />
            </div>

            {/* Category Scroller */}
            <div className="bg-black w-full relative z-0">
                <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide py-3 px-4 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                    <div className="flex gap-2 min-w-max items-center pr-8 pb-1">
                        <Link href="/archief?tags=unief" className="h-[26px] sm:h-8 inline-block transform -rotate-1 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_unief.png" alt="Unief" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=maatschappij" className="h-[26px] sm:h-8 inline-block transform rotate-1 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_maatschappij.png" alt="Maatschappij" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=cultuur" className="h-[26px] sm:h-8 inline-block transform -rotate-2 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_cultuur.png" alt="Cultuur" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=onderzoek" className="h-[26px] sm:h-8 inline-block transform rotate-2 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_onderzoek.png" alt="Onderzoek" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=t-stad" className="h-[26px] sm:h-8 inline-block transform -rotate-1 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_t_stad.png" alt="'t Stad" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=opinie" className="h-[26px] sm:h-8 inline-block transform rotate-1 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_opinie.png" alt="Opinie" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=satire" className="h-[26px] sm:h-8 inline-block transform -rotate-1 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_satire.png" alt="Satire" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=editoriaal" className="h-[26px] sm:h-8 inline-block transform rotate-2 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_editoriaal.png" alt="Editoriaal" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=poezie" className="h-[26px] sm:h-8 inline-block transform -rotate-2 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_poezie.png" alt="Poezie" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=column" className="h-[26px] sm:h-8 inline-block transform rotate-1 hover:scale-105 transition-transform"><img src="/assets/tags-categorieen/tags_column.png" alt="Column" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                    </div>
                </div>
                {/* Right edge scroll gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Full Screen Menu Overlay */}
            <div
                className={`fixed inset-0 top-[60px] bg-black/95 z-40 flex flex-col p-6 overflow-y-auto backdrop-blur-sm pt-8 transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top-right ${menuOpen ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : 'translate-x-12 -translate-y-12 scale-95 opacity-0 pointer-events-none'
                    }`}
            >
                {/* Search */}
                <div className={`relative flex items-center w-full mb-8 transform transition-all duration-700 delay-100 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Zoeken?!"
                        className="bg-transparent placeholder-white/70 text-white font-heading tracking-widest text-lg border-white border-2 rounded-full py-2 px-4 w-full focus:outline-none focus:border-dwars-pink"
                    />
                    <div className="absolute right-4 w-5 h-5 flex items-center justify-center pointer-events-none">
                        <Image src="/assets/icons/icons_zoeken.png" width={20} height={20} alt="Search" className="brightness-0 invert object-contain" />
                    </div>
                </div>

                {/* Nav Items */}
                <nav className="flex flex-col gap-6 font-brother font-bold tracking-wide uppercase mt-4">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center gap-4 text-white hover:text-dwars-pink transition-all duration-500 transform ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                            style={{ transitionDelay: `${150 + i * 50}ms` }}
                        >
                            <div className="w-5 h-5 relative shrink-0">
                                <Image src={item.icon} alt={item.label} fill className="object-contain" />
                            </div>
                            <span className="text-xl">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
