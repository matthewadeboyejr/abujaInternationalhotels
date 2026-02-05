'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import PremierBargain from '../components/PremierBargain';
import CommitmentSection from '../components/CommitmentSection';
import { ROOMS } from '../data/rooms';

export default function RoomsPage() {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Deluxe', 'Superior', 'Platinum', 'Business Class', 'Executive', 'Royal Suite',];

    const filteredRooms = activeTab === 'All'
        ? ROOMS
        : ROOMS.filter(room => room.category === activeTab);

    return (
        <div className="min-h-screen bg-white dark:bg-background">


            {/* Hero Section */}
            <section className="relative w-full py-32 bg-white dark:bg-background flex flex-col items-center justify-center overflow-hidden">
                {/* Subtle Glow Effects */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <h1 className="text-5xl md:text-9xl font-bold text-black dark:text-foreground mb-4 tracking-tighter lowercase">
                    rooms
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium uppercase tracking-widest">
                    <span>Accommodation</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-black dark:text-foreground">Rooms</span>
                </div>
            </section>

            {/* Filter & Grid Section */}
            <section className="w-full bg-white dark:bg-background pb-32">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Main Container */}
                    <div className="bg-gray-100 dark:bg-[#111] rounded-3xl md:rounded-[3rem] p-6 md:p-12 min-h-[800px]">

                        {/* Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 border-b border-gray-300 dark:border-gray-800 pb-8">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === cat
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredRooms.map((room) => (
                                <RoomCard key={room.id} room={room} />
                            ))}
                        </div>

                        {/* Pagination / Load More */}
                        <div className="mt-20 flex justify-center">
                            <button className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                                Load More Rooms
                            </button>
                        </div>



                    </div>
                </div>

            </section>


            <PremierBargain />
            <CommitmentSection />

        </div >
    );
}
