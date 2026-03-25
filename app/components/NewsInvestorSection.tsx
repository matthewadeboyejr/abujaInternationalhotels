'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const pressReleases = [
  {
    date: '2/19/26',
    title: 'Abuja International Hotels Provides Updated Fourth Quarter 2025 Investor Presentation',
  },
  {
    date: '2/18/26',
    title: 'Abuja International Hotels, Inc. Reports Results for 2025',
  },
  {
    date: '2/18/26',
    title: 'Abuja International Hotels Announces Expansion of Sustainable Luxury Initiative across Prime Locations',
  },
];

const otherNews = [
  {
    date: '3/5/26',
    title: 'Abuja International Hotels Named "Best Luxury Hotel in Nigeria" at the 2026 World Travel Awards',
  },
  {
    date: '2/26/26',
    title: 'New State-of-the-Art Wellness & Spa Wing to Open at Abuja International Hotels in Q3 2026',
  },
  {
    date: '2/18/26',
    title: 'Abuja International Hotels Hosts Global Diplomatic Forum on Sustainable Tourism and Hospitality',
  },
];

export default function NewsInvestorSection() {
  return (
    <section className="relative w-full overflow-visible">
      {/* Beige News Area */}
      <div className="bg-[#ECE08F]/30 pt-16 pb-32 md:pt-24 md:pb-48">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Top Row: News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Press Releases */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-[#1a2b4b] mb-4">Press Releases</h2>
              <div className="w-24 h-px bg-[#DC833D] mb-12" />
              <div className="space-y-10">
                {pressReleases.map((news, index) => (
                  <div key={index} className="group cursor-pointer">
                    <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.2em] text-[#DC833D] block mb-2">
                      {news.date}
                    </span>
                    <p className="text-sm md:text-base font-sans text-gray-800 leading-snug group-hover:text-[#DC833D] transition-colors">
                      {news.title}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/news" className="inline-flex items-center text-[10px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase text-[#1a2b4b] mt-12 group">
                Press Releases <ArrowRight className="ml-3 w-4 h-4 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Other Company News */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-[#1a2b4b] mb-4">Other Company News</h2>
              <div className="w-24 h-px bg-[#DC833D] mb-12" />
              <div className="space-y-10">
                {otherNews.map((news, index) => (
                  <div key={index} className="group cursor-pointer">
                    <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.2em] text-[#DC833D] block mb-2">
                      {news.date}
                    </span>
                    <p className="text-sm md:text-base font-sans text-gray-800 leading-snug group-hover:text-[#DC833D] transition-colors">
                      {news.title}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/news" className="inline-flex items-center text-[10px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase text-[#1a2b4b] mt-12 group">
                View All <ArrowRight className="ml-3 w-4 h-4 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Investor Materials Box */}
      <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1a2b4b] text-white p-12 md:p-20 text-center relative overflow-visible shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Key Investor Materials</h2>
              <div className="w-24 h-px bg-[#DC833D] mx-auto mb-10" />
              <p className="max-w-xl mx-auto text-sm md:text-base text-gray-300 font-sans leading-relaxed mb-4 md:mb-8">
                Download Abuja International Hotels' recent quarterly results, annual materials and corporate responsibility disclosures.
              </p>
            </div>

            {/* Sub-floating Details Button */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-40">
              <Link
                href="/investors"
                className="bg-[#c4a062] hover:bg-[#b38f51] text-white px-8 py-6 md:px-12 md:py-8 flex flex-col items-center justify-center space-y-2 group transition-all duration-300 min-w-[140px] shadow-2xl"
              >
                <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase">
                  Details
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Subtle Background Pattern/Icon */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Download className="w-24 h-24 md:w-32 md:h-32 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
