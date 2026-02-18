'use client';

import Image from 'next/image';
import LeadershipSection from '../../components/LeadershipSection';
import KeyMaterialsSection from '../../components/KeyMaterialsSection';

export default function LeadershipPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src="/reception-img.jpg"
                    alt="Abuja International Hotels Exterior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center space-y-6 px-4 animate-fade-in-up">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D]">Our Governance</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white">Leadership & Governance</h1>
                </div>
            </div>

            {/* Main Content */}
            <LeadershipSection />

            {/* Key Materials Section */}
            <KeyMaterialsSection />
        </div>
    );
}
