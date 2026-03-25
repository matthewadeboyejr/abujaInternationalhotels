'use client';

import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';
import Footer from '@/app/components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/reception-img.jpg"
                        alt="Privacy Policy Hero"
                        className="w-full h-full object-cover text-white"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-quicksand text-white uppercase tracking-tight">
                        Privacy Policy
                    </h1>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { title: 'Home', href: '/' }
                ]}
                currentPage="Privacy Policy"
            />

            <section className="max-w-4xl mx-auto px-6 md:px-12 py-20 bg-white">
                <div className="text-center mb-16">
                    <p className="text-sm md:text-base font-light text-gray-500 uppercase tracking-widest">
                        Last Updated: March 2026
                    </p>
                </div>

                <div className="space-y-12 font-light leading-relaxed text-gray-700">
                    <p className="text-lg text-gray-600 mb-8">
                        At Abuja International Hotels, we are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This policy outlines how we collect, use, and protect your data.
                    </p>

                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">1. Information We Collect</h2>
                        <p>We may collect personal information such as your name, email address, phone number, payment details, and preferences when you make a booking, sign up for our newsletter, or use our website.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">2. How We Use Your Information</h2>
                        <p>We use your information to process reservations, communicate with you regarding your stay, personalize your experience, and send you promotional offers if you have opted in. Your payment details are strictly used for processing transactions.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">3. Sharing of Information</h2>
                        <p>We do not sell or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website or managing bookings, provided they agree to keep this information confidential.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">4. Data Security</h2>
                        <p>We implement a variety of security measures, including encryption and secure servers, to maintain the safety of your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-quicksand font-bold mb-4 text-[#1a2b4b]">5. Cookies and Tracking Technologies</h2>
                        <p>Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our audience is coming from. You can choose to disable cookies through your browser settings, though some aspects of the site may not function properly.</p>
                    </div>

                    <div className="pt-8 border-t border-gray-100 mt-16 text-center">
                        <p className="text-sm">For inquiries regarding our Privacy Policy or to manage your data, please contact us at <a href="mailto:privacy@abujainternationalhotels.com" className="text-[#DC833D] hover:underline">privacy@abujainternationalhotels.com</a>.</p>
                    </div>
                </div>
            </section>

            <InvestorMaterial />

        </main>
    );
}
