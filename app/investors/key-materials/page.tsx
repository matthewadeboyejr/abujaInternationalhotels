'use client';

import { X, FileText } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const quarterlyMaterials = [
  'Fourth Quarter 2025 Earnings Call',
  'Fourth Quarter 2025 Supplemental Information',
  'Fourth Quarter 2025 Earnings Highlights',
  'Fourth Quarter 2025 Earnings Release',
  'Fourth Quarter 2025 Presentation of Net Income to Adjusted EBITDA',
  'Fourth Quarter 2025 Investor Presentation'
];

const annualMaterials = [
  '2025 Annual Report'
];

export default function KeyMaterialsPage() {
  return (
    <main className="min-h-screen bg-[#1a2b4b] text-white selection:bg-[#DC833D] selection:text-white">
      {/* Background Decor (Faded Image) */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="/pool-img.jpg" 
          alt="Abstract Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Close Button */}
      <Link 
        href="/investors/overview" 
        className="fixed top-8 right-8 md:top-12 md:right-12 z-50 p-2 hover:bg-white/10 rounded-full transition-all duration-300 group"
      >
        <X className="w-8 h-8 text-white/50 group-hover:text-white group-hover:rotate-90 transition-transform" />
      </Link>

      {/* Header Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="w-12 h-1 bg-[#DC833D] mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-quicksand font-light tracking-tight mb-8">
            Key Investor Materials
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-400 font-sans leading-relaxed">
            Download Abuja International Hotels's recent quarterly results, annual materials and corporate responsibility disclosures.
          </p>
        </motion.div>

        {/* Materials List */}
        <div className="space-y-24 text-left">
          {/* Quarterly Results */}
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-[#DC833D] uppercase mb-10 border-b border-white/10 pb-4">
              Quarterly Results
            </h2>
            <div className="space-y-6">
              {quarterlyMaterials.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 hover:border-[#DC833D]/30 transition-colors">
                  <span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors font-sans">
                    {item}
                  </span>
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-[#DC833D] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                    <span>View PDF</span>
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annual Materials */}
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-[#DC833D] uppercase mb-10 border-b border-white/10 pb-4">
              Annual Materials
            </h2>
            <div className="space-y-6">
              {annualMaterials.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 hover:border-[#DC833D]/30 transition-colors">
                  <span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors font-sans">
                    {item}
                  </span>
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-[#DC833D] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                    <span>View PDF</span>
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-32 pt-12 border-t border-white/10 text-[10px] tracking-widest text-white/30 uppercase font-bold text-center">
          © {new Date().getFullYear()} Abuja International Hotels, Inc. All Rights Reserved.
        </div>
      </div>
    </main>
  );
}
