'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import ResultsTabs from '@/app/components/ResultsTabs';
import QuarterlyList from '@/app/components/QuarterlyList';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { Rss, Mail, User, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
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

interface FinancialReport {
  id: number;
  period: string;
  type: 'annual' | 'quarterly';
  title: string;
  subtitle: string | null;
  file_url: string;
  download_url: string;
  created_at: string;
}



import { Suspense } from 'react';

function FinancialReportsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('quarterly-results');
  const [reports, setReports] = useState<FinancialReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://abujainternationhotel.jubileesystem.com/api/financial-reports');
        if (!response.ok) {
          throw new Error('Failed to fetch financial reports');
        }
        const data: FinancialReport[] = await response.json();
        setReports(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching reports:', err);
        setError('Unable to load financial reports. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();

    const tab = searchParams.get('tab');
    if (tab && ['annual-reports', 'quarterly-results'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const transformToGroups = (items: FinancialReport[]): QuarterGroup[] => {
    // If it's annual reports, group them under a single title
    if (activeTab === 'annual-reports') {
      return [{
        quarter: 'Annual Materials',
        items: items.map(report => ({
          date: new Date(report.created_at).toLocaleDateString(),
          title: report.title,
          type: 'pdf',
          href: report.download_url
        }))
      }];
    }

    // For quarterly results, group by period (e.g., Q4 2025)
    const groups: { [key: string]: FilingItem[] } = {};
    items.forEach(report => {
      const groupKey = report.period;
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push({
        date: new Date(report.created_at).toLocaleDateString(),
        title: report.title,
        type: 'pdf',
        href: report.download_url
      });
    });

    return Object.entries(groups).map(([quarter, items]) => ({
      quarter,
      items
    })).sort((a, b) => b.quarter.localeCompare(a.quarter));
  };

  const getContent = () => {
    const annualReports = reports.filter(r => r.type === 'annual');
    const quarterlyReports = reports.filter(r => r.type === 'quarterly');

    switch (activeTab) {

      case 'annual-reports':
        return { title: 'Annual Reports', data: transformToGroups(annualReports) };
      default:
        return { title: 'Quarterly Results', data: transformToGroups(quarterlyReports) };
    }
  };

  const { title, data } = getContent();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pool-img.png"
            alt="Financial Reports Hero"
            fill
            className="object-cover"
            priority
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
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <QuarterlyList groups={data} />
            </motion.div>
          )}
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
