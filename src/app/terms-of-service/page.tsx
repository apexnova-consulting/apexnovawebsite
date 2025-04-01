'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-sm text-gray-500 mb-8">Last Updated: {formattedDate}</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing or using ApexNova Consulting's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">2. Description of Services</h2>
                <p className="text-gray-700 mb-4">
                  ApexNova Consulting provides executive communication coaching, sales performance optimization, and AI automation services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Executive communication coaching sessions</li>
                  <li>Digital products and educational materials</li>
                  <li>Corporate training workshops</li>
                  <li>AI-based speech analysis and feedback</li>
                  <li>Sales performance consulting</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">3. User Accounts</h2>
                <p className="text-gray-700 mb-4">
                  Some services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete information when creating your account</li>
                  <li>Promptly update your information to keep it accurate and complete</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Ensure that you log out of your account at the end of each session</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">4. Payment and Refunds</h2>
                <p className="text-gray-700 mb-4">
                  By purchasing our services or products, you agree to the following terms:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>All payments are processed securely through our payment processors</li>
                  <li>Prices for services and products are subject to change without notice</li>
                  <li>Refunds for coaching services are provided only as specified in your coaching agreement</li>
                  <li>Digital products may be subject to a 14-day refund policy if you are unsatisfied with your purchase</li>
                  <li>Customized corporate services are non-refundable once the work has commenced</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content on the ApexNova Consulting website, including text, graphics, logos, images, audio, and video, is the property of ApexNova Consulting or its content suppliers and is protected by copyright and intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile, or otherwise exploit this content unless expressly authorized by ApexNova Consulting.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">6. User Conduct</h2>
                <p className="text-gray-700 mb-4">
                  When using our services, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on the rights of others</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Transmit any harmful code or material</li>
                  <li>Impersonate any person or entity</li>
                  <li>Collect information about other users without their consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700">
                  ApexNova Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services or any content provided through our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">8. Termination</h2>
                <p className="text-gray-700">
                  We reserve the right to terminate or suspend your access to our services, without prior notice or liability, for any reason, including a breach of these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes indicates your acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">10. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms of Service are governed by and construed in accordance with the laws of the United States and the State of California, without regard to its conflict of law principles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-4">11. Contact Information</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Email:</strong> info@apexnovaconsulting.com<br />
                  <strong>Phone:</strong> (650) 395-7733
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 