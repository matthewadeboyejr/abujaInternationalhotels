'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface GridItemProps {
  title: string;
  description: string;
  href: string;
}

const GridItem = ({ title, description, href }: GridItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col group h-full"
  >
    <h3 className="text-xl md:text-2xl font-quicksand text-[#1a2b4b]  mb-4 group-hover:text-[#DC833D] transition-colors">
      {title}
      <div className="w-20 h-[2px] bg-[#DC833D]/70 mt-2" />
    </h3>
    <p className="text-sm md:text-base text-[#1a2b4b]/70 font-sans leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <Link
      href={href}
      className="inline-flex items-center text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#1a2b4b] group/link"
    >
      Learn More
      <ArrowRight className="ml-2 w-4 h-4 text-[#DC833D] group-hover/link:translate-x-1 transition-transform" />
    </Link>
  </motion.div>
);

export default function InvestorGrid() {
  const topGrid = [
    {
      title: 'Quarterly Results',
      description: 'View and download our most recent quarterly earnings materials, including press releases and presentations.',
      href: '/investors/results?tab=quarterly-results',
    },

    {
      title: 'Annual Reports',
      description: 'View and download our most recent and archived annual reports and proxy statements.',
      href: '/investors/results?tab=annual-reports',
    },
    {
      title: 'Stock Information',
      description: 'Current and historical stock quotes, interactive charts, and dividend information.',
      href: '/investors/stock-information',
    },
  ];

  const bottomGrid = [
    {
      title: 'Stock Information',
      description: 'Current and historical stock quotes, interactive charts, and dividend information.',
      href: '/investors/stock-information',
    },
    /*  {
       title: 'Investor FAQs',
       description: 'Answers to commonly asked questions from our investors and analysts.',
       href: '/investors/faqs',
     }, */
  ];

  return (
    <section className="bg-[#ECE08F]/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Grid: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24  py-24 ">
          {topGrid.map((item, idx) => (
            <GridItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
