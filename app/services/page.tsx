'use client';

import Image from 'next/image';
import { BedDouble, Users, Utensils, Waves, Trophy, Briefcase, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            id: 'lodging',
            title: 'Luxury Lodging',
            icon: <BedDouble className="w-6 h-6" />,
            description: 'Experience unparalleled comfort in one of our 253 guestrooms, ranging from Classic rooms to our exquisite Presidential Suites.',
            benefits: ['Privacy, comfort, and a "home away from home" environment', 'Unique views of Aso Rock and city skyline', 'Private balconies for every room'],
            target: 'Business Travelers, Diplomats, and Families',
            image: '/lodge-img.jpeg'
        },
        {
            id: 'conference',
            title: 'Conference & Events',
            icon: <Users className="w-6 h-6" />,
            description: 'Host world-class events in our versatile 900 sqm space, including a grand conference hall equipped with full audio-visual support.',
            benefits: ['Seamless execution of high-profile events', 'Direct, secure pedestrian access to the International Conference Centre', 'Dedicated event planning team'],
            target: 'Government bodies, NGOs, and Corporate organizations',
            image: '/conference-img.jpg'
        },
        {
            id: 'dining',
            title: 'Fine Dining',
            icon: <Utensils className="w-6 h-6" />,
            description: 'Savor a culinary journey with our selection of Nigerian and International cuisines, featuring our famous weekend poolside barbecues.',
            benefits: ['High-quality culinary experiences within a secure environment', 'Live music and local flavours', 'Diverse menu options for all palates'],
            target: 'Food enthusiasts and guests hosting formal dinners',
            image: '/fine-img.jpg'
        },
        {
            id: 'wellness',
            title: 'Wellness & Spa',
            icon: <Waves className="w-6 h-6" />,
            description: 'Rejuvenate your mind and body at our full-service health club, featuring massages, sauna, steam room, and beauty treatments.',
            benefits: ['Promotes mental and physical wellbeing in a serene setting', 'Comprehensive facilities including steam room', 'Professional therapists'],
            target: 'Long stay guests and local members seeking rejuvenation',
            image: '/spa-img.jpg'
        },
        {
            id: 'sports',
            title: 'Sports & Leisure',
            icon: <Trophy className="w-6 h-6" />,
            description: 'Stay active with our outdoor pool, tennis and squash courts, or enjoy the nightlife at our on-site casino and night club.',
            benefits: ['Rare central location offering both tennis and squash facilities', 'Encourages work-life balance', 'Fitness and social outlets in one location'],
            target: 'Active travelers and socialites looking for entertainment',
            image: '/gym-img.jpg'
        },
        {
            id: 'business',
            title: 'Business Centre',
            icon: <Briefcase className="w-6 h-6" />,
            description: 'Maintain peak productivity with our 24/7 facility providing high-speed internet and comprehensive administrative support.',
            benefits: ['Ensures high productivity with reliable office infrastructure', 'Multilingual staff available to assist diplomatic delegations', 'Remote work support'],
            target: 'Remote workers and international consultants',
            image: '/business-img.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src="/reception-img.jpg"
                    alt="Products and Services"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center space-y-6 px-4 animate-fade-in-up">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D]">Unmatched Excellence</p>
                    <h1 className="text-5xl md:text-7xl font-serif text-white">Our Services</h1>
                    <p className="max-w-xl mx-auto text-gray-200 text-lg">
                        Discover a world of luxury and convenience tailored to meet your every need.
                    </p>
                </div>
            </div>

            {/* Services List */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="space-y-32">
                    {services.map((service, index) => (
                        <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>

                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#FDFBF7] dark:bg-zinc-900 flex items-center justify-center text-[#DC833D]">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-black dark:text-white">{service.title}</h2>
                                </div>

                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#DC833D]">Key Benefits & Differentiators</h3>
                                    <ul className="space-y-3">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#DC833D] shrink-0 mt-0.5" />
                                                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-gray-100 dark:border-zinc-800">
                                    <p className="text-sm text-gray-500">
                                        <span className="font-semibold text-black dark:text-white">Ideal for:</span> {service.target}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
