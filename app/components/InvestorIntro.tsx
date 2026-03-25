'use client';

import { motion } from 'framer-motion';
import NewsBanner from './NewsBanner';

const creditRatings = [
  { agency: 'S&P', rating: 'BBB-' },
  { agency: 'MOODY\'S', rating: 'Baa2' },
  { agency: 'FITCH', rating: 'BBB' },
];

export default function InvestorIntro() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">


        {/* Title & Description */}
        <div className="mb-24 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-quicksand text-center text-[#1a2b4b] mb-10 leading-[1.1]"
          >
            Investment Grade Lodging REIT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-center text-[#1a2b4b]/80 font-sans leading-relaxed"
          >
            Abuja International Hotels is a premier lodging REIT owning a diverse portfolio of high-quality hotels and resorts positioned in top-tier urban and resort markets in Nigeria and select international locations. We focus on owning properties that are difficult to replicate and are managed by leading global hotel brands.
          </motion.p>
        </div>

        <NewsBanner />

        {/* Financials & Ratings Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center pt-16 border-t border-gray-100">
          {/* Stock Price */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Stock Price</span>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl md:text-6xl font-serif text-[#1a2b4b]">$18.60</span>
              <span className="text-sm font-bold text-gray-400 tracking-wider">USD</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm font-bold text-gray-400">
              <span className="">$0.00 (0.00%)</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="">As of March 23, 2026</span>
            </div>
          </div>

          {/* Credit Ratings */}
          <div className="flex flex-col items-center md:items-start lg:pl-16">
            <span className="text-xs font-bold font-sans tracking-[0.2em] text-gray-400 uppercase mb-4">Investment Grade Credit Ratings</span>
            <div className="flex gap-8 md:gap-12">
              {creditRatings.map((item, idx) => (
                <div key={idx} className="flex flex-col font-quicksand items-center md:items-start">
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-1">{item.agency}</span>
                  <span className="text-2xl md:text-3xl font-quicksand text-[#1a2b4b]">{item.rating}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
