import React from 'react';
import { Bot, Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const productCategories = [
    { name: 'Robotics Kits', href: '#products' },
    { name: 'Educational Services', href: '#products' },
    { name: 'Custom Projects', href: '#products' },
    { name: 'Workshop Booking', href: '#contact' }
  ];

  const supportLinks = [
    { name: 'Technical Support', href: '#contact' },
    { name: 'WhatsApp Help', href: 'https://wa.me/918148045030' },
    { name: 'Email Support', href: 'mailto:tamizhtechpvtltd@gmail.com' },
    { name: 'Documentation', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-2 rounded-lg">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    TamizhTech
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">Robotics company</p>
                </div>
              </div>
              
              <p 
                className="text-gray-300 mb-6 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Transforming ideas into innovation through accessible robotics, embedded systems, 
                AI, IoT, and automation solutions. Empowering students, creators, and communities 
                with cutting-edge technology.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">+91 84386 86030</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">tamizhtechpvtltd@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Products
              </h4>
              <ul className="space-y-3">
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(category.href)}
                      className="text-gray-300 hover:text-white transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : link.href.startsWith('mailto') ? (
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-white transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl p-8 text-center">
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to Start Your Robotics Journey?
            </h3>
            <p 
              className="text-lg mb-6 opacity-90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get in touch with our team to explore our products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20your%20robotics%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="mailto:tamizhtechpvtltd@gmail.com"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Mail className="h-5 w-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div 
              className="text-gray-400 text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © {currentYear} TamizhTech Robotics. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <button 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Privacy Policy
              </button>
              <button 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Terms of Service
              </button>
              <button 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;