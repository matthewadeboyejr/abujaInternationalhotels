import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import InvestorMaterial from '@/app/components/InvestorMaterial';
import Footer from '@/app/components/Footer';

export default function CorporateStrategyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/nicon.jpg"
                        alt="Resort View"
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { title: 'Home', href: '/' },
                    { title: 'Our Company', href: '/about/overview' }
                ]}
                currentPage="Corporate Strategy"
            />

            {/* Main Title Section */}
            <section className="max-w-4xl mx-auto px-6 md:px-12 pt-20 pb-16 text-center">
                <h1 className="text-3xl md:text-5xl font-quicksand text-[#1a2b4b] mb-6 tracking-tight">
                    People, Platform, Portfolio
                </h1>
                <p className="text-gray-700 text-sm md:text-[15px] font-medium leading-relaxed max-w-3xl mx-auto">
                    Our goal is to generate best-in-class EBITDA growth to drive robust, long-term risk-adjusted returns for our stockholders. We believe our three pillars are the key to achieving our strategic objectives.
                </p>
            </section>

            {/* Section 1: Geographically Diverse Portfolio */}
            <section className="w-full bg-white pb-24">
                <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-2xl md:text-[28px] font-quicksand text-[#1a2b4b] tracking-tight pb-6">
                            Geographically Diverse Portfolio
                        </h2>
                        <div className="h-[2px] w-16 bg-[#c4a962]"></div>
                    </div>

                    <div className="border-t border-b border-gray-300 py-10 max-w-4xl mx-auto">
                        <p className="text-gray-600 text-[13px] leading-relaxed max-w-2xl mx-auto italic mb-10">
                            With a focus on luxury and upper-upscale hotels—including some of the most well-known hotels—we have a geographically diverse portfolio of high-quality assets in attractive markets across the United States.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 border-t border-gray-300 pt-10">
                            <div className="flex flex-col items-center justify-center py-4 md:py-0">
                                <span className="text-3xl font-quicksand text-[#c4a962] mb-2">76</span>
                                <span className="text-xs font-bold tracking-widest text-[#1a2b4b]">HOTELS*</span>
                            </div>
                            <div className="flex flex-col items-center justify-center py-4 md:py-0">
                                <span className="text-3xl font-quicksand text-[#c4a962] mb-2">41,700</span>
                                <span className="text-xs font-bold tracking-widest text-[#1a2b4b]">ROOMS*</span>
                            </div>
                            <div className="flex flex-col items-center justify-center py-4 md:py-0">
                                <span className="text-3xl font-quicksand text-[#c4a962] mb-2">21</span>
                                <span className="text-xs font-bold tracking-widest text-[#1a2b4b]">TOP U.S. MARKETS*</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Section 2: Size, Scale and Reputation (Beige Background) */}
            <section className="w-full bg-[#f4f3eb] py-24">
                <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-2xl md:text-[28px] font-quicksand text-[#1a2b4b] tracking-tight pb-6">
                            Size, Scale and Reputation
                        </h2>
                        <div className="h-[2px] w-16 bg-[#c4a962]"></div>
                    </div>

                    <div className="border-t border-b border-gray-300 py-10 max-w-4xl mx-auto">
                        <p className="text-gray-700 text-[13px] leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
                            We are the largest third-party owner of Marriott and Hyatt hotels, with an unrivaled access to data and business intelligence. We have an industry-leading corporate responsibility program that has delivered measurable results and values an inclusive workplace culture.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                            <div className="flex flex-col items-center justify-center py-6 md:py-0">
                                <span className="text-3xl font-quicksand text-[#c4a962] mb-2">S&P 500</span>
                                <span className="text-xs font-bold tracking-widest text-[#1a2b4b]">COMPANY</span>
                            </div>
                            <div className="flex flex-col items-center justify-center py-6 md:py-0">
                                <span className="text-3xl font-quicksand text-[#c4a962] mb-2">$17.0 Billion</span>
                                <span className="text-xs font-bold tracking-widest text-[#1a2b4b]">ENTERPRISE VALUE**</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Section 3: Strong Balance Sheet */}
            <section className="w-full bg-white pt-24 pb-12">
                <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-2xl md:text-[28px] font-quicksand text-[#1a2b4b] tracking-tight pb-6">
                            Strong Balance Sheet
                        </h2>
                        <div className="h-[2px] w-16 bg-[#c4a962]"></div>
                    </div>

                    <div className="border-t border-b border-gray-300 py-10 max-w-4xl mx-auto">
                        <p className="text-gray-600 text-[13px] leading-relaxed max-w-2xl mx-auto italic mb-10">
                            We maintain a strong and flexible capital structure that allows us to better execute our strategy throughout all phases of the lodging cycle.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300 border-t border-gray-300 pt-10">
                            <div className="flex flex-col items-center justify-center py-6 md:py-0">
                                <span className="text-3xl font-quicksand text-[#c4a962] mb-2">Investment Grade</span>
                                <span className="text-xs font-bold tracking-widest text-[#1a2b4b]">ONLY LODGING REIT</span>
                            </div>
                            <div className="flex flex-col items-center justify-center py-6 md:py-0">
                                <span className="text-3xl font-quicksand text-[#c4a962] mb-2">$2.4 Billion</span>
                                <span className="text-xs font-bold tracking-widest text-[#1a2b4b]">AVAILABLE LIQUIDITY POSITION***</span>
                            </div>
                        </div>
                    </div>

                    {/* Footnotes */}
                    <div className="mt-12 text-center text-gray-500 text-[11px] leading-relaxed max-w-4xl mx-auto space-y-1">
                        <p>* Data as of February 20, 2024.</p>
                        <p>** Based on market cap as of December 31, 2023.</p>
                        <p>*** Data as of December 31, 2023. Includes approximately $243 million of furniture, fixture and equipment reserves and $1.5 billion available under our credit facility revolver.</p>
                    </div>

                </div>
            </section>

            <InvestorMaterial />
        </main>
    );
}
