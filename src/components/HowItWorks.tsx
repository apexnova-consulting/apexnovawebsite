import { FaUserCheck, FaRocket, FaStar } from 'react-icons/fa';

const steps = [
  {
    icon: FaUserCheck,
    title: "1. Breakthrough Assessment",
    description: "Take our proprietary assessment to uncover the hidden emotional barriers holding back your communication potential. Get immediate insights into your unique challenges.",
    highlight: "15-minute assessment, instant results"
  },
  {
    icon: FaRocket,
    title: "2. Personalized Transformation Plan",
    description: "Together, we'll create your custom roadmap to confident communication, blending proven techniques with emotional intelligence strategies tailored to your needs.",
    highlight: "One 60-minute breakthrough session"
  },
  {
    icon: FaStar,
    title: "3. Rapid Transformation",
    description: "Experience breakthrough results as you implement your personalized strategies, supported by our proven framework and expert guidance.",
    highlight: "See results within 30 days"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
            Simple Process, Powerful Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Your Path to Communication Confidence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven three-step system that transforms anxiety into authentic leadership presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {step.description}
              </p>
              <div className="inline-block bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-900 font-medium text-sm">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/breakthrough-call"
            className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Transformation
            <FaRocket className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
} 