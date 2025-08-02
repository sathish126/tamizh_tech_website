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
    image: '/image/team/dhanus.jpg',
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
    role: 'Full Stack Developer',
    image: '/image/team/sathish.jpg',
    email: 'sathispandiyan126@gmail.com',
    whatsapp: '919629463964',
  },
  {
    name: 'Aananth S',
    role: 'Product and Development Officer (P&DO)',
    image: '/image/team/anandth.jpg',
    email: '',
    whatsapp: '',
  },
  {
    name: 'Srikanth M',
    role: '',
    image: '',
    email: '',
    whatsapp: '',
  },
  {
    name: 'Padmapriya NM',
    role: '',
    image: '',
    email: '',
    whatsapp: '',
  },
  {
    name: 'Eazhilarasan',
    role: '',
    image: '',
    email: '',
    whatsapp: '',
  },
  {
    name: 'Krishnakanth P',
    role: '',
    image: '',
    email: '',
    whatsapp: '',
  },
  {
    name: 'Kowsik K',
    role: '',
    image: '',
    email: '',
    whatsapp: '',
  },
  {
    name: 'Sukesh',
    role: '',
    image: '',
    email: '',
    whatsapp: '',
  },
];

const Team = () => (
  <section id="team" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-4 rounded-lg mb-8 shadow-md">
        <h2
          className="text-3xl md:text-4xl font-bold text-center tracking-wide animate-fade-in"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Our Team
        </h2>
      </div>
      {/* Team Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8"
      >
        {teamMembers.map((member, idx) => {
          // Dynamic gradient based on name hash for uniqueness
          const hash = member.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
          const accentColors = [
            `from-indigo-${(hash % 5) + 100} to-indigo-${(hash % 5) + 50}`,
            `from-pink-${(hash % 5) + 100} to-pink-${(hash % 5) + 50}`,
            `from-green-${(hash % 5) + 100} to-green-${(hash % 5) + 50}`,
            `from-yellow-${(hash % 5) + 100} to-yellow-${(hash % 5) + 50}`,
            `from-blue-${(hash % 5) + 100} to-blue-${(hash % 5) + 50}`,
          ];
          const borderColors = [
            'border-indigo-400',
            'border-pink-400',
            'border-green-400',
            'border-yellow-400',
            'border-blue-400',
          ];
          const accent = accentColors[hash % accentColors.length];
          const border = borderColors[hash % borderColors.length];
          const stagger = idx % 2 === 0 ? 'sm:-mt-4' : 'sm:mt-4';

          return (
            <div
              key={idx}
              className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${stagger} border-t-4 ${border}`}
            >
              <div
                className={`w-32 h-32 rounded-full overflow-hidden bg-gradient-to-tr ${accent} mb-4 flex items-center justify-center relative`}
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <span
                    className="text-white text-3xl font-bold select-none"
                    style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
                  >
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                )}
              </div>
              <h3
                className="text-lg font-semibold text-gray-900 mb-1 tracking-wide"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {member.name}
              </h3>
              {member.role && (
                <p
                  className="text-sm text-gray-600 mb-3 font-medium tracking-wide"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {member.role}
                </p>
              )}
              <div className="flex justify-center gap-3 mt-2">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-transform hover:scale-110"
                    title={`Email ${member.name}`}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                )}
                {member.whatsapp && (
                  <a
                    href={`https://wa.me/${member.whatsapp}?text=Hello%20${encodeURIComponent(member.name)}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-full transition-transform hover:scale-110"
                    title={`WhatsApp ${member.name}`}
                    aria-label={`WhatsApp ${member.name}`}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    {/* Animation Styles */}
    <style>
      {`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
      `}
    </style>
  </section>
);

export default Team;