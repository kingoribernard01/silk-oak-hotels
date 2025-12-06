import React, { useEffect, useRef, useState } from 'react';
import { HeroSection } from './components/ui/galaxy-interactive-hero-section';
import { Star, Coffee, Wifi, Car, Monitor, Trophy, GlassWater, Bed, MapPin, Phone, Mail, Calendar, CheckCircle, Facebook, Instagram, Twitter, ArrowRight, MessageCircle, Send, Loader2 } from 'lucide-react';

// --- Animation Helper ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Sub-components ---

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/254725227711" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group flex items-center justify-center animate-bounce shadow-green-900/20"
    style={{ animationDuration: '3s' }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-8 h-8 fill-current" />
    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-charcoal-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block border border-gray-100">
      Chat with us
    </span>
  </a>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 px-4">
    <div className={`inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase border-b-2 pb-1 ${light ? 'text-gold-400 border-gold-400' : 'text-gold-600 border-gold-600'}`}>
      Discover Silk Oak
    </div>
    <h2 className={`text-4xl md:text-6xl font-serif font-bold mb-6 ${light ? 'text-white' : 'text-charcoal-900'}`}>{title}</h2>
    {subtitle && <p className={`text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
  </div>
);

const FeatureIcon = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex flex-col items-center p-8 text-center group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-200 hover:-translate-y-2 cursor-default">
    <div className="w-20 h-20 rounded-full bg-beige-50 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500 border border-gold-100 group-hover:border-gold-500">
      <Icon className="w-8 h-8 text-charcoal-800 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold font-serif text-charcoal-900 group-hover:text-gold-600 transition-colors tracking-wide">{title}</h3>
  </div>
);

const LocationCard = ({ name, phone, email, image, delay }: { name: string, phone: string, email: string, image: string, delay: number }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="group h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10" />
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-charcoal-900 shadow-sm border-l-4 border-gold-500">
          Open Now
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-3xl font-serif font-bold text-charcoal-900 mb-2 group-hover:text-gold-600 transition-colors">{name}</h3>
        <div className="w-12 h-0.5 bg-gold-500 mb-6" />
        
        <div className="space-y-4 text-gray-600 flex-grow">
          <div className="flex items-center group/item hover:text-gold-600 transition-colors">
            <div className="w-8 h-8 rounded-full bg-beige-100 flex items-center justify-center mr-3 group-hover/item:bg-gold-500 transition-colors">
              <Phone className="w-4 h-4 text-charcoal-600 group-hover/item:text-white" />
            </div>
            <span className="font-medium text-sm tracking-wide">{phone}</span>
          </div>
          <div className="flex items-center group/item hover:text-gold-600 transition-colors">
             <div className="w-8 h-8 rounded-full bg-beige-100 flex items-center justify-center mr-3 group-hover/item:bg-gold-500 transition-colors">
              <Mail className="w-4 h-4 text-charcoal-600 group-hover/item:text-white" />
            </div>
            <span className="font-medium text-sm tracking-wide">{email}</span>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
           <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center justify-center w-full py-4 px-6 bg-charcoal-900 text-white hover:bg-gold-500 rounded-lg transition-all duration-300 font-bold uppercase text-xs tracking-[0.2em] group/btn shadow-lg hover:shadow-gold-500/30">
             <span>Contact Branch</span>
             <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </div>
  </FadeIn>
);

const AmenityCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="h-full p-8 bg-white hover:bg-white rounded-xl border border-gray-100 hover:border-gold-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl group relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-gold-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <div className="w-14 h-14 rounded-lg bg-beige-50 text-gold-600 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500 relative z-10">
        <Icon className="w-7 h-7" strokeWidth={1.5} />
      </div>
      <h4 className="text-xl font-serif font-bold text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors relative z-10">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed relative z-10 font-light">{description}</p>
    </div>
  </FadeIn>
);

const PackageCard = ({ title, features, featured = false, price, delay }: { title: string, features: string[], featured?: boolean, price?: string, delay: number }) => (
  <FadeIn delay={delay} className="h-full">
    <div className={`relative h-full p-8 md:p-10 rounded-2xl border transition-all duration-500 flex flex-col ${featured ? 'bg-charcoal-900 text-white border-gold-500 shadow-2xl scale-100 md:scale-105 z-10' : 'bg-white text-charcoal-900 border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1'}`}>
      {featured && (
        <div className="absolute top-0 right-0 left-0 flex justify-center -mt-4">
          <span className="bg-gold-500 text-white text-xs font-bold px-4 py-2 rounded-sm uppercase tracking-widest shadow-lg">Most Popular</span>
        </div>
      )}
      
      <div className="mb-6 text-center">
        <h3 className={`text-3xl font-serif font-bold mb-2 ${featured ? 'text-white' : 'text-charcoal-900'}`}>{title}</h3>
        {price && <p className={`text-sm opacity-80 uppercase tracking-widest font-medium ${featured ? 'text-gold-200' : 'text-gray-500'}`}>{price}</p>}
      </div>
      
      <div className={`h-px w-full mb-8 ${featured ? 'bg-white/10' : 'bg-gray-100'}`} />
      
      <ul className="space-y-5 mb-10 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${featured ? 'text-gold-400' : 'text-gold-600'}`} />
            <span className={`text-sm font-medium ${featured ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
        className={`w-full py-4 rounded-lg font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-lg transform hover:scale-[1.02] ${featured ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:shadow-gold-500/20' : 'bg-charcoal-900 text-white hover:bg-charcoal-800 hover:shadow-xl'}`}
      >
        Choose Package
      </button>
    </div>
  </FadeIn>
);

// --- Booking Form Component ---
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Kasarani Branch',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct the WhatsApp message
    const text = `Hello Silk Oak Hotels,\n\nI would like to make a booking inquiry:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Preferred Location:* ${formData.location}\n*Request:* ${formData.message || 'No special requests'}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/254725227711?text=${encodedText}`;
    
    // Simulate a brief processing delay for better UX
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: '', phone: '', location: 'Kasarani Branch', message: '' }); // Reset form
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      {showSuccess && (
        <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg animate-fade-in-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-charcoal-900 mb-2">Inquiry Sent!</h4>
            <p className="text-gray-500 text-center px-6">Opening WhatsApp to complete your booking...</p>
        </div>
      )}
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider">Your Name</label>
          <input 
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text" 
            placeholder="John Doe" 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-gray-300 font-medium" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider">Phone Number</label>
          <input 
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel" 
            placeholder="+254 7..." 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-gray-300 font-medium" 
          />
        </div>
      </div>
      <div className="space-y-2">
          <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider">Select Location</label>
          <div className="relative">
            <select 
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-gray-700 appearance-none cursor-pointer font-medium"
            >
              <option>Kasarani Branch</option>
              <option>Utawala Branch</option>
              <option>Duruma Road CBD</option>
            </select>
            <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
      </div>
      <div className="space-y-2">
          <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider">Message / Special Requests</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4} 
            placeholder="I would like to book a double room for..." 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-gray-300 resize-none font-medium"
          ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-charcoal-900 hover:bg-gold-500 hover:text-white text-white font-bold py-5 rounded-lg uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-gold-500/20 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
             <>
               <Loader2 className="w-5 h-5 animate-spin" />
               Processing...
             </>
        ) : (
             <>
               <Send className="w-4 h-4" />
               Send Booking Inquiry
             </>
        )}
      </button>
      <p className="text-center text-xs text-gray-400 mt-4">
        This will open WhatsApp to send your details directly to our reservations team.
      </p>
    </form>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-beige-50 font-sans selection:bg-gold-200 selection:text-charcoal-900">
      <HeroSection />
      
      <FloatingWhatsApp />

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 container mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-20 relative">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] leading-none text-gold-500/5 font-serif font-bold select-none whitespace-nowrap hidden md:block">SILK OAK</span>
            <h2 className="text-gold-600 font-bold tracking-[0.2em] uppercase mb-6 text-sm relative z-10">Welcome to Silk Oak</h2>
            <p className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-charcoal-900 leading-tight relative z-10">
              “Silk Oak Hotels brings together <span className="italic text-gold-600 font-serif">comfort</span>, <span className="italic text-gold-600 font-serif">convenience</span> and <span className="italic text-gold-600 font-serif">modern hospitality</span> across three prime Nairobi locations.”
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <FadeIn delay={100}><FeatureIcon icon={Bed} title="Quality Accommodation" /></FadeIn>
          <FadeIn delay={200}><FeatureIcon icon={GlassWater} title="Bar & Restaurant" /></FadeIn>
          <FadeIn delay={300}><FeatureIcon icon={Trophy} title="Entertainment" /></FadeIn>
          <FadeIn delay={400}><FeatureIcon icon={Star} title="Professional Service" /></FadeIn>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-beige-50/50 skew-x-12 translate-x-20 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <SectionHeading 
              title="Our Prime Locations" 
              subtitle="Strategically located across Nairobi for your convenience. Choose the branch nearest to you." 
            />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <LocationCard 
              name="Kasarani Branch" 
              phone="0725 227 711" 
              email="kasarani@silkoak.co.ke" 
              image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
              delay={0}
            />
            <LocationCard 
              name="Utawala Branch" 
              phone="0768 629 929" 
              email="utawala@silkoak.co.ke" 
              image="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop"
              delay={200}
            />
            <LocationCard 
              name="Duruma Road (CBD)" 
              phone="0706 310 165" 
              email="duruma@silkoak.co.ke" 
              // High quality urban/building shot for CBD
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Amenities Section - Refined */}
      <section id="amenities" className="py-24 md:py-32 bg-beige-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pattern-dots pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <SectionHeading 
              title="World-Class Amenities" 
              subtitle="We believe that true luxury lies in the details. Every aspect of your stay is curated for absolute comfort."
            />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <AmenityCard 
              icon={Bed} 
              title="Luxury Rooms" 
              description="Spacious, impeccably designed rooms featuring premium bedding and modern decor for rest."
              delay={100} 
            />
            <AmenityCard 
              icon={GlassWater} 
              title="Bar & Lounge" 
              description="A sophisticated atmosphere to unwind with premium drinks, cocktails, and great company."
              delay={150} 
            />
             <AmenityCard 
              icon={Wifi} 
              title="High-Speed WiFi" 
              description="Stay connected seamlessly with our complimentary enterprise-grade internet access."
              delay={200} 
            />
             <AmenityCard 
              icon={Car} 
              title="Secure Parking" 
              description="24/7 guarded parking facilities to ensure peace of mind for you and your vehicle."
              delay={250} 
            />
             <AmenityCard 
              icon={Trophy} 
              title="Pool Tables" 
              description="Challenge friends to a game in our dedicated entertainment area."
              delay={300} 
            />
             <AmenityCard 
              icon={Monitor} 
              title="Live Sports" 
              description="Catch all the live football action and major sporting events on large HD screens."
              delay={350} 
            />
             <AmenityCard 
              icon={Star} 
              title="Spa & Wellness" 
              description="Rejuvenate your senses with our professional spa treatments and wellness services."
              delay={400} 
            />
             <AmenityCard 
              icon={Calendar} 
              title="Event Spaces" 
              description="Versatile venues equipped for conferences, meetings, and private celebrations."
              delay={450} 
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 bg-charcoal-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <SectionHeading title="Experience the Ambience" subtitle="A glimpse into the Silk Oak lifestyle." light />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1000px] md:h-[600px]">
             <FadeIn delay={0} className="md:col-span-2 md:row-span-2 h-full">
               <div className="relative h-full overflow-hidden rounded-xl group cursor-pointer border border-white/5 shadow-2xl">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
                 <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Hotel Exterior" />
                 <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-serif text-3xl font-bold">Evening Ambiance</p>
                    <p className="text-gold-400 text-sm tracking-widest uppercase mt-2">Luxury & Calm</p>
                 </div>
               </div>
             </FadeIn>
             
             <FadeIn delay={200} className="md:col-span-1 md:row-span-1 h-full">
               <div className="relative h-full overflow-hidden rounded-xl group cursor-pointer border border-white/5 shadow-xl">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
                  <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Dining" />
               </div>
             </FadeIn>
             
             <FadeIn delay={300} className="md:col-span-1 md:row-span-1 h-full">
               <div className="relative h-full overflow-hidden rounded-xl group cursor-pointer border border-white/5 shadow-xl">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
                  <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Bedroom" />
               </div>
             </FadeIn>
             
             <FadeIn delay={400} className="md:col-span-2 md:row-span-1 h-full">
               <div className="relative h-full overflow-hidden rounded-xl group cursor-pointer border border-white/5 shadow-xl">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
                  <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Cocktails" />
                   <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-serif text-2xl font-bold">Signature Cocktails</p>
                 </div>
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="offers" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
           <FadeIn>
             <SectionHeading title="Tailored Packages" subtitle="Choose the perfect stay for your needs. We offer flexible options for every traveler." />
           </FadeIn>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
             <PackageCard 
                title="Standard Room" 
                price="Affordable Luxury"
                features={["Comfortable Queen Bed", "Free High-Speed WiFi", "Complimentary Water", "DSTV Entertainment", "Hot Shower"]} 
                delay={0}
             />
             <PackageCard 
                title="Executive Package" 
                price="Best Value"
                featured
                features={["King Size Premium Bed", "Spacious Workspace", "Enhanced Amenities", "High-Speed WiFi", "Room Service Available", "Lounge Access"]} 
                delay={200}
             />
             <PackageCard 
                title="Group / Long Stay" 
                price="Flexible Rates"
                features={["Discounted Rates", "Flexible Booking Terms", "Meal Plan Options", "Ideal for Corporate Teams", "Weekly Housekeeping"]} 
                delay={400}
             />
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-beige-50 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
            
            {/* Contact Info */}
            <div className="p-10 md:p-16 lg:w-5/12 bg-charcoal-900 text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gold-500/10 pattern-dots opacity-30"></div>
               <h3 className="text-3xl font-serif font-bold mb-6 text-white relative z-10">Get in Touch</h3>
               <p className="text-gray-300 mb-12 leading-relaxed relative z-10">
                 Ready to experience Silk Oak? Contact our central reception or any of our branches directly. We look forward to hosting you.
               </p>
               
               <div className="space-y-8 relative z-10">
                 <div className="flex items-start group">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-5 group-hover:bg-gold-500 transition-colors duration-300 flex-shrink-0">
                     <Phone className="w-5 h-5 text-gold-400 group-hover:text-white" />
                   </div>
                   <div>
                     <p className="text-xs text-gold-400 uppercase tracking-widest font-bold mb-1">Call Us</p>
                     <p className="text-xl font-medium tracking-wide">0725 227 711</p>
                   </div>
                 </div>
                 <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-5 group-hover:bg-gold-500 transition-colors duration-300 flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold-400 group-hover:text-white" />
                    </div>
                   <div>
                     <p className="text-xs text-gold-400 uppercase tracking-widest font-bold mb-1">Email</p>
                     <p className="text-lg font-medium tracking-wide">reception@silkoak.co.ke</p>
                   </div>
                 </div>
                 <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-5 group-hover:bg-gold-500 transition-colors duration-300 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold-400 group-hover:text-white" />
                    </div>
                   <div>
                     <p className="text-xs text-gold-400 uppercase tracking-widest font-bold mb-1">Headquarters</p>
                     <p className="text-lg tracking-wide">Nairobi, Kenya</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Booking Form */}
            <div className="p-10 md:p-16 lg:w-7/12 bg-white">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-serif font-bold text-charcoal-900">Book A Room</h3>
                <span className="px-3 py-1 bg-gold-100 text-gold-700 text-xs font-bold uppercase rounded-sm tracking-wider">Online Request</span>
              </div>
              
              <BookingForm />
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-950 text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Footer Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
             <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center text-charcoal-900 font-serif font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.4)]">S</div>
                  <span className="font-serif text-2xl font-bold tracking-wide">SILK OAK</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm font-light">
                  Experience the perfect blend of luxury and comfort in the heart of Nairobi. Modern amenities, professional service, and a warm atmosphere await you.
                </p>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white transition-all duration-300 group"><Facebook className="w-5 h-5 transform group-hover:scale-110 transition-transform" /></button>
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white transition-all duration-300 group"><Instagram className="w-5 h-5 transform group-hover:scale-110 transition-transform" /></button>
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white transition-all duration-300 group"><Twitter className="w-5 h-5 transform group-hover:scale-110 transition-transform" /></button>
                </div>
             </div>
             
             <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white border-b border-white/10 pb-4 inline-block">Quick Links</h4>
                <ul className="space-y-4 text-gray-400 text-sm font-light">
                  <li><a href="#about" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>About Us</a></li>
                  <li><a href="#locations" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Our Locations</a></li>
                  <li><a href="#amenities" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Amenities</a></li>
                  <li><a href="#contact" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Contact & Booking</a></li>
                </ul>
             </div>

             <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white border-b border-white/10 pb-4 inline-block">Contact Us</h4>
                <ul className="space-y-4 text-gray-400 text-sm font-light">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                    <span>Nairobi, Kenya</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                    <span>0725 227 711</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                    <span>reception@silkoak.co.ke</span>
                  </li>
                </ul>
             </div>
             
             <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white border-b border-white/10 pb-4 inline-block">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4 font-light">Subscribe to receive exclusive offers and news.</p>
                <div className="relative">
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500 transition-colors" />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gold-500 hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
             </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p className="tracking-wide">© 2025 Silk Oak Hotels. All Rights Reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
               <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold-400 transition-colors">Privacy Policy</a>
               <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold-400 transition-colors">Terms</a>
               <span className="text-gray-700">|</span>
               <p className="flex items-center gap-1">
                 Designed by <a href="https://novus-studios.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-300 transition-colors font-bold uppercase tracking-wider">Novus Studios</a>
               </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}