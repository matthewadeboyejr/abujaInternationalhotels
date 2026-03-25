'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Rss, Mail, User, Printer } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: 'GENERAL',
    items: [
      {
        question: 'WHERE IS ABUJA INTERNATIONAL HOTELS, INC. LOCATED?',
        answer: (
          <div className="space-y-4">
            <p>Our corporate headquarters is located at the following address:</p>
            <p className="font-bold text-[#1a2b4b]">
              Abuja International Hotels, Inc.<br />
              123 Luxury Way, Central Business District<br />
              Abuja, Nigeria
            </p>
          </div>
        )
      },
      {
        question: 'WHAT DOES ABUJA INTERNATIONAL HOTELS, INC. DO?',
        answer: 'Abuja International Hotels, Inc. is a leading luxury hospitality group, owning and operating a geographically diverse portfolio of iconic and irreplaceable assets in prime metropolitan and resort markets across Nigeria and beyond.'
      },
      {
        question: 'WHAT IS ABUJA INTERNATIONAL HOTELS, INC. COMMON STOCK TICKER SYMBOL AND WHAT ARE THE CUSIP NUMBERS FOR ITS COMMON STOCK?',
        answer: 'Abuja International Hotels, Inc.\'s common stock ticker symbol is AIH and shares are traded on the Nigerian Stock Exchange. The CUSIP number for the company\'s common stock is 12345U 10 1.'
      }
    ]
  },
  {
    title: 'COMPANY INQUIRIES',
    items: [
      {
        question: 'WHERE CAN I GET THE LATEST CORPORATE NEWS RELEASES AND FINANCIAL REPORTS?',
        answer: (
          <p>
            The company\'s news releases can be found on our website on the <a href="/investors/press-releases" className="text-[#DC833D] hover:underline font-bold">Press Releases</a> page.
          </p>
        )
      },
      {
        question: 'HOW CAN I VIEW DOCUMENTS ABUJA INTERNATIONAL HOTELS, INC. HAS FILED WITH THE SECURITIES & EXCHANGE COMMISSION (SEC)?',
        answer: (
          <p>
            The company\'s filings can be found on our website on the <a href="/investors/results?tab=sec-filings" className="text-[#DC833D] hover:underline font-bold">SEC Filings</a> page.
          </p>
        )
      },
      {
        question: 'HOW CAN I GET MORE INFORMATION ABOUT ABUJA INTERNATIONAL HOTELS, INC. SUCH AS AN INVESTOR INFORMATION PACKET?',
        answer: (
          <p>
            Please visit the <a href="/investors/overview" className="text-[#DC833D] hover:underline font-bold">Investor Relations</a> section for downloadable investor information including the most recent earnings press release, annual report, corporate responsibility report and investor presentation.
          </p>
        )
      }
    ]
  },
  {
    title: 'DIVIDEND INFORMATION',
    items: [
      {
        question: 'PLEASE PROVIDE DETAIL ON THE DIVIDEND HISTORY OF ABUJA INTERNATIONAL HOTELS, INC.',
        answer: 'Details regarding our dividend history can be found in the Stock Information section of our website.'
      },
      {
        question: 'DOES ABUJA INTERNATIONAL HOTELS, INC. HAVE A DIVIDEND REINVESTMENT PROGRAM?',
        answer: 'At this time, Abuja International Hotels, Inc. does not offer a direct dividend reinvestment program (DRIP).'
      }
    ]
  },
  {
    title: 'TRANSFER AGENT',
    items: [
      {
        question: 'WHOM SHOULD I CONTACT ABOUT MY STOCKHOLDER ACCOUNT?',
        answer: 'Stockholders of record should contact our transfer agent, Africa Prudential, for matters related to their account holdings.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/pool-img.jpg"
            alt="FAQ Hero"
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
        currentPage="FAQs" 
      />

      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-quicksand text-[#1a2b4b] mb-20 uppercase tracking-tight">
          Investor FAQs
        </h1>

        <div className="max-w-4xl mx-auto text-left space-y-20">
          {faqData.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-8 border-b border-gray-100 pb-4">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = openItems.includes(id);
                  return (
                    <div key={itemIdx} className="border border-gray-100 rounded-sm">
                      <button 
                        onClick={() => toggleItem(id)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left group transition-colors hover:bg-gray-50/50"
                      >
                        <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#1a2b4b] uppercase pr-8">
                          {item.question}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-[#DC833D] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 text-sm md:text-base text-gray-500 font-sans leading-relaxed border-t border-gray-50">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Utility Icons */}
        <div className="mt-32 pt-16 border-t border-gray-100 flex justify-center items-center gap-12 md:gap-24 text-gray-400">
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
