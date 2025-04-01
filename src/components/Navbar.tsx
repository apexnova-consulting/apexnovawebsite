'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ApexNova Consulting
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`text-lg font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-lg font-medium transition-colors ${isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              Services
            </Link>
            <Link
              href="/coaching"
              className={`text-lg font-medium transition-colors ${isActive('/coaching') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              Coaching
            </Link>
            <Link
              href="/digital-products"
              className={`text-lg font-medium transition-colors ${isActive('/digital-products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              Digital Products
            </Link>
            <Link
              href="/speechflow-ai"
              className={`text-lg font-medium transition-colors ${isActive('/speechflow-ai') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              SpeechFlow AI
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium transition-colors ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-lg font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-lg font-medium transition-colors ${isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/coaching"
                className={`text-lg font-medium transition-colors ${isActive('/coaching') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Coaching
              </Link>
              <Link
                href="/digital-products"
                className={`text-lg font-medium transition-colors ${isActive('/digital-products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Digital Products
              </Link>
              <Link
                href="/speechflow-ai"
                className={`text-lg font-medium transition-colors ${isActive('/speechflow-ai') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SpeechFlow AI
              </Link>
              <Link
                href="/contact"
                className={`text-lg font-medium transition-colors ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 