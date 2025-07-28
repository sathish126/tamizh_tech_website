import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const teamMembers = [
  {
    name: 'Tamizharasan K',
    role: 'Founder & CEO',
    image: '/image/team/Tamizharasan K.jpg',
    email: 'tamizharasan@tamizhtech.com',
    whatsapp: '918438686030',
  },
  {
    name: 'Suraj A',
    role: 'Co-founder & COO',
    image: '',
    email: 'suraj@tamizhtech.com',
    whatsapp: '919363064502',
  },
  {
    name: 'Dhanush S',
    role: 'CTO',
    image: '',
    email: 'dhanush@tamizhtech.com',
    whatsapp: '918098860588',
  },
  {
    name: 'Chenjitha',
    role: 'CFO',
    image: '/image/team/Chenjitha.jpeg',
    email: 'chenjitha@tamizhtech.com',
    whatsapp: '918903271684',
  },
  {
    name: 'Poongothai Subiksha M',
    role: 'CMO',
    image: '/image/team/Poongothai Subiksha M.jpg',
    email: 'subiksha@tamizhtech.com',
    whatsapp: '919488655633',
  },
  {
    name: 'Sathish',
    role: 'Web Developer & E-Commerce Lead',
    image: '/image/team/sathish.jpg',
    email: 'sathispandiyan126@gmail.com',
    whatsapp: '919629463964',
  },
];

const Team = () => (
  <section id="team" className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 mb-4 flex items-center justify-center">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-400 text-4xl">👤</span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
            <p className="text-sm text-indigo-600 mb-3">{member.role}</p>
            <div className="flex justify-center gap-3 mt-2">
              <a
                href={`mailto:${member.email}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${member.whatsapp}?text=Hello%20${encodeURIComponent(member.name)}!`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-full transition"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;