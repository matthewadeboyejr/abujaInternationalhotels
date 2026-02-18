'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data for Board of Directors (dummy data)
const boardMembers = [
    {
        name: 'BOARD MEMBER 1',
        title: 'CHAIRMAN OF THE BOARD',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Mollis aliquam ut porttitor leo a diam sollicitudin. Eostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '/Portrait_Placeholder.png',
    },
    {
        name: 'BOARD MEMBER 2',
        title: 'PRESIDENT, CHIEF EXECUTIVE OFFICER AND DIRECTOR',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Mollis aliquam ut porttitor leo a diam sollicitudin. Eostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '/Portrait_Placeholder.png',
    },
    {
        name: 'BOARD MEMBER 3',
        title: 'DIRECTOR',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Mollis aliquam ut porttitor leo a diam sollicitudin. Eostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '/Portrait_Placeholder.png',
    },
];

// Mock Data for Management Team (dummy data)
const managementTeam = [
    {
        name: 'MANAGEMENT MEMBER 1',
        title: 'GENERAL MANAGER',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: '/Portrait_Placeholder.png',
    },
    {
        name: 'MANAGEMENT MEMBER 2',
        title: 'HEAD OF OPERATIONS',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: '/Portrait_Placeholder.png',
    },
];

export default function LeadershipSection() {
    const [activeTab, setActiveTab] = useState<'management' | 'board'>('board');

    const activeData = activeTab === 'board' ? boardMembers : managementTeam;

    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-20">
                    <div className="flex items-center space-x-8 md:space-x-12 border-b border-gray-200 dark:border-zinc-800 pb-4">
                        <button
                            onClick={() => setActiveTab('management')}
                            className={`text-sm md:text-base font-bold tracking-[0.2em] uppercase transition-colors relative pb-4 -mb-[17px] ${activeTab === 'management'
                                ? 'text-[#DC833D] border-b-2 border-[#DC833D]'
                                : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                                }`}
                        >
                            Management Team
                        </button>
                        <span className="text-gray-300 dark:text-zinc-700">|</span>
                        <button
                            onClick={() => setActiveTab('board')}
                            className={`text-sm md:text-base font-bold tracking-[0.2em] uppercase transition-colors relative pb-4 -mb-[17px] ${activeTab === 'board'
                                ? 'text-[#DC833D] border-b-2 border-[#DC833D]'
                                : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                                }`}
                        >
                            Board of Directors
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="space-y-32">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-32"
                        >
                            {activeData.map((member, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                        }`}
                                >

                                    {/* Text Content */}
                                    <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h3 className="text-3xl md:text-4xl font-serif text-black dark:text-white mb-3">
                                            {member.name}
                                        </h3>
                                        <p className="text-[#DC833D] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                                            {member.title}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className="flex-1 w-full max-w-md">
                                        <div className="relative aspect-4/5 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 rounded-sm">
                                            <div className="absolute inset-0 bg-gray-200 dark:bg-zinc-800 animate-pulse" />
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
