'use client';

import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import CorporateGovernanceSection from '@/app/components/CorporateGovernanceSection';
import InvestorMaterial from '@/app/components/InvestorMaterial';

export default function CorporateGovernancePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/reception-img.jpg"
                        alt="Corporate Governance Hero"
                        className="w-full h-full object-cover text-white"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { title: 'Home', href: '/' },
                    { title: 'Our Company', href: '/about/overview' }
                ]}
                currentPage="Corporate Governance"
            />

            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-quicksand text-[#1a2b4b] mb-4 uppercase tracking-tight">
                    Corporate Governance
                </h1>
                <p className="max-w-3xl mx-auto text-sm md:text-base font-light text-gray-600">
                    We are committed to diligently overseeing and managing all affairs within our company.
                </p>
            </section>

            {/* Main Content */}
            <CorporateGovernanceSection />
            <InvestorMaterial />
        </main>
    );
}
