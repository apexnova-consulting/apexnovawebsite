import { FaStar, FaUsers, FaRocket, FaChartLine, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    tier: "Premium",
    name: "Executive Communication Intensive",
    price: "$18,000",
    duration: "90-day transformation program",
    description: "Our flagship program for CTOs and VPs who want to transform their communication impact.",
    features: [
      "Weekly 1:1 coaching sessions",
      "Custom presentation coaching",
      "24/7 support for urgent presentations",
      "Results guarantee: Improved confidence scores or money back"
    ],
    icon: FaStar,
    primary: true
  },
  {
    tier: "Professional",
    name: "Technical Leadership Presence Program",
    price: "$14,000",
    duration: "60-day program",
    description: "Perfect for senior engineers moving into leadership roles.",
    features: [
      "Group coaching (max 8 people)",
      "Mock presentation practice",
      "Executive presence training",
      "Career advancement support"
    ],
    icon: FaUsers,
    primary: false
  },
  {
    tier: "Accelerated",
    name: "High-Stakes Presentation Mastery",
    price: "$9,500",
    duration: "30-day intensive",
    description: "Focused program for conference speaking and board presentations.",
    features: [
      "Personalized presentation development",
      "Anxiety management techniques",
      "Professional presentation coaching",
      "Rehearsal and feedback sessions"
    ],
    icon: FaRocket,
    primary: false
  }
];

const monthlyServices = [
  {
    name: "Monthly Executive Coaching",
    price: "$4,500/month",
    features: [
      "Ongoing support for technical executives",
      "Monthly strategy sessions",
      "Presentation prep as needed",
      "Email/Slack support"
    ]
  },
  {
    name: "Communication Confidence Audit",
    price: "$2,500",
    features: [
      "2-hour assessment",
      "Personalized development roadmap",
      "Video analysis",
      "30-day action plan"
    ]
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
            Premium Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Transform Your Communication Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed for technical leaders who are ready to overcome communication anxiety and advance their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${service.primary ? 'ring-2 ring-blue-900' : ''
                }`}
            >
              {service.primary && (
                <div className="absolute top-0 inset-x-0 bg-blue-900 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-blue-900">{service.tier}</h3>
                    <div className="mt-1 text-2xl font-bold text-gray-900">{service.price}</div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <service.icon className="w-6 h-6 text-blue-900" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 mb-2">{service.duration}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaChartLine className="w-5 h-5 text-blue-900 mt-1 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 ${service.primary
                    ? 'bg-blue-900 text-white hover:bg-blue-800'
                    : 'bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50'
                    }`}
                >
                  Schedule Your Consultation
                  <FaArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {monthlyServices.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  <div className="text-2xl font-bold text-blue-900 mt-1">{service.price}</div>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaChartLine className="w-5 h-5 text-blue-900 mt-1 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/schedule"
                className="block text-center py-3 px-6 rounded-xl font-medium bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 