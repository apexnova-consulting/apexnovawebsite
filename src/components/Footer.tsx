'use client';

import Link from 'next/link';
import { FaInstagram, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '/results' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://instagram.com/apexnova_consulting',
      icon: FaInstagram
    },
    {
      name: 'Email',
      href: 'mailto:info@apexnovaconsulting.com',
      icon: FaEnvelope
    }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="text-2xl font-bold">
              <span className="text-white">Apex</span>
              <span className="text-yellow-500">Nova</span>
            </div>
            <p className="text-gray-400 text-base">
              Transforming technical leaders into confident communicators through proven frameworks and personalized coaching.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target={item.name === 'Instagram' ? '_blank' : undefined}
                  rel={item.name === 'Instagram' ? 'noopener noreferrer' : undefined}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Get Started
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
                >
                  Schedule Strategy Call
                  <FaArrowRight className="w-5 h-5" />
                </a>
                <p className="text-gray-400 text-sm mt-2">
                  Take the first step towards transforming your communication impact.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} ApexNova Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 