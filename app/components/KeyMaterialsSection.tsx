'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pressReleases = [
    {
        date: 'February 19, 2026',
        title: 'Abuja International Hotels Provides Updated Fourth Quarter 2025 Investor Presentation',
        href: '/investors/press-releases/1',
    },
    {
        date: 'February 18, 2026',
        title: 'Abuja International Hotels, Inc. Reports Results for 2025',
        href: '/investors/press-releases/2',
    },
    {
        date: 'February 18, 2026',
        title: 'Abuja International Hotels Announces Expansion of Sustainable Luxury Initiative across Prime Locations',
        href: '/investors/press-releases/3',
    },
    {
        date: 'December 11, 2025',
        title: 'Abuja International Hotels Announces Fourth Quarter Dividend and Special Dividend on Common Stock',
        href: '/investors/press-releases/4',
    },
];

export default function KeyMaterialsSection() {
    return (
        <section className="bg-white">
            {/* Navy Investor Materials Card Area */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative overflow-visible">
                <div className="bg-[#1a2b4b] text-white p-12 md:p-20 text-center relative shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-10 tracking-tight">
                        Key Investor Materials
                    </h2>
                    <div className="w-24 h-px bg-[#DC833D] mx-auto mb-10" />
                    <p className="max-w-xl mx-auto text-sm md:text-base text-gray-300 font-sans leading-relaxed mb-8">
                        Download Abuja International Hotels's recent quarterly results, annual materials and corporate responsibility disclosures.
                    </p>

                    {/* Centered Overlapping Details Button */}
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-30">
                        <Link
                            href="/investors/key-materials"
                            className="bg-[#c4a062] hover:bg-[#b38f51] text-white px-8 py-6 md:px-12 md:py-8 flex flex-col items-center justify-center space-y-2 group transition-all duration-300 min-w-[140px] shadow-2xl"
                        >
                            <span className="text-[10px] md:text-xs font-bold font-quicksand tracking-[0.3em] uppercase">
                                Details
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Corporate Actions Section (Immediately Following) */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 ">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] text-center mb-16"
                >
                    Corporate Actions
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
                    {pressReleases.map((news, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer border-b border-[#DC833D]/30 pb-8"
                        >
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#DC833D] block mb-3">
                                {news.date}
                            </span>
                            <p className="text-sm md:text-base text-[#1a2b4b] font-sans leading-snug group-hover:text-[#DC833D] transition-colors line-clamp-2">
                                {news.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center pt-8 border-t border-[#DC833D]">
                    <Link
                        href="/investors/corporate-actions"
                        className="inline-flex items-center text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#1a2b4b] group"
                    >
                        View All <ArrowRight className="ml-3 w-4 h-4 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div >
        </section >
    );
}
