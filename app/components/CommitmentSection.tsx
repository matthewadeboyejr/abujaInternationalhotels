'use client';

import { ArrowUpRight } from 'lucide-react';

export default function CommitmentSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-4 md:mx-20 relative">

        {/* Main Card */}
        <div className="bg-black text-white rounded-[3rem] p-6 md:p-24 relative overflow-hidden">

          {/* Top Right Floating Action */}
          <div className="absolute -top-6 right-[15%] z-20">
            <button className="w-20 h-20 bg-black border-4 border-white rounded-full flex items-center justify-center hover:scale-105 transition-transform group">
              <ArrowUpRight className="w-8 h-8 text-white group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium leading-tight mb-16 text-gray-500">
              We are dedicated to redefining <span className="text-white font-normal">hospitality</span> in Abraka with unmatched <span className="text-white font-normal">comfort</span> and class.
            </h2>

            <div className="space-y-2">
              <div>
                <p className="text-white text-xl font-medium">Amb. Umulor Blessing Awore AKA BusyBoss</p>
                <p className="text-gray-500 text-sm uppercase tracking-wider">CEO & MD DWS Group</p>
              </div>
            </div>
          </div>

          {/* Geometric Pattern (Bottom Right) */}
          <div className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
              <path d="M400 400 L300 400 L300 300 L400 300 Z" fill="none" stroke="white" strokeWidth="1" />
              <path d="M300 400 L200 400 L200 300 L300 300 Z" fill="none" stroke="white" strokeWidth="1" />
              <path d="M300 300 L200 300 L200 200 L300 200 Z" fill="none" stroke="white" strokeWidth="1" />
              <path d="M200 300 L100 300 L100 200 L200 200 Z" fill="none" stroke="white" strokeWidth="1" />
              <path d="M400 300 L400 200 L350 150" fill="none" stroke="white" strokeWidth="1" />
              <path d="M350 400 L300 350" fill="none" stroke="white" strokeWidth="1" />
              {/* Abstract geometric lines matching the vibe */}
              <line x1="0" y1="400" x2="400" y2="0" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
