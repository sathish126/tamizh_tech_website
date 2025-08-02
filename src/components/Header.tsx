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
    src="/image/logo.png"
    alt="TamizhTech Logo"
    className="h-24 sm:h-28 md:h-32 lg:h-40 w-auto object-contain transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg"
    style={{ cursor: 'pointer' }}
  />
</div>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="relative text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-300 px-2 py-1 focus:outline-none group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="relative text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-300 px-2 py-1 focus:outline-none flex items-center gap-1 group"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Products <ChevronDown className="h-8 w-8 mt-0.5" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200 z-30">
                <button
                  onClick={() => scrollToSection('new-arrivals')}
                  className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium rounded-t-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  New Products
                </button>
                <button
                  onClick={() => scrollToSection('robokits')}
                  className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Robokits
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium rounded-b-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Products
                </button>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="relative text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-300 px-2 py-1 focus:outline-none group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="relative text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-300 px-2 py-1 focus:outline-none group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Team
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="relative text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-300 px-2 py-1 focus:outline-none group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Testimonials
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-300 px-2 py-1 focus:outline-none group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
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