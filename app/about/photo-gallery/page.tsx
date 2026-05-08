'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
    id: number;
    title: string;
    description: string | null;
    image_url: string;
    category: string;
    order_index: number;
}

export default function PhotoGalleryPage() {
    const [photos, setPhotos] = useState<GalleryItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://admin.abujainternationalhotels.com/api/gallery');
                if (!response.ok) {
                    throw new Error('Failed to fetch gallery data');
                }
                const data: GalleryItem[] = await response.json();
                setPhotos(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching gallery data:', err);
                setError('Unable to load gallery images. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, []);
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero-img.jpg"
                        alt="Photo Gallery Hero"
                        className="w-full h-full object-cover text-white"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { title: 'Home', href: '/' },
                    { title: 'Our Company', href: '/about/overview' }
                ]}
                currentPage="Photo Gallery"
            />

            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-quicksand text-[#1a2b4b] mb-4 uppercase tracking-tight">
                    Photo Gallery
                </h1>
                <p className="max-w-2xl mx-auto text-sm md:text-base font-light text-gray-600">
                    A glimpse of elegance. Explore the luxurious amenities, architecture, and spaces that define Abuja International Hotels.
                </p>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-32">
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
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Loading Gallery...</p>
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
                            key="gallery"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                        >
                            {photos.map((photo, index) => (
                                <div key={photo.id || index} className="break-inside-avoid relative group overflow-hidden rounded-md shadow-sm cursor-pointer bg-gray-100">
                                    <img
                                        src={photo.image_url}
                                        alt={photo.title}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-[#1a2b4b]/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
                                        <span className="text-white font-quicksand text-sm md:text-base tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 px-6 text-center transform translate-y-4 group-hover:translate-y-0">
                                            {photo.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            <InvestorMaterial />
        </main>
    );
}
