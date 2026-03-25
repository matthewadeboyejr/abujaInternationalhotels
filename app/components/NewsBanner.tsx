'use client';

import Link from 'next/link';


export default function NewsBanner() {
    return (

        <Link href="/news/earnings-call-q4-2025" className="flex flex-col md:flex-row justify-between items-center py-8 group border-y   border-[#DC833D] hover:border-[#DC833D] transition-all duration-300">
            <div className="flex flex-col space-y-1 mb-4 md:mb-0">
                <p className="text-[#1a2b4b] font-quicksand font-medium text-base md:text-lg tracking-tight group-hover:text-black transition-colors">
                    Fourth Quarter 2025 Earnings Call on February 19, 2026
                </p>
            </div>
            <div className="flex items-center space-x-3 text-[10px] md:text-xs font-bold font-quicksand tracking-[0.25em] uppercase text-[#DC833D] transition-all group-hover:translate-x-2">
                <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-[#DC833D] group-hover:after:w-full after:transition-all after:duration-300">
                    Learn More
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </Link>

    );
}
