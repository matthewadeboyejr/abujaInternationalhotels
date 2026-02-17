'use client';

import { FileText, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function InvestorRelationsSection() {
    const reports = [
        { title: "2025 Third Quarter Results", date: "Oct 25, 2025" },
        { title: "2025 Interim Report", date: "Aug 15, 2025" },
        { title: "2024 Annual Report", date: "Mar 30, 2025" },
    ];

    return (
        <section className="w-full bg-white dark:bg-black py-24 border-t border-gray-100 dark:border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-4">
                                Corporate
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-serif text-black dark:text-white leading-tight mb-6">
                                Investor Relations
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                Abuja International Hotels Plc is committed to creating long-term value for our shareholders through transparent governance, strategic growth, and operational excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-[#FAFAFA] dark:bg-zinc-900 rounded-lg group hover:shadow-md transition-shadow cursor-pointer">
                                <TrendingUp className="w-8 h-8 text-[#DC833D] mb-4" />
                                <h4 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-[#DC833D] transition-colors">Financial Data</h4>
                                <p className="text-sm text-gray-500">Access our latest financial statements and key performance indicators.</p>
                            </div>
                            <div className="p-6 bg-[#FAFAFA] dark:bg-zinc-900 rounded-lg group hover:shadow-md transition-shadow cursor-pointer">
                                <Users className="w-8 h-8 text-[#DC833D] mb-4" />
                                <h4 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-[#DC833D] transition-colors">Governance</h4>
                                <p className="text-sm text-gray-500">Meet our Board of Directors and review our corporate policies.</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link href="/investors/financial-reports" className="inline-flex items-center text-black dark:text-white font-semibold hover:text-[#DC833D] transition-colors group">
                                Visit Investor Center <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Reports Side */}
                    <div className="bg-[#1C1C1C] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="text-2xl font-serif mb-8 border-b border-white/10 pb-4">Latest Reports</h4>

                            <div className="space-y-6">
                                {reports.map((report, index) => (
                                    <div key={index} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#DC833D] transition-colors">
                                                <FileText className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-lg group-hover:text-[#DC833D] transition-colors">{report.title}</p>
                                                <p className="text-sm text-gray-400">{report.date}</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#DC833D]" />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/10 text-center">
                                <button className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest font-semibold">
                                    View Archive
                                </button>
                            </div>
                        </div>

                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC833D] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
