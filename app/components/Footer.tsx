import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-900 text-white border-t border-[#DC833D]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Contact Column */}
          <div className="space-y-6">
            <Link href="/" className="block relative h-12 w-40">
              <img
                src="/logo.png"
                alt="Abuja International Hotels"
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unparalleled luxury and comfort in the heart of Abuja. Set against the spectacular backdrop of Aso Rock.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-[#DC833D] shrink-0" />
                <span>Plot 903, Tafawa Balewa Way,<br />Area 11, Garki, Abuja</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-[#DC833D] shrink-0" />
                <span>+234 809 555 6005</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-[#DC833D] shrink-0" />
                <a href="mailto:info@abujainternationalhotels.com" className="hover:text-[#DC833D] transition-colors">Email Us</a>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#DC833D] hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#DC833D] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#DC833D] hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-[#DC833D]/30 pb-2 inline-block">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Our Story</Link>
              </li>
              <li>
                <Link href="/about/leadership" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Leadership & Board</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-[#DC833D]/30 pb-2 inline-block">Products & Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#lodging" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Luxury Lodging</Link>
              </li>
              <li>
                <Link href="/services#conference" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Conference & Events</Link>
              </li>
              <li>
                <Link href="/services#dining" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Fine Dining</Link>
              </li>
              <li>
                <Link href="/services#wellness" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Wellness & Spa</Link>
              </li>
              <li>
                <Link href="/services#sports" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Sports & Leisure</Link>
              </li>
              <li>
                <Link href="/services#business" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Business Centre</Link>
              </li>
            </ul>
          </div>

          {/* Investor Relations */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-[#DC833D]/30 pb-2 inline-block">Investor Relations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/investors/financial-reports" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Financial Reports</Link>
              </li>
              <li>
                <Link href="/investors/corporate-actions" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Corporate Actions</Link>
              </li>
              <li>
                <Link href="/investors/shareholding" className="text-gray-400 hover:text-[#DC833D] transition-colors text-sm">Shareholding Info</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Abuja International Hotels. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
