import React from 'react';
import { Target, Eye, Award, Users, Zap, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-cyan-500" />,
      title: 'Innovation-Driven',
      description: 'We push the boundaries of what\'s possible with cutting-edge robotics and AI solutions.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Education-Focused',
      description: 'Empowering the next generation through hands-on learning and real-world applications.'
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-500" />,
      title: 'Quality Excellence',
      description: 'Every product and service meets the highest standards of quality and reliability.'
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-500" />,
      title: 'Community Impact',
      description: 'Making technology accessible and creating positive change in communities worldwide.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Students Trained', icon: '🎓' },
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '25+', label: 'Workshop Sessions', icon: '🛠️' },
    { number: '10+', label: 'Industry Partners', icon: '🤝' }
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
            About TamizhTech
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Founded in 2024, TamizhTech Robotics is dedicated to transforming ideas into innovation 
            through accessible, impactful technology solutions.
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
                Our Mission
              </h3>
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                To empower students, creators, and communities through accessible robotics, 
                embedded systems, AI, IoT, and automation solutions. We believe that technology 
                should be a bridge to innovation, not a barrier.
              </p>
            </div>

            <div className="space-y-4">
              <h3 
                className="text-2xl font-bold text-slate-800"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Our Vision
              </h3>
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                To become the leading provider of educational robotics solutions, inspiring 
                the next generation of innovators and creators while making advanced technology 
                accessible to all.
              </p>
            </div>

            <div className="space-y-4">
              <h3 
                className="text-2xl font-bold text-slate-800"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                What We Do
              </h3>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Design and manufacture educational robotics kits
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Provide comprehensive training workshops and courses
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Develop custom automation and IoT solutions
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Offer technical consultation and support services
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

        {/* Core Values */}
        <div className="mb-16">
          <h3 
            className="text-3xl font-bold text-slate-800 text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Core Values
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
              Our Technology Stack
            </h3>
            <p 
              className="text-lg opacity-90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We leverage cutting-edge technologies to deliver innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: 'Robotics', icon: '🤖' },
              { name: 'Embedded Systems', icon: '🔧' },
              { name: 'Artificial Intelligence', icon: '🧠' },
              { name: 'IoT Solutions', icon: '🌐' },
              { name: 'Automation', icon: '⚙️' }
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