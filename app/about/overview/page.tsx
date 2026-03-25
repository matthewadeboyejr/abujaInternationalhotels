'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield, Rocket, Globe, Building2, UserCheck } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';

const strategicPillars = [
  {
    title: 'Geographically Diverse Portfolio',
    description: 'Our collection of iconic and irreplaceable assets is located in prime metropolitan and resort locations across Nigeria.',
    icon: Globe
  },
  {
    title: 'Irreplaceable Assets',
    description: 'Strategically acquired and maintained luxury assets with high barriers to entry and long-term value appreciation.',
    icon: Building2
  },
  {
    title: 'Industry-Leading Teams',
    description: 'Our properties are managed by some of the most recognized and prestigious brand names in the global hospitality industry.',
    icon: UserCheck
  }
];

const quickLinks = [
  {
    title: 'Our Leadership',
    description: 'Our executive team is comprised of highly experienced leaders from the hospitality, real estate, and finance sectors.',
    href: '/about/leadership'
  },
  {
    title: 'Corporate Governance',
    description: 'We are committed to the highest standards of integrity, transparency, and accountability in all our business practices.',
    href: '/about/governance'
  },
  {
    title: 'Our History',
    description: 'Relive the legacy and milestones that have shaped Abuja International Hotels into the premier hospitality group it is today.',
    href: '/about/history'
  }
];

const companyNews = [
  { date: 'FEB 19, 2026', title: 'Abuja International Hotels Named to Forbes "Best Employers" List for 2026' },
  { date: 'JAN 28, 2026', title: 'Abuja International Hotels Finalizes Acquisition of the Royal Palm Beach Resort' },
  { date: 'DEC 15, 2025', title: 'Abuja International Hotels Announces Record-Breaking Occupancy Rates for 2025 Holiday Season' }
];

export default function CompanyOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-img.jpg" // Abuja Skyline / Urban Landscape
            alt="Company Overview Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      <Breadcrumbs
        items={[
          { title: 'Home', href: '/' }
        ]}
        currentPage="Company Overview"
      />

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-quicksand text-[#1a2b4b] mb-12 uppercase tracking-tight"
        >
          Premier Hospitality Investment Group
        </motion.h1>
        <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-500 font-sans leading-relaxed mb-16">
          Abuja International Hotels, Inc. is a leading luxury hospitality group and the premier hotel owner in Nigeria. Our geographically diverse portfolio of iconic and irreplaceable assets in prime metropolitan and resort markets are managed by the world's most prestigious hospitality brands.
        </p>
      </section>

      {/* Strategic Pillars Section */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20 uppercase tracking-[0.2em] font-bold text-[#DC833D] text-[10px] md:text-xs">
            Our Foundation for Excellence
          </div>
          <p className="max-w-2xl mx-auto text-center font-serif text-2xl md:text-3xl text-[#1a2b4b] mb-20 leading-snug">
            We focus on three key strategic pillars that guide our property selection, management, and ultimate value creation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {strategicPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-8 text-[#DC833D] group-hover:bg-[#DC833D] group-hover:text-white transition-all duration-500 border border-gray-100">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-quicksand text-[#1a2b4b] mb-6 tracking-tight uppercase">{pillar.title}</h3>
                <div className="w-12 h-px bg-[#DC833D] mx-auto mb-6" />
                <p className="text-sm text-gray-400 font-sans leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="bg-[#1a2b4b] text-white px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#DC833D] transition-colors rounded-sm shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Culture Section (EPIC) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] mb-8 uppercase tracking-tight">Our Culture</h2>
            <p className="text-base md:text-lg text-gray-500 font-sans leading-relaxed mb-10">
              We focus on one mission: to be the premier hospitality group in the region by investing in irreplaceable assets and high-quality partners. Our culture is driven by a commitment to excellence, integrity, and sustainable growth.
            </p>
            <div className="space-y-4">
              {['Excellence in every interaction', 'Partnerships built on trust', 'Integrity as our foundation', 'Community engagement and impact'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-sm font-bold tracking-widest text-[#1a2b4b] uppercase">
                  <div className="w-6 h-px bg-[#DC833D]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-[#DC833D]/10 rounded-full blur-3xl group-hover:bg-[#DC833D]/20 transition-all" />
            <div className="relative aspect-square flex items-center justify-center">
              <div className="w-3/4 h-3/4 border-2 border-dashed border-[#DC833D]/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <div className="w-24 h-24 bg-[#1a2b4b] rounded-full flex items-center justify-center text-white font-serif text-3xl">AIH</div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1a2b4b]">
                <div className="absolute top-0 font-bold tracking-[0.4em] uppercase text-sm">Excellence</div>
                <div className="absolute right-0 font-bold tracking-[0.4em] uppercase text-sm -rotate-90 origin-right translate-x-12">Partnership</div>
                <div className="absolute bottom-0 font-bold tracking-[0.4em] uppercase text-sm">Integrity</div>
                <div className="absolute left-0 font-bold tracking-[0.4em] uppercase text-sm rotate-90 origin-left -translate-x-12">Community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {quickLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="group bg-white p-12 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#DC833D]/20 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 -mr-12 -mt-12 rounded-full group-hover:bg-[#DC833D]/10 transition-colors" />
                <h3 className="text-2xl font-serif text-[#1a2b4b] mb-6 group-hover:text-[#DC833D] transition-colors uppercase pt-4">{link.title}</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">{link.description}</p>
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-[#1a2b4b] uppercase group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="w-3 h-3 text-[#DC833D]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a2b4b] z-0" />
        <div className="relative z-10 max-w-4xl px-6">
          <h2 className="text-3xl md:text-5xl font-quicksand text-white mb-8 uppercase tracking-tight">Explore a Career with AIH</h2>
          <p className="text-sm md:text-lg text-gray-300 font-sans leading-relaxed mb-10">
            Our company culture and benefits provide an employee experience that is second-to-none. Join a team whose focus and goals can be summarized in three words: Best-in-Class.
          </p>
          <button className="bg-[#c4a062] hover:bg-[#b38f51] text-white px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase transition-all rounded-sm shadow-2xl">
            Learn More
          </button>
        </div>
      </section>

      {/* Company News Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <div className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-20 border-b border-gray-100 pb-4">
          Other Company News
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left">
          {companyNews.map((news, idx) => (
            <div key={idx} className="group cursor-pointer">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-4">{news.date}</span>
              <h3 className="text-lg font-sans text-[#1a2b4b] group-hover:text-[#DC833D] transition-colors leading-relaxed">
                {news.title}
              </h3>
            </div>
          ))}
        </div>

        <Link href="/press-releases" className="text-[10px] font-bold tracking-[0.3em] text-[#1a2b4b] uppercase border-b-2 border-[#DC833D] pb-1 hover:text-[#DC833D] transition-colors">
          View All news
        </Link>
      </section>

      {/* Property Spotlight */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0">
          <img
            src="/hero-img.jpg"
            alt="Feature Property"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-2xl mx-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-md p-12 md:p-20 text-center shadow-2xl relative"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-6 block">Featured Property</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a2b4b] mb-12 uppercase tracking-tight">The Imperial Abuja</h2>
            <div className="w-16 h-px bg-[#DC833D] mx-auto mb-12" />
            <p className="text-sm md:text-base text-gray-500 font-sans leading-relaxed mb-12">
              Discover the pinnacle of luxury in our geographically diverse portfolio of iconic and irreplaceable assets.
            </p>
            <button className="bg-[#1a2b4b] text-white px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#DC833D] transition-colors rounded-sm shadow-xl">
              Explore Our Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      <InvestorMaterial />
    </main>
  );
}
