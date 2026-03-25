'use client';

import Image from "next/image";
import PortfolioSection from "./PortfolioSection";

export default function HeroSection() {
  return (
    <div className="flex flex-col ">
      {/* Visual Part - Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/abj.jpg"
          alt="Abuja International Hotels Luxury"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <PortfolioSection />

    </div>
  );
}
