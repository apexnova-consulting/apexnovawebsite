'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">Terms of Service</h1>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">1. Terms</h2>
                <p>By accessing the website at <a href="/" className="text-primary-600 hover:underline">https://www.apexnovaconsulting.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on ApexNova Consulting's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>attempt to decompile or reverse engineer any software contained on ApexNova Consulting's website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
                <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by ApexNova Consulting at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">3. Disclaimer</h2>
                <p>The materials on ApexNova Consulting's website are provided on an 'as is' basis. ApexNova Consulting makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                <p>Further, ApexNova Consulting does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">4. Limitations</h2>
                <p>In no event shall ApexNova Consulting or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ApexNova Consulting's website, even if ApexNova Consulting or a ApexNova Consulting authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">5. Accuracy of Materials</h2>
                <p>The materials appearing on ApexNova Consulting's website could include technical, typographical, or photographic errors. ApexNova Consulting does not warrant that any of the materials on its website are accurate, complete or current. ApexNova Consulting may make changes to the materials contained on its website at any time without notice. However ApexNova Consulting does not make any commitment to update the materials.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">6. Links</h2>
                <p>ApexNova Consulting has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ApexNova Consulting of the site. Use of any such linked website is at the user's own risk.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">7. Modifications</h2>
                <p>ApexNova Consulting may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">8. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

                <h2 className="text-xl font-bold mt-6 mb-4 text-primary-500">9. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us at:</p>
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