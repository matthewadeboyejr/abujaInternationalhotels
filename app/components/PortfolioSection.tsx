'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  return (
    <div className=" ">


      {/* Portfolio Section */}
      <div className="bg-white px-4 py-16 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Top Row: Portfolio Grid */}
        {/* Top Row: Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center mb-16">
          {/* Property 1 */}
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <h3 className="text-[#1a2b4b] font-quicksand text-xs md:text-sm font-bold group-hover:text-[#DC833D] transition-colors uppercase tracking-widest leading-tight">
              Nicon Luxury<br />Abuja
            </h3>
            <span className="text-[#DC833D] font-sans text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
              {/*  Recent Acquisition */}
            </span>
            <div className="w-12 h-px bg-[#1a2b4b]/20 mt-2 group-hover:bg-[#DC833D] transition-colors" />
          </div>

          {/* Property 3 */}
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <h3 className="text-[#1a2b4b] font-quicksand text-xs md:text-sm font-bold group-hover:text-[#DC833D] transition-colors uppercase tracking-widest leading-tight">
              Abuja Regency<br />Resorts
            </h3>
            <span className="text-gray-400 font-sans text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
              {/* Recent Acquisition */}
            </span>
          </div>

          {/* Property 4 */}
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <h3 className="text-[#1a2b4b] font-quicksand text-xs md:text-sm font-bold group-hover:text-[#DC833D] transition-colors uppercase tracking-widest leading-tight">
              Continental Plaza<br />Abuja
            </h3>
            <span className="text-gray-400 font-sans text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
              Featured Property
            </span>
          </div>

          {/* Central CTA */}
          <Link href="/portfolio" className="bg-[#1a2b4b] text-white px-6 py-8 rounded-sm flex flex-col items-center justify-center space-y-3 group hover:bg-[#15233d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-h-[140px]">
            <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase text-center leading-relaxed">
              Our<br />Portfolio
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-[#DC833D]"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </div>

        {/* Middle Row: Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-[#DC833D]/30 mb-8 bg-gray-50/50">
          {/* <div className="flex flex-col items-center justify-center p-10 md:border-r border-[#DC833D]/30 space-y-2 group hover:bg-white transition-colors">
            <span className="text-4xl md:text-5xl font-quicksand font-light text-[#DC833D] tracking-tight group-hover:scale-110 transition-transform">12</span>
            <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.25em] uppercase text-[#1a2b4b]">Strategic Properties</span>
          </div> */}
          <div className="flex flex-col items-center justify-center p-10 md:border-r border-[#DC833D]/30 space-y-2 group hover:bg-white transition-colors">
            <span className="text-4xl md:text-5xl font-quicksand font-light text-[#DC833D] tracking-tight group-hover:scale-110 transition-transform">253</span>
            <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.25em] uppercase text-[#1a2b4b]">Guest Rooms</span>
          </div>
          <div className="flex flex-col items-center justify-center p-10 space-y-2 group hover:bg-white transition-colors">
            <span className="text-4xl md:text-5xl font-quicksand font-light text-[#DC833D] tracking-tight group-hover:scale-110 transition-transform">5</span>
            <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.25em] uppercase text-[#1a2b4b]">Major African Markets</span>
          </div>
        </div>

        {/* Bottom Row: News Banner */}
        <Link href="/investors/results" className="flex flex-col md:flex-row justify-between items-center py-10 px-6 group border border-[#DC833D]/30 hover:bg-[#1a2b4b] transition-all duration-500 rounded-sm">
          <div className="flex flex-col space-y-2 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-[#162136] font-quicksand font-bold text-lg md:text-xl tracking-tight group-hover:text-white transition-colors">
              Abuja International Hotels Q4 2025 Earnings Performance
            </p>
            <p className="text-[#DC833D] text-[10px] font-bold tracking-widest uppercase group-hover:text-white/80 transition-colors">
              Corporate Announcement • February 19, 2026
            </p>
          </div>
          <div className="flex items-center space-x-3 text-[10px] md:text-xs font-bold font-quicksand tracking-[0.25em] uppercase text-[#DC833D] transition-all group-hover:text-white">
            <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-[#DC833D] group-hover:after:bg-white group-hover:after:w-full after:transition-all after:duration-300">
              Review Performance
            </span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </div>


    </div>
  );
}
