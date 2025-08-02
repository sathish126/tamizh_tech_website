import React from 'react';
import {
  Lightbulb,
  Building2,
  GraduationCap,
  Globe,
} from 'lucide-react';

const values = [
  {
    icon: <Lightbulb className="h-10 w-10 text-cyan-500" />,
    title: 'Innovation Leadership',
    description:
      'Pioneering breakthrough technologies, setting new standards in educational robotics and automation.',
  },
  {
    icon: <Building2 className="h-10 w-10 text-orange-500" />,
    title: 'Enterprise Excellence',
    description:
      'Delivering robust, scalable solutions for Fortune 500 companies and top educational institutions.',
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-indigo-500" />,
    title: 'Educational Impact',
    description:
      'Empowering learners through immersive technology and hands-on innovation.',
  },
  {
    icon: <Globe className="h-10 w-10 text-emerald-500" />,
    title: 'Global Reach',
    description:
      'Serving clients in 15+ states with localized solutions and 24/7 enterprise support.',
  },
];

const achievements = [
  { number: '50+', label: 'Enterprise Clients', icon: '🏢' },
  { number: '100+', label: 'Solutions Deployed', icon: '🚀' },
  { number: '15+', label: 'States Served', icon: '🌍' },
  { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management Systems', icon: '🏆' },
  { name: 'ISO 27001', description: 'Information Security Management', icon: '🔒' },
  { name: 'IEEE Member', description: 'Institute of Electrical and Electronics Engineers', icon: '⚡' },
  { name: 'STEM Certified', description: 'Science, Technology, Engineering, Mathematics', icon: '🔬' },
];

const techPortfolio = [
  { name: 'Enterprise Robotics', icon: '🤖' },
  { name: 'AI & Machine Learning', icon: '🧠' },
  { name: 'IoT Ecosystems', icon: '🌐' },
  { name: 'Cloud Infrastructure', icon: '☁️' },
  { name: 'Advanced Analytics', icon: '📊' },
];

const About = () => (
  <section id="about" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Leading the Future of Educational Technology
        </h2>
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          TamizhTech Robotics is a global leader in enterprise-grade educational technology, trusted by Fortune 500 companies and top institutions since 2024.
        </p>
      </div>

      {/* Company Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-8">
          <div className="border-l-4 border-cyan-500 pl-6 transform transition-transform duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              To empower institutions worldwide with transformative robotics, automation, and training solutions that deliver measurable results and inspire the next generation of innovators.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-6 transform transition-transform duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Vision 2030
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              To be the most trusted partner for educational technology transformation, operating in 50+ countries and setting the global benchmark for innovation and client success.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-indigo-500/30 rounded-2xl blur-2xl opacity-30"></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100/50">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="text-5xl mb-3">{achievement.icon}</div>
                  <div
                    className="text-3xl font-extrabold text-slate-900 mb-1"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {achievement.number}
                  </div>
                  <div
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Portfolio */}
      <div className="mb-20">
        <h3
          className="text-3xl font-bold text-slate-900 text-center mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          What We Deliver
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg text-gray-700">
          {[
            'Turnkey robotics labs for institutions and enterprises',
            'Executive training & professional certification programs',
            'Custom automation & IoT system development',
            'Strategic consulting & long-term technology partnerships',
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-cyan-500 text-2xl">•</span>
              <span style={{ fontFamily: 'Inter, sans-serif' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications & Accreditations */}
      <div className="mb-20">
        <h3
          className="text-3xl font-bold text-slate-900 text-center mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Certifications & Industry Recognition
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s`, animation: 'slide-up 0.8s ease-out both' }}
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h4
                className="text-lg font-bold text-slate-900 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {cert.name}
              </h4>
              <p
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-20">
        <h3
          className="text-3xl font-bold text-slate-900 text-center mb-10"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-indigo-50 hover:shadow-lg">
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                  {value.icon}
                </div>
                <h4
                  className="text-lg font-semibold text-slate-900 mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {value.title}
                </h4>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Portfolio */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
        <div className="text-center mb-8">
          <h3
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Technology Portfolio
          </h3>
          <p
            className="text-lg opacity-90 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Powering next-generation educational solutions with advanced platforms
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {techPortfolio.map((tech, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-5xl mb-3 transform transition-transform duration-300 hover:scale-110">
                {tech.icon}
              </div>
              <div
                className="text-sm font-medium"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h3
          className="text-3xl font-bold text-slate-900 mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Ready to Transform Your Institution?
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20enterprise%20solutions%20for%20my%20organization."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base sm:text-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Schedule Consultation
          </a>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base sm:text-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </div>

    {/* Animations */}
    <style>
      {`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}
    </style>
  </section>
);

export default About;