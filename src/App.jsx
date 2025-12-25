import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Wrench, Shield, Award, Menu, X, ChevronRight, Star } from 'lucide-react';

const RatosAutos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('repairs');
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', details: '' });
  
  // Replace this path with your actual logo path
  const logoPath = '/logo.png'; // Put your logo in the public folder as logo.png

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();

  const message = `
Hello Ratos Autos 👋

New Appointment Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Details: ${formData.details}
  `;

  const whatsappNumber = '2348033161077'; // remove leading 0
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
};


  const services = {
    repairs: {
      title: 'Repairs & Maintenance',
      items: [
        { name: 'Brake Repair Services', details: ['Disc brake Service', 'Drum brake Service', 'Inspection & Diagnosis', 'ABS Diagnosis', 'Brake Fluid Flush'] },
        { name: 'Maintenance Services', details: ['Oil Change Service', 'Transmission Service', 'Cooling System Flush', 'Tire Rotation & Balance', 'Panel Beating & Spraying'] },
        { name: 'Electrical System', details: ['All Lighting', 'Batteries', 'Alternators', 'Air bag system', 'Windshield Wipers'] }
      ]
    },
    engine: {
      title: 'Engine & Diagnostic',
      items: [
        { name: 'Engine Performance', details: ['Drivability Diagnosis', 'Fuel Injection Service', 'Computer System Diagnosis', 'Maintenance Tune-up', 'Emission Diagnosis/Repair'] },
        { name: 'Diagnostic Services', details: ['Computer/Scanning Machine Testing', 'Exact Problem Identification', 'Professional Assessment', 'Error Code Analysis'] }
      ]
    },
    others: {
      title: 'Specialized Services',
      items: [
        { name: 'Wheel Services', details: ['Balancing Machine Assessment', 'On-spot Tyre Evaluation', 'Alignment for Tyre Durability', 'Driving Pleasure Enhancement'] },
        { name: 'Battery & Vulcanizing', details: ['Battery Testing & Charging', 'Alternator Diagnosis', 'Modern Vulcanizing Process', 'Professional Installation'] }
      ]
    }
  };

const clients = [
  { name: 'Nigerian Bottling Company', logo: '/clients/nigerian-bottling-company.jpg' },
  { name: 'GSK', logo: '/clients/GSK.jpg' },
  { name: 'PZ Cussons', logo: 'clients/pz.jpg' },
  { name: 'Haier', logo: 'clients/haier.gif' },
  { name: 'GTBank', logo: 'clients/gt.jpg' },
  { name: '7up', logo: 'clients/7up.jpg' },
  { name: 'MTN', logo: 'clients/mtn.jpg' },
  { name: 'Coca-Cola', logo: 'clients/cola.jpg' },
  { name: 'CBN', logo: 'clients/cbn.jpg' },
  { name: 'GMT', logo: 'clients/gmt.jpg' },
  { name: 'Chevron', logo: 'clients/chevron.jpg' },
  { name: 'Cummins', logo: 'clients/cummins.jpg' },
  { name: 'KPMG', logo: 'clients/kpmg.jpg' }
];


  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src={logoPath} alt="Ratos Autos Logo" className="h-12 w-auto" />

            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-emerald-400 transition-colors font-medium">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-white hover:text-emerald-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Overlay */}
      <section id="home" className="relative min-h-screen md:h-screen overflow-hidden">

        
       {/* Background Images */}
<div className="absolute inset-0 overflow-hidden">
  {[
    '/hero/hero1.jpg',
    '/hero/hero2.jpg',
    '/hero/hero3.jpeg'
  ].map((img, i) => (
    <div
      key={i}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        currentSlide === i ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={img}
        alt="Ratos Autos workshop"
        className="w-full h-full object-cover"
        loading={i === 0 ? 'eager' : 'lazy'}
      />
    </div>
  ))}
