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
import { PRODUCTS } from '@/data/products';
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

              {/* Products Mega Menu Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href="/products"
                  className="flex items-center space-x-1 text-base font-semibold text-slate-700 hover:text-[#0056b3] transition-colors py-2 cursor-pointer"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#0056b3]' : ''}`} />
                </Link>

                {/* Mega Menu Dropdown Panel */}
                {dropdownOpen && (
                  <div className="absolute top-full -left-20 w-[780px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-1 animate-in fade-in duration-200 z-50">
                    {/* 3-Column Layout */}
                    <div className="grid grid-cols-3 gap-6">
                      {/* Preform & Jar Moulds */}
                      <div>
                        <Link
                          href="/products?category=preform-jar#catalog"
                          className="block text-sm font-bold text-[#0056b3] hover:text-blue-800 tracking-wider uppercase mb-3 border-b border-slate-100 pb-2 group flex items-center justify-between"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span>Preform & Jar Moulds</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <div className="space-y-1.5">
                          {PRODUCTS.filter((p) => p.categorySlug === 'preform-jar').map((p) => (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              className="group/item flex items-center text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1"
                              onClick={() => setDropdownOpen(false)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-blue-600 mr-2 transition-colors"></span>
                              <span>{p.name}</span>
                              <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-blue-600" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* ISBM Moulds */}
                      <div>
                        <Link
                          href="/products?category=isbm#catalog"
                          className="block text-sm font-bold text-[#0056b3] hover:text-blue-800 tracking-wider uppercase mb-3 border-b border-slate-100 pb-2 group flex items-center justify-between"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span>ISBM Moulds</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <div className="space-y-1.5">
                          {PRODUCTS.filter((p) => p.categorySlug === 'isbm').map((p) => (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              className="group/item flex items-center text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1"
                              onClick={() => setDropdownOpen(false)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-blue-600 mr-2 transition-colors"></span>
                              <span>{p.name}</span>
                              <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-blue-600" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* EBM Moulds */}
                      <div>
                        <Link
                          href="/products?category=ebm#catalog"
                          className="block text-sm font-bold text-[#0056b3] hover:text-blue-800 tracking-wider uppercase mb-3 border-b border-slate-100 pb-2 group flex items-center justify-between"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span>EBM Moulds</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <div className="space-y-1.5">
                          {PRODUCTS.filter((p) => p.categorySlug === 'ebm').map((p) => (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              className="group/item flex items-center text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1"
                              onClick={() => setDropdownOpen(false)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-blue-600 mr-2 transition-colors"></span>
                              <span>{p.name}</span>
                              <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-blue-600" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-4 mt-5 border-t border-slate-100 bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between px-6">
                      <span className="text-xs text-slate-500 font-medium">Explore precision tooling configurations</span>
                      <Link
                        href="/products#catalog"
                        className="text-xs text-[#0056b3] hover:text-blue-800 font-bold flex items-center space-x-1"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span>View All Products</span>
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
              <Link href="/contact" className="text-base font-semibold text-slate-700 hover:text-[#0056b3] transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Request Quote Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button href="/contact" variant="primary" size="md">
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
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
            <Link
              href="/about"
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0056b3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Products Accordion Section */}
            <div className="space-y-3 pl-2 border-l-2 border-blue-200">
              <Link
                href="/products"
                className="block text-xs font-bold text-[#0056b3] uppercase tracking-wider py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products Catalog →
              </Link>

              {/* Preform & Jar */}
              <div className="space-y-1 pl-2">
                <Link
                  href="/products?category=preform-jar"
                  className="block text-xs font-bold text-slate-900 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Preform & Jar Moulds
                </Link>
                {PRODUCTS.filter((p) => p.categorySlug === 'preform-jar').map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="block text-xs text-slate-600 hover:text-blue-600 pl-2 py-0.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {p.name}
                  </Link>
                ))}
              </div>

              {/* ISBM */}
              <div className="space-y-1 pl-2">
                <Link
                  href="/products?category=isbm"
                  className="block text-xs font-bold text-slate-900 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ISBM Moulds
                </Link>
                {PRODUCTS.filter((p) => p.categorySlug === 'isbm').map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="block text-xs text-slate-600 hover:text-blue-600 pl-2 py-0.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {p.name}
                  </Link>
                ))}
              </div>

              {/* EBM */}
              <div className="space-y-1 pl-2">
                <Link
                  href="/products?category=ebm"
                  className="block text-xs font-bold text-slate-900 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  EBM Moulds
                </Link>
                {PRODUCTS.filter((p) => p.categorySlug === 'ebm').map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="block text-xs text-slate-600 hover:text-blue-600 pl-2 py-0.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {p.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#industries"
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0056b3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/#blogs"
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0056b3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0056b3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-200">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Request a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
