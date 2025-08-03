import React from 'react';

const partners = [
  {
    name: 'Tech-X Robot',
    logo: '/image/techxrobot.jpg',
  },
  {
    name: 'Fixus',
    logo: '/image/fixus.jpg',
  },

];

const OurPartners = () => {
  const getInitials = (name) => {
    const initials = name
      .split(/(?=[A-Z])/)
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const color = `bg-gradient-to-br from-indigo-${(hash % 5) + 100} to-gray-${(hash % 5) + 200}`;
    return { initials, color };
  };

  return (
    <section id="partners" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center animate-fade-in"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Our Valued Collaborators
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {partners.map((partner, idx) => {
            const { initials, color } = getInitials(partner.name);
            const stagger = idx % 2 === 0 ? 'sm:-mt-4' : 'sm:mt-4';
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${stagger}`}
              >
                <div
                  className={`w-40 h-40 rounded-lg overflow-hidden flex items-center justify-center mb-4 ${partner.logo ? 'bg-gray-50' : color}`}
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className="text-white text-3xl font-bold select-none"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
                    >
                      {initials}
                    </span>
                  )}
                </div>
                <h4
                  className="text-lg font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {partner.name}
                </h4>
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
};

export default OurPartners;