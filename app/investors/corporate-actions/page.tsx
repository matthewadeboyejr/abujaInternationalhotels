'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rss, Mail, User, Printer, FileText } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';

interface CorporateAction {
  id: number;
  date: string;
  category: string;
  title: string;
  summary: string;
  content: string | null;
  link_url: string | null;
  created_at: string;
  updated_at: string;
}


export default function CorporateActionsPage() {
  const [corporateActions, setCorporateActions] = useState<CorporateAction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://abujainternationhotel.jubileesystem.com/api/corporate-actions');
        if (!response.ok) {
          throw new Error('Failed to fetch corporate actions');
        }
        const data: CorporateAction[] = await response.json();
        setCorporateActions(data);
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
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/pool-img.png"
            alt="Corporate Actions Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      <Breadcrumbs
        items={[
          { title: 'Home', href: '/' },
          { title: 'Investor Relations', href: '/investors/overview' }
        ]}
        currentPage="Corporate Action"
      />

      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-quicksand text-[#1a2b4b] mb-16">
          All Corporate Actions
        </h1>


        {/* News List */}
        <div className="max-w-4xl mx-auto text-left space-y-12 mb-32">
          <AnimatePresence mode="wait">
            {
              isLoading ? (
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
              ) :
                corporateActions.length > 0 ? (
                  corporateActions.map((action) => (
                    <motion.div
                      key={action.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="group relative border-b border-gray-100 pb-12 last:border-0"
                    >
                      <div className="flex justify-between items-start gap-8">
                        <div className="flex-1">
                          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-4">
                            {action.date} | {action.category}
                          </span>
                          <h3 className="text-lg md:text-xl font-sans text-[#1a2b4b] leading-relaxed mb-2">
                            {action.title}
                          </h3>
                          <p className="text-sm font-sans text-gray-500 mb-4 leading-relaxed line-clamp-2">
                            {action.summary}
                          </p>
                          <button className="text-[10px] font-bold tracking-widest text-[#DC833D] uppercase hover:underline">
                            Read More
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-20 text-gray-400 font-sans italic">
                    No corporate actions found for the selected filters.
                  </div>
                )}
          </AnimatePresence>
        </div>

        {/* Utility Icons */}
        <div className="pt-16 border-t border-gray-100 flex justify-center items-center gap-12 md:gap-24 text-gray-400">
          <button className="flex items-center gap-3 group hover:text-[#1a2b4b] transition-colors">
            <Rss className="w-4 h-4 group-hover:text-[#DC833D]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">RSS Feeds</span>
          </button>
          <button className="flex items-center gap-3 group hover:text-[#1a2b4b] transition-colors">
            <Mail className="w-4 h-4 group-hover:text-[#DC833D]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Email Alerts</span>
          </button>
          <button className="flex items-center gap-3 group hover:text-[#1a2b4b] transition-colors">
            <User className="w-4 h-4 group-hover:text-[#DC833D]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Contacts</span>
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-3 group hover:text-[#1a2b4b] transition-colors"
          >
            <Printer className="w-4 h-4 group-hover:text-[#DC833D]" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Print</span>
          </button>
        </div>
      </section>

      <InvestorMaterial />
    </main>
  );
}
