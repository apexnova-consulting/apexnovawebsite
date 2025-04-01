'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-background.jpg"
            alt="Executive Communication"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/50"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Elevate Your<br />Executive Communication
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl">
              Expert coaching and AI-powered solutions to transform your leadership presence and public speaking skills.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="/coaching" className="btn btn-accent text-lg py-4 px-8 bg-secondary-500 hover:bg-secondary-600 rounded-md font-semibold transition-all transform hover:scale-105">
                Join Our Coaching Program
              </a>
              <a href="https://www.speechflowai.com/pricing" target="_blank" rel="noopener noreferrer" className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg py-4 px-8 rounded-md font-semibold transition-all transform hover:scale-105">
                Try SpeechFlow AI
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 