'use client';

import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';

const photos = [
    { src: '/fullview-1.png', alt: 'Skyline View' },
    { src: '/fullview-3.png', alt: 'Skyline View' },
    { src: '/hero-img.jpg', alt: 'Hotel Facade at Night' },
    { src: '/reception-img.jpg', alt: 'Elegant Reception' },
    { src: '/business-img.jpg', alt: 'Business Lounge' },
    { src: '/fine-img.jpg', alt: 'Fine Dining Restaurant' },
    { src: '/fullview-main.png', alt: 'Skyline View' },
    { src: '/pool-img.png', alt: 'Luxury Swimming Pool' },
    { src: '/tennis.jpg', alt: 'Tennis Court' },
    { src: '/conference-img.jpg', alt: 'Conference Hall' },
    { src: '/spa-img.jpg', alt: 'Relaxing Spa & Wellness' },
    { src: '/fullview-2.png', alt: 'Skyline View' },
    { src: '/gym-img.jpg', alt: 'State-of-the-art Gym' },
    { src: '/nicon.png', alt: 'Exterior View' },
];

export default function PhotoGalleryPage() {
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
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {photos.map((photo, index) => (
                        <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-md shadow-sm cursor-pointer bg-gray-100">
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#1a2b4b]/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
                                <span className="text-white font-quicksand text-sm md:text-base tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 px-6 text-center transform translate-y-4 group-hover:translate-y-0">
                                    {photo.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <InvestorMaterial />
        </main>
    );
}
