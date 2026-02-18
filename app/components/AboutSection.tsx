'use client';

import { Target, Eye, Lightbulb } from 'lucide-react';

export default function AboutSection() {
    const cards = [
        {
            title: "Vision",
            icon: Eye,
            description: "To maintain its status as a premier destination in Nigeria's capital by consistently delivering exceptional service and luxury."
        },
        {
            title: "Mission",
            icon: Target,
            description: "To exceed guests' expectations, providing unrivaled luxurious lodging and catering services."
        },
        {
            title: "Philosophy",
            icon: Lightbulb,
            description: "Operate with a strategy that blends it’s physical location advantage with a philosophy of relentless guest satisfaction, ensuring it remains a cornerstone of Abuja’s hospitality sector"
        }
    ];

    return (
        <section className="w-full bg-[#FAFAFA] dark:bg-zinc-900 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-4">
                        Who We Are
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-black dark:text-white max-w-3xl mx-auto leading-tight">
                        A cornerstone of Abuja's hospitality sector, redefining luxury and comfort.
                    </h3>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">

                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                                <card.icon className="w-8 h-8 text-[#DC833D]" strokeWidth={1.5} />
                            </div>

                            <h4 className="text-xl font-serif text-black dark:text-white mb-4">
                                {card.title}
                            </h4>

                            <div className="w-12 h-[1px] bg-[#DC833D]/30 mb-6 font-serif"></div>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
