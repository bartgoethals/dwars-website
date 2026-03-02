import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

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
    return (
        <aside className="relative flex w-1/4 min-w-[260px] max-w-[320px] h-screen shrink-0 sticky top-0">
            {/* Background layer with torn paper edge */}
            <div className="absolute inset-0 flex z-0 pointer-events-none">
                <div className="flex-1 bg-black"></div>
                <div className="relative h-full w-[60px] md:w-[90px] -ml-[1px]">
                    <Image src="/assets/sidebar/scheur_zijbalk_zwart.png" alt="" fill className="object-fill object-left" priority />
                </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col pt-10 pb-6 pl-6 md:pl-8 pr-16 md:pr-28 w-full h-full overflow-y-auto overflow-x-hidden">

                {/* Logo and "Nieuwste Editie" */}
                <div className="flex flex-col shrink-0">
                    <Link href="/">
                        <div className="relative w-2/3 aspect-[2.5/1]">
                            <Image src="/assets/dwarslogo_website.png" alt="Logo" fill className="object-contain object-left" priority />
                        </div>
                        <div className="relative w-[85%] aspect-[1.6/1] mt-4 opacity-90 hover:opacity-100 hover:scale-[1.03] hover:-rotate-1 transition-all">
                            <Image src="/assets/sidebar/nieuwste_editie.png" alt="Nieuwste Editie" fill className="object-contain object-left drop-shadow-sm" priority />
                        </div>
                    </Link>
                </div>

                <div className="mt-6 w-full flex-1 flex flex-col justify-start">
                    {/* Search */}
                    <div className="relative flex items-center w-full mt-4">
                        <input placeholder="Zoeken?!" className="bg-transparent placeholder-white/70 text-white font-heading tracking-widest text-lg md:text-xl border-white border-2 rounded-full py-1.5 px-4 pr-10 w-full focus:outline-none focus:border-dwars-pink" />
                        <div className="absolute right-3 w-4 h-4 md:w-5 md:h-5 flex items-center justify-center pointer-events-none">
                            <Image src="/assets/icons/icons_zoeken.png" width={20} height={20} alt="Search" className="brightness-0 invert object-contain" />
                        </div>
                    </div>

                    {/* Navigation Items */}
                    <nav className="mt-6 text-white flex flex-col gap-1.5 font-brother font-bold tracking-wide uppercase">
                        {navItems.map((item) => (
                            <Link key={item.label} href={item.href} className="flex items-center gap-3 group cursor-pointer hover:text-dwars-pink transition-colors">
                                <div className="w-4 md:w-5 h-4 md:h-5 relative shrink-0">
                                    <Image src={item.icon} alt={item.label} fill className="object-contain" />
                                </div>
                                <p className="text-lg md:text-xl group-hover:drop-shadow-md">{item.label}</p>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Dark Mode Toggle */}
                <div className="mt-8 flex w-full">
                    <ThemeToggle />
                </div>

                {/* Tags at bottom */}
                <div className="mt-auto pt-4 w-full flex flex-col gap-1.5 shrink-0 overflow-hidden">
                    <div className="flex flex-row items-center justify-start h-6 md:h-8 gap-1 md:gap-1.5 w-full">
                        <Link href="/archief?tags=unief" className="h-full shrink min-w-0"><img src="/assets/tags-categorieen/tags_unief.png" alt="Unief" className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform" /></Link>
                        <Link href="/archief?tags=maatschappij" className="h-full shrink min-w-0"><img src="/assets/tags-categorieen/tags_maatschappij.png" alt="Maatschappij" className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform" /></Link>
                        <Link href="/archief?tags=cultuur" className="h-full shrink min-w-0"><img src="/assets/tags-categorieen/tags_cultuur.png" alt="Cultuur" className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform" /></Link>
                    </div>
                    <div className="flex flex-row items-center justify-start h-6 md:h-8 gap-1 md:gap-1.5 w-full">
                        <Link href="/archief?tags=onderzoek" className="h-full shrink min-w-0"><img src="/assets/tags-categorieen/tags_onderzoek.png" alt="Onderzoek" className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform" /></Link>
                        <Link href="/archief?tags=t-stad" className="h-full shrink min-w-0"><img src="/assets/tags-categorieen/tags_t_stad.png" alt="'t Stad" className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform" /></Link>
                        <Link href="/archief?tags=opinie" className="h-full shrink min-w-0"><img src="/assets/tags-categorieen/tags_opinie.png" alt="Opinie" className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform" /></Link>
                    </div>
                    <div className="flex flex-row items-center justify-start h-6 md:h-8 gap-1 md:gap-1.5 w-full">
                        <Link href="/archief?tags=satire" className="h-full shrink min-w-0"><img src="/assets/tags-categorieen/tags_satire.png" alt="Satire" className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform" /></Link>
                        <Link href="/archief?tags=editoriaal" className="h-full shrink min-w-0"><img src="/assets/tags-categorieen/tags_editoriaal.png" alt="Editoriaal" className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform" /></Link>
                        <Link href="/archief?tags=poezie" className="h-full shrink min-w-0"><img src="/assets/tags-categorieen/tags_poezie.png" alt="Poezie" className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform" /></Link>
                    </div>
                </div>

            </div>
        </aside>
    );
}
