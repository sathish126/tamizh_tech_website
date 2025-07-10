import React from 'react';
import { Target, Eye, Award, Users, Zap, Globe, Building2, Briefcase, GraduationCap, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-cyan-500" />,
      title: 'Innovation Leadership',
      description: 'Pioneering breakthrough technologies that define the future of educational robotics and automation.'
    },
    {
      icon: <Building2 className="h-8 w-8 text-orange-500" />,
      title: 'Enterprise Excellence',
      description: 'Delivering world-class solutions to Fortune 500 companies and leading educational institutions.'
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-indigo-500" />,
      title: 'Educational Impact',
      description: 'Transforming learning experiences through immersive technology and hands-on innovation.'
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-500" />,
      title: 'Global Reach',
      description: 'Serving clients across 15+ countries with localized solutions and 24/7 enterprise support.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Enterprise Clients', icon: '🏢' },
    { number: '100+', label: 'Solutions Deployed', icon: '🚀' },
    { number: '15+', label: 'Countries Served', icon: '🌍' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems', icon: '🏆' },
    { name: 'ISO 27001', description: 'Information Security Management', icon: '🔒' },
    { name: 'IEEE Member', description: 'Institute of Electrical and Electronics Engineers', icon: '⚡' },
    { name: 'STEM Certified', description: 'Science, Technology, Engineering, Mathematics', icon: '🔬' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Enterprise Leadership in Educational Technology
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Since 2024, TamizhTech Robotics has emerged as the premier provider of enterprise-grade 
            educational technology solutions, serving Fortune 500 companies and leading institutions worldwide.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 
                className="text-2xl font-bold text-slate-800"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Executive Mission
              </h3>
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                To establish TamizhTech as the global leader in educational technology solutions, 
                delivering enterprise-grade robotics systems, comprehensive training programs, and 
                strategic consulting services that drive measurable ROI for our institutional partners.
              </p>
            </div>

            <div className="space-y-4">
              <h3 
                className="text-2xl font-bold text-slate-800"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Strategic Vision 2030
              </h3>
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                To become the world's most trusted partner for educational technology transformation, 
                with operations in 50+ countries, serving 1000+ enterprise clients, and setting 
                the industry standard for innovation, quality, and client success.
              </p>
            </div>

            <div className="space-y-4">
              <h3 
                className="text-2xl font-bold text-slate-800"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Enterprise Solutions Portfolio
              </h3>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Complete institutional robotics laboratory design and implementation
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Executive training programs and professional certification courses
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Custom enterprise automation and IoT system development
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Strategic technology consulting and long-term partnership agreements
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <div 
                      className="text-3xl font-bold text-slate-800 mb-1"
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

        {/* Certifications & Accreditations */}
        <div className="mb-16">
          <h3 
            className="text-3xl font-bold text-slate-800 text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Professional Certifications & Industry Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 
                  className="text-lg font-bold text-slate-800 mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {cert.name}
                </h4>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 
            className="text-3xl font-bold text-slate-800 text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Executive Leadership Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 p-6 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-cyan-50 group-hover:to-indigo-50 transition-all duration-300">
                  <div className="mb-4">{value.icon}</div>
                  <h4 
                    className="text-lg font-semibold text-slate-800 mb-3"
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

        {/* Technology Focus */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Enterprise Technology Portfolio
            </h3>
            <p 
              className="text-lg opacity-90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Advanced technology platforms powering next-generation educational solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: 'Enterprise Robotics', icon: '🤖' },
              { name: 'AI & Machine Learning', icon: '🧠' },
              { name: 'IoT Ecosystems', icon: '🌐' },
              { name: 'Cloud Infrastructure', icon: '☁️' },
              { name: 'Advanced Analytics', icon: '📊' }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
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
      </div>
    </section>
  );
};

export default About;