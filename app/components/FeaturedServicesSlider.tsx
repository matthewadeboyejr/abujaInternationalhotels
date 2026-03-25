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
    image: '/lodge-img.jpeg'
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
    <div className="relative lg:mx-72 md:mx-20 h-[70vh] min-h-[500px] overflow-hidden group mt-12">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Centered Content Card */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-8 md:p-12">
        <div className="relative w-full max-w-2xl flex flex-col items-center">
          {/* Blurred Card Overlay */}
          <motion.div
            key={`card-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative backdrop-blur-md bg-white/40 border border-white/20 rounded-sm p-8 md:p-12 pb-16 md:pb-20 text-center shadow-2xl w-full"
          >
            <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase text-[#1a2b4b] mb-4 block">
              Featured Services
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a2b4b] mb-6 tracking-tight">
              {services[currentIndex].title}
            </h2>
            <p className="text-sm md:text-base font-sans text-[#1a2b4b]/80 max-w-md mx-auto leading-relaxed mb-4">
              {services[currentIndex].description}
            </p>

            {/* Pagination & Controls - Positioned at bottom edge */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center space-x-8 text-[#1a2b4b] bg-white/60 backdrop-blur-sm py-2 px-6 rounded-sm border border-white/20 shadow-lg">
              <button
                onClick={prevSlide}
                className="hover:text-[#DC833D] transition-colors p-1"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-sans font-medium tracking-widest min-w-[50px]">
                {currentIndex + 1} / {services.length}
              </span>
              <button
                onClick={nextSlide}
                className="hover:text-[#DC833D] transition-colors p-1"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Details Button - Outside the card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <a
              href={`/services#${services[currentIndex].id}`}
              className="bg-[#1a2b4b] text-white px-10 py-6 md:px-16 md:py-10 flex flex-col items-center justify-center space-y-3 group hover:bg-[#15233d] transition-all duration-300 min-w-[200px] shadow-xl"
            >
              <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase">
                Details
              </span>
              <ArrowRight className="w-5 h-5 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
