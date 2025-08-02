import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
Hello TamizhTech Executive Team!

*Enterprise Inquiry Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Inquiry Type: ${formData.inquiryType}

*Executive Message:*
${formData.message}

Looking forward to executive consultation and partnership opportunities.
    `.trim();

    const whatsappUrl = `https://wa.me/918148045030?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general',
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-cyan-500" />,
      title: 'Phone',
      detail: '+91 8148045030',
      action: 'tel:+918148045030',
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      title: 'Email',
      detail: 'tamizhtechpvtltd@gmail.com',
      action: 'mailto:tamizhtechpvtltd@gmail.com',
    },
    {
      icon: <MapPin className="h-6 w-6 text-indigo-500" />,
      title: 'Location',
      detail: 'Coimbatore, Tamil Nadu, India',
      action: 'https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India',
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-500" />,
      title: 'Business Hours',
      detail: 'Mon-Sat: 9:00 AM - 6:00 PM',
      action: '#',
    },
  ];

  const services = [
    {
      title: 'Enterprise Solutions',
      description: 'Custom robotics platforms and institutional technology implementations',
      icon: '🤖',
    },
    {
      title: 'Strategic Partnerships',
      description: 'Long-term institutional partnerships and collaborative development programs',
      icon: '⚙️',
    },
    {
      title: 'Executive Training',
      description: 'Professional development programs and certification courses for leadership teams',
      icon: '📚',
    },
    {
      title: 'Consultation Services',
      description: 'Strategic technology consulting and digital transformation advisory services',
      icon: '🔧',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Let's Connect
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ready to revolutionize your institution with cutting-edge robotics? Reach out to discuss your vision or explore our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100/50 animate-slide-up">
            <h3
              className="text-2xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all peer bg-transparent"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-cyan-500 peer-focus:text-xs peer-valid:-top-6 peer-valid:text-cyan-500 peer-valid:text-xs"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Full Name *
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all peer bg-transparent"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-cyan-500 peer-focus:text-xs peer-valid:-top-6 peer-valid:text-cyan-500 peer-valid:text-xs"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Email Address *
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all peer bg-transparent"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-cyan-500 peer-focus:text-xs peer-valid:-top-6 peer-valid:text-cyan-500 peer-valid:text-xs"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Phone Number
                  </label>
                </div>
                <div className="relative">
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all appearance-none bg-transparent"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="consultation">Executive Consultation</option>
                    <option value="training">Professional Training</option>
                    <option value="support">Technical Support</option>
                  </select>
                  <label
                    htmlFor="inquiryType"
                    className="absolute left-4 top-3 text-sm text-gray-500 transition-all"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all peer bg-transparent"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-cyan-500 peer-focus:text-xs peer-valid:-top-6 peer-valid:text-cyan-500 peer-valid:text-xs"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Subject *
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all peer bg-transparent resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-cyan-500 peer-focus:text-xs peer-valid:-top-6 peer-valid:text-cyan-500 peer-valid:text-xs"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Message *
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Send className="h-5 w-5" />
                <span>Send Message via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Contact Information & Other Sections */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-4">
                      <div>{info.icon}</div>
                      <div>
                        <h4
                          className="font-semibold text-slate-900"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {info.title}
                        </h4>
                        <p
                          className="text-gray-600 text-sm"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Connect with Us
              </h3>
              <div className="flex space-x-6">
                {[
                  {
                    href: 'https://www.linkedin.com/company/tamizh-tech-robotics-company',
                    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>,
                    color: 'hover:text-blue-600',
                    label: 'LinkedIn',
                  },
                  {
                    href: 'https://www.instagram.com/tamizh_tech_pvt_ltd',
                    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.634 2.2 15.25 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.013 7.052.072 5.77.13 4.68.31 3.78.6c-.9.29-1.67.68-2.44 1.45C.31 3.32-.08 4.09.6 4.98c.29.9.47 1.99.53 3.27C.987 8.332 1 8.736 1 12c0 3.264.013 3.668.072 4.948.058 1.282.24 2.372.53 3.272.29.9.68 1.67 1.45 2.44.77.77 1.54 1.16 2.44 1.45.9.29 1.99.47 3.27.53C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.282-.058 2.372-.24 3.272-.53.9-.29 1.67-.68 2.44-1.45.77-.77 1.16-1.54 1.45-2.44.29-.9.47-1.99.53-3.27.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.058-1.282-.24-2.372-.53-3.272-.29-.9-.68-1.67-1.45-2.44-.77-.77-1.54-1.16-2.44-1.45-.9-.29-1.99-.47-3.27-.53C15.668.013 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>,
                    color: 'hover:text-pink-500',
                    label: 'Instagram',
                  },
                  {
                    href: 'https://www.youtube.com/@tamizhtech',
                    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 7.88 0 12 0 12s0 4.12.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.308 20.5 12 20.5 12 20.5s7.692 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.12 24 12 24 12s0-4.12-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
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

            {/* Quick Actions */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Quick Actions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    href: 'https://wa.me/918148045030?text=Hello%20TamizhTech%20Executive%20Team!%20I%27d%20like%20to%20schedule%20a%20consultation%20for%20enterprise%20solutions.',
                    icon: <MessageCircle className="h-5 w-5" />,
                    text: 'Executive WhatsApp',
                    gradient: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
                  },
                  {
                    href: 'mailto:tamizhtechpvtltd@gmail.com?subject=Enterprise Consultation Request',
                    icon: <Mail className="h-5 w-5" />,
                    text: 'Executive Email',
                    gradient: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
                  },
                  {
                    href: 'tel:+918148045030',
                    icon: <Phone className="h-5 w-5" />,
                    text: 'Executive Hotline',
                    gradient: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
                  },
                ].map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : '_self'}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-full bg-gradient-to-r ${action.gradient} text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-xl`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {action.icon}
                    <span>{action.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                How We Can Help
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h4
                      className="font-semibold text-slate-900 mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {service.title}
                    </h4>
                    <p
                      className="text-gray-600 text-sm leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
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
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out both;
          }
          .animate-slide-up {
            animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
          select {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
            background-position: right 0.5rem center;
            background-size: 1.5em;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;