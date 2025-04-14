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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-black/30 backdrop-blur-sm'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[#00144F]">Apex</span>
            <span className="text-[#DEB251]">Nova</span>
            <span className="text-[#00144F]"> Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`text-lg font-medium transition-colors ${isActive('/')
                ? 'text-[#DEB251]'
                : isScrolled
                  ? 'text-[#00144F] hover:text-[#DEB251]'
                  : 'text-white hover:text-[#DEB251]'
                }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-lg font-medium transition-colors ${isActive('/services')
                ? 'text-[#DEB251]'
                : isScrolled
                  ? 'text-[#00144F] hover:text-[#DEB251]'
                  : 'text-white hover:text-[#DEB251]'
                }`}
            >
              Services
            </Link>
            <Link
              href="/coaching"
              className={`text-lg font-medium transition-colors ${isActive('/coaching')
                ? 'text-[#DEB251]'
                : isScrolled
                  ? 'text-[#00144F] hover:text-[#DEB251]'
                  : 'text-white hover:text-[#DEB251]'
                }`}
            >
              Coaching
            </Link>
            <Link
              href="/speechflow-ai"
              className={`text-lg font-medium transition-colors ${isActive('/speechflow-ai')
                ? 'text-[#DEB251]'
                : isScrolled
                  ? 'text-[#00144F] hover:text-[#DEB251]'
                  : 'text-white hover:text-[#DEB251]'
                }`}
            >
              SpeechFlow AI
            </Link>
            <Link
              href="/blog"
              className={`text-lg font-medium transition-colors ${isActive('/blog')
                ? 'text-[#DEB251]'
                : isScrolled
                  ? 'text-[#00144F] hover:text-[#DEB251]'
                  : 'text-white hover:text-[#DEB251]'
                }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium transition-colors ${isActive('/contact')
                ? 'text-[#DEB251]'
                : isScrolled
                  ? 'text-[#00144F] hover:text-[#DEB251]'
                  : 'text-white hover:text-[#DEB251]'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-[#00144F]' : 'text-white'
              } hover:text-[#DEB251] transition-colors`}
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
          <div className="md:hidden bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-lg font-medium transition-colors ${isActive('/') ? 'text-[#DEB251]' : 'text-[#00144F] hover:text-[#DEB251]'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-lg font-medium transition-colors ${isActive('/services') ? 'text-[#DEB251]' : 'text-[#00144F] hover:text-[#DEB251]'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/coaching"
                className={`text-lg font-medium transition-colors ${isActive('/coaching') ? 'text-[#DEB251]' : 'text-[#00144F] hover:text-[#DEB251]'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Coaching
              </Link>
              <Link
                href="/speechflow-ai"
                className={`text-lg font-medium transition-colors ${isActive('/speechflow-ai') ? 'text-[#DEB251]' : 'text-[#00144F] hover:text-[#DEB251]'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SpeechFlow AI
              </Link>
              <Link
                href="/blog"
                className={`text-lg font-medium transition-colors ${isActive('/blog') ? 'text-[#DEB251]' : 'text-[#00144F] hover:text-[#DEB251]'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`text-lg font-medium transition-colors ${isActive('/contact') ? 'text-[#DEB251]' : 'text-[#00144F] hover:text-[#DEB251]'
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