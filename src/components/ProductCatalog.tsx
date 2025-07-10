import React, { useState } from 'react';
import { ExternalLink, Info, Users, Clock, Zap } from 'lucide-react';

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('robotics');

  const categories = [
    { id: 'robotics', name: 'Robotics Kits', icon: '🤖' },
    { id: 'education', name: 'Educational Services', icon: '📚' },
    { id: 'custom', name: 'Custom Projects', icon: '⚙️' }
  ];

  const products = {
    robotics: [
      {
        id: 1,
        name: 'Hover Craft Kit',
        description: 'Build your own air-cushioned vehicle with propulsion system',
        price: '₹5,999',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Arduino Compatible', 'Bluetooth Control', 'Complete Assembly Kit'],
        difficulty: 'Intermediate',
        age: '12+ years'
      },
      {
        id: 2,
        name: 'Line Follower Bot Kit',
        description: 'Autonomous robot that follows pre-defined paths using sensors',
        price: '₹3,499',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['IR Sensors', 'Motor Control', 'Programming Guide'],
        difficulty: 'Beginner',
        age: '10+ years'
      },
      {
        id: 3,
        name: 'RC Race Bot Kit',
        description: 'High-speed remote-controlled racing robot with advanced maneuverability',
        price: '₹4,999',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['2.4GHz Remote', 'High Torque Motors', 'Racing Chassis'],
        difficulty: 'Intermediate',
        age: '12+ years'
      },
      {
        id: 4,
        name: 'RC Sumo Bot Kit',
        description: 'Combat-ready robot designed for competitive sumo wrestling',
        price: '₹6,499',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Reinforced Chassis', 'Ultrasonic Sensors', 'Competition Ready'],
        difficulty: 'Advanced',
        age: '14+ years'
      },
      {
        id: 5,
        name: 'RC Soccer Bot Kit',
        description: 'Specialized robot for soccer competitions with ball handling',
        price: '₹5,499',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Ball Kicking Mechanism', 'Omnidirectional Wheels', 'Team Play Ready'],
        difficulty: 'Advanced',
        age: '14+ years'
      },
      {
        id: 6,
        name: 'Drone Kit',
        description: 'Complete quadcopter assembly with flight control system',
        price: '₹8,999',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Flight Controller', 'Camera Module', 'GPS Navigation'],
        difficulty: 'Advanced',
        age: '16+ years'
      }
    ],
    education: [
      {
        id: 7,
        name: 'Electronics & Circuit Design Workshop',
        description: 'Hands-on workshop covering basic to advanced circuit design',
        price: '₹2,999',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['PCB Design', 'Soldering Training', 'Project Portfolio'],
        difficulty: 'All Levels',
        age: '12+ years'
      },
      {
        id: 8,
        name: 'Microcontroller Programming (Arduino/ESP32)',
        description: 'Comprehensive programming course for embedded systems',
        price: '₹3,499',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Arduino IDE', 'ESP32 Projects', 'IoT Integration'],
        difficulty: 'Intermediate',
        age: '14+ years'
      },
      {
        id: 9,
        name: 'IoT & Automation Course',
        description: 'Learn to build smart systems with Internet of Things',
        price: '₹4,999',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Cloud Integration', 'Mobile App Control', 'Real Projects'],
        difficulty: 'Advanced',
        age: '16+ years'
      },
      {
        id: 10,
        name: '3D Design & Printing Workshop',
        description: 'From concept to creation with 3D modeling and printing',
        price: '₹3,999',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['CAD Software', '3D Printing', 'Prototyping'],
        difficulty: 'Intermediate',
        age: '12+ years'
      }
    ],
    custom: [
      {
        id: 11,
        name: 'IoT-based Tray Robot',
        description: 'Automated serving robot with IoT connectivity',
        price: 'Quote on Request',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['WiFi Control', 'Obstacle Avoidance', 'Custom Design'],
        difficulty: 'Professional',
        age: 'Industrial'
      },
      {
        id: 12,
        name: 'Solar Temperature Monitoring',
        description: 'Renewable energy powered monitoring system',
        price: 'Quote on Request',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Solar Panels', 'Data Logging', 'Remote Monitoring'],
        difficulty: 'Professional',
        age: 'Industrial'
      },
      {
        id: 13,
        name: 'Smart Home Automation',
        description: 'Complete home automation solution with voice control',
        price: 'Quote on Request',
        image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Voice Control', 'Mobile App', 'Energy Management'],
        difficulty: 'Professional',
        age: 'Residential'
      }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'Professional': return 'bg-purple-100 text-purple-800';
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
            Product Catalog
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Discover our comprehensive range of robotics kits, educational services, 
            and custom solutions designed to inspire innovation and learning.
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
              Need a Custom Solution?
            </h3>
            <p 
              className="text-lg mb-6 opacity-90"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Our team can design and build custom robotics solutions tailored to your specific requirements.
            </p>
            <a
              href="https://wa.me/918438686030?text=Hello%20TamizhTech!%20I'd%20like%20to%20discuss%20a%20custom%20robotics%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>Discuss Custom Project</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;