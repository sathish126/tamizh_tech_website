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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
         {/* Logo */}
<div className="flex items-center space-x-3">
  <img
    src="src/image/logo.png"
    alt="TamizhTech Logo"
    className="h-48 w-48 object-contain rounded-md"
  />
 
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/918438686030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20your%20robotics%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-slate-700 hover:text-indigo-600 font-medium text-left transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-slate-700 hover:text-indigo-600 font-medium text-left transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-indigo-600 font-medium text-left transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-slate-700 hover:text-indigo-600 font-medium text-left transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-indigo-600 font-medium text-left transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Contact
              </button>
              <a
                href="https://wa.me/918438686030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20your%20robotics%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
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