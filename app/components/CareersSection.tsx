'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CareersSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className=" relative">

        {/* Top Navy Box (Overlapping) */}
        <div className="relative z-20 max-w-5xl mx-auto mb-[-80px] md:mb-[-120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1a2b4b] text-white p-12 md:p-20 text-center relative shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-quicksand mb-8 tracking-tight">Explore a Career with Us</h2>
            <div className="w-24 h-px bg-[#DC833D] mx-auto mb-10" />
            <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300 font-sans leading-relaxed mb-4 md:mb-0">
              Our employees play an integral role in contributing to the company's success. The challenges, opportunities and our unique corporate culture are among the reasons to consider a career at Abuja International Hotels.
            </p>

            {/* Bottom Floating Button */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-30">
              <Link
                href="/careers"
                className="bg-[#c4a062] hover:bg-[#b38f51] text-white px-10 py-6 md:px-14 md:py-8 flex flex-col items-center justify-center space-y-3 group transition-all duration-300 min-w-[180px] shadow-2xl"
              >
                <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase">
                  Learn More
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner Image */}
        <div className="relative w-full h-[400px] md:h-[600px] z-10 overflow-hidden">
          <Image
            src="/fullview-4.jpeg"
            alt="Resort Careers"
            fill
            className="object-cover"
          />

          {/* Image Caption */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <Link
              href="/careers"
              className="text-white text-xs md:text-sm font-quicksand font-medium flex items-center hover:underline bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              Abuja International Hotels <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
