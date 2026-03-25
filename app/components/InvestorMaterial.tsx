'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function InvestorMaterial() {
  return (
    <section className="bg-white">
      {/* Disclaimer Text Area */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 text-center">
        <p className="text-[10px] md:text-xs text-gray-400 italic max-w-4xl mx-auto leading-relaxed">
          *A securities rating is not a recommendation to buy, sell or hold securities and may be subject to revision or withdrawal at any time. Credit ratings are subject to change depending on financial and other factors.*
        </p>
      </div>

      <div className="relative h-[600px] md:h-[800px] flex items-start justify-center overflow-visible">
        {/* Background Image Container with Fades */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/pool-img.jpg"
            alt="Unrivaled Quality Resort"
            fill
            className="object-cover opacity-60" // Added opacity for faded look
          />
          {/* Top Fade (to white) */}
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white to-transparent z-10" />
          {/* Subtle overlay to soften the image further */}
          <div className="absolute inset-0 bg-white/30 z-5" />
        </div>

        {/* Floating Navy Card - Floats at top, overlaps disclaimer area */}
        <div className="relative z-20 w-full max-w-4xl mx-4 -mt-24 md:-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a2b4b] text-white p-12 md:p-24 text-center shadow-2xl relative"
          >
            <h2 className="text-3xl md:text-5xl font-quicksand mb-8 tracking-tight">
              Investor Materials
            </h2>
            <div className="w-24 h-px bg-[#DC833D] mx-auto mb-10" />
            <p className="max-w-xl mx-auto text-sm md:text-lg text-gray-300 font-sans leading-relaxed mb-8">
              Download Abuja International Hotels's recent quarterly results, annual materials and corporate responsibility disclosures.
            </p>

            {/* Large Overlapping Details Button */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-30">
              <Link
                href="/investors/overview"
                className="bg-[#c4a062] hover:bg-[#b38f51] text-white px-8 py-8 md:px-16 md:py-12 flex flex-col items-center justify-center space-y-3 group transition-all duration-300 min-w-[200px] shadow-2xl"
              >
                <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.4em] uppercase text-center leading-tight">
                  Details
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
