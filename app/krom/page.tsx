import Link from "next/link";
import Image from "next/image";

export default function Krom() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] w-full overflow-hidden bg-gray-50 dark:bg-[#1a1a1a]">
            {/* Inline styles for the rotation animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes rotateKrom {
            0% { 
              transform: rotate(180deg); 
            }
            100% { 
              transform: rotate(0deg); 
            }
          }
          
          .animate-krom-rotate {
            animation: rotateKrom 2.0s ease-in-out forwards;
            /* Start state before animation begins */
            transform: rotate(180deg);
            transform-origin: center center;
          }
        `
            }} />

            {/* The rotating container */}
            <div className="animate-krom-rotate flex flex-col items-center justify-center max-w-5xl w-full p-4 md:p-8 mx-4 relative z-10">

                {/* We use an image tag for the screenshot of the articles */}
                <div className="w-full relative rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-800">
                    <img
                        src="/assets/krom-artikels.png"
                        alt="Screenshot of Dwars Articles"
                        className="w-full h-auto object-contain max-h-[70vh]"
                    />
                </div>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white uppercase tracking-wider bg-black dark:bg-white dark:text-black rounded-lg hover:bg-dwars-pink dark:hover:bg-dwars-pink dark:hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Terug naar normaal
                    </Link>
                </div>
            </div>
        </div>
    );
}
