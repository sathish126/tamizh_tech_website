import React from 'react';
import { ArrowRight, Play, Zap, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 
                className="text-4xl md:text-6xl font-bold leading-tight"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Transform Ideas Into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {' '}Innovation
                </span>
              </h1>
              <p 
                className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Empowering students, creators, and communities through accessible robotics, 
                embedded systems, AI, IoT, and automation solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="bg-cyan-500 p-2 rounded-full">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-gray-300">Students Trained</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-gray-300">Projects Completed</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-indigo-500 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2024</p>
                  <p className="text-sm text-gray-300">Founded</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918438686030?text=Hello%20TamizhTech!%20I'd%20like%20to%20explore%20your%20robotics%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Play className="h-5 w-5" />
                <span>View Products</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-cyan-500 p-3 rounded-lg">
                      <div className="w-full h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg"></div>
                    </div>
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <div className="w-full h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-indigo-500 p-3 rounded-lg">
                      <div className="w-full h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg"></div>
                    </div>
                    <div className="bg-emerald-500 p-3 rounded-lg">
                      <div className="w-full h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg"></div>
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