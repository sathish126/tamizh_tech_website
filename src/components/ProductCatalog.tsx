import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Send } from 'lucide-react';

const whatsappNumber = '918148045030';

// Helper to extract category from product name
const getCategory = (name) => {
  if (/sensor/i.test(name)) return 'Sensor';
  if (/motor|servo|stepper|bldc|coreless|gear/i.test(name)) return 'Motor';
  if (/arduino|raspberry|esp|pic|stm|atmega|board|nucleo/i.test(name)) return 'Board';
  if (/module/i.test(name)) return 'Module';
  if (/pcb|strip/i.test(name)) return 'PCB';
  if (/wheel|tyre|track|bracket|coupler|hub/i.test(name)) return 'Wheel';
  if (/speaker|buzzer/i.test(name)) return 'Speaker';
  return 'Other';
};

// Helper to generate image path from product name
const getImagePath = (productName) => `/image/productimages/${productName}.jpeg`;

const rawProducts = [
  { name: 'HC-SR04 Ultrasonic Sensor, 20-4500 mm', price: 70, isNew: true },
  { name: 'IR sensor', price: 40, isNew: false },
  { name: 'PIR Motion Sensor', price: 70, isNew: false },
  { name: 'DHT11 Temp & Humidity Sensor', price: 80, isNew: false },
  { name: 'DHT22 (AM2302) Sensor', price: 180, isNew: true },
  { name: 'LDR (Light Sensor)', price: 40, isNew: false },
  { name: 'LM35 Temperature Sensor', price: 80, isNew: false },
  { name: 'MQ2 Gas Sensor', price: 130, isNew: false },
  { name: 'IR Obstacle Sensor Module', price: 50, isNew: true },
  { name: 'MPU6050 (Gyro + Accel)', price: 180, isNew: false },
  { name: 'Soil Moisture Sensor', price: 70, isNew: false },
  { name: 'Rain Sensor Module', price: 60, isNew: false },
  { name: 'Sound Detection Sensor', price: 80, isNew: false },
  { name: 'DS18B20 Waterproof Sensor', price: 280, isNew: true },
  { name: 'GPS Module (NEO-6M)', price: 700, isNew: false },
  { name: 'RFID Module (RC522)', price: 150, isNew: false },
  { name: 'Hall Effect Sensor (A3144)', price: 60, isNew: false },
  { name: 'Vibration Sensor (SW-420)', price: 80, isNew: false },
  { name: 'BO Motor (Plastic Gear)', price: 80, isNew: false },
  { name: 'BO Dual Shaft Motor', price: 110, isNew: true },
  { name: 'DC Geared Motor (Metal Gear)', price: 360, isNew: false },
  { name: 'High Torque DC Motor', price: 500, isNew: false },
  { name: 'Johnson Geared Motor', price: 600, isNew: true },
  { name: 'G775 DC Motor', price: 900, isNew: false },
  { name: 'DC Worm Gear Motor', price: 900, isNew: false },
  { name: 'Drone Coreless DC Motor', price: 150, isNew: true },
  { name: 'N20 Micro Gear Motor', price: 300, isNew: false },
  { name: '12V Fan Motor', price: 120, isNew: false },
  { name: 'Stepper Motor (28BYJ-48)', price: 200, isNew: false },
  { name: 'Stepper Motor (NEMA 17)', price: 130, isNew: false },
  { name: 'Servo Motor (SG90)', price: 200, isNew: false },
  { name: 'Servo Motor (MG995-MG996R)', price: 450, isNew: true },
  { name: 'Brushless DC Motor (BLDC)', price: 350, isNew: false },
  { name: 'Arduino UNO R3', price: 500, isNew: false },
  { name: 'Arduino Nano', price: 200, isNew: false },
  { name: 'Arduino Mega 2560', price: 1000, isNew: true },
  { name: 'Arduino Pro Mini', price: 250, isNew: false },
  { name: 'NodeMCU (ESP8266)', price: 300, isNew: false },
  { name: 'ESP32 Dev Board', price: 450, isNew: true },
  { name: 'Raspberry Pi Pico', price: 500, isNew: false },
  { name: 'ATmega328P (IC only)', price: 150, isNew: false },
  { name: 'STM32 Blue Pill', price: 400, isNew: false },
  { name: 'PIC16F877A', price: 400, isNew: false },
  { name: '8051 (AT89C51, AT89S52)', price: 150, isNew: false },
  { name: 'Mini Breadboard', price: 50, isNew: false },
  { name: 'Half-Size Breadboard', price: 100, isNew: false },
  { name: 'Full-Size Breadboard', price: 150, isNew: false },
  { name: 'Breadboard with Power Rail', price: 180, isNew: true },
  { name: 'Transparent Breadboard', price: 200, isNew: false },
  { name: 'Breadboard Kit', price: 300, isNew: false },
  { name: 'Standard Dot PCB 2x2', price: 25, isNew: false },
  { name: 'Medium Dot PCB 4x3', price: 35, isNew: false },
  { name: 'Large Dot PCB', price: 50, isNew: false },
  { name: 'Full-size Dot PCB', price: 80, isNew: false },
  { name: 'FR2 (Phenolic) PCB', price: 50, isNew: false },
  { name: 'FR4 Glass Epoxy Dot PCB', price: 150, isNew: true },
  { name: 'Copper Clad Dot PCB', price: 120, isNew: false },
  { name: 'Single Side Strip Board', price: 80, isNew: false },
  { name: 'Zero PCB (Double-Sided)', price: 170, isNew: false },
  { name: 'Plastic Robot Wheel', price: 40, isNew: false },
  { name: 'Rubber Tyre Wheel', price: 70, isNew: true },
  { name: 'Castor Wheel (Free Wheel)', price: 70, isNew: false },
  { name: 'Omni Wheel', price: 80, isNew: false },
  { name: 'Mecanum Wheel', price: 1300, isNew: true },
  { name: 'Gear + Wheel Set', price: 110, isNew: false },
  { name: 'Mini Trolley Wheel', price: 220, isNew: false },
  { name: 'Tank Track + Wheel Set', price: 800, isNew: false },
  { name: 'Castor Wheel Bracket', price: 40, isNew: false },
  { name: 'Shaft Coupler (for motors)', price: 60, isNew: false },
  { name: 'D-type - Round Shaft Hubs', price: 100, isNew: false },
  { name: 'Mini Speaker (Buzzers) 1W', price: 40, isNew: false },
  { name: '8Ω 0.5W Speaker', price: 35, isNew: false },
  { name: '8Ω 1W Speaker', price: 40, isNew: false },
  { name: '8Ω 2W Speaker', price: 50, isNew: false },
  { name: '8Ω 3W Speaker (Oval)', price: 90, isNew: true },
  { name: '4Ω 3W Speaker (Round)', price: 110, isNew: false },
  { name: '4Ω 5W Speaker', price: 150, isNew: false },
  { name: '4Ω 10W Speaker', price: 320, isNew: false },
  { name: 'PAM8403 Module', price: 80, isNew: false },
  { name: 'TDA2822M Module', price: 80, isNew: false },
  { name: 'TDA2030A Module', price: 170, isNew: false },
  { name: 'TDA7377 Module 30W', price: 430, isNew: true },
  { name: 'FS‑i6X + FS‑iA6B (6CH Receiver)', price: null, isNew: false },
];

