'use client';

import { Target, Eye, Lightbulb, Clock, Award, Shield } from 'lucide-react';
import Image from 'next/image';
import CommitmentSection from '../components/CommitmentSection';
import TimelineSection from '../components/TimelineSection';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">

            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Abuja International Hotels Exterior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center space-y-6 px-4 animate-fade-in-up">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D]">Discover Our Legacy</p>
                    <h1 className="text-5xl md:text-7xl font-serif text-white">Our Story</h1>
                </div>
            </div>

            {/* Company Overview & History Timeline */}
            <TimelineSection />

            {/* Strategy Section (Vision, Mission, Philosophy) */}
            <section className="bg-[#FAFAFA] dark:bg-zinc-900 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-4">
                            Our Strategy
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-black dark:text-white">
                            Driven by Excellence
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Vision */}
                        <div className="bg-white dark:bg-black p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto bg-[#FAFAFA] dark:bg-zinc-800 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Eye className="w-8 h-8 text-[#DC833D]" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-2xl font-serif text-black dark:text-white mb-6">Vision</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                To maintain its status as a premier destination in Nigeria's capital by consistently delivering exceptional service and luxury.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white dark:bg-black p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 group text-center relative transform md:-translate-y-4">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#DC833D]"></div>
                            <div className="w-16 h-16 mx-auto bg-[#FAFAFA] dark:bg-zinc-800 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-[#DC833D]" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-2xl font-serif text-black dark:text-white mb-6">Mission</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                To exceed guests' expectations, providing unrivaled luxurious lodging and catering services.
                            </p>
                        </div>

                        {/* Philosophy */}
                        <div className="bg-white dark:bg-black p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto bg-[#FAFAFA] dark:bg-zinc-800 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Lightbulb className="w-8 h-8 text-[#DC833D]" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-2xl font-serif text-black dark:text-white mb-6">Philosophy</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Abuja International Hotels operate with a strategy that blends its physical location advantage with a philosophy of relentless guest satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CommitmentSection />

        </div>
    );
}