</div>


        {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/65"></div>


        {/* Hero Content */}
        <div className="relative h-full flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-emerald-600 bg-opacity-90 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-white text-sm font-semibold">Highest Rated Repair Shop</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Professional Auto Care You Can Trust
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Quality service at affordable rates. From quick oil changes to major repairs, we're your trusted auto repair partner in Lagos.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#services" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <span>Our Services</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#contact" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
                  Book Appointment
                </a>
              </div>

              {/* Quick Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-6">

                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 backdrop-blur-md rounded-lg p-5 border border-emerald-400 border-opacity-20 hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300">
                  <Clock className="w-6 h-6 text-white mb-2" />
                  <p className="text-sm text-emerald-100">Mon - Sat</p>
                  <p className="text-white font-semibold">8:00am - 6:00pm</p>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 backdrop-blur-md rounded-lg p-5 border border-gray-500 border-opacity-30 hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300">
                  <Phone className="w-6 h-6 text-emerald-400 mb-2" />
                  <p className="text-sm text-gray-300">Call Us Now</p>
                  <p className="text-white font-semibold">08033161077</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 backdrop-blur-md rounded-lg p-5 border border-emerald-400 border-opacity-20 hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300">
                  <MapPin className="w-6 h-6 text-white mb-2" />
                  <p className="text-sm text-emerald-100">Visit Us</p>
                  <p className="text-white font-semibold"> 37, Abosede Kuboye, Off Imam Dauda Street, Eric Moore, Surulere, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? 'bg-emerald-600 w-8' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Certified Auto Mechanics</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ratos Autos embodies a standard of quality, held by a nationwide network of the most respected auto repair facilities in the industry. Our technicians are enrolled based on reputation, integrity, qualifications and expertise.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We guarantee you perfect service rendered by our competent auto experts.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Certified Experts</h3>
                    <p className="text-sm text-gray-600">Qualified professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Guarantee</h3>
                    <p className="text-sm text-gray-600">100% satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {['Quality service at affordable rates', 'State-of-the-art diagnostic equipment', 'Experienced and certified mechanics', 'Trusted by leading corporations'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Complete Auto Care Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From routine maintenance to complex repairs, we provide comprehensive automotive services</p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeService === key
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {services[key].title}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {services[activeService].items.map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-100 hover:border-emerald-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <ul className="space-y-2">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-start space-x-2 text-gray-600">
                      <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="gallery" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">Trusted By</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Our Prestigious Clients</h2>
            <p className="text-gray-400">Serving Nigeria's leading corporations with excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {clients.map((client, i) => (
<div
  key={i}
  className="bg-black bg-opacity-40 backdrop-blur-md rounded-xl p-6
             flex flex-col items-center justify-center
             border border-emerald-500 border-opacity-30
             hover:bg-opacity-60 transition-all"
>
  {/* Logo placeholder */}
  <div className="w-20 h-20 mb-4 rounded-lg bg-gray-800 flex items-center justify-center">
    {client.logo ? (
      <img
        src={client.logo}
        alt={client.name}
        className="max-w-full max-h-full object-contain"
      />
    ) : (
      <span className="text-xs text-gray-400">LOGO</span>
    )}
  </div>

  {/* Client name */}
  <p className="text-center text-sm font-semibold text-white">
    {client.name}
  </p>
</div>



            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-emerald-100 mb-8">Visit us or give us a call. We're here to help with all your automotive needs.</p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-emerald-100">37, Abosede Kuboye, Off Imam Dauda Street<br />Eric Moore, Surulere, Lagos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Numbers</h3>
                    <p className="text-emerald-100">08033161077 | 08052021485<br />08026684230 | 08099701803</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-emerald-100">Monday - Saturday: 8:00am - 6:00pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Schedule an Appointment</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600" 
                />
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="">Select Service</option>
                  <option value="brake">Brake Repair</option>
                  <option value="oil">Oil Change</option>
                  <option value="diagnostic">Engine Diagnostic</option>
                  <option value="other">Other</option>
                </select>
                <textarea 
                  placeholder="Additional Details" 
                  rows="4" 
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                ></textarea>
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src={logoPath} alt="Ratos Autos Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">Ratos Autos</span>
            </div>
            <p className="mb-4">Professional Auto Care Since 2018</p>
            <p className="text-sm">© 2024 Ratos Autos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RatosAutos;