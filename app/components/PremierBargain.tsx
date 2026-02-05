'use client';
import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';

export default function PremierBargain() {
    // Using one of the existing rooms (e.g., ID 4 - Royal Suite)
    const room = {
        id: 4,
        title: 'Royal treatment for you',
        price: 'NGN100,000',
        frequency: 'night',
        image: '/royal-home.jpeg',
        rating: '5.0/5',
        details: 'Master + 2 Bedroom, 3 Ensuite Bathroom'
    };

    return (
        <section className="w-full bg-white dark:bg-background px-4 md:px-20 py-20">
            <Link href={`/rooms/${room.id}`}>
                <div className="bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-3xl md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 mx-auto cursor-pointer group hover:shadow-xl transition-shadow">

                    {/* Left Side */}
                    <div className="relative z-10 flex flex-col justify-between h-full space-y-8 lg:w-1/3">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                            Premier<br />Bargain
                        </h2>

                        <div className="mt-auto">
                            <button className="w-16 h-16 bg-white dark:bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <ArrowUpRight className="w-6 h-6 text-black dark:text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Room Showcase */}
                    <div className="relative z-10 lg:w-2/3 w-full">
                        <div className="bg-white/5 rounded-4xl p-4 border border-white/10 backdrop-blur-sm">
                            <div className="relative rounded-3xl overflow-hidden aspect-video w-full mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                                <img
                                    src={room.image}
                                    alt="Premier Bargain"
                                    className="w-full h-full object-cover transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white dark:bg-black text-black dark:text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                    <Star className="w-3 h-3 fill-black dark:fill-white" />
                                    {room.rating}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">{room.title}</h3>
                                    <p className="text-gray-400 text-sm">{room.details}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-bold block">{room.price}</span>
                                    <span className="text-gray-400 text-xs uppercase">{room.frequency}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Geometric Background Pattern */}
                    <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-20 z-0">
                        <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
                            <path d="M800 400 L600 400 L700 300" stroke="white" strokeWidth="0.5" fill="none" />
                            <path d="M700 300 L600 200 L500 300" stroke="white" strokeWidth="0.5" fill="none" />
                            <path d="M600 400 L400 400 L500 300" stroke="white" strokeWidth="0.5" fill="none" />
                            <line x1="0" y1="400" x2="800" y2="0" stroke="white" strokeWidth="0.3" />
                        </svg>
                    </div>

                </div>
            </Link>
        </section>
    );
}
