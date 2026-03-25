'use client';

import { motion } from 'framer-motion';
import { FileText, Download, FileSpreadsheet } from 'lucide-react';

interface FilingItem {
  date: string;
  title: string;
  type: 'pdf' | 'xls' | 'doc';
  href: string;
}

interface QuarterGroup {
  quarter: string;
  items: FilingItem[];
}

interface QuarterlyListProps {
  groups: QuarterGroup[];
}

const IconMap = {
  pdf: FileText,
  xls: FileSpreadsheet,
  doc: FileText,
};

export default function QuarterlyList({ groups }: QuarterlyListProps) {
  return (
    <div className="space-y-24">
      {groups.map((group, gIdx) => (
        <motion.div 
          key={gIdx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: gIdx * 0.1 }}
          className="text-center"
        >
          {/* Quarter Title (e.g., Q4) */}
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a2b4b] mb-4">
            {group.quarter}
          </h2>
          <div className="w-8 h-[2px] bg-[#DC833D] mx-auto mb-12" />

          {/* Items List */}
          <div className="max-w-3xl mx-auto space-y-10">
            {group.items.map((item, iIdx) => {
              const Icon = IconMap[item.type];
              return (
                <div key={iIdx} className="group">
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2">
                    {item.date}
                  </span>
                  <a 
                    href={item.href}
                    className="flex flex-col items-center gap-3 group/link"
                  >
                    <p className="text-base md:text-lg text-[#1a2b4b] font-sans leading-relaxed group-hover/link:text-[#DC833D] transition-colors">
                      {item.title}
                    </p>
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover/link:border-[#DC833D] group-hover/link:text-[#DC833D] transition-all">
                      <Download className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
