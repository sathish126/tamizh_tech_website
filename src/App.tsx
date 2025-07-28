import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProductCatalog />
      <About />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;