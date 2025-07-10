import React from 'react';
import { Mail, MessageCircle, Star, Briefcase } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Tamizharasan K',
      role: 'Founder & CEO',
      fullRole: 'Chief Executive Officer',
      description: 'Visionary leader driving TamizhTech\'s global expansion and enterprise partnerships.',
      expertise: ['Executive Leadership', 'Global Strategy', 'Enterprise Sales', 'EdTech', 'Board Relations'],
      image: 'src/image/team/Tamizharasan K.jpg',
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
      description: 'Ensures smooth day-to-day operations, logistics, and internal coordination.',
      expertise: ['Operations', 'Logistics', 'Coordination', 'Supply Chain', 'Efficiency'],
      image: '',
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
      description: 'Robotics visionary, leading product R&D and technical direction.',
      expertise: ['Robotics', 'AI/ML', 'Product R&D', 'IoT Systems', 'Tech Vision'],
      image: '',
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
      description: 'Handles finance, budgeting, investments, and funding strategies.',
      expertise: ['Finance', 'Investments', 'Budgeting', 'Fundraising', 'Risk Management'],
      image: 'src/image/team/Chenjitha.jpeg',
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
      description: 'Leads branding, PR, and customer outreach.',
      expertise: ['Marketing', 'Brand Strategy', 'PR', 'Customer Reach', 'Digital Campaigns'],
      image: 'src/image/team/Poongothai Subiksha M.jpg',
      contact: {
        email: 'subiksha@tamizhtech.com',
        linkedin: '#',
        whatsapp: '918438686030'
      }
    },
    {
      name: 'Sathish',
      role: 'Web Developer & E-Commerce Lead',
      fullRole: 'Web Developer & E-Commerce Lead',
      description: 'Heads development of enterprise platforms and e-commerce systems.',
      expertise: ['Digital Strategy', 'Web Dev', 'UI/UX', 'E-Commerce', 'Automation'],
      image: 'src/image/team/sathish.jpg',
      contact: {
        email: 'sathispandiyan126@gmail.com',
        linkedin: '#',
        whatsapp: '9629463964'
      }
    }
  ];

  const TeamCard = ({ member, isLeadership = false }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
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
          <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
          <p className="text-indigo-600 font-semibold mb-1">{member.role}</p>
          <p className="text-gray-600 text-sm mb-3">{member.fullRole}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          <a
            href={`mailto:${member.contact.email}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href={`https://wa.me/${member.contact.whatsapp}?text=Hello%20${encodeURIComponent(member.name)}!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
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

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate innovators and leaders shaping the future of robotics education.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <TeamCard key={index} member={member} isLeadership={true} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Executive Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {executiveTeam.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Partner with Industry Leaders</h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule consultations, explore partnerships, or discuss enterprise solutions with our C-suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918438686030?text=Hello%20TamizhTech%20Leadership!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Executive Consultation</span>
              </a>
              <a
                href="mailto:tamizhtechpvtltd@gmail.com?subject=Strategic Partnership Inquiry"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
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
