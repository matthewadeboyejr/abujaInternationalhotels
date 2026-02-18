'use client';

import CommitmentSection from '../components/CommitmentSection';
import { Mail, Phone, MapPin, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
    const handleWhatsAppClick = () => {
        // Replace with actual number
        window.open('https://wa.me/+2348095556005', '_blank');
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black">


            {/* Hero Section - Full Width */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="/pool-img.jpg"
                    alt="Contact Us"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center space-y-6 px-4 animate-fade-in-up">
                    <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#DC833D]">Get in Touch</p>
                    <h1 className="text-5xl md:text-7xl font-serif text-white">Contact Us</h1>
                </div>
            </div>

            {/* Contact Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Information Column */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif text-black dark:text-white mb-6">We'd love to hear from you</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                                Whether you have a question about our rooms, pricing, need a reservation, or anything else, our dedicated team is ready to answer all your questions.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {/* Address */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-[#FDFBF7] dark:bg-zinc-900 rounded-full flex items-center justify-center shrink-0 border border-[#DC833D]/20 group-hover:border-[#DC833D] transition-colors">
                                    <MapPin className="w-6 h-6 text-[#DC833D]" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-serif text-xl text-black dark:text-white">Visit Us</h4>
                                    <p className="text-gray-600 dark:text-gray-400 font-light">Plot 903, Tafawa Balewa way,<br />Area 11, Garki, Abuja</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-[#FDFBF7] dark:bg-zinc-900 rounded-full flex items-center justify-center shrink-0 border border-[#DC833D]/20 group-hover:border-[#DC833D] transition-colors">
                                    <Phone className="w-6 h-6 text-[#DC833D]" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-serif text-xl text-black dark:text-white">Call Us</h4>
                                    <p className="text-gray-600 dark:text-gray-400 font-light">+234 809 555 6005</p>
                                    <div className="flex items-center gap-2 text-sm text-[#DC833D] mt-1">
                                        <Clock className="w-4 h-4" />
                                        <span>Available 24/7</span>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-[#FDFBF7] dark:bg-zinc-900 rounded-full flex items-center justify-center shrink-0 border border-[#DC833D]/20 group-hover:border-[#DC833D] transition-colors">
                                    <Mail className="w-6 h-6 text-[#DC833D]" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-serif text-xl text-black dark:text-white">Email Us</h4>
                                    <p className="text-gray-600 dark:text-gray-400 font-light">Our friendly team is here to help.</p>
                                    <a href="mailto:info@abujainternationalhotels.com" className="text-black dark:text-white font-medium hover:text-[#DC833D] transition-colors inline-flex items-center gap-2 mt-1">
                                        Email Us <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp Action Column - Redesigned */}
                    <div className="bg-[#FDFBF7] dark:bg-zinc-900/50 rounded-3xl p-10 md:p-14 flex flex-col justify-center text-center space-y-8 border border-[#DC833D]/10 relative overflow-hidden">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC833D]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-white dark:bg-black text-[#DC833D] rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                                <MessageCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-serif text-black dark:text-white mb-4">Instant Support</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed mb-8">
                                Need immediate assistance? Start a conversation with our concierge team on WhatsApp for quick responses.
                            </p>

                            <button
                                onClick={handleWhatsAppClick}
                                className="bg-[#DC833D] text-white text-lg font-bold py-4 px-8 rounded-full hover:bg-[#b09360] transition-all flex items-center justify-center gap-3 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Chat on WhatsApp
                            </button>

                            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mt-6">
                                Typical response time: Under 5 minutes
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Map Section - Full Width Edge to Edge */}
            <div className="h-[600px] w-full bg-gray-100 dark:bg-zinc-900 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.096538363768!2d7.4986873!3d9.0543663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da01d71%3A0x6d9539a9734d8520!2sAbuja%20International%20Conference%20Centre!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Overlay for better integration */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none"></div>
            </div>

            <CommitmentSection />

        </div>
    );
}
