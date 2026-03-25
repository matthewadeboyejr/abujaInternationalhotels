'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  return (
    <div className=" ">


      {/* Portfolio Section */}
      <div className="bg-white px-4 py-12 md:px-8 lg:px-16 lg:mx-72 md:mx-20">
        {/* Top Row: Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mb-16 ">
          {/* Property 1 */}
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <h3 className="text-navy-900 font-sans text-sm md:text-base font-semibold group-hover:text-gold-600 transition-colors uppercase tracking-wider">
              The Ritz-Carlton O&apos;ahu,<br />Turtle Bay
            </h3>
            <span className="text-gold-600 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Recent Acquisition
            </span>
            <div className="w-16 h-[2px] bg-navy-900 mt-2" />
          </div>

          {/* Property 2 */}
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <h3 className="text-navy-900 font-sans text-sm md:text-base font-semibold group-hover:text-gold-600 transition-colors uppercase tracking-wider">
              Alila Ventana Big Sur
            </h3>
            <span className="text-gray-500 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Featured Property
            </span>
          </div>

          {/* Central CTA */}
          <Link href="/portfolio" className="bg-[#1a2b4b] text-white px-8 py-10 flex flex-col items-center justify-center space-y-3 group hover:bg-[#15233d] transition-colors min-h-[160px]">
            <span className="text-[10px] md:text-xs font-bold font-sans tracking-[0.3em] uppercase text-center leading-relaxed">
              Our<br />Portfolio
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-white"
            >
              <ArrowRight className="w-5 h-5 text-[#DC833D]" />
            </motion.div>
          </Link>

          {/* Property 3 */}
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <h3 className="text-navy-900 font-sans text-sm md:text-base font-semibold group-hover:text-gold-600 transition-colors uppercase tracking-wider">
              1 Hotel Nashville
            </h3>
            <span className="text-gray-500 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Recent Acquisition
            </span>
          </div>

          {/* Property 4 */}
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <h3 className="text-navy-900 font-sans text-sm md:text-base font-semibold group-hover:text-gold-600 transition-colors uppercase tracking-wider">
              New York Marriott<br />Marquis
            </h3>
            <span className="text-gray-500 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Featured Property
            </span>
          </div>
        </div>

        {/* Middle Row: Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-[#DC833D] mb-8">
          <div className="flex flex-col items-center justify-center p-8 md:border-r border-[#DC833D] space-y-2">
            <span className="text-4xl md:text-5xl font-eb-garamond font-light text-[#DC833D] tracking-tight">1</span>
            <span className="text-[11px] md:text-xs font-bold font-quicksand tracking-[0.25em] uppercase text-[#1a2b4b]">Hotels</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 md:border-r border-[#DC833D] space-y-2">
            <span className="text-4xl md:text-5xl font-eb-garamond font-light text-[#DC833D] tracking-tight">252</span>
            <span className="text-[11px] md:text-xs font-bold font-quicksand tracking-[0.25em] uppercase text-[#1a2b4b]">Rooms</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 space-y-2">
            <span className="text-4xl md:text-5xl font-eb-garamond font-light text-[#DC833D] tracking-tight">1</span>
            <span className="text-[11px] md:text-xs font-bold font-quicksand tracking-[0.25em] uppercase text-[#1a2b4b]">Top Africa Markets</span>
          </div>
        </div>

        {/* Bottom Row: News Banner */}
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
      </div>


    </div>
  );
}
