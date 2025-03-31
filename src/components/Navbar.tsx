'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle navigation links - check if current path matches link
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-primary-800' : 'text-white'}`}>
              ApexNova
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`
                ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-300'} 
                ${isActive('/') ? 'font-semibold' : 'font-medium'} 
                transition-colors
              `}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`
                ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-300'} 
                ${isActive('/about') ? 'font-semibold' : 'font-medium'} 
                transition-colors
              `}
            >
              About
            </Link>
            <Link 
              href="/coaching" 
              className={`
                ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-300'} 
                ${isActive('/coaching') ? 'font-semibold' : 'font-medium'} 
                transition-colors
              `}
            >
              Coaching
            </Link>
            <Link 
              href="/speechflow-ai" 
              className={`
                ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-300'} 
                ${isActive('/speechflow-ai') ? 'font-semibold' : 'font-medium'} 
                transition-colors
              `}
            >
              SpeechFlow AI
            </Link>
            <Link 
              href="/digital-products" 
              className={`
                ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-300'} 
                ${isActive('/digital-products') ? 'font-semibold' : 'font-medium'} 
                transition-colors
              `}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className={`
                bg-accent-500 hover:bg-accent-600 text-white
                font-medium py-2 px-4 rounded-md transition-colors
              `}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                onClick={closeMenu}
                className={`text-gray-700 hover:text-primary-600 ${isActive('/') ? 'font-semibold' : 'font-medium'} transition-colors py-2`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={closeMenu}
                className={`text-gray-700 hover:text-primary-600 ${isActive('/about') ? 'font-semibold' : 'font-medium'} transition-colors py-2`}
              >
                About
              </Link>
              <Link 
                href="/coaching" 
                onClick={closeMenu}
                className={`text-gray-700 hover:text-primary-600 ${isActive('/coaching') ? 'font-semibold' : 'font-medium'} transition-colors py-2`}
              >
                Coaching
              </Link>
              <Link 
                href="/speechflow-ai" 
                onClick={closeMenu}
                className={`text-gray-700 hover:text-primary-600 ${isActive('/speechflow-ai') ? 'font-semibold' : 'font-medium'} transition-colors py-2`}
              >
                SpeechFlow AI
              </Link>
              <Link 
                href="/digital-products" 
                onClick={closeMenu}
                className={`text-gray-700 hover:text-primary-600 ${isActive('/digital-products') ? 'font-semibold' : 'font-medium'} transition-colors py-2`}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                onClick={closeMenu}
                className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 