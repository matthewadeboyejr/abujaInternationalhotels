'use client';

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="flex flex-col">
      {/* Visual Part - Undisturbed Image */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <Image
          src="/abj.jpg"
          alt="Abuja International Hotels Luxury"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for depth, but keeping it minimal as requested */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Scroll Indicator - Floating on the image to suggest scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>

      {/* Text Part - Located Under the Image */}
      {/* <div className="bg-white dark:bg-black py-20 px-4 md:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif text-black dark:text-white font-thin tracking-tight">
            Abuja International Hotels
          </h1>

          <div className="w-24 h-1 bg-[#DC833D] mx-auto rounded-full" />

          <div className="pt-4">
            <Link href="/about">
              <button className="px-8 py-3 bg-[#DC833D] text-white text-base font-bold tracking-widest uppercase rounded-sm hover:bg-[#c97432] transition-colors duration-300">
                Discover Our Story
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}
