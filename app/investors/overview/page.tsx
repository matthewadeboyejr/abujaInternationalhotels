'use client';

import Navbar from '@/app/components/Navbar';

import InvestorIntro from '@/app/components/InvestorIntro';
import InvestorGrid from '@/app/components/InvestorGrid';
import InvestorContact from '@/app/components/InvestorContact';
import UnrivaledQuality from '@/app/components/UnrivaledQuality';
import Footer from '@/app/components/Footer';
import KeyMaterialsSection from '@/app/components/KeyMaterialsSection';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function InvestorOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-img.jpg"
            alt="Investor Overview Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      <Breadcrumbs 
        items={[{ title: 'Home', href: '/' }]} 
        currentPage="Investor Relations" 
      />

      <InvestorIntro />
      <KeyMaterialsSection />

      {/* Fourth Quarter Earnings Call Banner (Specific to this page) */}
      <section className="bg-white py-12 md:py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#DC833D] uppercase">Live Webcast</span>
              <h3 className="text-xl md:text-2xl font-serif text-[#1a2b4b] group-hover:text-[#DC833D] transition-colors">
                Fourth Quarter 2025 Earnings Call on February 19, 2026
              </h3>
            </div>
            <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#1a2b4b]">
              Learn More
              <div className="w-8 h-[1px] bg-[#DC833D] group-hover:w-12 transition-all" />
            </div>
          </div>
        </div>
      </section>

      <InvestorGrid />
      <InvestorContact />
      <UnrivaledQuality />
    </main>
  );
}
