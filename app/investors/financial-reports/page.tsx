'use client';

import Image from 'next/image';
import { FileText, Download, TrendingUp, BarChart3 } from 'lucide-react';

export default function FinancialReportsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2626&auto=format&fit=crop"
                    alt="Financial Reports"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center space-y-4 px-4 animate-fade-in-up">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D]">Investor Relations</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white">Financial Reports</h1>
                </div>
            </div>

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content - Reports */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Annual Reports */}
                        <div>
                            <h2 className="text-2xl font-serif text-black dark:text-white mb-8 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-[#DC833D]" />
                                Annual Reports
                            </h2>
                            <div className="space-y-4">
                                {[2024, 2023, 2022].map((year) => (
                                    <div key={year} className="group bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl flex items-center justify-between hover:shadow-md transition-all border border-transparent hover:border-[#DC833D]/30">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center text-[#DC833D] font-bold shadow-sm">
                                                {year}
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-black dark:text-white">Annual Report & Accounts</h3>
                                                <p className="text-sm text-gray-500">Year Ended 31st December {year}</p>
                                            </div>
                                        </div>
                                        <button className="flex items-center gap-2 text-sm font-medium text-[#DC833D] group-hover:text-[#b09360] transition-colors">
                                            <Download className="w-4 h-4" />
                                            <span>PDF</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quarterly Results */}
                        <div>
                            <h2 className="text-2xl font-serif text-black dark:text-white mb-8 flex items-center gap-3">
                                <BarChart3 className="w-6 h-6 text-[#DC833D]" />
                                Quarterly Results
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Q4 2024', 'Q3 2024', 'Q2 2024', 'Q1 2024'].map((quarter) => (
                                    <div key={quarter} className="group bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl border border-transparent hover:border-[#DC833D]/30 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">{quarter}</span>
                                            <FileText className="w-5 h-5 text-gray-300 group-hover:text-[#DC833D] transition-colors" />
                                        </div>
                                        <h3 className="font-medium text-black dark:text-white mb-4">Unaudited Financial Results</h3>
                                        <button className="text-sm text-[#DC833D] hover:underline flex items-center gap-1">
                                            Download Statement <Download className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Key Figures (Mock) */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#FAFAFA] dark:bg-zinc-900 p-8 rounded-2xl sticky top-32">
                            <h3 className="text-lg font-serif text-black dark:text-white mb-6">Key Financial Highlights</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Revenue Growth</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-[#DC833D]">+15%</span>
                                        <span className="text-xs text-green-600 flex items-center bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                                            <TrendingUp className="w-3 h-3 mr-1" /> YoY
                                        </span>
                                    </div>
                                </div>
                                <div className="h-px bg-gray-200 dark:bg-zinc-800" />
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">EBITDA Margin</p>
                                    <span className="text-3xl font-bold text-black dark:text-white">28.4%</span>
                                </div>
                                <div className="h-px bg-gray-200 dark:bg-zinc-800" />
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Earnings Per Share</p>
                                    <span className="text-3xl font-bold text-black dark:text-white">₦4.50</span>
                                </div>

                                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-zinc-800">
                                    <p className="text-xs text-gray-400 italic">
                                        *Figures are for illustrative purposes. Please refer to official reports for audited data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
