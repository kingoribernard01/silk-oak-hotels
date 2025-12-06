"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, MapPin, ChevronDown, Phone } from 'lucide-react';

function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Luxury Hotel Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3840&auto=format&fit=crop" 
          alt="Silk Oak Luxury Hotel" 
          className="w-full h-full object-cover object-center animate-slow-zoom" 
          style={{ animation: 'subtleZoom 20s infinite alternate' }}
        />
        {/* Elegant Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-transparent to-black/30" />
      </div>
      <style>{`
        @keyframes subtleZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="relative z-10 text-left text-white pt-32 md:pt-48 px-4 max-w-5xl mx-auto md:ml-0 animate-fade-in-up">
      <div className="inline-flex items-center space-x-2 py-1 px-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-md mb-6 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
        <span className="text-gold-100 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">Welcome to Nairobi's Finest</span>
      </div>
      
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
        Silk Oak <br/> <span className="text-gold-500">Hotels</span>
      </h1>
      
      <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl font-light leading-relaxed border-l-4 border-gold-500 pl-6">
        Comfort, Style & Hospitality Across Nairobi. <br/>
        <span className="text-base md:text-lg opacity-80 mt-2 block font-sans">Experience modern rooms, great dining, entertainment and unmatched service.</span>
      </p>
      
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} 
          className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold rounded-xl shadow-xl hover:shadow-gold-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
        >
          <span className="relative z-10 uppercase tracking-widest text-sm flex items-center justify-center">
            Book Now
          </span>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
        </button>
        
        <button 
          onClick={() => document.getElementById('locations')?.scrollIntoView({behavior: 'smooth'})} 
          className="group w-full sm:w-auto px-10 py-4 bg-transparent border border-white/30 text-white font-medium rounded-xl hover:bg-white hover:text-charcoal-900 transition-all duration-300 hover:shadow-lg backdrop-blur-sm flex items-center justify-center uppercase tracking-widest text-sm"
        >
          <MapPin className="w-4 h-4 mr-2 group-hover:text-gold-600 transition-colors" />
          View Locations
        </button>
      </div>
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if(el) {
        el.scrollIntoView({behavior: 'smooth'});
        setIsMobileMenuOpen(false);
    }
  }

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Locations', id: 'locations' },
    { name: 'Amenities', id: 'amenities' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Offers', id: 'offers' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b border-transparent ${
        isScrolled 
          ? 'bg-charcoal-900/95 backdrop-blur-md py-3 shadow-2xl border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500 rounded-lg flex items-center justify-center text-charcoal-900 font-serif font-bold text-xl md:text-2xl shadow-lg group-hover:rotate-3 transition-transform duration-300">
            S
          </div>
          <div className="flex flex-col">
             <span className="font-serif text-lg md:text-xl tracking-widest font-bold text-white group-hover:text-gold-400 transition-colors">SILK OAK</span>
             <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-400 hidden sm:block">Luxury Hotels</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1 bg-white/5 rounded-full px-2 py-1 backdrop-blur-sm border border-white/10">
          {navLinks.map((link) => (
             <button 
                key={link.name}
                onClick={() => scrollTo(link.id)} 
                className="px-5 py-2 text-sm font-medium tracking-wide uppercase text-gray-200 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
             >
                {link.name}
             </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="tel:0725227711" className="hidden md:flex items-center group">
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-gold-500 transition-colors duration-300">
                <Phone className="w-4 h-4 text-white" />
             </div>
             <div className="text-right">
                <span className="block text-[10px] text-gold-400 uppercase tracking-wider">Reservations</span>
                <span className="block text-white font-serif text-sm group-hover:text-gold-400 transition-colors">0725 227 711</span>
             </div>
          </a>
          
          <button 
            onClick={() => scrollTo('contact')} 
            className="hidden sm:block bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-6 rounded-lg text-xs uppercase tracking-widest shadow-lg shadow-gold-500/20 transition-all duration-300 hover:scale-105"
          >
            Book Now
          </button>
          
          <button 
            className="lg:hidden text-white p-2 hover:text-gold-400 transition-transform active:scale-90" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-charcoal-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
             <button 
                key={link.name}
                onClick={() => scrollTo(link.id)} 
                className="text-left text-xl font-serif text-white/90 hover:text-gold-400 py-3 border-b border-white/5 transition-colors"
             >
                {link.name}
             </button>
          ))}
          <button onClick={() => scrollTo('contact')} className="w-full bg-gold-500 text-white font-bold py-4 rounded-lg mt-4 uppercase tracking-widest">
            Book A Room
          </button>
        </div>
      </div>
    </nav>
  );
}

export const HeroSection = () => {
  return (
    <div className="relative h-screen min-h-[700px] w-full bg-charcoal-900">
      <Navbar />
      <HeroBackground />
      <div className="container mx-auto h-full flex items-center relative px-4 md:px-8">
        <HeroContent />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer text-white/50 hover:text-gold-400 transition-colors" onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </div>
  );
};