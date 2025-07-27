import React, { useState } from 'react';
import { Menu, X, Bot, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
         {/* Logo */}
<div className="flex items-center space-x-3">
  <img
    src="/public/image/logo.png"
    alt="TamizhTech Logo"
    className="h-16 sm:h-24 md:h-32 lg:h-40 w-auto object-contain transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg"
    style={{ cursor: 'pointer' }}
  />
</div>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Products', id: 'products' },
              { label: 'About', id: 'about' },
              { label: 'Team', id: 'team' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-300 px-2 py-1 focus:outline-none group"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20your%20robotics%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-xl transform hover:scale-105 focus:outline-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 active:scale-95 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Products', id: 'products' },
                { label: 'About', id: 'about' },
                { label: 'Team', id: 'team' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-slate-700 hover:text-indigo-600 font-medium text-left transition-colors duration-300 px-2 py-1 focus:outline-none group"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <a
                href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20your%20robotics%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-xl transform hover:scale-105 focus:outline-none text-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;