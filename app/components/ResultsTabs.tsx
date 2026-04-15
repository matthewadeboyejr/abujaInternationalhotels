'use client';

import { motion } from 'framer-motion';

interface ResultsTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'annual-reports', label: 'ANNUAL REPORTS' },
  { id: 'quarterly-results', label: 'QUARTERLY RESULTS' },
];

export default function ResultsTabs({ activeTab, onTabChange }: ResultsTabsProps) {
  return (
    <div className="border-b border-gray-100 mb-16 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative pb-6 text-[10px] md:text-xs font-bold font-quicksand tracking-[0.25em] transition-colors ${activeTab === tab.id ? 'text-[#1a2b4b]' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1a2b4b]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
