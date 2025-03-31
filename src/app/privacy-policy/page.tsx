'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">Privacy Policy</h1>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">1. Introduction</h2>
                <p>Welcome to ApexNova Consulting's Privacy Policy. Your privacy is critically important to us. At ApexNova Consulting, we have a few fundamental principles:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you through the operation of our services.</li>
                  <li>We store personal information for only as long as we have a reason to keep it.</li>
                  <li>We aim to make it as simple as possible for you to control what information is shared publicly (or kept private), indexed by search engines, and permanently deleted.</li>
                  <li>We help protect you from overreaching government demands for your personal information.</li>
                  <li>We aim for full transparency on how we gather, use, and share your personal information.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">2. Information We Collect</h2>
                <p>We only collect information about you if we have a reason to do so — for example, to provide our services, to communicate with you, or to make our services better. We collect this information from three sources: if and when you provide information to us, automatically through operating our services, and from outside sources.</p>

                <h3 className="text-lg font-semibold mt-5 mb-3 text-primary-500">Information You Provide to Us:</h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li><strong>Basic Account Information:</strong> We ask for basic information from you in order to set up your account.</li>
                  <li><strong>Public Profile Information:</strong> If you have an account with us, we collect the information that you provide for your public profile.</li>
                  <li><strong>Transaction and Billing Information:</strong> If you buy something from us, you will provide additional personal and payment information such as your name, credit card information, and contact information.</li>
                  <li><strong>Communications with Us:</strong> You may also provide us with information when you respond to surveys, communicate with our customer service team, or post a question in our public forums.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">3. How We Use Information</h2>
                <p>We use information about you for the purposes listed below:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li><strong>To provide our services.</strong> For example, to set up and maintain your account, provide customer service, process payments and orders, and verify user information.</li>
                  <li><strong>To ensure quality, maintain safety, and improve our services.</strong> For example, by providing automatic upgrades and new versions of our services.</li>
                  <li><strong>To market our services and measure, gauge, and improve the effectiveness of our marketing.</strong> For example, by targeting our marketing messages to groups of our users and measuring user engagement with those messages.</li>
                  <li><strong>To protect our services, our users, and the public.</strong> For example, by detecting security incidents, detecting and protecting against malicious, deceptive, fraudulent, or illegal activity.</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">4. Sharing Information</h2>
                <p>We share information about you in limited circumstances, and with appropriate safeguards on your privacy.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">5. Your Rights</h2>
                <p>Depending on where you live, you may have certain rights regarding your personal information, such as the right to:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Access or request a copy of the information we have about you</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your information</li>
                  <li>Object to our use of your information</li>
                  <li>Withdraw consent</li>
                  <li>Complain to a regulatory authority</li>
                </ul>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">6. Contact Information</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p>ApexNova Consulting<br />
                  Email: mike.nielson@apexnovaconsultant.com<br />
                  Phone: (973) 348-5008</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 