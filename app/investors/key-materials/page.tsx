'use client';

import { X, FileText } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

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

export interface KeyMaterial {
  id: number,
  title: string,
  category: string,
  date: string,
  file_path: string,
  is_active: number,
  created_at: string,
  updated_at: string,
  file_url: string,
  download_url: string
}
export default function KeyMaterialsPage() {
  const [keyMaterial, setKeyMaterial] = useState<KeyMaterial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://abujainternationhotel.jubileesystem.com/api/key-materials');
        if (!response.ok) {
          throw new Error('Failed to fetch financial reports');
        }
        const data: KeyMaterial[] = await response.json();
        setKeyMaterial(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching reports:', err);
        setError('Unable to load Key Material. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterial();


  }, []);


  return (
    <main className="min-h-screen bg-[#1a2b4b] text-white selection:bg-[#DC833D] selection:text-white">
      {/* Background Decor (Faded Image) */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src="/pool-img.png"
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
              Material Results
            </h2>
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 space-y-4"
                >
                  <div className="w-12 h-12 border-t-2 border-b-2 border-[#DC833D] rounded-full animate-spin" />
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Loading Reports...</p>
                </motion.div>
              ) : error ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <p className="text-red-500 mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-[#DC833D] text-[10px] font-bold tracking-[0.2em] uppercase hover:underline"
                  >
                    Retry
                  </button>
                </motion.div>
              ) : (

                <div className="space-y-6">
                  {keyMaterial.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 hover:border-[#DC833D]/30 transition-colors">
                      <span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors font-sans">
                        {item.title}
                      </span>
                      <a
                        href={item?.download_url || item?.file_url}
                        className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-[#DC833D] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                        <span>View PDF</span>
                        <FileText className="w-5 h-5" />
                      </a>
                    </div>
                  ))}
                </div>)}
            </AnimatePresence>
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
