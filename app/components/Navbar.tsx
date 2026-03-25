'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ChevronDown, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const mainMenuItems = [
  {
    title: 'Our Portfolio',
    href: '/portfolio',
  },
  {
    title: 'Investor Relations',
    submenu: [
      { title: 'Investor Overview', href: '/investors/overview' },
      { title: 'Quarterly Results', href: '/investors/results?tab=quarterly-results' },
      { title: 'SEC Filings', href: '/investors/results?tab=sec-filings' },
      { title: 'Annual Reports', href: '/investors/results?tab=annual-reports' },
      { title: 'Stock Information ', href: '/investors/stock-information' },
      { title: 'Press Releases/ News ', href: '/investors/press-releases' },
      { title: 'FAQs', href: '/investors/faqs' },
      { title: 'Key Investor Materials ', href: '/investors/key-materials' },

    ],
  },
  {
    title: 'Our Company',
    submenu: [
      { title: 'Company Overview', href: '/about/overview' },
      { title: 'Corporate Strategy', href: '/about/corporate-strategy' },
      { title: 'Leadership', href: '/about/leadership' },
      { title: 'Corporate Governance', href: '/about/corporate-governance' },
      { title: 'History', href: '/about/history' },
      { title: 'Photo Gallery', href: '/about/photo-gallery' },
    ],
  },
];

const footerLinks = [
  { title: 'Contact', href: '/contact' },
  { title: 'Investor FAQs', href: '/investors/faqs' },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* Persistent "Logo | Menu" Box */}
      <motion.div
        initial={false}
        animate={{
          top: isScrolled ? 24 : 32,
          left: isScrolled ? 24 : 32,
        }}
        className="fixed z-60 flex items-stretch bg-white shadow-2xl border border-gray-100 overflow-hidden rounded-sm"
      >
        <motion.div
          initial={false}
          animate={{
            width: isScrolled ? 0 : 'auto',
            opacity: isScrolled ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden border-r border-gray-100 whitespace-nowrap"
        >
          <Link href="/" className="px-6 py-4 hover:bg-gray-50 transition-colors flex items-center justify-center min-w-[140px] h-full">
            <img src="/logo.png" alt="Abuja International" className="h-10 w-auto object-contain" />
          </Link>
        </motion.div>

        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-4 hover:bg-gray-50 transition-colors flex items-center justify-center min-w-[72px] md:min-w-[80px]"
        >
          <Menu className="w-8 h-8 text-[#1a2b4b]" />
        </button>
      </motion.div>

      {/* Drawer Overlay with Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-70"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed inset-y-0 left-0 w-full md:w-[480px] bg-white z-80 shadow-2xl flex flex-col h-full overflow-hidden"
            >
              {/* Drawer Header (Sticky-ish) */}
              <div className="px-6 md:px-12 py-10 flex flex-col items-center relative border-b border-gray-100">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors group"
                >
                  <X className="w-8 h-8 text-[#1a2b4b] group-hover:rotate-90 transition-transform duration-300" />
                </button>
                <Link href="/" onClick={() => setIsOpen(false)} className="mb-8">
                  <img src="/logo.png" alt="Abuja International" className="h-12 md:h-14 w-auto object-contain" />
                </Link>

                {/* Search Bar inside Header area */}
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DC833D]/20 transition-all font-sans text-sm"
                  />
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto px-6 md:px-12 py-12 scrollbar-hide">
                {/* Main Accordion Items */}
                <div className="space-y-6">
                  {mainMenuItems.map((item, index) => (
                    <div key={index} className="border-b border-[#DC833D] pb-6 last:border-0 grow">
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => toggleAccordion(index)}
                            className="flex items-center justify-between w-full text-left group"
                          >
                            <span className="text-xl md:text-2xl font-serif text-[#1a2b4b] group-hover:text-[#DC833D] transition-colors tracking-tight">
                              {item.title}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {expandedIndex === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="pt-6 space-y-4 pl-4 border-l border-[#DC833D]/20">
                                  {item.submenu.map((sub, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      href={sub.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block text-[#1a2b4b]/80 hover:text-[#DC833D] transition-colors font-sans text-base md:text-lg"
                                    >
                                      {sub.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-xl md:text-2xl font-serif text-[#1a2b4b] hover:text-[#DC833D] transition-colors tracking-tight block"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer Style Links */}
                <div className="mt-12 pt-12 border-t border-[#DC833D]/20 space-y-5">
                  {footerLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-serif text-[#1a2b4b] hover:text-[#DC833D] transition-colors tracking-tight"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="mt-12 flex items-center gap-6 text-[#1a2b4b]/60">
                  <a href="#" className="hover:text-[#DC833D] transition-colors p-2 hover:bg-gray-50 rounded-full"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#DC833D] transition-colors p-2 hover:bg-gray-50 rounded-full"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#DC833D] transition-colors p-2 hover:bg-gray-50 rounded-full"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
