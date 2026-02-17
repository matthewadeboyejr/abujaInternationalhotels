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
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using existing image as placeholder
    },
    {
        year: "2010",
        title: "Expansion & Renovation",
        description: "A major renovation project updated our facilities to meet modern luxury standards, adding our signature pool and conference centers.",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using existing image as placeholder
    },
    {
        year: "2018",
        title: "Award-Winning Service",
        description: "Recognized as the premier destination in the Federal Capital Territory, winning multiple hospitality awards for excellence in service.",
    },
    {
        year: "Present Day",
        title: "A Contemporary Icon",
        description: "Today, we remain the cornerstone of Abuja's hospitality, offering a perfect blend of traditional Nigerian warmth and world-class luxury.",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
