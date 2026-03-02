import React from 'react';

interface SectionHeaderProps {
    title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
    return (
        <div className="relative inline-flex items-center justify-center mb-8 mt-4 z-0 px-8 py-4">
            {/* Background Tape Image */}
            <div className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none scale-[1.3] opacity-90 dark:opacity-80 transition-opacity">
                <img src="/assets/extra/nog lichtere tapejes_5.png" alt="" className="w-full h-full object-fill drop-shadow-sm min-w-[200px]" />
            </div>
            {/* Foreground Text */}
            <h2 className="text-3xl md:text-4xl font-heading tracking-wide relative text-dwars-text dark:text-white transition-colors mt-2">
                {title}
            </h2>
        </div>
    );
}
