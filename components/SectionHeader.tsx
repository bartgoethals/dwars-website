import React from 'react';

interface SectionHeaderProps {
    title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
    return (
        <div className="relative inline-flex items-center justify-center mb-6 mt-2 z-0 px-4 py-2">
            {/* Background Tape Image */}
            <div className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none scale-[1.1] opacity-90 dark:opacity-80 transition-opacity">
                <img src="/assets/extra/nog lichtere tapejes_5.png" alt="" className="w-[120%] h-[120%] object-fill drop-shadow-sm min-w-[150px] max-w-[250px]" />
            </div>
            {/* Foreground Text */}
            <h2 className="text-xl md:text-2xl font-heading tracking-wide relative text-dwars-text dark:text-white transition-colors mt-1">
                {title}
            </h2>
        </div>
    );
}
