'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">ApexNova</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600">
              About
            </Link>
            <Link href="/learning-library" className="text-gray-600 hover:text-primary-600">
              Learning Library
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary-600">
              Blog
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-primary-600">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-600">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/learning-library"
              className="block px-3 py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Learning Library
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 