import React, { useState } from 'react';
import { Bot, Phone, Mail, MapPin, MessageCircle, ExternalLink, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const productCategories = [
    { name: 'Robotics Kits', href: '#products' },
    { name: 'Educational Services', href: '#products' },
    { name: 'Custom Projects', href: '#products' },
    { name: 'Workshop Booking', href: '#contact' },
  ];

  const supportLinks = [
    { name: 'Technical Support', href: '#contact' },
    { name: 'WhatsApp Help', href: 'https://wa.me/918148045030' },
    { name: 'Email Support', href: 'mailto:tamizhtechpvtltd@gmail.com' },
    { name: 'Documentation', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for newsletter subscription logic
    alert(`Subscribed with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 p-3 rounded-xl shadow-lg">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    TamizhTech
                  </h3>
                  <p
                    className="text-gray-300 text-sm font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Robotics Company
                  </p>
                </div>
              </div>
              <p
                className="text-gray-300 mb-6 leading-relaxed text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Transforming ideas into innovation through accessible robotics, AI, IoT, and automation solutions for students and enterprises.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Phone className="h-5 w-5 text-cyan-400" />, detail: '+91 81480 45030', href: 'tel:+918148045030' },
                  { icon: <Mail className="h-5 w-5 text-orange-400" />, detail: 'tamizhtechpvtltd@gmail.com', href: 'mailto:tamizhtechpvtltd@gmail.com' },
                  { icon: <MapPin className="h-5 w-5 text-indigo-400" />, detail: 'Tamil Nadu, India', href: 'https://maps.google.com/?q=Tamil+Nadu,India' },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {item.icon}
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{item.detail}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h4
                className="text-lg font-semibold mb-6 text-cyan-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4
                className="text-lg font-semibold mb-6 text-orange-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Products
              </h4>
              <ul className="space-y-3">
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(category.href)}
                      className="text-gray-300 hover:text-orange-400 transition-all duration-300 transform hover:translate-x-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h4
                className="text-lg font-semibold mb-6 text-indigo-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('http') || link.href.startsWith('mailto') ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-300 hover:text-indigo-400 transition-all duration-300 flex items-center space-x-1 transform hover:translate-x-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-indigo-400 transition-all duration-300 transform hover:translate-x-1"
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
        <div className="border-t border-gray-700/50 py-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-2xl p-8 text-center">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to Start Your Robotics Journey?
            </h3>
            <p
              className="text-lg mb-6 text-gray-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Connect with our team to explore innovative solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20your%20robotics%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="mailto:tamizhtechpvtltd@gmail.com"
                className="bg-gradient-to-r from-white to-gray-100 hover:to-gray-200 text-indigo-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Mail className="h-5 w-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 w-full">
            <div
              className="text-gray-400 text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © {currentYear} TamizhTech Robotics. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              {[
                {
                  href: 'https://www.linkedin.com/company/tamizh-tech-robotics-company',
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>,
                  color: 'hover:text-blue-600',
                  label: 'LinkedIn',
                },
                {
                  href: 'https://www.instagram.com/tamizh_tech_pvt_ltd',
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.634 2.2 15.25 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.013 7.052.072 5.77.13 4.68.31 3.78.6c-.9.29-1.67.68-2.44 1.45C.31 3.32-.08 4.09.6 4.98c.29.9.47 1.99.53 3.27C.987 8.332 1 8.736 1 12c0 3.264.013 3.668.072 4.948.058 1.282.24 2.372.53 3.272.29.9.68 1.67 1.45 2.44.77.77 1.54 1.16 2.44 1.45.9.29 1.99.47 3.27.53C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.282-.058 2.372-.24 3.272-.53.9-.29 1.67-.68 2.44-1.45.77-.77 1.16-1.54 1.45-2.44.29-.9.47-1.99.53-3.27.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.058-1.282-.24-2.372-.53-3.272-.29-.9-.68-1.67-1.45-2.44-.77-.77-1.54-1.16-2.44-1.45-.9-.29-1.99-.47-3.27-.53C15.668.013 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>,
                  color: 'hover:text-pink-500',
                  label: 'Instagram',
                },
                {
                  href: 'https://youtube.com/@covaiscientist?si=tM-t8J-uP5a8BcDc',
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 7.88 0 12 0 12s0 4.12.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.308 20.5 12 20.5 12 20.5s7.692 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.12 24 12 24 12s0-4.12-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
                  color: 'hover:text-red-600',
                  label: 'YouTube',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Bubble */}
      <a
        href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%27d%20like%20to%20learn%20more%20about%20your%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Animations */}
      <style>
        {`
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-slide-up {
            animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;