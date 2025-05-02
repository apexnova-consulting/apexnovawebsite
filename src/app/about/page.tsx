'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Empowering Professionals with Tools, Strategies, and Self-Paced Growth
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              At ApexNova Consulting, we believe personal and professional transformation begins with mastering the way you communicate. Whether you're navigating leadership challenges, building confidence in the workplace, or overcoming mindset barriers, our platform offers practical resources to support your journey.
            </p>

            <p className="text-xl text-gray-600 mb-6">
              We specialize in digital tools, strategic frameworks, and guided content designed to help ambitious professionals like you gain clarity, boost confidence, and take control of your growth — all on your own time.
            </p>

            <p className="text-xl text-gray-600 mb-6">
              Explore our library of downloadable journals, skill-building templates, mindset-enhancing tools, and curated content to help you level up in communication, career, and confidence.
            </p>

            <p className="text-xl text-gray-600 mb-6">
              ApexNova is where self-development meets strategy — and where your next breakthrough begins.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <p className="text-gray-600">
                We combine practical tools with strategic frameworks to create a comprehensive learning experience that adapts to your schedule and learning style.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
              <p className="text-gray-600">
                Every resource we create is designed to deliver immediate value while building long-term skills that will serve you throughout your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 