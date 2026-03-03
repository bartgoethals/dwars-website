'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

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
            <div className="w-full h-[15px] relative -mt-[1px]">
                <Image src="/assets/sidebar/scheur_zijbalk_transp.png" alt="" fill className="object-cover object-top rotate-90 scale-x-[-1]" priority />
            </div>

            {/* Category Scroller */}
            <div className="bg-black w-full overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide py-2 px-4 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                <div className="flex gap-2 min-w-max items-center">
                    <Link href="/archief?tags=unief" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_unief.png" alt="Unief" className="h-full w-auto object-contain" /></Link>
                    <Link href="/archief?tags=maatschappij" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_maatschappij.png" alt="Maatschappij" className="h-full w-auto object-contain" /></Link>
                    <Link href="/archief?tags=cultuur" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_cultuur.png" alt="Cultuur" className="h-full w-auto object-contain" /></Link>
                    <Link href="/archief?tags=onderzoek" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_onderzoek.png" alt="Onderzoek" className="h-full w-auto object-contain" /></Link>
                    <Link href="/archief?tags=t-stad" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_t_stad.png" alt="'t Stad" className="h-full w-auto object-contain" /></Link>
                    <Link href="/archief?tags=opinie" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_opinie.png" alt="Opinie" className="h-full w-auto object-contain" /></Link>
                    <Link href="/archief?tags=satire" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_satire.png" alt="Satire" className="h-full w-auto object-contain" /></Link>
                    <Link href="/archief?tags=editoriaal" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_editoriaal.png" alt="Editoriaal" className="h-full w-auto object-contain" /></Link>
                    <Link href="/archief?tags=poezie" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_poezie.png" alt="Poezie" className="h-full w-auto object-contain" /></Link>
                    <Link href="/archief?tags=column" className="h-6 inline-block"><img src="/assets/tags-categorieen/tags_column.png" alt="Column" className="h-full w-auto object-contain" /></Link>
                </div>
            </div>

            {/* Full Screen Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 top-[60px] bg-black/95 z-40 flex flex-col p-6 overflow-y-auto backdrop-blur-sm pt-8">
                    {/* Search */}
                    <div className="relative flex items-center w-full mb-8">
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
                    <nav className="flex flex-col gap-6 font-brother font-bold tracking-wide uppercase">
                        {navItems.map((item) => (
                            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-4 text-white hover:text-dwars-pink transition-colors">
                                <div className="w-5 h-5 relative shrink-0">
                                    <Image src={item.icon} alt={item.label} fill className="object-contain" />
                                </div>
                                <span className="text-xl">{item.label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
