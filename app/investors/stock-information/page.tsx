'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';

const stockStats = [
  { label: 'CHANGE', value: '+0.00', accent: 'text-green-600' },
  { label: '% CHANGE', value: '+0.00%', accent: 'text-green-600' },
  { label: 'VOLUME', value: '0', accent: 'text-[#1a2b4b]' },
];

const secondaryStats = [
  { label: 'PREVIOUS CLOSE', value: '0.00' },
  { label: "TODAY'S OPEN", value: '0.00' },
  { label: 'INTRADAY HIGH', value: '0.00' },
  { label: 'INTRADAY LOW', value: '0.00' },
];

const resourceLinks = [
  { title: 'Stock Chart', description: 'Use the stock chart to review stock performance over time.', linkText: 'VIEW CHART', href: '#', icon: BarChart3 },
  { title: 'Historical Price', description: 'A tool for finding our past stock prices.', linkText: 'LEARN MORE', href: '#', icon: TrendingUp },
  { title: 'Dividends & Tax', description: 'Review past dividends and dividend tax information.', linkText: 'LEARN MORE', href: '#', icon: PieChart },
  { title: 'Trading Statistics', description: 'More information about our stock price the past year.', linkText: 'LEARN MORE', href: '#', icon: Activity },
];

export default function StockInformationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/pool-img.png"
            alt="Stock Information Hero"
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
        currentPage="Stock Information"
      />

      {/* Main Stock Summary */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-quicksand text-[#1a2b4b] mb-8"
        >
          Stock Information
        </motion.h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-500 font-sans mb-16">
          Review the latest stock performance, dividend trends, and tax information.
        </p>

        {/* Price Card */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-4">-</span>
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-8xl font-quicksand text-[#1a2b4b] font-light tracking-tight">0.00<span className="text-xl ml-2 uppercase text-gray-400 font-bold tracking-widest">USD</span></span>
              <span className="text-2xl md:text-3xl font-quicksand text-green-600 mt-2">+0.00 (0.00%)</span>
            </div>
          </div>

          {/* Key Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#DC833D] py-10 gap-8">
            {stockStats.map((stat, idx) => (
              <div key={idx} className={`flex flex-col items-center ${idx < 2 ? 'md:border-r border-[#DC833D]' : ''}`}>
                <span className={`text-2xl md:text-4xl font-quicksand ${stat.accent}`}>{stat.value}</span>
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-2">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Secondary Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 py-10 gap-8 text-center">
            {secondaryStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-lg md:text-xl font-quicksand text-[#1a2b4b]">{stat.value}</span>
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-gray-400 font-sans italic mt-4">
            Data Provided by AIH IR Service. Minimum 15 minutes delayed.
          </p>
        </div>
      </section>

      {/* Mock Chart Section */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 rounded-sm">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <span className="text-xs font-bold font-quicksand text-[#1a2b4b] tracking-widest">AIH HISTORICAL PERFORMANCE</span>
              <div className="flex gap-4 text-[10px] font-bold text-gray-400">
                <button className="hover:text-[#1a2b4b]">1D</button>
                <button className="hover:text-[#1a2b4b] text-[#1a2b4b]">5D</button>
                <button className="hover:text-[#1a2b4b]">1M</button>
                <button className="hover:text-[#1a2b4b]">3M</button>
                <button className="hover:text-[#1a2b4b]">1Y</button>
                <button className="hover:text-[#1a2b4b]">MAX</button>
              </div>
            </div>

            {/* SVG Area Chart */}
            <div className="h-[300px] md:h-[400px] w-full relative">
              <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c4a062" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#c4a062" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                {[0, 100, 200, 300, 400].map(y => (
                  <line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                ))}
                {/* Area */}
                <path
                  d="M0 350 L100 320 L200 360 L300 180 L400 360 L500 370 L600 310 L700 280 L800 260 L900 120 L1000 100 L1000 400 L0 400 Z"
                  fill="url(#gradient)"
                />
                {/* Line */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0 350 L100 320 L200 360 L300 180 L400 360 L500 370 L600 310 L700 280 L800 260 L900 120 L1000 100"
                  fill="none"
                  stroke="#c4a062"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {resourceLinks.map((link, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="mb-6">
                <link.icon className="w-8 h-8 text-[#DC833D] mb-4" />
                <h3 className="text-xl font-serif text-[#1a2b4b] mb-4 group-hover:text-[#DC833D] transition-colors">{link.title}</h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed mb-6 grow">{link.description}</p>
              </div>
              <Link
                href={link.href}
                className="text-[10px] font-bold tracking-widest text-[#1a2b4b] uppercase inline-flex items-center gap-2 group/link"
              >
                {link.linkText} <ArrowRight className="w-3 h-3 text-[#DC833D] group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Key Investor Materials Section (Scenic Background) */}
      <InvestorMaterial />

    </main>
  );
}
