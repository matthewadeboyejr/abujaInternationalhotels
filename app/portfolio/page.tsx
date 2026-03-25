'use client';

import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const portfolioItems = [
    {
        title: "Luxury Accommodations",
        description: "Experience unparalleled comfort in our meticulously designed rooms and suites. Each space reflects a perfect harmony of contemporary elegance and timeless Nigerian hospitality, offering panoramic views of the city skyline or our lush private gardens.",
        image: "/logde-img.jpg",
        linkText: "Explore Rooms",
        linkHref: "#"
    },
    {
        title: "Culinary Excellence",
        description: "Embark on a gastronomic journey at our award-winning restaurants. From authentic local delicacies to masterful international cuisine, our master chefs curate extraordinary dining experiences that cater to the most discerning palates.",
        image: "/fine-img.jpg",
        linkText: "Discover Dining",
        linkHref: "#"
    },
    {
        title: "Business & Events",
        description: "Host unforgettable gatherings in our majestic ballrooms and state-of-the-art conference facilities. With flawless service, cutting-edge technology, and bespoke catering, we transform every corporate event and celebration into a resounding success.",
        image: "/conference-img.jpg",
        linkText: "Plan an Event",
        linkHref: "#"
    },
    {
        title: "Wellness & Recreation",
        description: "Rejuvenate your mind, body, and soul at our exclusive wellness sanctuary. Featuring a fully equipped fitness suite, a luxurious shimmering pool, and a tranquil spa offering holistic treatments designed for ultimate relaxation.",
        image: "/spa-img.jpg",
        linkText: "Explore Wellness",
        linkHref: "#"
    }
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/nicon.jpg"
                        alt="Our Portfolio at Abuja International Hotels"
                        className="w-full h-full object-cover text-white"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-20 text-center px-4">
                    <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-[#DC833D] mb-4">Discover Perfection</p>
                    <h1 className="text-4xl md:text-6xl font-quicksand text-white uppercase tracking-tight">
                        Our Portfolio
                    </h1>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { title: 'Home', href: '/' }
                ]}
                currentPage="Our Portfolio"
            />

            {/* Introduction */}
            <section className="max-w-4xl mx-auto px-6 md:px-12 pt-24 pb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] mb-8 uppercase tracking-tight">
                    The Pinnacle of Luxury
                </h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                    Explore the distinct pillars of the Abuja International Hotels experience. Every corner of our property is thoughtfully crafted to deliver an unforgettable fusion of sophistication, comfort, and world-class service.
                </p>
            </section>

            {/* Portfolio Grid Layout */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className={`flex flex-col gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                            {/* Image Container */}
                            <div className="w-full md:w-1/2 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-[#DC833D]/20 transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                                <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-100 shadow-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 lg:px-8">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="h-[1px] w-12 bg-[#DC833D]"></div>
                                    <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#DC833D]">Feature {index + 1}</span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 font-light text-lg leading-relaxed pt-4">
                                    {item.description}
                                </p>
                                <div className="pt-8">
                                    <Link href={item.linkHref} className="inline-flex items-center gap-3 text-sm font-bold tracking-widest text-[#1a2b4b] uppercase border-b border-[#1a2b4b] pb-2 hover:text-[#DC833D] hover:border-[#DC833D] transition-colors group">
                                        {item.linkText}
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Spacing before footer */}
            <div className="h-24"></div>

            <InvestorMaterial />
        </main>
    );
}
