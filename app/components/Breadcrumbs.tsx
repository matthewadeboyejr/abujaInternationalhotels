'use client';

import Link from 'next/link';
import { Printer, Share2 } from 'lucide-react';

interface BreadcrumbsProps {
  items: { title: string; href: string }[];
  currentPage: string;
}

export default function Breadcrumbs({ items, currentPage }: BreadcrumbsProps) {
  return (
    <div className="bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex justify-between items-center flex-wrap gap-4">
        <nav className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase flex items-center gap-2 font-quicksand">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Link href={item.href} className="hover:text-[#1a2b4b] transition-colors">
                {item.title}
              </Link>
              <span className="text-gray-300">/</span>
            </div>
          ))}
          <span className="text-[#1a2b4b] font-bold">{currentPage}</span>
        </nav>
        
        <div className="flex gap-6 text-gray-400">
          <button 
            onClick={() => window.print()}
            className="hover:text-[#DC833D] transition-colors flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button className="hover:text-[#DC833D] transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
