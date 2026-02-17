'use client';

import Image from 'next/image';
import { Megaphone, Calendar, ChevronRight } from 'lucide-react';

export default function CorporateActionsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                    alt="Corporate Actions"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center space-y-4 px-4 animate-fade-in-up">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D]">Investor Relations</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white">Corporate Actions</h1>
                </div>
            </div>

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {/* News Feed / Timeline */}
                <div className="space-y-12">
                    {[
                        {
                            date: 'May 15, 2025',
                            category: 'Dividend',
                            title: 'Declaration of Final Dividend for the Year Ended 31st December 2024',
                            summary: 'The Board of Directors has recommended the payment of a final dividend of ₦1.50 per share...'
                        },
                        {
                            date: 'April 02, 2025',
                            category: 'General Meeting',
                            title: 'Notice of 35th Annual General Meeting',
                            summary: 'Notice is hereby given that the 35th Annual General Meeting of Abuja International Hotels will hold...'
                        },
                        {
                            date: 'February 28, 2025',
                            category: 'Board Meeting',
                            title: 'Notice of Board Meeting to Approve Audited Accounts',
                            summary: 'A meeting of the Board of Directors has been scheduled to consider and approve the audited financial statements...'
                        },
                        {
                            date: 'January 10, 2025',
                            category: 'Appointment',
                            title: 'Appointment of New Non-Executive Director',
                            summary: 'Abuja International Hotels is pleased to announce the appointment of Mrs. Ngozi Okonjo (fictional) to the Board...'
                        }
                    ].map((action, index) => (
                        <div key={index} className="group relative pl-8 border-l border-gray-200 dark:border-zinc-800 pb-12 last:pb-0">
                            {/* Timeline Dot */}
                            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-[#DC833D] group-hover:scale-150 transition-transform duration-300" />

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="space-y-4 max-w-2xl">
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="flex items-center text-gray-500">
                                            <Calendar className="w-3 h-3 mr-1" /> {action.date}
                                        </span>
                                        <span className="bg-[#DC833D]/10 text-[#DC833D] px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {action.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-serif text-black dark:text-white group-hover:text-[#DC833D] transition-colors cursor-pointer">
                                        {action.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {action.summary}
                                    </p>
                                    <button className="text-sm font-medium text-black dark:text-white flex items-center gap-1 hover:gap-2 transition-all group/btn">
                                        Read Announcement <ChevronRight className="w-4 h-4 text-[#DC833D]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subscription CTA */}
                <div className="mt-24 bg-[#FAFAFA] dark:bg-zinc-900 rounded-3xl p-12 text-center">
                    <Megaphone className="w-12 h-12 text-[#DC833D] mx-auto mb-6" />
                    <h3 className="text-2xl font-serif text-black dark:text-white mb-4">Stay Informed</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                        Sign up for email alerts to receive the latest corporate actions and financial news directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#DC833D] w-full"
                        />
                        <button className="bg-[#DC833D] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#b09360] transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
