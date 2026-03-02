"use client";

import { useTheme } from "@/lib/ThemeContext";
import Image from "next/image";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border hover:border-dwars-pink transition-colors group cursor-pointer ${theme === 'dark' ? 'border-[#1b1b1b] bg-white' : 'border-white/40 bg-[#1b1b1b]'
                }`}
            aria-label="Toggle Dark Mode"
        >
            <div className="w-5 h-5 relative mr-1">
                {theme === 'dark' ? (
                    <Image src="/assets/icons/zonnetje.png" alt="Light Mode" fill className="object-contain rounded-full group-hover:scale-110 transition-transform" />
                ) : (
                    <Image src="/assets/icons/maantje.png" alt="Dark Mode" fill className="object-contain group-hover:scale-110 transition-transform" />
                )}
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider group-hover:text-dwars-pink transition-colors ${theme === 'dark' ? 'text-[#1b1b1b]' : 'text-white'
                }`}>
                {theme === 'dark' ? 'Licht' : 'Donker'}
            </span>
        </button>
    );
}
