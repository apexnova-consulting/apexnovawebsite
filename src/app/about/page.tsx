'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              About ApexNova Consulting
            </h1>
            <p className="text-xl text-center text-gray-100 mb-8">
              Empowering businesses to achieve their full potential through innovative solutions and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600">
                At ApexNova Consulting, we are dedicated to helping businesses transform their operations, enhance their communication strategies, and leverage cutting-edge technology to drive sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Innovation</h3>
                <p className="text-gray-600">
                  We stay at the forefront of industry trends and technological advancements to provide our clients with the most effective solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Excellence</h3>
                <p className="text-gray-600">
                  Our commitment to excellence drives us to deliver exceptional results and exceed client expectations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Growth</h3>
                <p className="text-gray-600">
                  We partner with our clients to create sustainable growth strategies that deliver long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                These core values guide everything we do at ApexNova Consulting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Client-Centric Approach</h3>
                <p className="text-gray-600">
                  We put our clients' needs first, working closely with them to understand their unique challenges and goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of honesty and transparency in all our business dealings.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of teamwork and work closely with our clients to achieve shared success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We are committed to ongoing learning and improvement to deliver the best possible results for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Contact us today to learn how we can help you achieve your business goals.
            </p>
            <a
              href="/contact"
              className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-4 px-10 rounded-md font-semibold transition-all transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 