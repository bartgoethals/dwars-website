import Link from 'next/link';

interface TapeTagProps {
    label: string;
    href?: string;
    count?: number;
    className?: string;
}

export default function TapeTag({ label, href, count, className = "" }: TapeTagProps) {
    const content = (
        <>
            {label}
            {count !== undefined && <span className="ml-2 opacity-50">{count}</span>}
        </>
    );

    const baseClasses = `bg-tape px-3 py-1 text-sm font-heading tracking-wider uppercase text-dwars-text inline-flex items-center ${className}`;

    if (href) {
        return (
            <Link href={href} className={`${baseClasses} hover:bg-dwars-pink hover:text-white transition-colors`}>
                {content}
            </Link>
        );
    }

    return (
        <span className={baseClasses}>
            {content}
        </span>
    );
}
