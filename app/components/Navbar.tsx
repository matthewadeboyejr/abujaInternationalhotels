'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-black">
              <Image src="/logo.png" alt="Dwshotel Logo" width={100} height={100} className="w-auto h-12" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">Home</Link>
            <Link href="/rooms" className="text-gray-700 hover:text-black transition-colors">Rooms</Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">About</Link>
            <Link href="/properties" className="text-gray-700 hover:text-black transition-colors">Online booking</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">Contact</Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">

            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg px-4 pb-8 space-y-4 flex flex-col items-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-black text-lg py-2">Home</Link>
          <Link href="/rooms" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-black text-lg py-2">Rooms</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-black text-lg py-2">About</Link>
          <Link href="/properties" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-black text-lg py-2">Online booking</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-black text-lg py-2">Contact</Link>

          <div className="flex flex-col w-full space-y-3 pt-4 border-t border-gray-100">

            <button className="w-full px-6 py-3  bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
