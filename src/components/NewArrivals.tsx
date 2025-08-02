import React from 'react';

const newArrivals = [
  {
    name: 'Battery 1500mAh 30C 3S 11.1v',
    image: '/image/new/battery 1500mah.jpg',
    orderLink: '#',
  },
  {
    name: 'Battery 3300mAh 35C 3S 11.1v',
    image: '/image/new/battery 3300mah.jpg',
    orderLink: '#',
  },
  {
    name: '112mm Buggy Wheel',
    image: '/image/new/wheel.jpg',
    orderLink: '#',
  },
  {
    name: '70mm Nylon 2 in 1 Wheel',
    image: '/image/new/nylon wheel.jpg',
    orderLink: '#',
  },
  {
    name: 'TTRV V2 Series Robo Soccer Bot Chassis',
    image: '/image/new/chasis.jpg',
    orderLink: '#',
  },
  {
    name: 'Acrylic LFR Sheet',
    image: '/image/new/acrylic.jpg',
    orderLink: '#',
  },
  {
    name: 'Wheel Coupling',
    image: '/image/new/coupling.jpg',
    orderLink: '#',
  },
  {
    name: '12V 300RPM Johnson Diamond Motor',
    image: '/image/new/300 rpm diamond motor.jpg',
    orderLink: '#',
  },
  {
    name: '12V 600RPM Johnson Diamond Motor',
    image: '/image/new/600 rpm motr.jpg',
    orderLink: '#',
  },
];

const NewArrivals = () => (
  <section id="new-arrivals" className="py-16 bg-gradient-to-b from-white to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-12 text-center tracking-tight animate-fade-in"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {newArrivals.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center relative group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 flex items-center justify-center overflow-hidden rounded-t-xl bg-gradient-to-br from-indigo-50 to-cyan-50">
              <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                NEW
              </span>
              <img
                src={item.image}
                alt={item.name}
                className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between w-full p-4 sm:p-6">
              <h3
                className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 mb-3 text-center tracking-wide"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.name}
              </h3>
              <a
                href={`https://wa.me/918148045030?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(item.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-center py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.03em' }}
                aria-label={`Order ${item.name} on WhatsApp`}
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <a
          href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%27d%20like%20to%20learn%20more%20about%20your%20new%20arrivals."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base md:text-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Explore All New Products
        </a>
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

export default NewArrivals;