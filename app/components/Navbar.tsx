'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Globe, User, ChevronRight, ArrowLeft } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuView, setMenuView] = useState<'main' | 'about' | 'investors' | 'services'>('main');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset menu view when closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setMenuView('main'), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">

            {/* Top Utility Bar (Desktop) */}
            <div className={`hidden md:flex justify-end items-center space-x-6 text-sm mb-4 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden mb-0' : 'opacity-100'}`}>
              <div className="flex items-center space-x-6 text-white/90">
                <button className="hover:text-white flex items-center gap-1 group">
                  <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Search</span>
                </button>
                <button className="hover:text-white flex items-center gap-1 group">
                  <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>EN</span>
                </button>
                <button className="hover:text-white flex items-center gap-1 group">
                  <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Login / Join</span>
                </button>
              </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="shrink-0 relative z-50">
                <Link href="/" className="block relative h-12 w-48">
                  <img
                    src="/logo.png"
                    alt="Abuja International Hotels"
                    className={`h-full w-auto object-contain transition-all duration-300 ${isOpen ? 'brightness-0 invert dark:invert-0' : ''}`}
                  />
                </Link>
              </div>

              {/* Desktop Navigation Links */}
              <div className={`hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}>
                <Link href="/" className="hover:opacity-75 transition-opacity">HOME</Link>

                {/* About Us Dropdown - Mega Menu */}
                <div className="group static">
                  <button className="hover:opacity-75 transition-opacity flex items-center gap-1 h-full py-6">
                    ABOUT US
                  </button>

                  {/* Full Width Dropdown Panel */}
                  <div className="fixed left-0 top-[var(--navbar-height,80px)] w-full bg-[#FDFBF7] dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Header Section */}
                        <div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-[#DC833D]/30 pb-6 md:pb-0">
                          <h3 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-2 flex items-center gap-2">
                            Abuja International At A Glance
                            <span className="hidden md:inline-block">→</span>
                          </h3>
                        </div>

                        {/* Links Section */}
                        <div className="col-span-12 md:col-span-8 flex flex-col space-y-4 pt-6 md:pt-0 md:pl-12">
                          <Link href="/about" className="text-3xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Our Story
                          </Link>
                          <Link href="/about/leadership" className="text-3xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Leadership & Governance
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investor Relations Dropdown - Mega Menu */}
                <div className="group static">
                  <button className="hover:opacity-75 transition-opacity flex items-center gap-1 h-full py-6">
                    INVESTOR RELATIONS
                  </button>

                  {/* Full Width Dropdown Panel */}
                  <div className="fixed left-0 top-[var(--navbar-height,80px)] w-full bg-[#FDFBF7] dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Header Section */}
                        <div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-[#DC833D]/30 pb-6 md:pb-0">
                          <h3 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-2 flex items-center gap-2">
                            Investor Information
                            <span className="hidden md:inline-block">→</span>
                          </h3>
                        </div>

                        {/* Links Section */}
                        <div className="col-span-12 md:col-span-8 flex flex-col space-y-4 pt-6 md:pt-0 md:pl-12">
                          <Link href="/investors/financial-reports" className="text-3xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Financial Reports
                          </Link>
                          <Link href="/investors/corporate-actions" className="text-3xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Corporate Actions & Announcements
                          </Link>
                          <Link href="/investors/shareholding" className="text-3xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Shareholding / Capital Info
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Products & Services Dropdown - Mega Menu */}
                <div className="group static">
                  <button className="hover:opacity-75 transition-opacity flex items-center gap-1 h-full py-6">
                    PRODUCTS & SERVICES
                  </button>

                  {/* Full Width Dropdown Panel */}
                  <div className="fixed left-0 top-[var(--navbar-height,80px)] w-full bg-[#FDFBF7] dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Header Section */}
                        <div className="col-span-12 md:col-span-3 border-b md:border-b-0 md:border-r border-[#DC833D]/30 pb-6 md:pb-0">
                          <h3 className="text-sm font-bold tracking-[0.2em] text-[#DC833D] uppercase mb-2">Our Offerings</h3>
                          <p className="text-gray-500 text-sm">Discover world-class facilities tailored to your needs.</p>
                        </div>

                        {/* Links Section - 2 Columns */}
                        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-6 md:pt-0 md:pl-12">
                          <Link href="/services#lodging" className="text-2xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Luxury Lodging
                          </Link>
                          <Link href="/services#conference" className="text-2xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Conference & Events
                          </Link>
                          <Link href="/services#dining" className="text-2xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Fine Dining
                          </Link>
                          <Link href="/services#wellness" className="text-2xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Wellness & Spa
                          </Link>
                          <Link href="/services#sports" className="text-2xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Sports & Leisure
                          </Link>
                          <Link href="/services#business" className="text-2xl font-serif text-black dark:text-white hover:text-[#DC833D] transition-colors w-fit">
                            Business Centre
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="hover:opacity-75 transition-opacity">CONTACT</Link>
              </div>

              {/* Book Now Button (Always Visible) */}
              <div className="hidden md:flex items-center space-x-4">
                <ModeToggle />
              </div>

              {/* Mobile Menu Button - Z-index ensure it's above overlay */}
              <div className="md:hidden flex items-center gap-4 relative z-50">
                <ModeToggle />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`focus:outline-none transition-colors duration-300 ${isOpen ? 'text-black dark:text-white' : (isScrolled ? 'text-black dark:text-white' : 'text-white')}`}
                >
                  {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
              </div>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay - Full Screen */}
      <div
        className={`fixed inset-0 bg-[#FDFBF7] dark:bg-zinc-950 z-40 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-8 overflow-y-auto">

          {/* Main Menu View */}
          <div className={`flex flex-col space-y-8 transition-opacity duration-300 ${menuView === 'main' ? 'opacity-100 flex' : 'opacity-0 hidden absolute'}`}>
            <button
              onClick={() => setMenuView('about')}
              className="group flex items-center justify-between w-full text-left py-4 border-b border-gray-200 dark:border-zinc-800"
            >
              <span className="text-xl font-medium text-black dark:text-white">ABOUT US</span>
              <ChevronRight className="w-5 h-5 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setMenuView('services')}
              className="group flex items-center justify-between w-full text-left py-4 border-b border-gray-200 dark:border-zinc-800"
            >
              <span className="text-xl font-medium text-black dark:text-white">PRODUCTS & SERVICES</span>
              <ChevronRight className="w-5 h-5 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setMenuView('investors')}
              className="group flex items-center justify-between w-full text-left py-4 border-b border-gray-200 dark:border-zinc-800"
            >
              <span className="text-xl font-medium text-black dark:text-white">INVESTOR RELATIONS</span>
              <ChevronRight className="w-5 h-5 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between w-full text-left py-4 border-b border-gray-200 dark:border-zinc-800"
            >
              <span className="text-xl font-medium text-black dark:text-white">CONTACT</span>
              <ChevronRight className="w-5 h-5 text-[#DC833D] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Submenu Views */}
          {/* About Us Submenu */}
          <div className={`flex flex-col space-y-6 transition-all duration-300 ${menuView === 'about' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full hidden absolute'}`}>
            <button
              onClick={() => setMenuView('main')}
              className="flex items-center gap-2 text-[#DC833D] font-medium mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <h3 className="text-2xl font-serif text-black dark:text-white mb-6">ABOUT US</h3>

            <div className="space-y-4 pl-4">
              <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Our Story
              </Link>
              <Link href="/about/leadership" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Leadership & Governance
              </Link>
            </div>
          </div>

          {/* Services Submenu */}
          <div className={`flex flex-col space-y-6 transition-all duration-300 ${menuView === 'services' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full hidden absolute'}`}>
            <button
              onClick={() => setMenuView('main')}
              className="flex items-center gap-2 text-[#DC833D] font-medium mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <h3 className="text-2xl font-serif text-black dark:text-white mb-6">PRODUCTS & SERVICES</h3>

            <div className="space-y-4 pl-4">
              <Link href="/services#lodging" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Luxury Lodging
              </Link>
              <Link href="/services#conference" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Conference & Events
              </Link>
              <Link href="/services#dining" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Fine Dining
              </Link>
              <Link href="/services#wellness" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Wellness & Spa
              </Link>
              <Link href="/services#sports" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Sports & Leisure
              </Link>
              <Link href="/services#business" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Business Centre
              </Link>
            </div>
          </div>

          {/* Investors Submenu */}
          <div className={`flex flex-col space-y-6 transition-all duration-300 ${menuView === 'investors' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full hidden absolute'}`}>
            <button
              onClick={() => setMenuView('main')}
              className="flex items-center gap-2 text-[#DC833D] font-medium mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <h3 className="text-2xl font-serif text-black dark:text-white mb-6">INVESTOR RELATIONS</h3>

            <div className="space-y-4 pl-4">
              <Link href="/investors/financial-reports" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Financial Reports
              </Link>
              <Link href="/investors/corporate-actions" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Corporate Actions
              </Link>
              <Link href="/investors/shareholding" onClick={() => setIsOpen(false)} className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-[#DC833D]">
                Shareholding Info
              </Link>
            </div>
          </div>


          <div className="mt-auto pt-8 border-t border-gray-200 dark:border-zinc-800">
            <div className="flex flex-col gap-4 text-gray-500">
              <button className="flex items-center gap-3 text-lg font-medium text-black dark:text-white">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
              <button className="flex items-center gap-3 text-lg font-medium text-black dark:text-white">
                <User className="w-5 h-5" />
                <span>Login / Join</span>
              </button>
              <div className="flex items-center gap-3 pt-4">
                <ModeToggle />
                <span className="text-sm font-medium">Theme</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
