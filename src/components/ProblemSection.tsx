import React from 'react';
import { FaRobot, FaChartLine, FaUsers } from 'react-icons/fa';

const ProblemSection = () => {
  const problems = [
    {
      icon: <FaRobot className="w-12 h-12 text-red-500" />,
      title: "Overwhelming Tool Sprawl",
      description: "Multiple AI tools, no clear strategy on when to use what. Teams waste time switching between tools and duplicating work."
    },
    {
      icon: <FaUsers className="w-12 h-12 text-yellow-500" />,
      title: "No Enablement Strategy",
      description: "Training sessions fall flat. Documentation goes unread. Teams revert to old ways because there's no system for sustainable adoption."
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-orange-500" />,
      title: "Lost ROI & Productivity",
      description: "Despite significant AI investment, productivity gains are minimal. Leadership struggles to justify the spend while teams resist change."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Why AI Adoption Fails
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Most companies focus on buying the right tools, but struggle with the human side of AI transformation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;