'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaCalendar } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/results', label: 'Results' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/logo/apexnova-full.png"
                alt="ApexNova Consulting"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 animate-shimmer" />
            </div>
            <div className="hidden md:block ml-2">
              <p className="text-sm text-blue-900 font-medium">
                "Learn, Adopt, Execute"
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group text-sm font-medium transition-colors duration-200 ${pathname === link.href
                    ? 'text-blue-900'
                    : 'text-gray-700 hover:text-blue-900'
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 transform origin-left transition-transform duration-300 ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
              </Link>
            ))}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:from-blue-800 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg group"
            >
              <FaCalendar className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
              <span>Schedule Strategy Call</span>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-900 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${pathname === link.href
                  ? 'bg-blue-50 text-blue-900'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-900'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/contact"
            className="block px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg text-base font-medium hover:from-blue-800 hover:to-blue-700 transition-colors duration-200 text-center mt-4"
          >
            Schedule Strategy Call
          </a>
        </div>
      </div>
    </nav>
  );
} 