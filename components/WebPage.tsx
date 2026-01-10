"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  MessageCircle,
  BookOpen,
  Award,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";
import profile from "../public/profile1.png";

function WebPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-blue-900">
              Dr. Aanchal
            </h1>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("subjects")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Subjects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </button>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm md:text-base"
            >
              Book Demo
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 flex justify-center">
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center ring-4 ring-blue-500 ring-offset-4 ring-offset-white shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-full overflow-hidden">
                    <Image
                      src={profile}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-3">
                  Learning with Medicos
                </h2>

                <p className="text-lg md:text-xl text-blue-600 mb-2 font-medium">
                  by Dr. Aanchal Bhatia
                </p>

                {/* <p className="text-xl md:text-2xl text-gray-500 mb-3">
                  Assistant Professor of Medical Physiology
                </p> */}

                <p className="text-lg md:text-xl text-gray-500 mb-6">
                  MBBS | Undergraduate & Postgraduate Medical Education
                </p>

                <p className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl">
                  Providing structured, concept-oriented teaching in medical
                  sciences with emphasis on academic excellence, clinical
                  relevance, and examination preparedness.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium text-lg"
                  >
                    Book a Demo Class
                  </button>
                  <button
                    onClick={() => scrollToSection("subjects")}
                    className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium text-lg"
                  >
                    View Subjects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
              About Me
            </h3>
            <div className="max-w-4xl mx-auto">
              {/* <div className="mb-10">
                <h4 className="text-2xl font-semibold text-blue-800 mb-4">
                  Who I Am
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I am Dr. Aanchal, an Assistant Professor specializing in
                  Medical Physiology with a Ph.D. from Index Medical College,
                  Indore. With over 5 years of teaching experience, I am
                  passionate about making complex medical concepts accessible
                  and easy to understand for students at all levels.
                </p>
              </div> */}
              <div className="mb-10">
                <h4 className="text-2xl font-semibold text-blue-800 mb-4">
                  My Teaching Philosophy
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I believe that every student has the potential to excel when
                  given the right guidance and support. My approach focuses on
                  concept clarity, practical application, and exam-oriented
                  preparation. I customize my teaching methods to match each
                  student's learning pace and knowledge level.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-blue-800 mb-4">
                  Why Students Choose Me
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Expert in Physiology, Pathology, Biochemistry, and
                      Microbiology
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Student-centric teaching approach
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Focus on making complex topics simple
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Proven track record with MBBS students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="subjects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
              Subjects 
            </h3>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Medical & Biology Subjects for All Levels
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Anatomy", icon: "🦴", levels: "Beginner to Expert" },
                {
                  name: "Physiology (MBBS)",
                  icon: "🫀",
                  levels: "Beginner to Expert",
                },
                {
                  name: "Biochemistry",
                  icon: "🧬",
                  levels: "Beginner to Expert",
                },
                {
                  name: "Pathology",
                  icon: "🔬",
                  levels: "Intermediate to Expert",
                },
                {
                  name: "Pharmacology",
                  icon: "💉",
                  levels: "Intermediate to Expert",
                },
                {
                  name: "Microbiology",
                  icon: "🦠",
                  levels: "Beginner to Expert",
                },
                {
                  name: "Forensic Medicine & Toxicology",
                  icon: "⚖️",
                  levels: "Undergraduate to Postgraduate",
                },
                {
                  name: "Community Medicine",
                  icon: "🌍",
                  levels: "MBBS Level",
                },
                { name: "Ophthalmology", icon: "👁️", levels: "MBBS Level" },
                {
                  name: "Otorhinolaryngology (ENT)",
                  icon: "👂",
                  levels: "MBBS Level",
                },
                { name: "General Medicine", icon: "💊", levels: "MBBS Level" },
                { name: "General Surgery", icon: "🩺", levels: "MBBS Level" },
                {
                  name: "Obstetrics & Gynecology",
                  icon: "🤰",
                  levels: "MBBS Level",
                },
                { name: "Pediatrics", icon: "👶", levels: "MBBS Level" },
              ].map((subject, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-gray-200"
                >
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">
                    {subject.name}
                  </h4>
                  <p className="text-gray-600">{subject.levels}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
              Teaching Approach
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-3">
                  Customized Learning
                </h4>
                <p className="text-gray-600">
                  Classes tailored to your knowledge level and learning pace
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-3">
                  Exam-Oriented
                </h4>
                <p className="text-gray-600">
                  Focused preparation for exams, assignments, and viva
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-3">
                  Concept Clarity
                </h4>
                <p className="text-gray-600">
                  Deep understanding of MCQs, theory, and practical concepts
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-3">
                  Flexible Sessions
                </h4>
                <p className="text-gray-600">
                  One-to-one and small group online sessions available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Experience & Education</h3>
            <div className="max-w-3xl mx-auto">
              <div className="mb-16">
                <h4 className="text-2xl font-semibold text-blue-800 mb-8 flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Experience
                </h4>
                <div className="relative border-l-4 border-blue-600 pl-8 ml-4">
                  <div className="mb-8">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-1"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h5 className="text-xl font-semibold text-blue-900 mb-2">Assistant Professor – Physiology</h5>
                      <p className="text-gray-700 font-medium mb-2">NIMS University</p>
                      <p className="text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Jul 2021 – Oct 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-blue-800 mb-8 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Education
                </h4>
                <div className="relative border-l-4 border-blue-600 pl-8 ml-4">
                  <div>
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-1"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h5 className="text-xl font-semibold text-blue-900 mb-2">Ph.D. in Medical Physiology</h5>
                      <p className="text-gray-700 font-medium mb-2">Index Medical College, Indore</p>
                      <p className="text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Jan 2021 – Feb 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
              Fees & Class Details
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200">
                <div className="text-center mb-8">
                  <p className="text-5xl font-bold text-blue-900 mb-2">
                    ₹1,000 – ₹3,000
                  </p>
                  <p className="text-xl text-gray-600">per hour</p>
                </div>
                <div className="space-y-4 mb-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    Fees depend on:
                  </h4>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">
                      Subject complexity and level
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">
                      Student level (Beginner / Intermediate / Expert)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">
                      Class format (One-to-One or Group Class)
                    </p>
                  </div>
                </div>
                <div className="bg-blue-100 rounded-lg p-6">
                  <p className="text-center text-lg text-blue-900 font-medium">
                    Mode of Teaching: <span className="font-bold">Online</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
              Student Testimonials
            </h3>
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-xl p-12 shadow-md border border-gray-200">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-xl text-gray-600 italic">
                  Student feedback coming soon...
                </p>
                <p className="text-gray-500 mt-4">
                  Be among the first to experience quality medical education!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Ready to start your learning journey? Contact me today!
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <a
                  href="tel:+919212948971"
                  className="bg-blue-600 text-white rounded-xl p-8 text-center hover:bg-blue-700 transition shadow-lg"
                >
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Call Now</h4>
                  <p className="text-blue-100">Get instant answers</p>
                </a>
                <a
                  href="https://wa.me/919212948971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white rounded-xl p-8 text-center hover:bg-green-700 transition shadow-lg"
                >
                  <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">WhatsApp Me</h4>
                  <p className="text-green-100">Quick and easy</p>
                </a>
                <a
                  href="mailto:as9212948@gmail.com"
                  className="bg-gray-700 text-white rounded-xl p-8 text-center hover:bg-gray-800 transition shadow-lg"
                >
                  <Mail className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Email Me</h4>
                  <p className="text-gray-300">Detailed inquiries</p>
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200">
                <h4 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
                  Request a Demo Class
                </h4>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600">
                    <option value="">Select Subject</option>

                    <option>Anatomy</option>
                    <option>Physiology</option>
                    <option>Biochemistry</option>
                    <option>Pathology</option>
                    <option>Pharmacology</option>
                    <option>Microbiology</option>
                    <option>Forensic Medicine & Toxicology</option>
                    <option>Community Medicine</option>
                    <option>Ophthalmology</option>
                    <option>Otorhinolaryngology (ENT)</option>
                    <option>General Medicine</option>
                    <option>General Surgery</option>
                    <option>Obstetrics & Gynecology</option>
                    <option>Pediatrics</option>
                  </select>

                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600">
                    <option>Select Your Level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Expert</option>
                    <option>MBBS</option>
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                  </select>
                  <textarea
                    placeholder="Any specific requirements or questions?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Dr. Aanchal</h4>
              <p className="text-blue-200">
                Assistant Professor | Medical Physiology Expert
              </p>
              <p className="text-blue-200 mt-2">
                Making medical education accessible and excellent
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-blue-200 hover:text-white transition"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("subjects")}
                    className="text-blue-200 hover:text-white transition"
                  >
                    Subjects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-blue-200 hover:text-white transition"
                  >
                    Panel
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-blue-200 hover:text-white transition"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-blue-200">
                <a href="tel:+919212948971" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" /> +91 92129 48971
                </a>
                <a
                  href="mailto:as9212948@gmail.com"
                  className="flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" /> as9212948@gmail.com
                </a>
                <a
                  href="https://wa.me/919212948971"
                  className="flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Available
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
            <p>&copy; Developed by Aayush</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WebPage;
