'use client';

import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms of Service</h1>
        <p className="text-slate-400 mb-4">Please read these terms carefully before using our services.</p>
        <p className="text-slate-400 mb-8">Last Updated: 7/30/2025</p>

        <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">1. Acceptance of Terms</h2>
            <p className="text-slate-300 mb-4">By accessing or using ApexNova Consulting's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">2. Description of Services</h2>
            <p className="text-slate-300 mb-4">ApexNova Consulting provides AI governance and security services, including but not limited to:</p>
            <ul className="list-disc pl-6 my-4 space-y-2 text-slate-300">
              <li>AI governance frameworks and policies</li>
              <li>Compliance audits (NJDPA, NY RAISE Act, HIPAA)</li>
              <li>AI security assessments</li>
              <li>Certification programs (Apex Seal)</li>
              <li>Training and consulting services</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">3. User Accounts</h2>
            <p className="text-slate-300 mb-4">Some services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to:</p>
            <ul className="list-disc pl-6 my-4 space-y-2 text-slate-300">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Promptly update your information to keep it accurate and complete</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Ensure that you log out of your account at the end of each session</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">4. Payment and Refunds</h2>
            <p className="text-slate-300 mb-4">By purchasing our services or products, you agree to the following terms:</p>
            <ul className="list-disc pl-6 my-4 space-y-2 text-slate-300">
              <li>All payments are processed securely through our payment processors</li>
              <li>Prices for services and products are subject to change without notice</li>
              <li>Refunds for services are provided only as specified in your service agreement</li>
              <li>Digital products may be subject to a 14-day refund policy if you are unsatisfied with your purchase</li>
              <li>Customized corporate services are non-refundable once the work has commenced</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">5. Intellectual Property</h2>
            <p className="text-slate-300 mb-4">All content on the ApexNova Consulting website, including text, graphics, logos, images, audio, and video, is the property of ApexNova Consulting or its content suppliers and is protected by copyright and intellectual property laws.</p>
            <p className="text-slate-300 mb-4">You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile, or otherwise exploit this content unless expressly authorized by ApexNova Consulting.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">6. User Conduct</h2>
            <p className="text-slate-300 mb-4">When using our services, you agree not to:</p>
            <ul className="list-disc pl-6 my-4 space-y-2 text-slate-300">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Interfere with or disrupt our services</li>
              <li>Transmit any harmful code or material</li>
              <li>Impersonate any person or entity</li>
              <li>Collect information about other users without their consent</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">7. Limitation of Liability</h2>
            <p className="text-slate-300 mb-4">ApexNova Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services or any content provided through our services.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">8. Termination</h2>
            <p className="text-slate-300 mb-4">We reserve the right to terminate or suspend your access to our services, without prior notice or liability, for any reason, including a breach of these Terms of Service.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">9. Changes to Terms</h2>
            <p className="text-slate-300 mb-4">We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes indicates your acceptance of the new terms.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">10. Governing Law</h2>
            <p className="text-slate-300 mb-4">These Terms of Service are governed by and construed in accordance with the laws of the United States and the State of New Jersey, without regard to its conflict of law principles.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">11. Contact Information</h2>
            <p className="text-slate-300 mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
            <div className="text-slate-300 bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-4">
              <p className="font-bold text-white mb-2">ApexNova Consulting</p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:info@apexnovaconsulting.com" className="text-cyber hover:text-trust transition-colors">info@apexnovaconsulting.com</a></p>
              <p><strong className="text-white">Phone:</strong> <a href="tel:+1-973-348-5008" className="text-cyber hover:text-trust transition-colors">(973) 348-5008</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}