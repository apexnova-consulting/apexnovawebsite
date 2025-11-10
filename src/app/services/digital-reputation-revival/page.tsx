'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCheck, FaSearch, FaChartLine, FaStar, FaUserShield, FaNewspaper, FaRocket } from 'react-icons/fa';

export default function DigitalReputationRevivalPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteLinkedIn: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const packages = [
    {
      name: "Digital Reset",
      price: "$499 – $999",
      icon: <FaSearch className="w-8 h-8" />,
      description: "Get a clean slate fast",
      features: [
        "Comprehensive digital footprint audit",
        "Negative content identification",
        "Basic SEO optimization",
        "Google My Business cleanup",
        "Social media profile optimization",
        "Quick-win implementation"
      ],
      ideal: "Ideal for: Solo professionals needing a quick refresh"
    },
    {
      name: "Reputation Revival",
      price: "$1,500 – $3,000",
      icon: <FaStar className="w-8 h-8" />,
      description: "Comprehensive reputation overhaul",
      features: [
        "Everything in Digital Reset, plus:",
        "Advanced SEO content creation",
        "Review management & generation strategy",
        "AI persona optimization (ChatGPT, Perplexity, etc.)",
        "Press mention & PR outreach",
        "Ongoing monitoring (30 days)",
        "Personal brand positioning"
      ],
      ideal: "Ideal for: Entrepreneurs & executives",
      popular: true
    },
    {
      name: "Digital Authority Build",
      price: "$5,000 – $8,000",
      icon: <FaRocket className="w-8 h-8" />,
      description: "Become the go-to authority in your field",
      features: [
        "Everything in Reputation Revival, plus:",
        "Thought leadership content strategy",
        "Multi-platform authority building",
        "Media placements & interviews",
        "Speaking opportunities coordination",
        "Wikipedia page creation/optimization",
        "Crisis management protocols",
        "90-day ongoing support & optimization"
      ],
      ideal: "Ideal for: Industry leaders & public figures"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Free Digital Reputation Audit",
      description: "We scan your entire digital footprint—search results, social media, reviews, AI mentions, and more. You'll get a detailed report showing what's hurting your reputation.",
      icon: <FaSearch className="w-10 h-10" />
    },
    {
      number: "02",
      title: "Custom Strategy Proposal",
      description: "Based on your audit, we create a tailored action plan with clear priorities, timeline, and expected outcomes. No cookie-cutter solutions—just what you need.",
      icon: <FaChartLine className="w-10 h-10" />
    },
    {
      number: "03",
      title: "Implementation & Ongoing Support",
      description: "Our team gets to work cleaning up negative content, building positive assets, optimizing your digital presence, and establishing you as an authority in your space.",
      icon: <FaUserShield className="w-10 h-10" />
    },
    {
      number: "04",
      title: "Results + Follow-Up",
      description: "Watch your reputation transform. We provide regular progress reports, ongoing monitoring, and continued optimization to ensure lasting results.",
      icon: <FaNewspaper className="w-10 h-10" />
    }
  ];

  const beforeAfter = [
    {
      before: "Negative reviews dominating page 1",
      after: "Positive press mentions & testimonials"
    },
    {
      before: "Outdated or unflattering content",
      after: "Fresh, professional brand presence"
    },
    {
      before: "Invisible to AI search tools",
      after: "Recognized authority by ChatGPT & Perplexity"
    },
    {
      before: "Lost opportunities due to poor results",
      after: "Prospects impressed by what they find"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'digital-reputation-revival'
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-8">
            <FaUserShield className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Digital Reputation Revival<br />
            <span className="text-accent-light">Reclaim Your Online Presence</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto mb-4">
            We don't just fix your online image — we rebuild your digital DNA.
          </p>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            ApexNova helps professionals, entrepreneurs, and anyone reclaim their reputation online, boost credibility, and get a fresh start — fast.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#audit-form"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg group text-lg"
            >
              Get Your Free Digital Reputation Audit
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-lg transition-colors border border-white/20 text-lg"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-secondary">
              Your Reputation Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what happens when you take control of your digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {beforeAfter.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="mb-6">
                    <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold mb-4">
                      BEFORE
                    </div>
                    <p className="text-gray-700 text-lg">{item.before}</p>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-6">
                    <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-lg font-semibold mb-4">
                      AFTER
                    </div>
                    <p className="text-gray-700 text-lg font-semibold">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-secondary">
              Choose Your Reputation Revival Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick refreshes to complete authority builds—we have the right solution for you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden transition-all hover:scale-105 border-2 ${
                  pkg.popular ? 'border-accent ring-4 ring-accent ring-opacity-20' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 rounded-bl-lg font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                      pkg.popular ? 'bg-accent text-white' : 'bg-primary text-white'
                    }`}>
                      {pkg.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-2 text-secondary">{pkg.name}</h3>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  </div>
                  <p className="text-center text-gray-600 mb-6 italic">{pkg.description}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700 font-semibold">{pkg.ideal}</p>
                  </div>

                  <a
                    href="#audit-form"
                    className={`group flex items-center justify-center w-full font-semibold px-6 py-4 rounded-lg transition-all ${
                      pkg.popular 
                        ? 'bg-accent hover:bg-accent-dark text-white' 
                        : 'bg-primary hover:bg-primary-dark text-white'
                    }`}
                  >
                    Get Started
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A simple, proven process from audit to authority
            </p>
          </div>

          <div className="space-y-16">
            {process.map((step, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="flex-shrink-0 lg:w-1/3 flex flex-col items-center relative">
                    <div className="text-8xl font-bold text-accent-light opacity-20 mb-4">
                      {step.number}
                    </div>
                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white mb-4 relative z-10">
                      {step.icon}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block w-0.5 h-16 bg-accent-light opacity-30 mt-4"></div>
                    )}
                  </div>

                  <div className="flex-1 lg:w-2/3 bg-secondary-light rounded-2xl p-8 shadow-xl">
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="audit-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          {!submitSuccess ? (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
                  <FaSearch className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-secondary">
                  Get Your Free Digital Reputation Audit
                </h2>
                <p className="text-xl text-gray-600">
                  Discover what's hurting your reputation online and how we can fix it
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website or LinkedIn Profile *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.websiteLinkedIn}
                    onChange={(e) => setFormData({ ...formData, websiteLinkedIn: e.target.value })}
                    placeholder="https://linkedin.com/in/yourname"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Description of Your Need *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="What reputation challenges are you facing? What would you like to achieve?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Audit'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Prefer to speak directly?</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-primary hover:text-primary-dark font-semibold underline"
                >
                  Schedule a 15-Minute Strategy Call
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <FaCheck className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-secondary">
                Audit Request Received!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for reaching out. We'll analyze your digital presence and send you a detailed audit report within 24-48 hours.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Cross-Promo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Explore Our Other Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete solutions for your professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/services/ai-governance"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-primary"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaUserShield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">
                    AI Governance & Security
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Protect your business data and ensure compliant AI usage across your organization.
                  </p>
                  <span className="text-primary font-semibold inline-flex items-center">
                    Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/services/sales-marketing"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-primary"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">
                    Sales & Marketing Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Accelerate revenue growth with proven strategies and process optimization.
                  </p>
                  <span className="text-primary font-semibold inline-flex items-center">
                    Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

