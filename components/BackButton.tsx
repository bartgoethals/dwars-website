"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function BackButton() {
    const router = useRouter();
    const pathname = usePathname();

    // Do not render on the homepage
    if (pathname === "/") {
        return null;
    }

    return (
        <button
            onClick={() => router.back()}
            className="absolute top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-2 text-black dark:text-white font-heading text-lg uppercase tracking-widest hover:text-dwars-pink transition-colors group group-hover:drop-shadow-sm"
            aria-label="Ga terug"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            >
                <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Terug</span>
        </button>
    );
}
