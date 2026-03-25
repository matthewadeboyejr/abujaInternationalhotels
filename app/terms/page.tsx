'use client';

import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';
import Footer from '@/app/components/Footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero-img.jpg"
                        alt="Terms of Use Hero"
                        className="w-full h-full object-cover text-white"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-quicksand text-white uppercase tracking-tight">
                        Terms of Use
                    </h1>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { title: 'Home', href: '/' }
                ]}
                currentPage="Terms of Use"
            />

            <section className="max-w-4xl mx-auto px-6 md:px-12 py-20 bg-white">
                <div className="text-center mb-16">
                    <p className="text-sm md:text-base font-light text-gray-500 uppercase tracking-widest">
                        Last Updated: March 2026
                    </p>
                </div>

                <div className="space-y-12 font-light leading-relaxed text-gray-700">
                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">1. Acceptance of Terms</h2>
                        <p>Welcome to Abuja International Hotels. By accessing or using our website, booking services, or physical premises, you agree to be bound by these Terms of Use. If you do not agree to these terms, please refrain from using our services.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">2. Booking and Reservations</h2>
                        <p>All reservations are subject to availability and confirmation. A valid credit card is required to secure your booking. Cancellation policies vary by room rate and date; please review the specific terms provided during the booking process.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">3. Guest Conduct</h2>
                        <p>We strive to provide a safe and comfortable environment for all guests. The hotel reserves the right to refuse service or evict any guest whose behavior is deemed disruptive, unlawful, or in violation of these terms, without refund.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">4. Intellectual Property</h2>
                        <p>All content on this website, including but not limited to text, images, logos, and graphics, is the property of Abuja International Hotels and may not be used, copied, or distributed without our express written consent.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">5. Limitation of Liability</h2>
                        <p>Abuja International Hotels shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our website or services, except where prohibited by law.</p>
                    </div>

                    <div className="pt-8 border-t border-gray-100 mt-16 text-center">
                        <p className="text-sm">For questions regarding our Terms of Use, please contact us at <a href="mailto:legal@abujainternationalhotels.com" className="text-[#DC833D] hover:underline">legal@abujainternationalhotels.com</a>.</p>
                    </div>
                </div>
            </section>

            <InvestorMaterial />

        </main>
    );
}
