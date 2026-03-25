'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    title: 'Strategic Location',
    description: 'Enjoying a prime position in the heart of Abuja, with direct access to the International Conference Centre and unique views of Aso Rock.',
  },
  {
    title: 'Unrivaled Luxury',
    description: 'Providing exceptional service and luxury lodging across our guestrooms and suites, exceeding guests\' expectations at every turn.',
  },
  {
    title: 'Relentless Satisfaction',
    description: 'A philosophy centered on guest satisfaction, ensuring that every stay is personalized, secure, and memorable.',
  },
];

export default function FoundationSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif text-[#1a2b4b] mb-8 tracking-tight"
          >
            Our Foundation for Excellence
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-[2px] bg-[#DC833D] mx-auto mb-12 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-sm md:text-base font-sans text-gray-600 leading-relaxed px-4"
          >
            Abuja International Hotels is a premier destination in Nigeria's capital, blending physical location advantage with a philosophy of relentless guest satisfaction. Our commitment to excellence is built upon three core pillars that ensure we remain a cornerstone of Abuja's hospitality sector.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="relative border-t border-b border-[#DC833D]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DC833D]">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                className="flex flex-col items-center text-center p-8 md:p-12 group hover:bg-white transition-colors duration-500"
              >
                <h3 className="text-xs md:text-sm font-bold font-quicksand tracking-[0.3em] uppercase text-[#DC833D] mb-6">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base font-sans text-gray-600 leading-relaxed max-w-[280px]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-0 flex justify-center -translate-y-px">
          <div className="bg-[#ECE08F] px-12 md:px-24 mt-px "> {/* Background masking for the button overlap if needed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/about"
                className="bg-[#1a2b4b] text-white px-10 py-6 md:px-16 md:py-10 flex flex-col items-center justify-center space-y-3 group hover:bg-[#15233d] transition-all duration-300 min-w-[200px] shadow-xl"
              >
                <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase">
                  Learn More
                </span>
                <ArrowRight className="w-5 h-5 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
