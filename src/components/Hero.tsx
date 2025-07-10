import React from 'react';
import { ArrowRight, Play, Zap, Users, Award, TrendingUp, Globe, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-full text-sm font-semibold">
                  🏆 Industry Leader in Educational Technology
                </div>
              </div>
              <h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Enterprise Solutions for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {' '}Educational Excellence
                </span>
              </h1>
              <p 
                className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Premium technology solutions provider specializing in institutional robotics labs, 
                corporate training programs, and advanced STEAM education systems for global enterprises.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-2">
                <div className="bg-cyan-500 p-2 rounded-full">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-gray-300">Enterprise Clients</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-sm text-gray-300">Solutions Deployed</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-emerald-500 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-sm text-gray-300">Client Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-purple-500 p-2 rounded-full">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm text-gray-300">Countries Served</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918438686030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20enterprise%20solutions%20for%20my%20organization."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>Schedule Executive Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Play className="h-5 w-5" />
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">Trusted by leading institutions worldwide</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-gray-300">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-orange-400" />
                  <span className="text-sm text-gray-300">Industry Awards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm text-gray-300">Global Presence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 overflow-hidden">
                {/* Enterprise Dashboard Mockup */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Enterprise Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-lg">
                      <div className="text-white text-sm font-medium mb-2">Active Projects</div>
                      <div className="text-2xl font-bold text-white">24</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-lg">
                      <div className="text-white text-sm font-medium mb-2">Institutions</div>
                      <div className="text-2xl font-bold text-white">12</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-lg">
                    <div className="text-white text-sm font-medium mb-2">Global Reach</div>
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-bold text-white">15 Countries</div>
                      <Globe className="h-6 w-6 text-white opacity-80" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-lg">
                    <div className="text-white text-sm font-medium mb-2">Success Rate</div>
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-bold text-white">98.5%</div>
                      <TrendingUp className="h-6 w-6 text-white opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;