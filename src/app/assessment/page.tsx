'use client';

import { useState } from 'react';
import { FaChartLine, FaArrowRight, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How do you typically feel before presenting to senior executives?",
    options: [
      "Extremely anxious, often affecting my performance",
      "Somewhat nervous, but manageable",
      "Mildly concerned about specific aspects",
      "Generally confident, with occasional doubts"
    ]
  },
  {
    id: 2,
    text: "When leading team meetings, how effectively do you feel you communicate complex technical concepts?",
    options: [
      "Often struggle to make technical concepts accessible",
      "Sometimes face challenges in simplifying information",
      "Usually manage well, with occasional difficulties",
      "Consistently able to communicate clearly"
    ]
  },
  {
    id: 3,
    text: "How do you handle impromptu questions during presentations?",
    options: [
      "Often feel flustered and struggle to respond",
      "Can answer but often lack confidence",
      "Handle most questions well but sometimes hesitate",
      "Confidently address questions with clear responses"
    ]
  },
  {
    id: 4,
    text: "In high-stakes situations (board meetings, investor pitches), how would you rate your communication confidence?",
    options: [
      "Significantly impacted by stress and anxiety",
      "Performance varies greatly depending on preparation",
      "Generally maintain composure with some tension",
      "Consistently perform well under pressure"
    ]
  },
  {
    id: 5,
    text: "How do past negative speaking experiences affect your current communication?",
    options: [
      "Strongly influence and create ongoing anxiety",
      "Sometimes resurface and affect confidence",
      "Occasionally think about them but manage well",
      "Have largely moved past previous challenges"
    ]
  }
];

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const percentage = (total / ((questions.length - 1) * 3)) * 100;
    return Math.round(percentage);
  };

  const getRecommendation = (score: number) => {
    if (score < 40) {
      return {
        title: "Foundation Building Needed",
        description: "Your responses indicate significant communication anxiety that's impacting your leadership potential. Our Executive Communication Intensive would be ideal for building confidence from the ground up.",
        program: "Recommended: Executive Communication Intensive"
      };
    } else if (score < 70) {
      return {
        title: "Growth Opportunity",
        description: "You have a solid foundation but could benefit from structured support to handle high-stakes situations more confidently. The Technical Leadership Presence Program would help you excel.",
        program: "Recommended: Technical Leadership Presence Program"
      };
    } else {
      return {
        title: "Refinement Stage",
        description: "You're already a confident communicator looking to excel in specific areas. Our High-Stakes Presentation Mastery program would help you achieve peak performance.",
        program: "Recommended: High-Stakes Presentation Mastery"
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the assessment data to your backend
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showResults ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Communication Confidence Assessment
              </h1>
              <p className="text-xl text-gray-600">
                Discover your communication strengths and areas for growth with our professional assessment.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-blue-600">
                  {Math.round((currentQuestion / questions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {questions[currentQuestion].text}
              </h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(questions[currentQuestion].id, index)}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : !submitted ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Communication Profile Is Ready
              </h2>
              <p className="text-xl text-gray-600">
                Complete your information to receive your detailed assessment and personalized recommendations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Your Results
                <FaArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Communication Confidence Score: {calculateScore()}%
              </h2>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                <div
                  className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${calculateScore()}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {getRecommendation(calculateScore()).title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {getRecommendation(calculateScore()).description}
                </p>
                <div className="font-medium text-blue-900">
                  {getRecommendation(calculateScore()).program}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Next Steps:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mt-1 mr-3" />
                    <span>We've sent your detailed assessment report to your email</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mt-1 mr-3" />
                    <span>Schedule a free strategy call to discuss your results</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mt-1 mr-3" />
                    <span>Receive a personalized development plan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Your Strategy Call
                <FaArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 