import React from 'react';

interface AvatarPlaceholderProps {
    name: string;
}

// Simple seeded PRNG based on name string
function seededRandom(seed: number) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export default function AvatarPlaceholder({ name }: AvatarPlaceholderProps) {
    const seed = Math.abs(hashCode(name));

    // Deterministic "randomness" based on the user's name
    const isPinkTheme = seededRandom(seed) > 0.4;
    const numShapes = Math.floor(seededRandom(seed + 1) * 4) + 3; // 3 to 6 shapes

    // Background gradient strategy
    const bgType = Math.floor(seededRandom(seed + 2) * 3);

    const shapes = [];
    for (let i = 0; i < numShapes; i++) {
        const type = Math.floor(seededRandom(seed + i * 10) * 3); // 0: rect, 1: circle, 2: path
        const fillType = Math.floor(seededRandom(seed + i * 10 + 1) * 3);
        const fill = fillType === 0 ? '#111111' : fillType === 1 ? '#ff0055' : 'transparent';
        const stroke = fillType === 2 ? (seededRandom(seed + i * 10 + 2) > 0.5 ? '#111111' : '#ff0055') : 'none';
        const strokeWidth = stroke !== 'none' ? Math.floor(seededRandom(seed + i * 10 + 3) * 6) + 2 : 0;

        // Grunge transformation (rotations, scales, skews)
        const tx = seededRandom(seed + i * 11) * 100;
        const ty = seededRandom(seed + i * 12) * 100;
        const rot = seededRandom(seed + i * 13) * 360;
        const scale = seededRandom(seed + i * 14) * 1.5 + 0.5;

        if (type === 0) {
            // Rectangle
            shapes.push(
                <rect
                    key={`shape-${i}`}
                    x="-20" y="-20" width="40" height="40"
                    fill={fill} stroke={stroke} strokeWidth={strokeWidth}
                    transform={`translate(${tx} ${ty}) rotate(${rot}) scale(${scale})`}
                />
            );
        } else if (type === 1) {
            // Circle
            shapes.push(
                <circle
                    key={`shape-${i}`}
                    cx="0" cy="0" r="25"
                    fill={fill} stroke={stroke} strokeWidth={strokeWidth}
                    transform={`translate(${tx} ${ty}) scale(${scale})`}
                />
            );
        } else {
            // Random polygon for grunge shard effect
            const w = seededRandom(seed + i * 15) * 60 + 20;
            const h = seededRandom(seed + i * 16) * 60 + 20;
            const points = `0,0 ${w},0 ${w * 0.8},${h} ${w * 0.2},${h * 0.9}`;
            shapes.push(
                <polygon
                    key={`shape-${i}`}
                    points={points}
                    fill={fill} stroke={stroke} strokeWidth={strokeWidth}
                    transform={`translate(${tx} ${ty}) rotate(${rot}) scale(${scale})`}
                />
            );
        }
    }

    // Crosses/Tape markings typical for grunge
    const numCrosses = Math.floor(seededRandom(seed + 100) * 3) + 1;
    const crosses = [];
    for (let i = 0; i < numCrosses; i++) {
        const cx = seededRandom(seed + 101 + i) * 80 + 10;
        const cy = seededRandom(seed + 102 + i) * 80 + 10;
        const size = seededRandom(seed + 103 + i) * 15 + 5;
        crosses.push(
            <path
                key={`cross-${i}`}
                d={`M${cx - size},${cy - size} L${cx + size},${cy + size} M${cx + size},${cy - size} L${cx - size},${cy + size}`}
                stroke={isPinkTheme ? "#ff0055" : "#111111"}
                strokeWidth={seededRandom(seed + 104 + i) * 3 + 2}
                strokeLinecap="square"
            />
        );
    }

    // Halftone/Dots effect approximation
    const dots = [];
    if (seededRandom(seed + 200) > 0.3) {
        for (let x = 10; x < 100; x += 10) {
            for (let y = 10; y < 100; y += 10) {
                if (seededRandom(seed + x * y) > 0.7) {
                    dots.push(<circle key={`dot-${x}-${y}`} cx={x} cy={y} r="1.5" fill={isPinkTheme ? "#ff0055" : "#111111"} opacity="0.4" />);
                }
            }
        }
    }

    return (
        <svg
            className="w-full h-full object-cover"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Base Background */}
            <rect
                x="0" y="0" width="100" height="100"
                fill={bgType === 0 ? '#f0f0f0' : bgType === 1 ? '#e0e0e0' : '#d4d4d4'}
            />

            {/* Halftone / Gritty Texture Layer */}
            {dots}

            {/* Generated Shapes */}
            {shapes}

            {/* Grunge Crosses */}
            {crosses}

            {/* Heavy Border/Frame Overlay to give print feeling */}
            <rect x="0" y="0" width="100" height="100" fill="none" stroke="#111111" strokeWidth="8" />

            <text
                x="50" y="50"
                fontFamily="sans-serif"
                fontWeight="900"
                fontSize="40"
                fill={isPinkTheme ? "#111111" : "#ff0055"}
                textAnchor="middle"
                alignmentBaseline="central"
                opacity="0.2"
                transform="rotate(-15 50 50)"
            >
                {name.charAt(0).toUpperCase()}
            </text>
        </svg>
    );
}
