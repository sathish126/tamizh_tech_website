import React, { useEffect, useState } from 'react';

const heroImages = Array.from({ length: 10 }, (_, i) => `/image/hero/${i + 1}.jpeg`);
const captions = [
 
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[80vw] sm:h-[70vw] md:h-[60vw] lg:h-[50vw] min-h-[360px] max-h-[650px] overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full z-0">
        {heroImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              bgIndex === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Hero Background ${idx + 1}`}
              className="object-cover w-full h-full"
              draggable="false"
            />
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
            {/* Caption */}
            <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 text-white text-center z-10 max-w-[90%] sm:max-w-[80%]">
              <h2
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold transition-opacity duration-1000 ${
                  bgIndex === idx ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {captions[idx]}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Center Buttons */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center px-4 w-full sm:w-auto">
        <a
          href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20enterprise%20solutions%20for%20my%20organization."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none text-sm sm:text-base md:text-lg w-full sm:w-auto"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Schedule Consultation
        </a>
        <button
          onClick={() =>
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none text-sm sm:text-base md:text-lg w-full sm:w-auto"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Explore Products
        </button>
      </div>

      {/* Dots for Slideshow Navigation */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1 sm:gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setBgIndex(idx)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              bgIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;