import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  // Team members data
  const team = [
    {
      id: 1,
      name: "Mike Nielson",
      role: "Founder & CEO",
      bio: "Former Fortune 500 executive communication coach with 15+ years of experience helping leaders find their authentic voice and deliver impactful presentations.",
      image: "/img/team/mike.jpg" // Will need to be replaced with actual images
    },
    {
      id: 2,
      name: "David Chen",
      role: "Chief Technology Officer",
      bio: "AI specialist with a background in natural language processing and speech analysis. Leads the development of SpeechFlow AI.",
      image: "/img/team/david.jpg"
    },
    {
      id: 3,
      name: "Michelle Rodriguez",
      role: "Head of Coaching",
      bio: "TEDx speaker coach and communication strategist with expertise in helping executives deliver high-impact presentations.",
      image: "/img/team/michelle.jpg"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Director of Client Success",
      bio: "Oversees client relationships and ensures exceptional experiences throughout coaching programs and AI implementation.",
      image: "/img/team/james.jpg"
    }
  ];

  // Values data
  const values = [
    {
      id: 1,
      title: "Authenticity",
      description: "We believe effective communication starts with authenticity. Our coaching helps you find your true voice.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Innovation",
      description: "We combine traditional coaching with cutting-edge AI technology to create transformative learning experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in coaching, technology, and client service to deliver exceptional results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Empowerment",
      description: "We empower our clients to become confident, effective communicators in all professional and personal settings.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transforming executive communication through expertise, technology, and a passion for authentic leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At ApexNova Consulting, our mission is to revolutionize executive communication coaching through innovative technology and personalized expertise. We empower leaders to discover their authentic voice, command presence in any room, and communicate with clarity, confidence, and impact. By combining traditional coaching methods with cutting-edge AI technology, we deliver transformative experiences that elevate careers and drive organizational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                From traditional coaching to AI-powered communication development
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <div className="w-24 h-24 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">2015</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                  <p className="text-gray-600">
                    Founded as a boutique executive coaching firm, focusing on helping C-suite leaders develop authentic communication styles. Started with a team of three experienced coaches working with Fortune 500 executives.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <div className="w-24 h-24 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">2018</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Expanding Services</h3>
                  <p className="text-gray-600">
                    Expanded to offer group workshops and digital resources. Developed our proprietary communication assessment methodology. Grew to a team of ten coaches with specialized expertise across industries.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <div className="w-24 h-24 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">2021</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">AI Innovation</h3>
                  <p className="text-gray-600">
                    Began development of SpeechFlow AI, our innovative platform combining human coaching expertise with artificial intelligence to provide real-time feedback and personalized improvement plans.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <div className="w-24 h-24 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">Now</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">The Future</h3>
                  <p className="text-gray-600">
                    Today, we continue to blend human expertise with technological innovation, creating an unparalleled coaching experience for executives and professionals worldwide. Our client list spans over 20 countries and numerous industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                The principles that guide our approach to communication coaching
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {values.map((value) => (
                <div key={value.id} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Experienced coaches and technology experts dedicated to your communication success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-64 bg-gray-200">
                    {/* Replace with actual team member image */}
                    <div className="h-full flex items-center justify-center bg-primary-100 text-primary-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-primary-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted By Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                We've helped executives and teams from these leading organizations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {/* Replace with actual client logos */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                    <span className="font-medium">Logo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Ready to transform your communication skills and elevate your leadership presence?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn bg-accent-500 hover:bg-accent-600 text-white text-lg py-3 px-8">
                Contact Us
              </Link>
              <Link href="/coaching" className="btn bg-white text-primary-800 hover:bg-gray-100 text-lg py-3 px-8">
                Explore Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 