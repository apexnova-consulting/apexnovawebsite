import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SpeechFlowAI() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-secondary-900 to-secondary-700 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-dark opacity-50"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered Coaching – Elevate Your Communication
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Get instant speech feedback and AI-driven coaching in real-time.
            </p>
            
            <Link 
              href="https://www.speechflowai.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-accent text-lg py-3 px-8"
            >
              Try SpeechFlow AI – Free Trial
            </Link>
          </div>
        </div>
      </section>
      
      {/* What is SpeechFlow AI? */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What is SpeechFlow AI?</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              SpeechFlow AI is a revolutionary platform that combines artificial intelligence with proven communication coaching techniques to provide personalized, real-time feedback on your speech and presentation skills. It's like having a professional communication coach available 24/7.
            </p>
            
            <div className="bg-secondary-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl mb-4">Key Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Real-time speech feedback</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>AI-powered coaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Personalized improvement plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Confidence-building exercises</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <Link 
                href="#demo" 
                className="btn btn-secondary inline-flex items-center"
              >
                See SpeechFlow AI in Action → Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who is It For? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who is It For?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-secondary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Executives & Business Professionals</h3>
              <p className="text-gray-600">Improve leadership communication and enhance your executive presence.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-secondary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Public Speakers</h3>
              <p className="text-gray-600">Master stage presence and captivate audiences with confidence.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-secondary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sales Teams & Negotiators</h3>
              <p className="text-gray-600">Speak persuasively and close more deals with effective communication.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-secondary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Anyone Facing Communication Anxiety</h3>
              <p className="text-gray-600">Build confidence and overcome communication challenges step by step.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="https://www.speechflowai.com/sign-up" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Join Thousands Using SpeechFlow AI – Sign Up Now!
            </Link>
          </div>
        </div>
      </section>
      
      {/* AI-Powered Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">AI-Powered Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start justify-center">
                <div className="bg-secondary-100 p-4 rounded-full text-secondary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Interactive Speech Evaluations</h3>
                <p className="text-gray-600">
                  Get AI-driven insights on tone, clarity, and delivery. Our advanced algorithms analyze your speech patterns and provide specific recommendations to enhance your communication effectiveness.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start justify-center">
                <div className="bg-secondary-100 p-4 rounded-full text-secondary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Real-Time Practice Mode</h3>
                <p className="text-gray-600">
                  Speak, get instant feedback, and refine your skills on the spot. The intuitive interface highlights strengths and areas for improvement as you practice presentations or speeches.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start justify-center">
                <div className="bg-secondary-100 p-4 rounded-full text-secondary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI-Personalized Coaching</h3>
                <p className="text-gray-600">
                  Receive tailored exercises for faster improvement based on your specific communication patterns. Our AI adapts to your progress, focusing on the areas where you need the most support.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start justify-center">
                <div className="bg-secondary-100 p-4 rounded-full text-secondary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Track your progress over time with comprehensive metrics and visual charts. Set goals, monitor improvements, and celebrate your communication victories as you develop your skills.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="https://www.speechflowai.com/try-free" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Try SpeechFlow AI for Free → Sign Up
            </Link>
          </div>
        </div>
      </section>
      
      {/* Social Proof & Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Users Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "I overcame my fear of public speaking in weeks! The real-time feedback helped me identify and fix patterns I wasn't even aware of."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-semibold">David Wilson</h4>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "As an executive, clear communication is essential. SpeechFlow AI has helped me refine my leadership voice and connect better with my team."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-semibold">Jennifer Lee</h4>
                  <p className="text-sm text-gray-500">CFO, Tech Innovations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Our sales team has seen a 30% increase in closing rates since implementing SpeechFlow AI into our training program. Worth every penny!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-semibold">Marcus Johnson</h4>
                  <p className="text-sm text-gray-500">Sales Director</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-secondary-600">5,000+</h3>
                <p className="text-gray-600">Active Users</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-4xl font-bold text-secondary-600">4.8/5</h3>
                <p className="text-gray-600">Average Rating</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-4xl font-bold text-secondary-600">92%</h3>
                <p className="text-gray-600">Report Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing & Free Trial CTA */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Communication?
            </h2>
            
            <p className="text-xl mb-10 text-secondary-100">
              Start with a no-risk free trial and experience the power of AI-driven communication coaching.
            </p>
            
            <div className="bg-white text-dark rounded-xl shadow-xl overflow-hidden">
              <div className="bg-secondary-100 p-6 text-center">
                <h3 className="text-3xl font-bold text-secondary-800">Start Free</h3>
                <p className="text-secondary-700 mt-2">No credit card required</p>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>7-day full access trial</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Real-time speech analysis</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Basic AI coaching features</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Progress tracking</span>
                  </li>
                </ul>
                
                <Link 
                  href="https://www.speechflowai.com/free-trial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full py-3 text-center bg-secondary-600 hover:bg-secondary-700 text-white font-bold rounded-md"
                >
                  Start Your Free Trial
                </Link>
              </div>
            </div>
            
            <div className="mt-8 text-secondary-200">
              <p>Already convinced? <Link href="https://www.speechflowai.com/pricing" className="text-white underline">View our full pricing plans</Link></p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 