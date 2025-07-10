import React, { useState } from 'react';
import { ExternalLink, Info, Users, Clock, Zap } from 'lucide-react';

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('robotics');

  const categories = [
    { id: 'robotics', name: 'Enterprise Robotics', icon: '🤖' },
    { id: 'education', name: 'Professional Training', icon: '🎓' },
    { id: 'custom', name: 'Custom Solutions', icon: '⚙️' }
  ];

  const products = {
    robotics: [
      {
        id: 1,
        name: 'Professional Hover Craft System',
        description: 'Enterprise-grade air-cushioned vehicle platform for advanced engineering education',
        price: '₹25,999',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Industrial Controllers', 'IoT Integration', 'Professional Documentation', 'Training Included'],
        difficulty: 'Professional',
        age: 'University/Corporate'
      },
      {
        id: 2,
        name: 'Advanced Autonomous Navigation System',
        description: 'AI-powered autonomous robot platform for research and development applications',
        price: '₹45,999',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Computer Vision', 'Machine Learning', 'Real-time Analytics', 'Cloud Connectivity'],
        difficulty: 'Advanced',
        age: 'Research/Enterprise'
      },
      {
        id: 3,
        name: 'Enterprise Racing Platform',
        description: 'High-performance robotics platform for competitive programming and team building',
        price: '₹35,999',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Professional Grade Components', 'Team Management Software', 'Competition Ready', 'Analytics Dashboard'],
        difficulty: 'Professional',
        age: 'Corporate/University'
      },
      {
        id: 4,
        name: 'Industrial Combat Robotics System',
        description: 'Professional-grade combat robotics platform for advanced engineering competitions',
        price: '₹55,999',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Military-Grade Materials', 'Advanced Sensors', 'Professional Training', 'Competition Support'],
        difficulty: 'Expert',
        age: 'Professional/Research'
      },
      {
        id: 5,
        name: 'Autonomous Sports Robotics Platform',
        description: 'Multi-robot coordination system for advanced team-based competitions',
        price: '₹75,999',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Multi-Robot Coordination', 'AI Strategy Engine', 'Real-time Communication', 'Tournament Management'],
        difficulty: 'Expert',
        age: 'University/Professional'
      },
      {
        id: 6,
        name: 'Professional UAV Development Platform',
        description: 'Enterprise-grade unmanned aerial vehicle system for research and commercial applications',
        price: '₹125,999',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Professional Flight Controller', 'HD Camera Systems', 'GPS/GLONASS', 'Commercial Certification'],
        difficulty: 'Expert',
        age: 'Commercial/Research'
      }
    ],
    education: [
      {
        id: 7,
        name: 'Executive Electronics Engineering Program',
        description: 'Comprehensive professional development program for engineering leadership',
        price: '₹25,999',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Advanced PCB Design', 'Professional Certification', 'Industry Projects', 'Executive Mentoring'],
        difficulty: 'Professional',
        age: 'Corporate/Executive'
      },
      {
        id: 8,
        name: 'Enterprise Embedded Systems Mastery',
        description: 'Advanced professional training in industrial embedded systems development',
        price: '₹45,999',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Industrial Controllers', 'Real-time Systems', 'Professional Certification', 'Industry Partnerships'],
        difficulty: 'Expert',
        age: 'Professional/Corporate'
      },
      {
        id: 9,
        name: 'Enterprise IoT & Industry 4.0 Program',
        description: 'Strategic training program for digital transformation and smart manufacturing',
        price: '₹65,999',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Enterprise Cloud Platforms', 'Digital Twin Technology', 'Executive Certification', 'Strategic Consulting'],
        difficulty: 'Executive',
        age: 'C-Suite/Senior Management'
      },
      {
        id: 10,
        name: 'Advanced Manufacturing & Prototyping Program',
        description: 'Professional training in advanced manufacturing technologies and rapid prototyping',
        price: '₹35,999',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Professional CAD Systems', 'Industrial 3D Printing', 'Manufacturing Certification', 'Industry Projects'],
        difficulty: 'Professional',
        age: 'Engineering/Manufacturing'
      }
    ],
    custom: [
      {
        id: 11,
        name: 'Enterprise Service Robotics Platform',
        description: 'Custom autonomous service robot solutions for hospitality and healthcare industries',
        price: 'Enterprise Quote',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['AI Navigation', 'Fleet Management', 'Enterprise Integration', 'Professional Support'],
        difficulty: 'Enterprise',
        age: 'Commercial/Industrial'
      },
      {
        id: 12,
        name: 'Smart Infrastructure Monitoring System',
        description: 'Comprehensive IoT-based monitoring solution for smart cities and industrial facilities',
        price: 'Enterprise Quote',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Multi-sensor Networks', 'Real-time Analytics', 'Cloud Dashboard', 'Predictive Maintenance'],
        difficulty: 'Enterprise',
        age: 'Municipal/Industrial'
      },
      {
        id: 13,
        name: 'Enterprise Building Automation System',
        description: 'Comprehensive smart building solution for corporate facilities and institutions',
        price: 'Enterprise Quote',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Integrated Building Systems', 'Energy Optimization', 'Security Integration', 'Facility Management'],
        difficulty: 'Enterprise',
        age: 'Corporate/Institutional'
      }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'Professional': return 'bg-purple-100 text-purple-800';
      case 'Expert': return 'bg-indigo-100 text-indigo-800';
      case 'Executive': return 'bg-pink-100 text-pink-800';
      case 'Enterprise': return 'bg-slate-100 text-slate-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Enterprise Solutions Portfolio
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comprehensive enterprise-grade solutions designed for institutional excellence, 
            corporate training programs, and advanced research applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeCategory as keyof typeof products].map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(product.difficulty)}`}>
                    {product.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-slate-800 mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {product.name}
                </h3>
                <p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Zap className="h-4 w-4 text-cyan-500 mr-2" />
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{product.age}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>In Stock</span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <span 
                    className="text-2xl font-bold text-slate-800"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {product.price}
                  </span>
                  <a
                    href={`https://wa.me/918438686030?text=Hi%20TamizhTech!%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}.%20Can%20you%20provide%20more%20details?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span>Get Quote</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready for Enterprise Partnership?
            </h3>
            <p 
              className="text-lg mb-6 opacity-90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Schedule an executive consultation to discuss custom enterprise solutions, 
              institutional partnerships, and strategic technology implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918438686030?text=Hello%20TamizhTech!%20I'd%20like%20to%20schedule%20an%20executive%20consultation%20for%20enterprise%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>Schedule Executive Consultation</span>
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href="mailto:tamizhtechpvtltd@gmail.com?subject=Enterprise Partnership Inquiry"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>Partnership Inquiry</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;