import { FaExclamationTriangle, FaChartLine, FaUsers, FaUserTie, FaChartBar } from 'react-icons/fa';

const painPoints = [
  {
    icon: FaExclamationTriangle,
    title: "Brilliant Solutions, Blocked by Anxiety",
    description: "You're brilliant at solving complex problems but freeze when presenting to the C-suite. Your valuable insights get lost in delivery."
  },
  {
    icon: FaChartLine,
    title: "Career Growth Held Back",
    description: "You avoid speaking opportunities that could accelerate your career, watching less qualified colleagues advance ahead of you."
  },
  {
    icon: FaUsers,
    title: "Team Leadership Challenges",
    description: "Your team needs confident leadership, but communication anxiety undermines your ability to inspire and guide effectively."
  },
  {
    icon: FaUserTie,
    title: "High-Stakes Presentations",
    description: "Board presentations and investor pitches feel like career-threatening events rather than opportunities to showcase your expertise."
  },
  {
    icon: FaChartBar,
    title: "Ideas Getting Overlooked",
    description: "Your technical expertise deserves recognition, but anxiety in delivery means your contributions often get overshadowed."
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Technical Expertise Deserves to Be Heard and Respected
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let communication anxiety hold back your leadership potential. We understand the unique challenges technical leaders face.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/assessment"
            className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Your Free Communication Assessment
            <FaChartLine className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
} 