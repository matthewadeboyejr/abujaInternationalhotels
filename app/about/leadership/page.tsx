'use client';

import Image from 'next/image';
import Link from 'next/link';
import { directors } from '@/app/data/directors';

export default function LeadershipPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                    alt="Leadership Meeting"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center space-y-4 px-4 animate-fade-in-up">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D]">Our Governance</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white">Leadership & Board</h1>
                </div>
            </div>

            {/* Board Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-4">
                        Board of Directors
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif text-black dark:text-white max-w-2xl mx-auto">
                        Guiding Abuja International Hotels with Vision and Integrity
                    </h3>
                </div>

                {/* Profiles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {/* Items from Data Source */}
                    {directors.map((director) => (
                        <Link href={`/about/leadership/${director.id}`} key={director.id} className="group block">
                            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100 dark:bg-zinc-900 rounded-lg group-hover:shadow-xl transition-all duration-300">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="text-lg">Photo To Be Provided</span>
                                </div>
                                {/* Placeholder for actual image */}
                                {/* <Image src={director.image || '...'} alt={director.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="px-6 py-2 bg-white/90 text-black text-sm font-bold tracking-widest uppercase rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Profile
                                    </span>
                                </div>
                            </div>
                            <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                                <h4 className="text-xl font-serif text-black dark:text-white mb-2 group-hover:text-[#DC833D] transition-colors">{director.name}</h4>
                                <p className="text-sm text-[#DC833D] font-medium uppercase tracking-wide">{director.title}</p>
                                <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                                    {director.summary}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Governance Structure Section */}
                <div className="mt-24 space-y-8 max-w-4xl mx-auto text-center">
                    <div className="w-16 h-1 bg-[#DC833D] mx-auto mb-8" />
                    <h4 className="text-3xl font-serif text-black dark:text-white">Governance Structure</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                        We adhere to a strict corporate governance framework designed to ensure accountability, fairness, and transparency in our relationship with all stakeholders.
                        Our governance structure is aligned with best practices for regulated firms, ensuring robust oversight and strategic direction.
                    </p>
                    <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                        (Detailed Governance Structure to be provided)
                    </p>
                </div>

                {/* Management Section / Note */}
                <div className="mt-32 bg-[#FAFAFA] dark:bg-zinc-900 p-12 rounded-3xl text-center">
                    <h4 className="text-2xl font-serif text-black dark:text-white mb-6">Executive Management</h4>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Our day-to-day operations are led by a team of experienced hospitality professionals dedicated to delivering the Abuja International Hotels promise.
                        <br />
                        <span className="italic text-sm mt-4 block text-gray-500">(Full profiles to be updated)</span>
                    </p>
                </div>
            </section>
        </div>
    );
}
