import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="text-2xl font-bold text-black block">
              DWSHotel
            </Link>
            <p className="text-gray-600 text-sm">
              Experience the perfect blend of modern luxury and authentic hospitality in Abraka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/rooms" className="text-sm text-gray-600 hover:text-black transition-colors">Rooms</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-black transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-black mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Abraka, Delta State, Nigeria</li>
              <li>+234 904 066 3871</li>
              <li>infodws@gmail.com</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-black mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} DWS Hotel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
