'use client';

import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';
import { Target, Heart, TrendingUp, Users, ArrowRight } from 'lucide-react';

const benefits = [
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "We are committed to the professional development of our team members with clear advancement pathways and continuous training."
    },
    {
        icon: Heart,
        title: "Health & Wellbeing",
        description: "Comprehensive health coverage and wellness programs designed to support you and your family."
    },
    {
        icon: Users,
        title: "Dynamic Culture",
        description: "Join a diverse, inclusive team that values collaboration, respect, and mutual support in a fast-paced environment."
    }
];

const openPositions = [
    {
        title: "Guest Relations Manager",
        department: "Front Office",
        type: "Full-Time",
        location: "Abuja"
    },
    {
        title: "Executive Sous Chef",
        department: "Culinary",
        type: "Full-Time",
        location: "Abuja"
    },
    {
        title: "Director of Sales",
        department: "Sales & Marketing",
        type: "Full-Time",
        location: "Abuja"
    },
    {
        title: "Spa Therapist",
        department: "Wellness",
        type: "Part-Time",
        location: "Abuja"
    }
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/business-img.jpg"
                        alt="Careers at Abuja International Hotels"
                        className="w-full h-full object-cover text-white"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-20 text-center px-4">
                    <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-[#DC833D] mb-4">Join Us</p>
                    <h1 className="text-4xl md:text-6xl font-quicksand text-white uppercase tracking-tight mb-4">
                        Careers
                    </h1>
                </div>
            </section>

            <Breadcrumbs 
                items={[
                    { title: 'Home', href: '/' }
                ]} 
                currentPage="Careers" 
            />

            {/* Introduction */}
            <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 text-center">
                <h2 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] mb-8 uppercase tracking-tight">
                    Join Our Legacy of Excellence
                </h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                    At Abuja International Hotels, we believe that true luxury is defined by the people who deliver it. We are always looking for passionate, dedicated professionals who share our commitment to unrivaled hospitality. Whether you are beginning your journey or advancing your career, we provide an environment where your talents are nurtured and celebrated.
                </p>
            </section>

            {/* Why Work With Us */}
            <section className="bg-gray-50 py-24 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16">
                        <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D] mb-4">Benefits</p>
                        <h2 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] uppercase tracking-tight">Why Work With Us</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group">
                                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <benefit.icon className="w-8 h-8 text-[#DC833D]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-quicksand font-bold text-[#1a2b4b] mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 py-24">
                <div className="text-center mb-16">
                    <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D] mb-4">Opportunities</p>
                    <h2 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] uppercase tracking-tight">Current Openings</h2>
                </div>

                <div className="space-y-6">
                    {openPositions.map((job, idx) => (
                        <div key={idx} className="group border border-gray-200 rounded-sm p-6 md:p-8 hover:border-[#DC833D] transition-colors bg-white flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:shadow-md">
                            <div>
                                <h3 className="text-xl font-quicksand font-bold text-[#1a2b4b] mb-3 group-hover:text-[#DC833D] transition-colors">{job.title}</h3>
                                <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider text-gray-500 font-bold uppercase">
                                    <span className="bg-gray-50 px-3 py-1 rounded-sm border border-gray-100">{job.department}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                    <span>•</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>
                            <div>
                                <button className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#1a2b4b] border-2 border-[#1a2b4b] px-8 py-4 rounded hover:bg-[#1a2b4b] hover:text-white transition-all uppercase w-full md:w-auto justify-center">
                                    Apply Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 text-center text-gray-500 font-light text-sm">
                    <p>Don't see a role that fits? Send your resume to <a href="mailto:careers@abujainternationalhotels.com" className="text-[#DC833D] hover:underline font-bold">careers@abujainternationalhotels.com</a>.</p>
                </div>
            </section>

            <InvestorMaterial />
        </main>
    );
}
