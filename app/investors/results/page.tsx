'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import ResultsTabs from '@/app/components/ResultsTabs';
import QuarterlyList from '@/app/components/QuarterlyList';
import SECFilingsTable from '@/app/components/SECFilingsTable';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { Rss, Mail, User, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
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

const quarterlyData: QuarterGroup[] = [
  {
    quarter: 'Q4',
    items: [
      { date: '2/19/26', title: 'Fourth Quarter 2025 Earnings Call', type: 'pdf', href: '#' },
      { date: '2/18/26', title: 'Fourth Quarter 2025 Supplemental Information', type: 'pdf', href: '#' },
      { date: '2/18/26', title: 'Fourth Quarter 2025 Earnings Highlights', type: 'pdf', href: '#' },
      { date: '2/18/26', title: 'Fourth Quarter 2025 Earnings Release', type: 'pdf', href: '#' },
      { date: '2/18/26', title: 'Fourth Quarter 2025 Presentation of Net Income to Adjusted EBITDA', type: 'pdf', href: '#' },
    ],
  },
  {
    quarter: 'Q3',
    items: [
      { date: '11/5/25', title: 'Third Quarter 2025 Earnings Highlights', type: 'pdf', href: '#' },
      { date: '11/5/25', title: 'Third Quarter 2025 Earnings Release', type: 'pdf', href: '#' },
      { date: '11/5/25', title: 'Third Quarter 2025 Supplemental Information', type: 'pdf', href: '#' },
    ],
  },
  {
    quarter: 'Q2',
    items: [
      { date: '8/6/25', title: 'Second Quarter 2025 Earnings Highlights', type: 'pdf', href: '#' },
      { date: '8/6/25', title: 'Second Quarter 2025 Earnings Release', type: 'pdf', href: '#' },
      { date: '8/6/25', title: 'Second Quarter 2025 Supplemental Information', type: 'pdf', href: '#' },
    ],
  },
  {
    quarter: 'Q1',
    items: [
      { date: '4/21/25', title: 'First Quarter 2025 Earnings Highlights', type: 'pdf', href: '#' },
      { date: '4/21/25', title: 'First Quarter 2025 Earnings Release', type: 'pdf', href: '#' },
      { date: '4/21/25', title: 'First Quarter 2025 Supplemental Information', type: 'pdf', href: '#' },
    ],
  },
];

const secFilingsData: QuarterGroup[] = [
  {
    quarter: '2026 Filings',
    items: [
      { date: '3/15/26', title: 'Form 8-K: Current Report', type: 'pdf', href: '#' },
      { date: '2/20/26', title: 'Form 10-K: Annual Report', type: 'pdf', href: '#' },
      { date: '1/12/26', title: 'Form 8-K: Current Report', type: 'pdf', href: '#' },
    ],
  },
];

const annualReportsData: QuarterGroup[] = [
  {
    quarter: 'Annual Materials',
    items: [
      { date: '2/20/26', title: '2025 Annual Report', type: 'pdf', href: '#' },
      { date: '3/10/25', title: '2024 Proxy Statement', type: 'pdf', href: '#' },
      { date: '2/22/25', title: '2024 Annual Report', type: 'pdf', href: '#' },
    ],
  },
];

import { Suspense } from 'react';

function FinancialReportsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('quarterly-results');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['sec-filings', 'annual-reports', 'quarterly-results'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const getContent = () => {
    switch (activeTab) {
      case 'sec-filings':
        return { title: 'SEC Filings', data: secFilingsData };
      case 'annual-reports':
        return { title: 'Annual Reports', data: annualReportsData };
      default:
        return { title: 'Quarterly Results', data: quarterlyData };
    }
  };

  const { title, data } = getContent();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/pool-img.jpg"
            alt="Financial Reports Hero"
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
        currentPage="Financial Reports" 
      />

      {/* Tabbed Navigation */}
      <ResultsTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-32">
        <div className="text-center mb-16">
          <motion.h1
            key={title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-[#1a2b4b] mb-12"
          >
            {title}
          </motion.h1>

          {activeTab === 'quarterly-results' && (
            <div className="inline-block relative">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1a2b4b]">
                2025 Earnings
              </span>
              <div className="w-full h-px bg-[#DC833D] mt-2" />
            </div>
          )}
        </div>

        {/* Dynamic List Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'sec-filings' ? (
              <SECFilingsTable />
            ) : (
              <QuarterlyList groups={data} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Utility Links Footer (Icons) */}
        <div className="mt-32 pt-16 border-t border-gray-100 flex justify-center items-center gap-12 md:gap-24 text-gray-400">
          <button className="flex flex-col items-center gap-2 group hover:text-[#1a2b4b] transition-colors">
            <Rss className="w-5 h-5 group-hover:text-[#DC833D] transition-colors" />
            <span className="text-[10px] font-bold tracking-widest uppercase">RSS Feeds</span>
          </button>
          <button className="flex flex-col items-center gap-2 group hover:text-[#1a2b4b] transition-colors">
            <Mail className="w-5 h-5 group-hover:text-[#DC833D] transition-colors" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Email Alerts</span>
          </button>
          <button className="flex flex-col items-center gap-2 group hover:text-[#1a2b4b] transition-colors">
            <User className="w-5 h-5 group-hover:text-[#DC833D] transition-colors" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Contacts</span>
          </button>
          <button className="flex flex-col items-center gap-2 group hover:text-[#1a2b4b] transition-colors">
            <Printer className="w-5 h-5 group-hover:text-[#DC833D] transition-colors" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Print Page</span>
          </button>
        </div>
      </section>

    </main>
  );
}

export default function FinancialReportsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-[#1a2b4b] font-quicksand">Loading...</div>}>
      <FinancialReportsContent />
    </Suspense>
  );
}
