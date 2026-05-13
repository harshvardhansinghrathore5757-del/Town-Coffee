import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Coffee, Phone, Instagram, Linkedin, Menu, X, ChevronRight, Calendar, Users } from 'lucide-react';

import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import CustomCursor from './components/CustomCursor';
import Counter from './components/Counter';

const locations = [
  {
    name: 'C-Scheme',
    address: '4, Bhawani Singh Road, Bais Godam, Jaipur',
    timings: '9:00 AM - 10:30 PM',
    phone: '+91 77118 99994',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Malviya Nagar',
    address: 'E 95, Lal Bahadur Nagar, JLN Marg, Malviya Nagar, Jaipur',
    timings: '9:00 AM - 10:30 PM',
    phone: '+91 77118 99993',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Vidyut Nagar',
    address: 'A19, Sarthi Marg, Vidyut Nagar, Near Vaishali Nagar, Jaipur',
    timings: '9:00 AM - 10:30 PM',
    phone: '+91 91459 62212',
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Sirsi Road',
    address: 'Plot 2, RFC Colony, Amar Nagar, Sirsi Road, Near Khatipura Road, Jaipur',
    timings: '9:00 AM - 10:30 PM',
    phone: '+91 91459 52212',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reservation Form State
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [resGuests, setResGuests] = useState('');
  const [resName, setResName] = useState('');
  const [resPhone, setResPhone] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleText = "Where every sip tells a local story.";
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);

    let formattedDate = resDate;
    if (resDate) {
      const dateObj = new Date(resDate);
      formattedDate = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }
    
    let formattedTime = resTime;
    if (resTime) {
      const [hourStr, minStr] = resTime.split(':');
      const hour = parseInt(hourStr, 10);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour % 12 || 12;
      formattedTime = `${hour12}:${minStr} ${ampm}`;
    }

    const message = `馃彙 *TOWN COFFEE 鈥� TABLE RESERVATION*
鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣

馃懁 *Guest Name:* ${resName}
馃摫 *Contact:* ${resPhone}
馃搮 *Visit Date:* ${formattedDate}
馃懃 *Party Size:* ${resGuests}
鈴� *Time:* ${formattedTime}`;

    const whatsappUrl = `https://wa.me/9107711899993?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(true);
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => {
        setBookingSuccess(false);
        setResName('');
        setResPhone('');
        setResDate('');
        setResTime('');
        setResGuests('');
      }, 5000);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col font-serif overflow-x-hidden bg-tc-bg selection:bg-tc-accent/20 selection:text-tc-dark">
      {/* Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <CustomCursor />
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-tc-bg/95 backdrop-blur-md shadow-sm py-4 border-b border-tc-border' : 'bg-tc-bg/80 backdrop-blur-md pt-5 pb-4 border-b border-tc-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex justify-between items-baseline">
          <div className="flex flex-col">
            <div className={`font-serif text-3xl md:text-4xl font-bold tracking-tighter transition-all duration-500 text-tc-green ${
              isScrolled ? '' : 'md:scale-105 origin-left drop-shadow-sm'
            }`}>
              TOWN COFFEE
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase font-sans font-semibold hidden md:block mt-1 transition-colors duration-500 text-tc-accent">Est. 2019 鈥� Jaipur</p>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-xs font-sans uppercase tracking-widest transition-colors duration-500 text-tc-muted">
            <a href="#home" className="border-b pb-1 border-tc-green text-tc-green">Home</a>
            <a href="#about" className="hover:text-tc-accent transition-colors">Our Story</a>
            <a href="#menu" className="hover:text-tc-accent transition-colors">Menu</a>
            <a href="#gallery" className="hover:text-tc-accent transition-colors">Gallery</a>
            <a href="#locations" className="hover:text-tc-accent transition-colors">Locations</a>
            <a href="#contact" className="hover:text-tc-accent transition-colors">Contact Us</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 transition-colors duration-500 text-tc-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-tc-bg pt-32 px-8"
        >
          <div className="flex flex-col gap-8 text-2xl font-serif text-tc-green text-center">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
            <a href="#locations" onClick={() => setMobileMenuOpen(false)}>Locations</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-8 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 min-h-[90vh]">
        <div className="w-full md:w-1/2 flex flex-col gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <span className="text-xs font-sans uppercase tracking-[0.4em] bg-tc-green text-white px-3 py-1 mb-6 inline-block">
              The Pink City's Roastery
            </span>
            <motion.h1 
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-7xl lg:text-8xl font-serif text-tc-dark mb-6 leading-[1.05] italic font-medium flex flex-wrap"
            >
              {titleText.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className={`mr-4 ${word === 'sip' ? 'text-tc-accent not-italic text-7xl md:text-8xl lg:text-9xl' : ''}`}>
                  {word.split("").map((char, charIdx) => (
                    <motion.span key={charIdx} variants={letterVariants} className="inline-block drop-shadow-sm">
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
            <p className="text-lg text-tc-muted-dark font-sans font-light mb-10 max-w-md leading-relaxed">
              An elevated gourmet espresso bar and restaurant in the heart of Jaipur. From artisanal pours to our signature global cuisine, we bring a premier dining and coffee experience to your neighborhood.
            </p>
            <div className="flex gap-6 items-center">
              <a 
                href="#locations"
                className="px-8 py-4 bg-tc-green text-white font-sans text-xs uppercase tracking-widest hover:bg-tc-dark transition-colors"
              >
                Book a Table
              </a>
              <a href="#menu" className="text-xs font-sans uppercase tracking-widest border-b border-tc-dark pb-1 cursor-pointer hover:text-tc-accent hover:border-tc-accent transition-colors flex items-center gap-1">
                View Menu <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative h-[450px] lg:h-[550px] mt-12 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-tc-shape-bg rounded-[200px] border border-tc-shape-border transform rotate-3"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-6 left-6 right-6 bottom-6 bg-tc-green rounded-[200px] flex items-center justify-center overflow-hidden border-[12px] border-white shadow-2xl"
          >
            <img 
              src="https://res.cloudinary.com/dqtj9xtfw/image/upload/v1778677208/475587416_18075963559728048_166367550734296574_n_mtwsu0.jpg" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-700"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-tc-accent rounded-full flex items-center justify-center text-white p-6 text-center text-[10px] leading-tight uppercase tracking-tighter shadow-lg font-sans z-20"
          >
            Roasted Fresh Daily in Jaipur
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 md:px-16 max-w-7xl mx-auto border-t border-tc-border mt-12 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-tc-shape-bg rounded-[120px] transform -rotate-3 border border-tc-shape-border"></div>
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop" 
              alt="Pouring coffee" 
              className="relative rounded-[120px] shadow-2xl object-cover h-[500px] md:h-[600px] w-full border-8 border-white transition-all duration-700 hover:rotate-0 transform -rotate-1"
            />
            <div className="absolute -bottom-8 -right-8 bg-tc-green text-white p-8 rounded-full h-40 w-40 flex items-center justify-center flex-col border-[6px] border-white shadow-xl z-20">
              <span className="font-serif text-4xl block italic">2019</span>
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase mt-2">Established</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-tc-dark mb-6 leading-tight">Our Story Through <span className="italic text-tc-accent">Plates & Moments</span></h2>
            <div className="w-16 h-px bg-tc-dark mb-8"></div>
            <p className="text-tc-muted-dark font-sans leading-relaxed text-base mb-6">
              Born in the heart of Jaipur in 2019, Town Coffee started with a simple vision: to create a refined sanctuary where gourmet espresso and culinary excellence seamlessly intertwine. From our very first restaurant, we wanted to offer an experience that felt both elevated and inviting.
            </p>
            <p className="text-tc-muted-dark font-sans leading-relaxed text-base mb-8">
              Over the years, we've grown across the Pink City 鈥� from the bustling streets of C-Scheme to the peaceful neighborhoods of Sirsi Road. Yet, our promise remains unchanged: impeccably crafted coffees, artisanal global cuisine, and exceptional hospitality every time you walk through our doors.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-tc-border font-sans">
              <div className="flex gap-4 items-start">
                <Coffee className="text-tc-accent shrink-0" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-sans font-semibold text-tc-dark text-sm tracking-wider uppercase mb-1">100% Arabica</h4>
                  <p className="text-xs text-tc-muted">Locally roasted beans</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="text-tc-accent shrink-0" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-sans font-semibold text-tc-dark text-sm tracking-wider uppercase mb-1">4 Locations</h4>
                  <p className="text-xs text-tc-muted">Across Jaipur city</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* In Numbers Section */}
      <section className="py-20 bg-[#F5F5F0] border-t border-b border-tc-border font-sans w-full relative z-10">
        <div className="max-w-5xl mx-auto px-8 flex justify-between flex-wrap gap-12 text-center md:text-left">
          <Counter endValue={150} label="Dishes Served" suffix="+" duration={2500} />
          <Counter endValue={4} label="Restaurant Locations" />
          <Counter endValue={18} label="Espresso Blends" />
          <Counter endValue={12} label="Awards Won" />
        </div>
      </section>

      {/* Full Menu Section */}
      <MenuSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Locations Section */}
      <section id="locations" className="bg-tc-green text-[#F5F5F0] py-24 px-8 md:px-16 mt-12 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-[10px] font-sans uppercase tracking-[0.5em] opacity-60 mb-4 text-white">Find Your Nearest Hub</h3>
              <h2 className="font-serif text-4xl md:text-5xl text-white">Our Outlets</h2>
            </div>
            <div className="hidden md:block h-px flex-1 mx-10 bg-white/20 mb-3"></div>
            <p className="text-xl md:text-2xl italic text-white/80 pb-1">Four unique spaces, one soul.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {locations.map((loc, index) => (
              <motion.div 
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col h-full cursor-pointer"
              >
                <div className="text-[10px] font-sans opacity-50 mb-4 uppercase tracking-widest text-white">0{index + 1}.</div>
                <div className="h-64 overflow-hidden mb-6 relative rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors">
                  <div className="absolute inset-0 bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-tc-green to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={`https://maps.google.com/?q=${loc.name} Town Coffee Jaipur`} target="_blank" rel="noreferrer" className="text-[10px] font-sans uppercase tracking-widest text-white border-b border-white pb-0.5 inline-block">Get Directions</a>
                  </div>
                </div>
                <h4 className="font-serif text-2xl mb-4 text-white group-hover:text-tc-accent transition-colors">{loc.name}</h4>
                <div className="space-y-3 font-sans text-[11px] text-white/70 uppercase tracking-wider leading-relaxed flex-1">
                  <p>{loc.address}</p>
                  <p className="flex items-center gap-2"><Clock size={12} /> {loc.timings}</p>
                  <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-tc-accent transition-colors">
                    <Phone size={12} /> {loc.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation & Contact CTA */}
      <section id="contact" className="py-24 px-8 md:px-16 w-full relative overflow-hidden bg-[#1e3a2f]">
        {/* Deep background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#142a22] skew-x-12 origin-top-right transform -translate-x-20 z-0"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-tc-accent/10 rounded-full blur-3xl z-0"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
          <div className="w-full md:w-5/12 text-white">
            <h3 className="text-[10px] font-sans uppercase tracking-[0.5em] text-tc-accent mb-4">Contact Us</h3>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Get in touch <span classNam
