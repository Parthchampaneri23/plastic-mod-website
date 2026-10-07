'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Globe,
  ShieldCheck,
  ArrowRight,
  Box
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/data/content';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Mefron Dark Navy Top Utility Bar */}
      <div className="hidden xl:block bg-[#0b1f3a] border-b border-slate-800 text-xs py-2 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left: Contact Information */}
          <div className="flex items-center space-x-6">
            <a href="tel:+917784758347" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>91+ 7784758347</span>
            </a>
            <a href="mailto:sales@patelmould.com" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>sales@patelmould.com</span>
            </a>
          </div>

          {/* Right: Company Location */}
          <div className="flex items-center space-x-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#ff6b00] shrink-0" />
            <span>Precision Mould Park, Phase-IV GIDC, Gujarat, India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header - Clean White Surface */}
      <nav className={`transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-1'
        : 'bg-white border-b border-slate-100 py-1.5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo Image */}
            <Link href="/" className="flex items-center group shrink-0 -my-2 py-0.5">
              <img
                src="/PMlogo.png"
                alt="Patel Mould Industries"
                className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-base font-semibold text-slate-700 hover:text-[#0056b3] transition-colors">
                About Us
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center space-x-1 text-base font-semibold text-slate-700 hover:text-[#0056b3] transition-colors py-2 cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#0056b3]' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl p-4 mt-1 animate-in fade-in duration-200">
                    <div className="text-[11px] font-bold text-[#0056b3] tracking-wider uppercase px-2 py-1 mb-2 border-b border-slate-100">
                      Product Categories
                    </div>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/#${cat.id}`}
                        className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-blue-50/60 transition-colors group"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="p-2 bg-blue-50 group-hover:bg-[#0056b3] rounded-lg text-[#0056b3] group-hover:text-white transition-colors">
                          <Box className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#0056b3]">
                            {cat.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {cat.features[0]}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 mt-2 border-t border-slate-100">
                      <Link
                        href="/#featured-products"
                        className="text-xs text-[#0056b3] hover:underline font-bold flex items-center justify-between px-2 py-1"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span>View Tooling Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/#industries" className="text-base font-semibold text-slate-700 hover:text-[#0056b3] transition-colors">
                Industries
              </Link>
              <Link href="/#blogs" className="text-base font-semibold text-slate-700 hover:text-[#0056b3] transition-colors">
                Blogs
              </Link>
              <Link href="/#inquiry-section" className="text-base font-semibold text-slate-700 hover:text-[#0056b3] transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Request Quote Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button href="/#inquiry-section" variant="primary" size="md">
                Request a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
            <Link
              href="/about"
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0056b3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div className="space-y-2 pl-2 border-l-2 border-blue-100">
              <div className="text-xs font-bold text-[#0056b3] uppercase tracking-wider py-1">
                Product Categories
              </div>
              {PRODUCT_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="block py-1.5 text-sm text-slate-700 hover:text-[#0056b3]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <Link
              href="#industries"
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0056b3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="#blogs"
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0056b3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="#inquiry-section"
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0056b3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-200">
              <Button href="#inquiry-section" variant="primary" size="md" className="w-full">
                Request a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
