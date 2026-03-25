'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pressReleases = [
  {
    date: 'February 19, 2026',
    title: 'Abuja International Hotels Provides Updated Fourth Quarter 2025 Investor Presentation',
    href: '/investors/press-releases/1',
  },
  {
    date: 'February 18, 2026',
    title: 'Abuja International Hotels, Inc. Reports Results for 2025',
    href: '/investors/press-releases/2',
  },
  {
    date: 'February 10, 2026',
    title: 'Abuja International Hotels Announces Expansion of Sustainable Luxury Initiative across Prime Locations',
    href: '/investors/press-releases/3',
  },
  {
    date: 'February 05, 2026',
    title: 'Abuja International Hotels, Inc. to Host Fourth Quarter and Full Year 2025 Earnings Conference Call on February 19, 2026',
    href: '/investors/press-releases/4',
  },
];

export default function PressReleasesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif text-[#1a2b4b] text-center mb-16"
        >
          Press Releases
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {pressReleases.map((news, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer border-b border-gray-100 pb-8"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#DC833D] block mb-3">
                {news.date}
              </span>
              <p className="text-sm md:text-base text-[#1a2b4b] font-sans leading-snug group-hover:text-[#DC833D] transition-colors line-clamp-2">
                {news.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/investors/press-releases"
            className="inline-flex items-center text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#1a2b4b] group"
          >
            View All <ArrowRight className="ml-3 w-4 h-4 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
