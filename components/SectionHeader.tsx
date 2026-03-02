import React from 'react';

interface SectionHeaderProps {
    title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
    return (
        <div className="relative inline-block mb-8 mt-4 z-0">
            <div className="absolute inset-0 bg-dwars-gray dark:bg-gray-800 transform -rotate-2 -skew-x-6 z-[-1] scale-110 shadow-sm border border-black/5 dark:border-white/10 transition-colors" />
            <h2 className="text-5xl font-heading tracking-wide px-4 py-2 relative text-dwars-text dark:text-white transition-colors">
                {title}
            </h2>
        </div>
    );
}
