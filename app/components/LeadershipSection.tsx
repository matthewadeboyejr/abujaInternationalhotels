'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Member {
    id: number;
    name: string;
    title: string;
    bio: string;
    image_url: string;
    type: 'board' | 'management';
    order_index: number;
}

interface LeadershipData {
    board_of_director: Member[];
    management_team: Member[];
}

export default function LeadershipSection() {
    const [activeTab, setActiveTab] = useState<'management' | 'board'>('board');
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [data, setData] = useState<LeadershipData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://admin.abujainternationalhotels.com/api/leadership');
                if (!response.ok) {
                    throw new Error('Failed to fetch leadership data');
                }
                const result: LeadershipData = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                console.error('Error fetching leadership data:', err);
                setError('Unable to load leadership information. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const activeData = activeTab === 'board'
        ? data?.board_of_director || []
        : data?.management_team || [];

    const truncateBio = (text: string, limit: number = 250) => {
        if (!text) return '';
        if (text.length <= limit) return text;
        return text.slice(0, limit).trim() + '...';
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-32">
                    <div className="flex items-center gap-12 border-b border-gray-100 pb-4">
                        <button
                            onClick={() => setActiveTab('management')}
                            className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 relative pb-4 -mb-[17px] ${activeTab === 'management'
                                ? 'text-[#DC833D] border-b-2 border-[#DC833D]'
                                : 'text-gray-300 hover:text-[#1a2b4b]'
                                }`}
                        >
                            Management Team
                        </button>
                        <div className="w-px h-4 bg-gray-100" />
                        <button
                            onClick={() => setActiveTab('board')}
                            className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 relative pb-4 -mb-[17px] ${activeTab === 'board'
                                ? 'text-[#DC833D] border-b-2 border-[#DC833D]'
                                : 'text-gray-300 hover:text-[#1a2b4b]'
                                }`}
                        >
                            Board of Directors
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="space-y-40">
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-20 space-y-4"
                            >
                                <div className="w-12 h-12 border-t-2 border-b-2 border-[#DC833D] rounded-full animate-spin" />
                                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Loading Leadership...</p>
                            </motion.div>
                        ) : error ? (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-20"
                            >
                                <p className="text-red-500 mb-4">{error}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="text-[#DC833D] text-[10px] font-bold tracking-[0.2em] uppercase hover:underline"
                                >
                                    Retry
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                                className="space-y-40"
                            >
                                {activeData.map((member, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col md:flex-row gap-16 lg:gap-32 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                            }`}
                                    >
                                        {/* Text Content */}
                                        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <div className={`w-12 h-px bg-[#DC833D] mb-8 ${index % 2 === 0 ? '' : 'ml-auto'}`} />
                                            <h3 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] mb-4 uppercase tracking-tight">
                                                {member.name}
                                            </h3>
                                            <p className="text-[#DC833D] text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
                                                {member.title}
                                            </p>
                                            <div className="text-gray-500 font-sans leading-relaxed text-sm md:text-base max-w-xl mx-auto md:mx-0">
                                                <p className="mb-6">
                                                    {truncateBio(member.bio)}
                                                </p>
                                                {member.bio && member.bio.length > 250 && (
                                                    <button
                                                        onClick={() => setSelectedMember(member)}
                                                        className="text-[#DC833D] text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
                                                    >
                                                        Read Full Biography
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className="flex-1 w-full max-w-sm lg:max-w-md">
                                            <div className="relative aspect-4/5 overflow-hidden transition-all duration-700 group shadow-2xl">
                                                <div className="absolute inset-0 bg-[#1a2b4b]/5 group-hover:bg-transparent transition-colors z-10" />
                                                <Image
                                                    src={member.image_url}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bio Modal */}
                <AnimatePresence>
                    {selectedMember && (
                        <div className="fixed inset-0 z-100 flex items-center justify-center p-6 md:p-12">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedMember(null)}
                                className="absolute inset-0 bg-[#1a2b4b]/95 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="relative bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl rounded-sm"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-[#1a2b4b] transition-colors z-20"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="p-8 md:p-16 flex flex-col md:flex-row gap-12">
                                    <div className="w-full md:w-1/3">
                                        <div className="relative aspect-4/5 overflow-hidden shadow-xl">
                                            <Image
                                                src={selectedMember.image_url}
                                                alt={selectedMember.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="w-12 h-px bg-[#DC833D] mb-8" />
                                        <h3 className="text-3xl md:text-4xl font-quicksand text-[#1a2b4b] mb-4 uppercase tracking-tight">
                                            {selectedMember.name}
                                        </h3>
                                        <p className="text-[#DC833D] text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
                                            {selectedMember.title}
                                        </p>
                                        <div className="text-gray-600 font-sans leading-relaxed text-sm md:text-base space-y-4">
                                            {selectedMember.bio.split('\n').map((para: string, i: number) => (
                                                <p key={i}>{para}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
