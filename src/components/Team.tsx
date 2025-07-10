import React from 'react';
import { Mail, MessageCircle, Linkedin, Star, Briefcase } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Tamizharasan K',
      role: 'Founder & CEO',
      fullRole: 'Chief Executive Officer',
      description: 'Visionary leader driving TamizhTech\'s global expansion and enterprise partnerships. Expert in educational technology strategy, institutional relationships, and market development with 10+ years of industry experience.',
      expertise: ['Executive Leadership', 'Global Strategy', 'Enterprise Sales', 'Educational Technology', 'Board Relations'],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      contact: {
        email: 'tamizharasan@tamizhtech.com',
        linkedin: '#',
        whatsapp: '918438686030'
      }
    },
    {
      name: 'Suraj A',
      role: 'Co-founder & COO',
      fullRole: 'Chief Operating Officer',
      description: 'Operations excellence leader ensuring world-class service delivery and operational efficiency. Specializes in supply chain optimization, quality management, and international logistics coordination.',
      expertise: ['Operations Excellence', 'Supply Chain Management', 'Quality Assurance', 'International Logistics', 'Process Engineering'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      contact: {
        email: 'suraj@tamizhtech.com',
        linkedin: '#',
        whatsapp: '918438686030'
      }
    },
    {
      name: 'Dhanush S',
      role: 'CTO',
      fullRole: 'Chief Technology Officer',
      description: 'Technology visionary leading breakthrough innovations in robotics, AI, and IoT systems. PhD in Robotics Engineering with 15+ patents and extensive experience in enterprise technology development.',
      expertise: ['Robotics Engineering', 'AI & Machine Learning', 'IoT Architecture', 'Patent Development', 'Technical Strategy'],
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      contact: {
        email: 'dhanush@tamizhtech.com',
        linkedin: '#',
        whatsapp: '918438686030'
      }
    },
    {
      name: 'Chenjitha',
      role: 'CFO',
      fullRole: 'Chief Financial Officer',
      description: 'Financial strategy expert with MBA from top business school and CPA certification. Leads corporate finance, investor relations, and strategic financial planning for global expansion.',
      expertise: ['Corporate Finance', 'Investment Strategy', 'Risk Management', 'Investor Relations', 'Financial Analytics'],
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      contact: {
        email: 'chenjitha@tamizhtech.com',
        linkedin: '#',
        whatsapp: '918438686030'
      }
    }
  ];

  const executiveTeam = [
    {
      name: 'Poongothai Subiksha M',
      role: 'CMO',
      fullRole: 'Chief Marketing Officer',
      description: 'Marketing strategist with expertise in B2B technology marketing and global brand development. Leads digital transformation initiatives and enterprise client acquisition programs.',
      expertise: ['B2B Marketing', 'Brand Strategy', 'Digital Transformation', 'Global Campaigns', 'Thought Leadership'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      contact: {
        email: 'subiksha@tamizhtech.com',
        linkedin: '#',
        whatsapp: '918438686030'
      }
    },
    {
      name: 'Sathish',
      role: 'VP Digital Strategy',
      fullRole: 'Vice President of Digital Strategy & Technology',
      description: 'Digital transformation leader specializing in enterprise web platforms, e-commerce solutions, and customer experience optimization. Expert in modern web technologies and digital strategy.',
      expertise: ['Digital Strategy', 'Enterprise Platforms', 'Customer Experience', 'Technology Architecture', 'Digital Innovation'],
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      contact: {
        email: 'sathish@tamizhtech.com',
        linkedin: '#',
        whatsapp: '918438686030'
      }
    }
  ];

  const TeamCard = ({ member, isLeadership = false }: { member: any, isLeadership?: boolean }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isLeadership && (
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              <Star className="h-4 w-4 inline mr-1" />
              Leadership
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 
            className="text-xl font-bold text-slate-800 mb-1"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {member.name}
          </h3>
          <p 
            className="text-indigo-600 font-semibold mb-1"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {member.role}
          </p>
          <p 
            className="text-gray-600 text-sm mb-3"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {member.fullRole}
          </p>
          <p 
            className="text-gray-600 text-sm leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {member.description}
          </p>
        </div>

        {/* Expertise */}
        <div className="mb-6">
          <h4 
            className="text-sm font-semibold text-slate-700 mb-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Expertise
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex space-x-3">
          <a
            href={`mailto:${member.contact.email}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href={`https://wa.me/${member.contact.whatsapp}?text=Hello%20${encodeURIComponent(member.name)}!%20I'd%20like%20to%20connect%20regarding%20TamizhTech.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">Chat</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Meet Our Team
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our passionate team of innovators, engineers, and educators working together 
            to transform the future of robotics education.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 
            className="text-3xl font-bold text-slate-800 text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <TeamCard key={index} member={member} isLeadership={true} />
            ))}
          </div>
        </div>

        {/* Executive Team */}
        <div className="mb-16">
          <h3 
            className="text-3xl font-bold text-slate-800 text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Executive Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {executiveTeam.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Organization Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 
            className="text-2xl font-bold text-slate-800 text-center mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Organizational Structure
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold">
                Founder & CEO
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 text-indigo-800 px-4 py-3 rounded-lg font-medium mb-4">
                  Co-founder & COO
                </div>
                <div className="text-sm text-gray-600">Operations & Logistics</div>
              </div>
              
              <div className="text-center">
                <div className="bg-cyan-100 text-cyan-800 px-4 py-3 rounded-lg font-medium mb-4">
                  CTO
                </div>
                <div className="text-sm text-gray-600">Technology & Innovation</div>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 text-purple-800 px-4 py-3 rounded-lg font-medium mb-4">
                  CFO
                </div>
                <div className="text-sm text-gray-600">Finance & Strategy</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-orange-100 text-orange-800 px-4 py-3 rounded-lg font-medium mb-4">
                  CMO
                </div>
                <div className="text-sm text-gray-600">Marketing & Brand</div>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-100 text-emerald-800 px-4 py-3 rounded-lg font-medium mb-4">
                  Web Developer
                </div>
                <div className="text-sm text-gray-600">Digital Platforms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-8 text-white">
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Partner with Industry Leaders
            </h3>
            <p 
              className="text-lg mb-6 opacity-90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Schedule executive consultations, explore strategic partnerships, or discuss 
              enterprise solutions with our C-suite leadership team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918438686030?text=Hello%20TamizhTech%20Leadership!%20I'd%20like%20to%20schedule%20an%20executive%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Executive Consultation</span>
              </a>
              <a
                href="mailto:tamizhtechpvtltd@gmail.com?subject=Strategic Partnership Inquiry"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Briefcase className="h-5 w-5" />
                <span>Partnership Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;