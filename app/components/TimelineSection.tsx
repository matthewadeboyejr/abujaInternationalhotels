'use client';

import TimelineItem from './TimelineItem';

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    image?: string;
}

const timelineEvents: TimelineEvent[] = [
    {
        year: "2003",
        title: "The Beginning",
        description: "Abuja International Hotels came into existence to host the Commonwealth Head of Government Meeting (CHOGM), welcoming dignitaries from around the world.",
        image: "/reception-img.jpg"
    },
    {
        year: "2007",
        title: "A New Identity",
        description: "The hotel transitioned to fully indigenous management, rebranding as Nicon Luxury Abuja while maintaining its commitment to world-class hospitality.",
        image: "/nicon.jpg"
    },
    {
        year: "Present Day",
        title: "The Renaissance",
        description: "Today, we are undertaking a comprehensive modernization program to blend our rich history with contemporary luxury standards.",
        image: "/hero-img.jpg"
    }
];

export default function TimelineSection() {
    return (
        <section className="py-24 bg-[#FAFAFA] dark:bg-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#DC833D 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-4">
                        Our Journey
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-black dark:text-white">
                        A History of Excellence
                    </h3>
                </div>

                <div className="relative">
                    {/* Vertical Line for Mobile (Left aligned) and Desktop (Center aligned) handled in Item */}

                    <div className="space-y-0">
                        {timelineEvents.map((event, index) => (
                            <TimelineItem
                                key={index}
                                {...event}
                                isLeft={index % 2 === 0}
                                isLast={index === timelineEvents.length - 1}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-500 dark:text-gray-400 italic">
                        "Continuing to write our story, one guest at a time."
                    </p>
                </div>
            </div>
        </section>
    );
}
