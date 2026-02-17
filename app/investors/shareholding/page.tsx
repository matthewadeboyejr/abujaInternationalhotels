'use client';

import Image from 'next/image';
import { PieChart, Users, Building2, Briefcase } from 'lucide-react';

export default function ShareholdingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2573&auto=format&fit=crop"
                    alt="Shareholding"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center space-y-4 px-4 animate-fade-in-up">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D]">Investor Relations</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white">Shareholding</h1>
                </div>
            </div>

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                {/* Capital Structure Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-[#FAFAFA] dark:bg-zinc-900 p-10 rounded-3xl border border-transparent hover:border-[#DC833D]/20 transition-all text-center">
                        <div className="w-16 h-16 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-[#DC833D]">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-serif text-gray-500 mb-2">Authorized Share Capital</h3>
                        <p className="text-4xl md:text-5xl font-bold text-black dark:text-white">₦5,000,000,000</p>
                        <p className="text-sm text-gray-400 mt-4">Divided into 10 Billion Ordinary Shares of 50k each</p>
                    </div>

                    <div className="bg-[#FAFAFA] dark:bg-zinc-900 p-10 rounded-3xl border border-transparent hover:border-[#DC833D]/20 transition-all text-center">
                        <div className="w-16 h-16 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-[#DC833D]">
                            <PieChart className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-serif text-gray-500 mb-2">Issued Share Capital</h3>
                        <p className="text-4xl md:text-5xl font-bold text-black dark:text-white">₦3,500,000,000</p>
                        <p className="text-sm text-gray-400 mt-4">7 Billion Ordinary Shares of 50k each fully paid</p>
                    </div>
                </div>

                {/* Major Shareholders Table */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Users className="w-6 h-6 text-[#DC833D]" />
                        <h2 className="text-2xl font-serif text-black dark:text-white">Major Shareholders (Above 5%)</h2>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-zinc-800">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-zinc-900 text-sm uppercase tracking-wider text-gray-500">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Name of Shareholder</th>
                                    <th className="px-6 py-4 font-medium text-right">Units Held</th>
                                    <th className="px-6 py-4 font-medium text-right">Percentage (%)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                                <tr className="bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-black dark:text-white">Ministry of Finance Incorporated (MOFI)</td>
                                    <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-400">3,150,000,000</td>
                                    <td className="px-6 py-4 text-right font-bold text-[#DC833D]">45.00%</td>
                                </tr>
                                <tr className="bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-black dark:text-white">Abuja Investment Company Ltd</td>
                                    <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-400">2,100,000,000</td>
                                    <td className="px-6 py-4 text-right font-bold text-[#DC833D]">30.00%</td>
                                </tr>
                                <tr className="bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-black dark:text-white">Other Institutional Investors</td>
                                    <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-400">1,050,000,000</td>
                                    <td className="px-6 py-4 text-right font-bold text-[#DC833D]">15.00%</td>
                                </tr>
                                <tr className="bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-black dark:text-white">General Public</td>
                                    <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-400">700,000,000</td>
                                    <td className="px-6 py-4 text-right font-bold text-[#DC833D]">10.00%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Registrar Info */}
                <div className="bg-white dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                    <div className="w-16 h-16 bg-[#FDFBF7] dark:bg-zinc-900 rounded-full flex items-center justify-center text-[#DC833D] shrink-0">
                        <Building2 className="w-8 h-8" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-lg font-serif text-black dark:text-white mb-2">Company Registrar</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                            All correspondence regarding share certificates, dividend warrants, and change of address should be directed to our Registrars:
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="font-bold text-black dark:text-white">Africa Prudential Registrars Plc</p>
                        <p className="text-sm text-gray-500">220B, Ikorodu Road, Palmgrove, Lagos.</p>
                        <a href="mailto:info@africaprudential.com" className="text-sm text-[#DC833D] hover:underline mt-1 block">info@africaprudential.com</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
