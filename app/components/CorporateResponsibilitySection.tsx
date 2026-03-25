'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CorporateResponsibilitySection() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden mt-52">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Banner Image Container */}
        <div className="relative w-full h-[400px] md:h-[600px] mb-24">
          <Image
            src="/conference-img.jpg"
            alt="Luxury Resort Sustainability"
            fill
            className="object-cover"
          />

          {/* Overlapping Blurred Box */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[90%] md:w-[60%] lg:w-[40%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-md p-10 md:p-16 text-center border border-white/20 shadow-xl"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-[#1a2b4b] mb-6 tracking-tight">
                Corporate Responsibility
              </h2>
              <div className="w-24 h-px bg-[#DC833D] mx-auto" />
            </motion.div>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-32 md:mt-48 text-center">
          {/* Top Divider */}
          <div className="w-full h-px bg-[#DC833D] max-w-4xl mx-auto mb-12" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-sm md:text-base font-sans text-gray-600 leading-[1.8] px-4"
          >
            Abuja International Hotels is proud to be consistently recognized as a global industry leader in sustainability and are committed to creating long-term value through investing responsibly in our business, environment, people and community.
          </motion.p>

          {/* Bottom Divider (Gold) */}
          <div className="w-full h-px bg-[#DC833D] max-w-4xl mx-auto mt-12 mb-16" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/awards"
              className="inline-flex items-center text-[10px] md:text-sm font-bold font-quicksand tracking-[0.3em] uppercase text-[#DC833D] hover:scale-110 transition-colors group"
            >
              View All Awards <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
