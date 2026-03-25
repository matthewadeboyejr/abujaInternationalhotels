import Link from 'next/link';
import { Linkedin, Link as LinkIcon, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#ECE08F]/20 text-[#1a2b4b] pt-20 pb-12 font-sans">
      <div className=" px-4 md:px-8 lg:px-16">

        {/* Top Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 tracking-tight">Abuja International Hotels</h2>

          <div className="space-y-1 text-sm md:text-base text-gray-700 mb-8">
            <p>Plot 903, Tafawa Balewa Way,</p>
            <p>Area 11, Garki, Abuja</p>
          </div>

          <div className="space-y-6">
            <a href="tel:+2348095556005" className="flex items-center gap-3 hover:text-[#DC833D] transition-colors group">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(234) 809-555-6005</span>
            </a>

            <Link href="/newsletters" className="flex items-center gap-3 hover:text-[#DC833D] transition-colors group">
              <LinkIcon className="w-5 h-5 translate-y-px" />
              <span className="font-semibold">Sign Up for Email Alerts</span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col space-y-12">
          {/* Main Links Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC833D] transition-colors">
                <Linkedin className="w-6 h-6 fill-current" />
              </a>
              <Link href="/site-map" className="text-sm font-bold tracking-widest uppercase hover:text-[#DC833D] transition-colors">Sitemap</Link>
              <Link href="/contact" className="text-sm font-bold tracking-widest uppercase hover:text-[#DC833D] transition-colors">Contact</Link>
              <Link href="/careers" className="text-sm font-bold tracking-widest uppercase hover:text-[#DC833D] transition-colors">Careers</Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <Link href="/terms" className="text-sm font-bold tracking-widest uppercase hover:text-[#DC833D] transition-colors">Terms of Use</Link>
              <Link href="/privacy" className="text-sm font-bold tracking-widest uppercase hover:text-[#DC833D] transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            Copyright © 2006 - {currentYear} Abuja International Hotels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
