'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'lodging',
    title: 'Luxury Lodging',
    description: 'Experience unparalleled comfort in one of our 253 guestrooms, ranging from Classic rooms to our exquisite Presidential Suites.',
    image: '/lodge-img.jpg'
  },
  {
    id: 'conference',
    title: 'Conference & Events',
    description: 'Host world-class events in our versatile 900 sqm space, including a grand conference hall equipped with full audio-visual support.',
    image: '/conference-img.jpg'
  },
  {
    id: 'dining',
    title: 'Fine Dining',
    description: 'Savor a culinary journey with our selection of Nigerian and International cuisines, featuring our famous weekend poolside barbecues.',
    image: '/fine-img.jpg'
  },
  {
    id: 'wellness',
    title: 'Wellness & Spa',
    description: 'Rejuvenate your mind and body at our full-service health club, featuring massages, sauna, steam room, and beauty treatments.',
    image: '/spa-img.jpg'
  },
  {
    id: 'sports',
    title: 'Sports & Leisure',
    description: 'Stay active with our outdoor pool, tennis and squash courts, or enjoy the nightlife at our on-site casino and night club.',
    image: '/gym-img.jpg'
  },
  {
    id: 'business',
    title: 'Business Centre',
    description: 'Maintain peak productivity with our 24/7 facility providing high-speed internet and comprehensive administrative support.',
    image: '/business-img.jpg'
  }
];

export default function FeaturedServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="relative max-w-7xl mx-auto h-[65vh] min-h-[450px] overflow-hidden group mt-16 shadow-2xl rounded-sm">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Bottom-Docked Control Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 backdrop-blur-md bg-white/10 border border-white/10 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden group/bar transition-all duration-500 hover:bg-white/15">

          {/* Decorative Corner Accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-[#DC833D] opacity-70" />

          {/* Content Area */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#DC833D]" />
                <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.4em] uppercase text-white/90">
                  Featured Service {currentIndex + 1}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-quicksand text-white tracking-tight uppercase">
                {services[currentIndex].title}
              </h2>
              <p className="text-sm md:text-base font-light text-white/80 leading-relaxed max-w-xl">
                {services[currentIndex].description}
              </p>
            </motion.div>
          </div>

          {/* Controls Area */}
          <div className="flex flex-col items-center md:items-end gap-8 min-w-[200px]">
            {/* Pagination Controls */}
            <div className="flex items-center gap-6 text-white border-b border-white/20 pb-4 w-full justify-center md:justify-end">
              <button
                onClick={prevSlide}
                className="hover:text-[#DC833D] transition-all p-2 rounded-full hover:bg-white/10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex flex-col items-center min-w-[40px]">
                <span className="text-lg font-quicksand font-bold leading-none">{currentIndex + 1}</span>
                <div className="w-4 h-[1px] bg-white/30 my-1" />
                <span className="text-[10px] opacity-60 font-medium">{services.length}</span>
              </div>
              <button
                onClick={nextSlide}
                className="hover:text-[#DC833D] transition-all p-2 rounded-full hover:bg-white/10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Action Button */}
            <motion.a
              key={`btn-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href={`/services#${services[currentIndex].id}`}
              className="group/btn flex items-center gap-4 text-white hover:text-[#DC833D] transition-colors"
            >
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase border-b border-transparent group-hover/btn:border-[#DC833D] pb-1 transition-all">
                Explore Details
              </span>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:border-[#DC833D] transition-all">
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
