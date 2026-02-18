'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function KeyMaterialsSection() {
    return (
        <section className="relative h-[600px] flex items-center justify-center py-20 overflow-hidden">
            {/* Background Image with Overlay and Fades */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Top Fade */}
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white dark:from-black to-transparent z-20" />
                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white dark:from-black to-transparent z-20" />

                <Image
                    src="/pool-img.jpg" // Using an existing sophisticated image
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Floating Card Content */}
            <div className="relative z-20 w-full max-w-4xl mx-4">
                <div className="bg-[#1A1A1A] dark:bg-black text-white p-12 md:p-20 text-center shadow-2xl relative">

                    {/* Title */}
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">
                        Key Investor Materials
                    </h2>

                    {/* Divider */}
                    <div className="w-24 h-0.5 bg-[#DC833D] mx-auto mb-8" />

                    {/* Description */}
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                        Download Abuja International Hotels's recent quarterly results, annual materials and corporate responsibility disclosures.
                    </p>

                    {/* Floating Action Button - Positioned to overlap the bottom edge */}
                    <div className="absolute left-1/2 -bottom-8 -translate-x-1/2">
                        <Link
                            href="/investors/financial-reports"
                            className="group flex flex-col items-center justify-center w-32 h-32 bg-[#DC833D] rounded-sm hover:bg-[#c97432] transition-colors shadow-lg"
                        >
                            <span className="text-xs font-bold tracking-[0.2em] mb-2">DETAILS</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </div>

        </section>
    );
}
