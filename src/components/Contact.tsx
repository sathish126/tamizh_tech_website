import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `
Hello TamizhTech Team!

*New Inquiry Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Inquiry Type: ${formData.inquiryType}

*Message:*
${formData.message}

Looking forward to your response!
    `.trim();

    const whatsappUrl = `https://wa.me/918438686030?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      detail: '+91 84386 86030',
      action: 'tel:+918438686030'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      detail: 'tamizhtechpvtltd@gmail.com',
      action: 'mailto:tamizhtechpvtltd@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      detail: 'Tamil Nadu, India',
      action: '#'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      detail: 'Mon-Sat: 9:00 AM - 6:00 PM',
      action: '#'
    }
  ];

  const services = [
    {
      title: 'Product Inquiries',
      description: 'Get detailed information about our robotics kits and educational products',
      icon: '🤖'
    },
    {
      title: 'Custom Projects',
      description: 'Discuss custom robotics solutions tailored to your specific needs',
      icon: '⚙️'
    },
    {
      title: 'Workshop Booking',
      description: 'Schedule training sessions and educational workshops for your team',
      icon: '📚'
    },
    {
      title: 'Technical Support',
      description: 'Get expert help with product setup, troubleshooting, and guidance',
      icon: '🔧'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Get In Touch
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ready to start your robotics journey? We're here to help you every step of the way. 
            Contact us for products, services, or any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 
              className="text-2xl font-bold text-slate-800 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="inquiryType" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="custom">Custom Project</option>
                    <option value="workshop">Workshop Booking</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-slate-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-slate-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="Tell us about your requirements, project details, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Send className="h-5 w-5" />
                <span>Send Message via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 
                className="text-2xl font-bold text-slate-800 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="text-indigo-600">
                        {info.icon}
                      </div>
                      <div>
                        <h4 
                          className="font-semibold text-slate-800"
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
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 
                className="text-2xl font-bold text-slate-800 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/918438686030?text=Hello%20TamizhTech!%20I'd%20like%20to%20get%20a%20quote%20for%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
                
                <a
                  href="mailto:tamizhtechpvtltd@gmail.com"
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                </a>
                
                <a
                  href="tel:+918438686030"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 
                className="text-2xl font-bold text-slate-800 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                How We Can Help
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <h4 
                      className="font-semibold text-slate-800 mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {service.title}
                    </h4>
                    <p 
                      className="text-gray-600 text-sm"
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
    </section>
  );
};

export default Contact;