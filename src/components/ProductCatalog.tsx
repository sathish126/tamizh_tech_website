import React, { useState } from 'react';

const whatsappNumber = '918148045030';

// Helper to extract category from product name
const getCategory = (name: string) => {
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
const getImagePath = (productName: string) => 
  `/image/productimages/${productName}.jpeg`;

const rawProducts = [
  { name: 'HC-SR04 Ultrasonic Sensor, 20-4500 mm', price: 70 },
  { name: 'IR sensor', price: 40 },
  { name: 'PIR Motion Sensor', price: 70 },
  { name: 'DHT11 Temp & Humidity Sensor', price: 80 },
  { name: 'DHT22 (AM2302) Sensor', price: 180 },
  { name: 'LDR (Light Sensor)', price: 40 },
  { name: 'LM35 Temperature Sensor', price: 80 },
  { name: 'MQ2 Gas Sensor', price: 130 },
  { name: 'IR Obstacle Sensor Modul', price: 50 },
  { name: 'MPU6050 (Gyro + Accel)', price: 180 },
  { name: 'Soil Moisture Sensor', price: 70 },
  { name: 'Rain Sensor Module', price: 60 },
  { name: 'Sound Detection Sensor', price: 80 },
  { name: 'DS18B20 Waterproof Sensor', price: 280 },
  { name: 'GPS Module (NEO-6M)', price: 700 },
  { name: 'RFID Module (RC522)', price: 150 },
  { name: 'Hall Effect Sensor (A3144)', price: 60 },
  { name: 'Vibration Sensor (SW-420)', price: 80 },
  { name: 'BO Motor (Plastic Gear)', price: 80 },
  { name: 'BO Dual Shaft Motor', price: 110 },
  { name: 'DC Geared Motor (Metal Gear)', price: 360 },
  { name: 'High Torque DC Motor', price: 500 },
  { name: 'Johnson Geared Motor', price: 600 },
  { name: 'G775 DC Motor', price: 900 },
  { name: 'DC Worm Gear Motor', price: 900 },
  { name: 'Drone Coreless DC Motor', price: 150 },
  { name: 'N20 Micro Gear Motor', price: 300 },
  { name: '12V Fan Motor', price: 120 },
  { name: 'Stepper Motor (28BYJ-48)', price: 200 },
  { name: 'Stepper Motor (NEMA 17)', price: 130 },
  { name: 'Servo Motor (SG90)', price: 200 },
  { name: 'Servo Motor (MG995-MG996R)', price: 450 },
  { name: 'Brushless DC Motor (BLDC)', price: 350 },
  { name: 'Arduino UNO R3', price: 500 },
  { name: 'Arduino Nano', price: 200 },
  { name: 'Arduino Mega 2560', price: 1000 },
  { name: 'Arduino Pro Mini', price: 250 },
  { name: 'NodeMCU (ESP8266)', price: 300 },
  { name: 'ESP32 Dev Board', price: 450 },
  { name: 'Raspberry Pi Pico', price: 500 },
  { name: 'ATmega328P (IC only)', price: 150 },
  { name: 'STM32 Blue Pill', price: 400 },
  { name: 'PIC16F877A', price: 400 },
  { name: '8051 (AT89C51, AT89S52)', price: 150 },
  { name: 'Mini Breadboard', price: 50 },
  { name: 'Half-Size Breadboard', price: 100 },
  { name: 'Full-Size Breadboard', price: 150 },
  { name: 'Breadboard with Power Rail', price: 180 },
  { name: 'Transparent Breadboard', price: 200 },
  { name: 'Breadboard Kit', price: 300 },
  { name: 'Standard Dot PCB 2x2', price: 25 },
  { name: 'Medium Dot PCB 4x3', price: 35 },
  { name: 'Large Dot PCB', price: 50 },
  { name: 'Full-size Dot PCB', price: 80 },
  { name: 'FR2 (Phenolic) PCB', price: 50 },
  { name: 'FR4 Glass Epoxy Dot PCB', price: 150 },
  { name: 'Copper Clad Dot PCB', price: 120 },
  { name: 'Single Side Strip Board', price: 80 },
  { name: 'Zero PCB (Double-Sided)', price: 170 },
  { name: 'Plastic Robot Wheel', price: 40 },
  { name: 'Rubber Tyre Wheel', price: 70 },
  { name: 'Castor Wheel (Free Wheel)', price: 70 },
  { name: 'Omni Wheel', price: 80 },
  { name: 'Mecanum Wheel', price: 1300 },
  { name: 'Gear + Wheel Set', price: 110 },
  { name: 'Mini Trolley Wheel', price: 220 },
  { name: 'Tank Track + Wheel Set', price: 800 },
  { name: 'Castor Wheel Bracket', price: 40 },
  { name: 'Shaft Coupler (for motors)', price: 60 },
  { name: 'D-type - Round Shaft Hubs', price: 100 },
  { name: 'Mini Speaker (Buzzers) 1w', price: 40 },
  { name: '8Ω 0.5W Speaker', price: 35 },
  { name: '8Ω 1W Speaker', price: 40 },
  { name: '8Ω 2W Speaker', price: 50 },
  { name: '8Ω 3W Speaker (Oval)', price: 90 },
  { name: '4Ω 3W Speaker (Round)', price: 110 },
  { name: '4Ω 5W Speaker', price: 150 },
  { name: '4Ω 10W Speaker', price: 320 },
  { name: 'PAM8403 Module', price: 80 },
  { name: 'TDA2822M Module', price: 80 },
  { name: 'TDA2030A Module', price: 170 },
  { name: 'TDA7377 Module 30w', price: 430 },
  { name: 'FS‑i6X + FS‑iA6B (6CH Receiver)', price: null },
];

const products = rawProducts.map(product => ({
  ...product,
  image: getImagePath(product.name),
}));

const categories = [
  'All',
  ...Array.from(new Set(products.map(p => getCategory(p.name))))
];

const viewOptions = [15, 30, 45];

const ProductCatalog = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewCount, setViewCount] = useState(viewOptions[0]);

  const handleQuantityChange = (idx: number, value: number) => {
    setQuantities((prev) => ({ ...prev, [idx]: value }));
  };

  const getWhatsappLink = (product: any, quantity: number) => {
    const msg = `Hello TamizhTech! I want to order:\nProduct: ${product.name}\nQuantity: ${quantity || 1}\nPrice: ${product.price ? product.price + ' INR' : 'Contact for price'}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  // Filtered products by search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || getCategory(product.name) === filter;
    return matchesSearch && matchesFilter;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / viewCount);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * viewCount, currentPage * viewCount);

  const handleCategoryClick = (cat: string) => {
    setFilter(cat);
    setCurrentPage(1);
  };

  const handleViewCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewCount(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <section id="products" className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Product Catalog
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar for categories */}
          <aside className="md:w-1/5 w-full mb-6 md:mb-0">
            <div className="bg-white rounded-xl shadow-md p-4 sticky top-28">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">Categories</h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-medium ${filter === cat ? 'bg-orange-500 text-white' : 'bg-gray-100 text-slate-700 hover:bg-orange-100'}`}
                      onClick={() => handleCategoryClick(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content: search, view options, products */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <div className="flex items-center gap-2">
                <label htmlFor="viewCount" className="text-sm text-slate-700">View:</label>
                <select
                  id="viewCount"
                  value={viewCount}
                  onChange={handleViewCountChange}
                  className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  {viewOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className="text-sm text-slate-500">per page</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedProducts.map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
                  <div>
                    <div className="w-full h-32 flex items-center justify-center mb-4 bg-transparent rounded-lg overflow-hidden">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="object-contain h-full" />
                      ) : (
                        <span className="text-gray-400 text-5xl">📦</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>{product.name}</h3>
                    <p className="text-orange-600 font-bold text-xl mb-4">{product.price ? `₹${product.price}` : <span className="text-gray-500">Contact</span>}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <label htmlFor={`qty-${idx}`} className="text-sm text-slate-700">Qty:</label>
                    <input
                      id={`qty-${idx}`}
                      type="number"
                      min={1}
                      max={99}
                      value={quantities[idx] || 1}
                      onChange={e => handleQuantityChange(idx, Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <a
                    href={getWhatsappLink(product, quantities[idx] || 1)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 mt-auto focus:outline-none"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Order via WhatsApp
                  </a>
                </div>
              ))}
            </div>
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-slate-700 font-semibold disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-slate-700 font-medium">Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-slate-700 font-semibold disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
