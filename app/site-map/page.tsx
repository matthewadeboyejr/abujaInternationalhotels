'use client';

import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

const sitemapData = [
    {
        title: "Our Company",
        links: [
            { name: "Company Overview", href: "/about/overview" },
            { name: "Our History", href: "/about/history" },
            { name: "Leadership", href: "/about/leadership" },
            { name: "Corporate Governance", href: "/about/corporate-governance" },
            { name: "Photo Gallery", href: "/about/photo-gallery" },
            { name: "Careers", href: "/careers" }
        ]
    },
    {
        title: "Investor Relations",
        links: [
            { name: "Investor Overview", href: "/investors/overview" },
            { name: "Stock Information", href: "/investors/stock-information" },
            { name: "Key Investor Materials", href: "/investors/key-materials" },
            { name: "Corporate Responsibility", href: "/investors/corporate-responsibility" },
            { name: "Investor FAQs", href: "/investors/faqs" }
        ]
    },
    {
        title: "Legal & Support",
        links: [
            { name: "Contact Us", href: "/contact" },
            { name: "Terms of Use", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Sitemap", href: "/site-map" }
        ]
    }
];

export default function SitemapPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/nicon.jpg"
                        alt="Sitemap Hero"
                        className="w-full h-full object-cover text-white"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-quicksand text-white uppercase tracking-tight mb-4">
                        Sitemap
                    </h1>
                    <p className="text-sm md:text-base font-light text-gray-300 uppercase tracking-widest">
                        Navigate Abuja International Hotels
                    </p>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { title: 'Home', href: '/' }
                ]}
                currentPage="Sitemap"
            />

            <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {sitemapData.map((category, idx) => (
                        <div key={idx} className="space-y-6">
                            <h2 className="text-2xl font-quicksand font-bold text-[#1a2b4b] border-b border-gray-100 pb-4">
                                {category.title}
                            </h2>
                            <ul className="space-y-4">
                                {category.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-600 font-light hover:text-[#DC833D] transition-colors inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <InvestorMaterial />

        </main>
    );
}
