import { FaStar, FaChartLine, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

const statistics = [
  {
    value: '92%',
    label: 'Report Breakthrough in Confidence',
    icon: FaStar
  },
  {
    value: '85%',
    label: 'Advance in Career Within 12 Months',
    icon: FaChartLine
  },
  {
    value: '$52k',
    label: 'Average Salary Increase',
    icon: FaRocket
  }
];

const testimonials = [
  {
    quote: "The mental health-focused approach was exactly what I needed. Other programs taught techniques but never addressed my deep-rooted anxiety. ApexNova helped me find my authentic voice.",
    author: "Jennifer M.",
    role: "Senior Director → VP of Operations",
    image: "/images/testimonials/executive-1.jpg"
  },
  {
    quote: "I was skeptical about another coaching program, but ApexNova's focus on the emotional barriers holding me back made all the difference. My team now sees me as the confident leader I always knew I could be.",
    author: "David L.",
    role: "Engineering Manager → Director of Engineering",
    image: "/images/testimonials/executive-2.jpg"
  },
  {
    quote: "As someone who struggled with anxiety and imposter syndrome, ApexNova's approach was transformative. I now present to the board with genuine confidence, not just practiced techniques.",
    author: "Sarah K.",
    role: "Product Lead → Chief Product Officer",
    image: "/images/testimonials/executive-3.jpg"
  }
];

export default function Proof() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Transformations That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of professionals who've broken through their communication barriers and transformed their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-transform duration-200"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative w-20 h-20 mb-6 mx-auto">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <blockquote className="text-gray-600 text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-blue-900 mt-1">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
            <FaChartLine className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
} 