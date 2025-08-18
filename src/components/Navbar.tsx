'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Professionals', href: '/professionals' },
    { name: 'Companies', href: '/companies' },
    { name: 'Digital Products', href: '/digital-products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-blue-600 py-2 px-4 text-center text-white text-sm">
        <span className="mr-2">🔥 Limited Time: Book your AI ROI Audit for $2,500 (50% off)</span>
        <Link 
          href="/roi-audit"
          className="inline-flex items-center text-white hover:text-white/90"
        >
          Book Now
          <FaArrowRight className="ml-1 w-3 h-3" />
        </Link>
      </div>

      {/* Navigation */}
      <nav
        className={`w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <div className="flex items-center">
                  <span className="text-blue-500 font-bold text-2xl">Apex</span>
                  <span className="text-white font-bold text-2xl">Nova</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/roi-audit"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors ml-4"
              >
                Book My AI ROI Audit
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/roi-audit"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book My AI ROI Audit
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;