const products = rawProducts.map((product) => ({
  ...product,
  image: getImagePath(product.name),
  category: getCategory(product.name),
}));

const categories = ['All', 'New', ...Array.from(new Set(products.map((p) => p.category)))];

const viewOptions = [15, 30, 45];

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h3 className="text-2xl font-semibold text-red-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Something Went Wrong
          </h3>
          <p className="text-gray-600 mt-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
            We're sorry, an error occurred while loading the product catalog. Please try again later or contact support.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello%20TamizhTech!%20I%20encountered%20an%20error%20on%20the%20product%20catalog%20page.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Contact Support
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

const ProductCatalog = () => {
  const [quantities, setQuantities] = useState({});
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewCount, setViewCount] = useState(viewOptions[0]);
  const [inquiryCart, setInquiryCart] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(1); // Reset to first page on search
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const handleQuantityChange = (idx, value) => {
    setQuantities((prev) => ({ ...prev, [idx]: Math.max(1, parseInt(value) || 1) }));
  };

  const addToInquiryCart = (product) => {
    if (!inquiryCart.some((item) => item.name === product.name)) {
      setInquiryCart([...inquiryCart, { ...product, quantity: quantities[products.indexOf(product)] || 1 }]);
    }
  };

  const removeFromInquiryCart = (productName) => {
    setInquiryCart(inquiryCart.filter((item) => item.name !== productName));
  };

  const sendInquiry = () => {
    if (inquiryCart.length === 0) {
      alert('Your inquiry cart is empty!');
      return;
    }
    const message = `Hello TamizhTech! I'm interested in the following products:\n${inquiryCart
      .map((item) => `- ${item.name} (Qty: ${item.quantity}, Price: ${item.price ? `₹${item.price}` : 'Contact'})`)
      .join('\n')}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getWhatsappLink = (product, quantity) => {
    const msg = `Hello TamizhTech! I want to order:\nProduct: ${product.name}\nQuantity: ${quantity || 1}\nPrice: ${product.price ? `₹${product.price}` : 'Contact for price'}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const openModal = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || (filter === 'New' ? product.isNew : product.category === filter);
    const matchesPrice = product.price ? product.price >= priceRange[0] && product.price <= priceRange[1] : true;
    return matchesSearch && matchesFilter && matchesPrice;
  });

  const totalPages = Math.ceil(filteredProducts.length / viewCount);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * viewCount, currentPage * viewCount);

  return (
    <ErrorBoundary>
      <section id="products" className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Sticky Header */}
          <div className="sticky top-0 bg-white z-10 py-4 border-b border-gray-200">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Product Catalog
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-1/2">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                  aria-label="Search products"
                />
                <Send className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="sm:hidden bg-blue-600 text-white px-4 py-2 rounded-md font-medium"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {isFilterOpen ? 'Close Filters' : 'Open Filters'}
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            {/* Filter Panel */}
            <aside
              className={`lg:w-1/4 w-full ${isFilterOpen ? 'block' : 'hidden'} lg:block`}
            >
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3
                  className="text-lg font-semibold text-gray-900 mb-4"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Filters
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      Categories
                    </h4>
                    <ul className="space-y-2">
                      {categories.map((cat) => (
                        <li key={cat}>
                          <button
                            className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                              filter === cat
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={() => {
                              setFilter(cat);
                              setCurrentPage(1);
                              if (isFilterOpen) setIsFilterOpen(false);
                            }}
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                          >
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      Price Range (₹)
                    </h4>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Min"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      />
                      <input
                        type="number"
                        min="0"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1500])}
                        className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Max"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="viewCount" className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      View:
                    </label>
                    <select
                      id="viewCount"
                      value={viewCount}
                      onChange={(e) => {
                        setViewCount(Number(e.target.value));
                        setCurrentPage(1);
                      }}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {viewOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <main className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative">
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="object-contain h-full w-full"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-gray-400 text-3xl">📦</span>
                        )}
                      </div>
                    </div>
                    <h3
                      className="text-sm font-medium text-gray-900 mt-2 line-clamp-2"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-lg font-semibold text-gray-900 mt-1"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {product.price ? `₹${product.price}` : <span className="text-gray-500">Contact</span>}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <label htmlFor={`qty-${idx}`} className="text-sm text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Qty:
                      </label>
                      <input
                        id={`qty-${idx}`}
                        type="number"
                        min={1}
                        max={99}
                        value={quantities[idx] || 1}
                        onChange={(e) => handleQuantityChange(idx, e.target.value)}
                        className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                        aria-label={`Quantity for ${product.name}`}
                      />
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => openModal(product)}
                        className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                        aria-label={`View details for ${product.name}`}
                      >
                        Quick View
                      </button>
                      <button
                        onClick={() => addToInquiryCart(product)}
                        className="flex-1 bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                        aria-label={`Add ${product.name} to inquiry cart`}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" /> Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-6">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 disabled:opacity-50"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                    aria-label="Previous page"
                  >
                    Previous
                  </button>
                  <span
                    className="text-gray-700 font-medium"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 disabled:opacity-50"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                    aria-label="Next page"
                  >
                    Next
                  </button>
                </div>
              )}
              {/* Inquiry Cart Summary */}
              {inquiryCart.length > 0 && (
                <div className="mt-6 bg-white rounded-lg shadow-md p-4">
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-2"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    Inquiry Cart ({inquiryCart.length})
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {inquiryCart.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center text-sm text-gray-600"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        <span>
                          {item.name} (Qty: {item.quantity})
                        </span>
                        <button
                          onClick={() => removeFromInquiryCart(item.name)}
                          className="text-red-600 hover:text-red-700"
                          aria-label={`Remove ${item.name} from inquiry cart`}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={sendInquiry}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                    aria-label="Send inquiry via WhatsApp"
                  >
                    Send Inquiry
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>

        {/* Quick View Modal */}
        {modalProduct && (
          <div className="fixed inset-0 bg-gray-800/50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div
              className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={modalProduct.image}
                alt={modalProduct.name}
                className="w-full h-48 object-contain rounded-md mb-4"
                loading="lazy"
              />
              <h3
                className="text-xl font-medium text-gray-900 mb-2"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {modalProduct.name}
              </h3>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Category: {modalProduct.category}
              </p>
              <p
                className="text-lg font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {modalProduct.price ? `₹${modalProduct.price}` : 'Contact for Price'}
              </p>
              <div className="flex items-center gap-2 mb-4">
                <label
                  htmlFor={`modal-qty-${modalProduct.name}`}
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Qty:
                </label>
                <input
                  id={`modal-qty-${modalProduct.name}`}
                  type="number"
                  min={1}
                  max={99}
                  value={quantities[products.indexOf(modalProduct)] || 1}
                  onChange={(e) => handleQuantityChange(products.indexOf(modalProduct), e.target.value)}
                  className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                  aria-label={`Quantity for ${modalProduct.name}`}
                />
              </div>
              <a
                href={getWhatsappLink(modalProduct, quantities[products.indexOf(modalProduct)] || 1)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors text-center"
                style={{ fontFamily: 'Roboto, sans-serif' }}
                aria-label={`Order ${modalProduct.name} on WhatsApp`}
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        )}

        
      </section>
    </ErrorBoundary>
  );
};

export default ProductCatalog;