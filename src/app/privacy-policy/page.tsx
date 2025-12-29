'use client';

export default function PrivacyPolicy() {
  return (
    <main className="bg-slate-950 min-h-screen pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <div className="prose prose-invert max-w-none">
                <p className="mb-4 text-slate-400">Last Updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">1. Introduction</h2>
                <p className="text-slate-300 mb-4">Welcome to ApexNova Consulting's Privacy Policy. Your privacy is critically important to us. At ApexNova Consulting, we have a few fundamental principles:</p>
                <ul className="list-disc pl-6 my-4 space-y-2 text-slate-300">
                  <li>We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you through the operation of our services.</li>
                  <li>We store personal information for only as long as we have a reason to keep it.</li>
                  <li>We aim to make it as simple as possible for you to control what information is shared publicly (or kept private), indexed by search engines, and permanently deleted.</li>
                  <li>We help protect you from overreaching government demands for your personal information.</li>
                  <li>We aim for full transparency on how we gather, use, and share your personal information.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">2. Information We Collect</h2>
                <p className="text-slate-300 mb-4">We only collect information about you if we have a reason to do so — for example, to provide our services, to communicate with you, or to make our services better. We collect this information from three sources: if and when you provide information to us, automatically through operating our services, and from outside sources.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Information You Provide to Us:</h3>
                <ul className="list-disc pl-6 my-4 space-y-2 text-slate-300">
                  <li><strong className="text-white">Basic Account Information:</strong> We ask for basic information from you in order to set up your account.</li>
                  <li><strong className="text-white">Public Profile Information:</strong> If you have an account with us, we collect the information that you provide for your public profile.</li>
                  <li><strong className="text-white">Transaction and Billing Information:</strong> If you buy something from us, you will provide additional personal and payment information such as your name, credit card information, and contact information.</li>
                  <li><strong className="text-white">Communications with Us:</strong> You may also provide us with information when you respond to surveys, communicate with our customer service team, or post a question in our public forums.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">3. How We Use Information</h2>
                <p className="text-slate-300 mb-4">We use information about you for the purposes listed below:</p>
                <ul className="list-disc pl-6 my-4 space-y-2 text-slate-300">
                  <li><strong className="text-white">To provide our services.</strong> For example, to set up and maintain your account, provide customer service, process payments and orders, and verify user information.</li>
                  <li><strong className="text-white">To ensure quality, maintain safety, and improve our services.</strong> For example, by providing automatic upgrades and new versions of our services.</li>
                  <li><strong className="text-white">To market our services and measure, gauge, and improve the effectiveness of our marketing.</strong> For example, by targeting our marketing messages to groups of our users and measuring user engagement with those messages.</li>
                  <li><strong className="text-white">To protect our services, our users, and the public.</strong> For example, by detecting security incidents, detecting and protecting against malicious, deceptive, fraudulent, or illegal activity.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">4. Sharing Information</h2>
                <p>We share information about you in limited circumstances, and with appropriate safeguards on your privacy.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">5. Your Rights</h2>
                <p>Depending on where you live, you may have certain rights regarding your personal information, such as the right to:</p>
                <ul className="list-disc pl-6 my-4 space-y-2 text-slate-300">
                  <li>Access or request a copy of the information we have about you</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your information</li>
                  <li>Object to our use of your information</li>
                  <li>Withdraw consent</li>
                  <li>Complain to a regulatory authority</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-cyber">6. Contact Information</h2>
                <p className="text-slate-300 mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
                <div className="text-slate-300 bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-4">
                  <p className="font-bold text-white mb-2">ApexNova Consulting</p>
                  <p>Email: <a href="mailto:info@apexnovaconsulting.com" className="text-cyber hover:text-trust transition-colors">info@apexnovaconsulting.com</a></p>
                  <p>Phone: <a href="tel:+1-973-348-5008" className="text-cyber hover:text-trust transition-colors">(973) 348-5008</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 