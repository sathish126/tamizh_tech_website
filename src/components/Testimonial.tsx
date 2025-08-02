import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Arun Kumar',
    feedback: 'Great service and high quality products! Highly recommend Tamizh Tech for robotics needs.',
    avatar: '',
  },
  {
    name: 'Priya S',
    feedback: 'The support team was very helpful and the kits are easy to assemble. Will buy again!',
    avatar: '',
  },
  {
    name: 'Vignesh R',
    feedback: 'Fast delivery and excellent customer care. My students loved the robokits.',
    avatar: '',
  },
  {
    name: 'Ramesh M',
    feedback: 'Innovative products with excellent documentation. Perfect for hobbyists and educators alike.',
    avatar: '',
  },
  {
    name: 'Anjali K',
    feedback: 'Affordable prices and reliable components. Tamizh Tech is my go-to for tech projects!',
    avatar: '',
  },
  {
    name: 'Suresh P',
    feedback: 'Outstanding customer service and quick responses. The quality exceeded my expectations.',
    avatar: '',
  },
  {
    name: 'Lakshmi N',
    feedback: 'The tutorials provided with the kits are amazing. Great value for money!',
    avatar: '',
  },
  {
    name: 'Karthik V',
    feedback: 'Best place for robotics supplies. Highly durable and well-designed products.',
    avatar: '',
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-cycle every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const getInitials = (name) => {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const color = `bg-gradient-to-br from-indigo-${(hash % 5) + 100} to-blue-${(hash % 5) + 50}`;
    return { initials, color };
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center animate-fade-in"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          What Our Customers Say
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              const { initials, color } = getInitials(t.name);
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-500 ${
                    isActive ? 'scale-105 shadow-lg z-10' : 'opacity-70 hover:opacity-100 hover:scale-102'
                  }`}
                  style={{ transformOrigin: 'center' }}
                >
                  <blockquote className="text-gray-700 text-base mb-4 italic before:content-['\201C'] after:content-['\201D']">
                    {t.feedback}
                  </blockquote>
                  <span
                    className="text-sm font-semibold text-slate-800"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {t.name}
                  </span>
                </div>
              );
            })}
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === idx ? 'bg-indigo-600 w-4' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
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

export default Testimonial;