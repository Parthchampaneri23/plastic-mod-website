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
import { PRODUCTS as DEFAULT_PRODUCTS } from '@/data/products';
import { getDynamicProductsContent } from '@/services/productService';
import { getDynamicHomeContent } from '@/services/homeService';
import { Button } from './Button';

export interface HeaderProps {
  topBar?: {
    phone?: string;
    email?: string;
    address?: string;
    mapsUrl?: string;
  };
  navbar?: {
    logoImage?: string;
    logoAlt?: string;
    ctaButtonText?: string;
    ctaButtonLink?: string;
    links?: { id?: string; label: string; href: string; hasDropdown?: boolean }[];
    menuLinks?: { label: string; href: string; isMegaMenu?: boolean }[];
  };
}

const DEFAULT_NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products', isMegaMenu: true },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
];

export const Header: React.FC<HeaderProps> = ({ topBar: initialTopBar, navbar: initialNavbar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownCloseTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownCloseTimeoutRef.current) {
      clearTimeout(dropdownCloseTimeoutRef.current);
      dropdownCloseTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownCloseTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (dropdownCloseTimeoutRef.current) {
        clearTimeout(dropdownCloseTimeoutRef.current);
      }
    };
  }, []);
  const [productsList, setProductsList] = useState<any[]>(DEFAULT_PRODUCTS);
  const [categoriesList, setCategoriesList] = useState<any[]>([
    { id: 'preform-jar', slug: 'preform-jar', name: 'Preform & Jar Moulds' },
    { id: 'isbm', slug: 'isbm', name: 'ISBM Moulds' },
    { id: 'ebm', slug: 'ebm', name: 'EBM Moulds' },
  ]);

  // Support dynamic header data fetched internally if not supplied via props or to ensure freshness
  const [dynamicHeaderData, setDynamicHeaderData] = useState<{
    topBar?: any;
    navbar?: any;
  } | null>(null);

  useEffect(() => {
    let isMounted = true;
    getDynamicProductsContent().then((res) => {
      if (isMounted && res) {
        if (res.products && res.products.length > 0) {
          setProductsList(res.products);
        }
        if (res.categories && res.categories.length > 0) {
          const sortedCats = res.categories
            .filter((c: any) => c.isActive !== false)
            .sort((a: any, b: any) => {
              const orderA = a.order !== undefined ? a.order : 0;
              const orderB = b.order !== undefined ? b.order : 0;
              return orderA - orderB;
            });
          setCategoriesList(sortedCats);
        }
      }
    });

    // If navbar or topBar props were omitted (e.g. on sub-pages), load them dynamically
    if (!initialNavbar || !initialNavbar.menuLinks || !initialTopBar) {
      getDynamicHomeContent().then((res) => {
        if (isMounted && res) {
          setDynamicHeaderData({
            topBar: res.topBar,
            navbar: res.navbar,
          });
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [initialNavbar, initialTopBar]);

  const activeTopBar = initialTopBar || dynamicHeaderData?.topBar;
  const activeNavbar = initialNavbar || dynamicHeaderData?.navbar;

  // Defaults
  const phone = activeTopBar?.phone || "91+ 7784758347";
  const email = activeTopBar?.email || "sales@patelmould.com";
  const address = activeTopBar?.address || "Patel Mould Park, Phase-IV GIDC, Gujarat, India";
  const mapsUrl = activeTopBar?.mapsUrl || "https://www.google.com/maps/search/?api=1&query=Precision+Mould+Park+Phase+IV+GIDC+Vatva+Gujarat+India";
  const logoImage = activeNavbar?.logoImage || "/PMlogo.png";
  const logoAlt = activeNavbar?.logoAlt || "Patel Mould Industries";
  const ctaText = activeNavbar?.ctaButtonText || "Request a Quote";
  const ctaLink = activeNavbar?.ctaButtonLink || "/contact#inquiry-form-section";

  // Normalize links from activeNavbar: accept either navbar.links or navbar.menuLinks (filtering out blank entries)
  const navLinks: { label: string; href: string; isMegaMenu: boolean }[] = (() => {
    if (Array.isArray(activeNavbar?.links) && activeNavbar.links.length > 0) {
      const filtered = activeNavbar.links.filter((l: any) => l && l.label && l.label.trim() !== "");
      if (filtered.length > 0) {
        return filtered.map((l: any) => ({
          label: l.label.trim(),
          href: l.href || '/',
          isMegaMenu: Boolean(l.hasDropdown || l.isMegaMenu || l.href === '/products'),
        }));
      }
    }
    if (Array.isArray(activeNavbar?.menuLinks) && activeNavbar.menuLinks.length > 0) {
      const filtered = activeNavbar.menuLinks.filter((l: any) => l && l.label && l.label.trim() !== "");
      if (filtered.length > 0) {
        return filtered.map((l: any) => ({
          label: l.label.trim(),
          href: l.href || '/',
          isMegaMenu: Boolean(l.isMegaMenu || l.href === '/products'),
        }));
      }
    }
    return DEFAULT_NAV_LINKS.map(l => ({
      ...l,
      isMegaMenu: Boolean(l.isMegaMenu || l.href === '/products'),
    }));
  })();

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans text-slate-800">
      {/* Dark Navy Top Utility Bar */}
      <div className="hidden xl:block bg-[#0b1f3a] border-b border-slate-800 text-xs py-2 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left: Contact Information */}
          <div className="flex items-center space-x-6">
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>{phone}</span>
            </a>
            <a href={`mailto:${email}`} className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{email}</span>
            </a>
          </div>

          {/* Right: Company Location (Clickable Google Maps link) */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors group cursor-pointer no-underline"
            title="Open in Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 transition-transform group-hover:scale-110" />
            <span className="no-underline">{address}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav className={`transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-1.5'
        : 'bg-white border-b border-slate-100 shadow-xs py-1.5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo Image */}
            <Link href="/" className="flex items-center group shrink-0">
              <img
                src={logoImage}
                alt={logoAlt}
                className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation Links (Dynamic from Admin CMS) */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-wrap justify-end">
              {navLinks.map((link, idx) => {
                if (link.isMegaMenu) {
                  return (
                    <div
                      key={`nav-link-${idx}`}
                      className="relative shrink-0 py-2 group"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center space-x-1 text-sm xl:text-base font-semibold text-slate-700 hover:text-[#0056b3] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#0056b3]' : ''}`} />
                      </Link>

                      {/* Mega Menu Dropdown Panel */}
                      {dropdownOpen && (
                        <div
                          className="absolute top-full -left-20 w-[780px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 animate-in fade-in duration-200 z-50 pt-6 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:bg-transparent"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* Dynamic Categories Columns */}
                          <div className={`grid grid-cols-${Math.min(categoriesList.length, 3)} gap-6`}>
                            {categoriesList.map((cat) => {
                              const catProducts = productsList.filter(
                                (p) => p.categorySlug === cat.slug || p.category === cat.name
                              );

                              return (
                                <div key={cat.id || cat.slug}>
                                  <Link
                                    href={`/products?category=${cat.slug}`}
                                    className="block text-sm font-bold text-[#0056b3] hover:text-blue-800 tracking-wider uppercase mb-3 border-b border-slate-100 pb-2 group flex items-center justify-between"
                                    onClick={() => setDropdownOpen(false)}
                                  >
                                    <span>{cat.name}</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>
                                  <div className="space-y-1.5">
                                    {catProducts.map((p) => (
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
                                    {catProducts.length === 0 && (
                                      <span className="text-xs text-slate-400 italic">No products listed</span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Footer Action */}
                          <div className="pt-4 mt-5 border-t border-slate-100 bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between px-6">
                            <span className="text-xs text-slate-500 font-medium">Explore precision tooling configurations</span>
                            <Link
                              href="/products"
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
                  );
                }

                return (
                  <Link
                    key={`nav-link-${idx}`}
                    href={link.href}
                    className="text-sm xl:text-base font-semibold text-slate-700 hover:text-[#0056b3] transition-colors whitespace-nowrap shrink-0"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Request Quote Button */}
            <div className="hidden lg:flex items-center space-x-4 shrink-0 ml-4">
              <Button href={ctaLink} variant="primary" size="md">
                {ctaText}
              </Button>
            </div>

            {/* Mobile / Tablet Hamburger Button */}
            <div className="flex lg:hidden items-center">
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

        {/* Mobile / Tablet Slide-down Menu (Dynamic from Admin CMS) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link, idx) => {
              if (link.isMegaMenu) {
                return (
                  <div key={`mobile-nav-${idx}`} className="space-y-3 pl-2 border-l-2 border-blue-200">
                    <Link
                      href={link.href}
                      className="block text-xs font-bold text-[#0056b3] uppercase tracking-wider py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label} Catalog →
                    </Link>

                    {/* Preform & Jar / Categories */}
                    {categoriesList.map((cat) => {
                      const catProducts = productsList.filter(
                        (p) => p.categorySlug === cat.slug || p.category === cat.name
                      );

                      return (
                        <div key={cat.id || cat.slug} className="space-y-1 pl-2">
                          <Link
                            href={`/products?category=${cat.slug}`}
                            className="block text-xs font-bold text-slate-900 hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {cat.name}
                          </Link>
                          {catProducts.map((p) => (
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
                      );
                    })}
                  </div>
                );
              }

              return (
                <Link
                  key={`mobile-nav-${idx}`}
                  href={link.href}
                  className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0056b3]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-200">
              <Button href={ctaLink} variant="primary" size="md" className="w-full">
                {ctaText}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};