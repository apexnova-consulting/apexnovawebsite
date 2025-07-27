'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaCalendar } from 'react-icons/fa';

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
            <span className={`text-2xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 bg-clip-text text-transparent transition-all duration-300 ${isScrolled ? 'text-2xl' : 'text-3xl'
              }`}>
              ApexNova
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${pathname === link.href
                  ? 'text-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
                  }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-900 transform origin-left transition-transform duration-300" />
                )}
              </Link>
            ))}
            <a
              href="/schedule"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <FaCalendar className="w-4 h-4" />
              Schedule Strategy Call
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
            href="/schedule"
            className="block px-4 py-2 bg-blue-900 text-white rounded-lg text-base font-medium hover:bg-blue-800 transition-colors duration-200 text-center mt-4"
          >
            Schedule Strategy Call
          </a>
        </div>
      </div>
    </nav>
  );
} 