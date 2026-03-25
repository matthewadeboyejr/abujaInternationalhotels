'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rss, Mail, User, Printer, FileText } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';

interface PressRelease {
  id: string;
  date: string;
  title: string;
  hasPdf: boolean;
  category: string;
  year: string;
}

const pressReleases: PressRelease[] = [
  {
    id: '1',
    date: '2/19/2026',
    title: 'Abuja International Hotels Provides Updated Fourth Quarter 2025 Investor Presentation',
    hasPdf: false,
    category: 'Investor Presentation',
    year: '2026'
  },
  {
    id: '2',
    date: '2/18/2026',
    title: 'Abuja International Hotels Announces Sale of the Luxury Residences at Jabi Lake Resort and the Serene Spa & Resort Village',
    hasPdf: true,
    category: 'Corporate News',
    year: '2026'
  },
  {
    id: '3',
    date: '2/18/2026',
    title: 'Abuja International Hotels, Inc. Reports Results for 2025',
    hasPdf: false,
    category: 'Financial Results',
    year: '2026'
  },
  {
    id: '4',
    date: '11/12/2025',
    title: 'Abuja International Hotels to Participate in Upcoming Investor Conferences',
    hasPdf: false,
    category: 'Events',
    year: '2025'
  },
  {
    id: '5',
    date: '10/28/2025',
    title: 'Abuja International Hotels Reports Third Quarter 2025 Results',
    hasPdf: true,
    category: 'Financial Results',
    year: '2025'
  }
];

export default function PressReleasesPage() {
  const [category, setCategory] = useState('- View All -');
  const [year, setYear] = useState('2026');
  const [filteredReleases, setFilteredReleases] = useState(pressReleases.filter(r => r.year === '2026'));

  const handleFilter = () => {
    let filtered = pressReleases;
    if (category !== '- View All -') {
      filtered = filtered.filter(r => r.category === category);
    }
    if (year !== 'All Years') {
      filtered = filtered.filter(r => r.year === year);
    }
    setFilteredReleases(filtered);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/pool-img.jpg"
            alt="Press Releases Hero"
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
        currentPage="Press Releases" 
      />

      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-quicksand text-[#1a2b4b] mb-16">
          All Press Releases
        </h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-20 bg-gray-50/50 p-8 rounded-sm">
          <div className="w-full md:w-64 text-left">
            <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">News Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#DC833D]"
            >
              <option>- View All -</option>
              <option>Financial Results</option>
              <option>Corporate News</option>
              <option>Investor Presentation</option>
              <option>Events</option>
            </select>
          </div>
          <div className="w-full md:w-64 text-left">
            <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Year</label>
            <select 
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full bg-white border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#DC833D]"
            >
              <option>All Years</option>
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
            </select>
          </div>
          <button 
            onClick={handleFilter}
            className="bg-white border-2 border-[#c4a062] text-[#c4a062] hover:bg-[#c4a062] hover:text-white px-12 py-3 text-[10px] font-bold tracking-widest uppercase transition-all duration-300"
          >
            Filter
          </button>
        </div>

        {/* News List */}
        <div className="max-w-4xl mx-auto text-left space-y-12 mb-32">
          <AnimatePresence mode="wait">
            {filteredReleases.length > 0 ? (
              filteredReleases.map((release) => (
                <motion.div 
                  key={release.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="group relative border-b border-gray-100 pb-12 last:border-0"
                >
                  <div className="flex justify-between items-start gap-8">
                    <div className="flex-1">
                      <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-4">
                        {release.date}
                      </span>
                      <h3 className="text-lg md:text-xl font-sans text-[#1a2b4b] leading-relaxed mb-4">
                        {release.title}
                      </h3>
                      <button className="text-[10px] font-bold tracking-widest text-[#DC833D] uppercase hover:underline">
                        Read More
                      </button>
                    </div>
                    {release.hasPdf && (
                      <div className="pt-2">
                        <FileText className="w-8 h-8 text-red-500/30 hover:text-red-500 transition-colors cursor-pointer" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 text-gray-400 font-sans italic">
                No press releases found for the selected filters.
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
