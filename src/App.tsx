import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import OurPartners from './components/OurPartners';
import NewArrivals from './components/NewArrivals';
import Robokits from './components/Robokits';
import Testimonial from './components/Testimonial.tsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <NewArrivals />
      <Robokits />
      <About />
      <OurPartners />
      <Testimonial />
      <Team />
      <Contact />
      <Footer />
    
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;