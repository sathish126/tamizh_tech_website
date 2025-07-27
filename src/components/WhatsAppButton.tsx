import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/918148045030?text=Hello%20TamizhTech!%20I'd%20like%20to%20know%20more%20about%20your%20robotics%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-800"></div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;