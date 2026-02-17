'use client';

import {
    Building2,
    Users,
    Utensils,
    Trees,
    Activity,
    Briefcase
} from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: "lodging",
        title: "Luxury Lodging",
        description: "253 guestrooms from Classic to Presidential Suites. Privacy, comfort, and a 'home away from home' environment.",
        icon: Building2,
        benefits: ["Unique views of Aso rock and city skyline", "Private balconies"]
    },
    {
        id: "conference",
        title: "Conference & Events",
        description: "Over 900 sqm of event space including a conference hall. Seamless execution of high-profile events.",
        icon: Users,
        benefits: ["Direct, Secure pedestrian access to International conference centre"]
    },
    {
        id: "dining",
        title: "Fine Dining",
        description: "Restaurants serving Nigerian and International cuisines. High quality culinary experiences within a secure environment.",
        icon: Utensils,
        benefits: ["Famous weekend poolside barbecues", "Live music and local flavours"]
    },
    {
        id: "wellness",
        title: "Wellness & Spa",
        description: "Full-Service health club with massages, sauna and beauty treatments. Promotes mental and physical wellbeing.",
        icon: Trees,
        benefits: ["Steam room", "Professional therapists"]
    },
    {
        id: "sports",
        title: "Sports & Leisure",
        description: "Outdoor pool, tennis/squash courts and an on-site casino and night club. Encourages work-life balance.",
        icon: Activity,
        benefits: ["Rare central location offering both tennis and squash facilities"]
    },
    {
        id: "business",
        title: "Business Centre",
        description: "24/7 facility provide internet and administrative support. Ensures high productivity with reliable office infrastructure.",
        icon: Briefcase,
        benefits: ["Multilingual staff available to assist diplomatic delegations"]
    }
];

export default function ServicesSection() {
    return (
        <section className="w-full bg-white dark:bg-black py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-4">Our Offering</h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-black dark:text-white mb-6">
                        Experience World-Class Facilities
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Designed for your ultimate comfort and convenience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services#${service.id}`}
                            className="bg-[#FAFAFA] dark:bg-zinc-900 p-8 md:p-10 rounded-sm hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 group border-b-2 border-transparent hover:border-[#DC833D] hover:shadow-xl flex flex-col"
                        >
                            <div className="mb-8">
                                <service.icon className="w-10 h-10 text-[#DC833D] group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                            </div>

                            <h3 className="text-2xl font-serif text-black dark:text-white mb-4">{service.title}</h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed grow">
                                {service.description}
                            </p>

                            <ul className="space-y-3 pt-6 border-t border-gray-200 dark:border-zinc-800 mt-auto">
                                {service.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-500 dark:text-gray-500">
                                        <span className="w-1.5 h-1.5 bg-[#DC833D] rounded-full mt-2 mr-3 shrink-0"></span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
