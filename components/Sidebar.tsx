'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    { label: 'Edities', icon: '/assets/icons/icons_edities.png', href: '/edities' },
    { label: 'Redactie', icon: '/assets/icons/icons_redactie.png', href: '/redactie' },
    { label: 'Over', icon: '/assets/icons/icons_over.png', href: '/over' },
    { label: 'Redacteur worden', icon: '/assets/icons/icons_redacteur_worden.png', href: '/redacteur-worden' },
    { label: 'Adverteren', icon: '/assets/icons/icons_adverteren.png', href: '/adverteren' },
    { label: 'Contact', icon: '/assets/icons/icons_contact.png', href: '/contact' },
    { label: 'Krom', icon: '/assets/icons/icons_krom.png', href: '/krom' },
];

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            router.push(`/archief?search=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <aside className="hidden md:flex relative w-1/4 min-w-[260px] max-w-[320px] h-screen shrink-0 sticky top-0">
            {/* Background layer with torn paper edge */}
            <div className="absolute inset-0 flex z-0 pointer-events-none">
                <div className="flex-1 bg-black"></div>
                <div className="relative h-full w-[60px] md:w-[90px] -ml-[1px]">
                    <Image src="/assets/sidebar/scheur_zijbalk_zwart.png" alt="" fill className="object-fill object-left" priority />
                </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col pt-6 pb-4 pl-4 md:pl-5 pr-10 md:pr-16 w-full h-full overflow-y-auto overflow-x-hidden">

                {/* Logo and "Nieuwste Editie" */}
                <div className="flex flex-col shrink-0">
                    <Link href="/" className="flex flex-col gap-1.5">
                        <div className={`relative w-[80%] md:w-[85%] aspect-[2.5/1] origin-center ${isSpinning ? 'animate-logo-spin' : ''}`}>
                            {pathname?.startsWith('/krom') ? (
                                <Image src="/assets/krom_logo.png" alt="Krom Logo" fill className="object-contain object-left" priority />
                            ) : (
                                <Image src="/assets/dwarslogo_website.png" alt="Logo" fill className="object-contain object-left" priority />
                            )}
                        </div>
                        <div className="relative w-[38%] aspect-[1.6/1] opacity-90 hover:opacity-100 hover:scale-[1.03] hover:-rotate-1 transition-all">
                            <Image src="/assets/sidebar/nieuwste_editie.png" alt="Nieuwste Editie" fill className="object-contain object-left drop-shadow-sm" priority />
                        </div>
                    </Link>
                </div>

                <div className="mt-4 w-full flex-1 flex flex-col justify-center gap-2.5">
                    {/* Search */}
                    <div className="relative flex items-center w-[75%]">
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Zoeken?!"
                            className="bg-transparent placeholder-white/70 text-white font-heading tracking-widest text-[12px] md:text-[13px] border-white border-[1px] rounded-full py-0.5 px-2 w-full focus:outline-none focus:border-dwars-pink"
                        />
                        <div className="absolute right-2.5 w-[10px] h-[10px] md:w-3 md:h-3 flex items-center justify-center pointer-events-none">
                            <Image src="/assets/icons/icons_zoeken.png" width={10} height={10} alt="Search" className="brightness-0 invert object-contain" />
                        </div>
                    </div>

                    {/* Navigation Items */}
                    <nav className="text-white flex flex-col gap-1.5 font-brother font-bold tracking-wide uppercase mt-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => {
                                    if (item.href === '/krom' && !isSpinning) {
                                        setIsSpinning(true);
                                        setTimeout(() => setIsSpinning(false), 1500);
                                    }
                                }}
                                className="flex items-center gap-1.5 group cursor-pointer hover:text-dwars-pink transition-colors"
                            >
                                <div className="w-[10px] md:w-[12px] h-[10px] md:h-[12px] relative shrink-0">
                                    <Image src={item.icon} alt={item.label} fill className="object-contain" />
                                </div>
                                <p className="text-[12px] md:text-[13px] group-hover:drop-shadow-md">{item.label}</p>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Dark Mode Toggle */}
                <div className="mt-3 flex w-[65%] mb-3">
                    <ThemeToggle />
                </div>

                {/* Tags at bottom */}
                <div className="mt-auto pt-3 w-full flex flex-col gap-0.5 shrink-0 overflow-hidden pr-2">
                    {/* Row 1: unief, maatschappij, cultuur */}
                    <div className="flex flex-row items-center justify-center w-full gap-0.5">
                        <Link href="/archief?tags=unief" className="h-[20px] md:h-6 lg:h-7 hover:z-10 transition-transform hover:scale-105 -rotate-1"><img src="/assets/tags-categorieen/tags_unief.png" alt="Unief" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=maatschappij" className="h-[20px] md:h-6 lg:h-7 hover:z-10 transition-transform hover:scale-105 rotate-1"><img src="/assets/tags-categorieen/tags_maatschappij.png" alt="Maatschappij" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=cultuur" className="h-[20px] md:h-6 lg:h-7 hover:z-10 transition-transform hover:scale-105 -rotate-2"><img src="/assets/tags-categorieen/tags_cultuur.png" alt="Cultuur" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                    </div>
                    {/* Row 2: onderzoek, 't stad, opinie */}
                    <div className="flex flex-row items-center justify-center w-full gap-0.5">
                        <Link href="/archief?tags=onderzoek" className="h-[20px] md:h-6 lg:h-7 hover:z-10 transition-transform hover:scale-105 rotate-2"><img src="/assets/tags-categorieen/tags_onderzoek.png" alt="Onderzoek" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=t-stad" className="h-[20px] md:h-6 lg:h-7 hover:z-10 transition-transform hover:scale-105 -rotate-1"><img src="/assets/tags-categorieen/tags_t_stad.png" alt="'t Stad" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=opinie" className="h-[20px] md:h-6 lg:h-7 hover:z-10 transition-transform hover:scale-105 rotate-1"><img src="/assets/tags-categorieen/tags_opinie.png" alt="Opinie" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                    </div>
                    {/* Row 3: satire, editoriaal, poezie */}
                    <div className="flex flex-row items-center justify-center w-full gap-0.5">
                        <Link href="/archief?tags=satire" className="h-[20px] md:h-6 lg:h-7 hover:z-10 transition-transform hover:scale-105 -rotate-1"><img src="/assets/tags-categorieen/tags_satire.png" alt="Satire" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=editoriaal" className="h-[20px] md:h-6 lg:h-7 hover:z-10 transition-transform hover:scale-105 rotate-2"><img src="/assets/tags-categorieen/tags_editoriaal.png" alt="Editoriaal" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                        <Link href="/archief?tags=poezie" className="h-[20px] md:h-6 lg:h-7 hover:z-10 transition-transform hover:scale-105 -rotate-2"><img src="/assets/tags-categorieen/tags_poezie.png" alt="Poezie" className="h-full w-auto object-contain drop-shadow-sm" /></Link>
                    </div>
                </div>

            </div>
        </aside>
    );
}
