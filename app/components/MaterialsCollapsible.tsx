'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Download } from 'lucide-react';

interface MaterialItem {
  date: string;
  title: string;
  link: string;
}

const materials: MaterialItem[] = [
  {
    date: '2/19/26',
    title: 'Fourth Quarter 2025 Investor Presentation',
    link: '#'
  },
  {
    date: '2/18/26',
    title: 'Fourth Quarter 2025 Earnings Highlights',
    link: '#'
  },
  {
    date: '2/18/26',
    title: 'Fourth Quarter 2025 Earnings Release',
    link: '#'
  },
  {
    date: '2/18/26',
    title: 'Fourth Quarter 2025 Supplemental Financial Information',
    link: '#'
  },
  {
    date: '8/6/25',
    title: '2025 Corporate Responsibility Report',
    link: '#'
  }
];

export default function MaterialsCollapsible() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-[#1a2b4b] text-white lg:mx-72 md:mx-20">
      <div className="px-4 md:px-8 lg:px-16">
        {/* Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-8 group transition-colors hover:bg-white/5"
        >
          <div className="flex items-center justify-between  w-full">
            <div className="flex items-center space-x-6">
              <motion.div
                animate={{ rotate: isOpen ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronUp className="w-5 h-5 text-[#DC833D]" />
              </motion.div>
              <span className="text-[11px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase">
                New Materials ({materials.length})
              </span>
            </div>
            <a
              href="#"
              className="flex items-center space-x-3 group/link"
              onClick={(e) => e.stopPropagation()}
            >
              <Download className="w-4 h-4 text-[#DC833D] group-hover/link:translate-y-0.5 transition-transform" />
              <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.2em] uppercase group-hover/link:text-[#DC833D] transition-colors">
                Download
              </span>
            </a>
          </div>

        </button>

        {/* Collapsible Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}

            >
              <div className="flex flex-col pb-12">
                {materials.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-t border-[#DC833D]/30 group hover:bg-white/5 transition-colors cursor-pointer px-4 -mx-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-12 flex-1">
                      <span className="text-xs md:text-sm font-sans text-white/60 w-20">
                        {item.date}
                      </span>
                      <span className="text-sm md:text-base font-sans font-medium hover:text-[#DC833D] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <a
                      href={item.link}
                      className="flex items-center space-x-3 mt-4 md:mt-0 group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="w-4 h-4 text-[#DC833D] group-hover/link:translate-y-0.5 transition-transform" />
                      <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.2em] uppercase group-hover/link:text-[#DC833D] transition-colors">
                        Download
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
