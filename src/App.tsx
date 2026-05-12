/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  MapPin, 
  HeartPulse, 
  ShieldCheck, 
  Truck, 
  PhoneCall, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  Search,
  Sun,
  Moon,
  Globe,
  Phone,
  Send,
  Calendar,
  User,
  Home,
  Beef,
  Store,
  UserCheck,
  MessageCircle
} from 'lucide-react';

type Language = 'EN' | 'FR' | 'AR';
type Theme = 'light' | 'dark';

const translations = {
  EN: {
    nav: { home: "Home", services: "Services", guide: "Guide", contact: "Contact", bookNow: "Book Now" },
    hero: { tag: "The Premium Eid Experience", title: "Tradition", subtitle: "Elevated.", authentic: "Authenticity Guaranteed", direct: "Direct from Vetted Moroccan Farms", bookYour: "Book Your", service: "Service" },
    headline: { title: "SouqMa3ak: Your Trusted Source for Moroccan Eid Traditions", desc: "Hand-selected Sardi sheep, direct from farmers. Traditional, verified, delivered. Your seamless connection to the heart of the Souq.", cta: "EXPLORE SELECTION" },
    services: { 
      sardi: { title: "Sardi Selection", desc: "Purebred Sardi sheep with distinctive black features." },
      farm: { title: "Farm Verification", desc: "We personally vet every farm in our dedicated network." },
      health: { title: "Health Checks", desc: "Rigorous veterinary screening before every delivery." }
    },
    expert: { status: "Available Now", title: "Expert Advice from", advisor: "Ahmed Al-Maghribi", cta: "CONSULT EXPERT" },
    logistics: { status: "On its way", driver: "Driver: Yassine", eta: "ETA: 24 mins", track: "TRACK SHIPMENT" },
    booking: { 
      tag: "BOOK NOW", 
      title: "Book your service", 
      desc: "Fill out the form, we will contact you shortly.",
      whatsapp: "WHATSAPP FASTLINE",
      form: { name: "FULL NAME", phone: "PHONE NUMBER", city: "CITY", date: "DESIRED DATE", service: "SERVICE TYPE", submit: "Confirm booking" }
    },
    testimonials: {
      tag: "TESTIMONIALS",
      title: "What Our Clients Say",
      items: [
        { name: "Hadj Mohamed", role: "Rabat", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", text: "The expert provided invaluable advice. I found the perfect ram without any stress. Truly a premium experience." },
        { name: "Fatima Zahra", role: "Casablanca", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", text: "Excellent transport service. They handled everything from the market to my door with care and professionalism." },
        { name: "Yassine", role: "Agadir", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", text: "As a breeder, their logistics support is top-notch. They understand the market dynamics and the livestock needs." }
      ]
    },
    footer: { desc: "Preserving Moroccan heritage through modern concierge excellence.", explore: "Explore", company: "Services", news: "Newsletter" }
  },
  FR: {
    nav: { home: "Accueil", services: "Services", guide: "Guide", contact: "Contact", bookNow: "Réserver" },
    hero: { tag: "L'Expérience Premium de l'Aïd", title: "Tradition", subtitle: "Sublimée.", authentic: "Authenticité Garantie", direct: "Directement des fermes marocaines certifiées", bookYour: "Réservez Votre", service: "Service" },
    headline: { title: "SouqMa3ak : Votre source de confiance pour les traditions de l'Aïd", desc: "Moutons Sardi sélectionnés à la main, en direct des éleveurs. Traditionnel, vérifié, livré. Votre lien direct avec le cœur du Souq.", cta: "EXPLORER LA SÉLECTION" },
    services: { 
      sardi: { title: "Sélection Sardi", desc: "Moutons Sardi de race pure avec des traits noirs distinctifs." },
      farm: { title: "Vérification Ferme", desc: "Nous contrôlons personnellement chaque ferme de notre réseau." },
      health: { title: "Contrôles de Santé", desc: "Dépistage vétérinaire rigoureux avant chaque livraison." }
    },
    expert: { status: "Disponible", title: "Conseils d'expert de", advisor: "Ahmed Al-Maghribi", cta: "CONSULTER L'EXPERT" },
    logistics: { status: "En route", driver: "Chauffeur : Yassine", eta: "Arrivée : 24 mins", track: "SUIVRE LA LIVRAISON" },
    booking: { 
      tag: "RÉSERVER MAINTENANT", 
      title: "Réservez votre service", 
      desc: "Remplissez le formulaire, nous vous recontacterons rapidement.",
      whatsapp: "LIGNE DIRECTE WHATSAPP",
      form: { name: "NOM COMPLET", phone: "NUMÉRO DE TÉLÉPHONE", city: "VILLE", date: "DATE SOUHAITÉE", service: "TYPE DE SERVICE", submit: "Confirmer la réservation" }
    },
    testimonials: {
      tag: "TÉMOIGNAGES",
      title: "Ce Que Disent Nos Clients",
      items: [
        { name: "Haj Mohamed", role: "Rabat", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", text: "L'expert m'a donné des conseils précieux. J'ai trouvé le bélier parfait sans aucun stress. Une expérience premium." },
        { name: "Fatima Zahra", role: "Casablanca", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", text: "Excellent service de transport. Ils ont tout géré, du marché à ma porte, avec soin et professionnalisme." },
        { name: "Yassine", role: "Agadir", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", text: "En tant qu'éleveur, leur soutien logistique est de premier ordre. Ils comprennent la dynamique du marché." }
      ]
    },
    footer: { desc: "Préserver le patrimoine marocain grâce à l'excellence d'une conciergerie moderne.", explore: "Explorer", company: "Services", news: "Newsletter" }
  },
  AR: {
    nav: { home: "الرئيسية", services: "خدماتنا", guide: "الدليل", contact: "اتصل بنا", bookNow: "احجز الآن" },
    hero: { tag: "تجربة العيد الأكثر تميزاً", title: "خبرتنا، راحة بالك", subtitle: "من السوق لبابك", authentic: "أصالة مضمونة", direct: "تقدا المليح، وترجع بلا متقولب", bookYour: "احجز", service: "خدمتك" },
    headline: { title: "خبير في المواشي، يمشي معاك للسوق — تقدا المليح وترجع بلا متقولب", desc: "كنوفرو ليك توصيل من دارك حتى السوق، ومعاك خبير في المواشي يعاونك تختار أضحية مليحة بثقة وبلا غبن. وبعد ما تقدا، كنرجعوك لدارك براحة وفأمان. خدمة كاملة، بلا عناء، وبلا متقولب.", cta: "استكشف الاختيارات" },
    services: { 
      sardi: { title: "المرحلة 1", desc: "اصطحاب الزبون من المنزل في اتجاه السوق في ظروف مريحة" },
      farm: { title: "المرحلة 2", desc: "خبير في المواشي كيرافقك باش تشري أضحيتك بثقة وبالسعر المناسب" },
      health: { title: "المرحلة 3", desc: "توصيل مريح وآمن من وإلى منزلك. عيدك بلا تعب، وبلا متقولب" }
    },
    expert: { status: "متوفر الآن", title: "نصائح الخبراء من", advisor: "أحمد المغربي", cta: "احجز الان" },
    logistics: { status: "في الطريق", driver: "السائق: ياسين", eta: "الوصول: 24 دقيقة", track: "تتبع الشحنة" },
    booking: { 
      tag: "احجز الآن", 
      title: "احجز موعدك", 
      desc: "املأ الاستمارة وسنتصل بك في أقرب وقت.",
      whatsapp: "خط واتساب السريع",
      form: { name: "الاسم الكامل", phone: "رقم الهاتف", city: "المدينة", date: "التاريخ المطلوب", service: "نوع الخدمة", submit: "تأكيد الحجز" }
    },
    testimonials: {
      tag: "شهادات الزبناء",
      title: "ماذا يقول زبناؤنا",
      items: [
        { name: "الحاج محمد", role: "الرباط", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", text: "الخبير قدم ليا نصايح من ذهب. اختاريت حولي مليح بلا صداع الراس. بصح تجربة متميزة." },
        { name: "فاطمة الزهراء", role: "الدار البيضاء", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", text: "خدمة التوصيل كانت في المستوى. تكلفو بكلشي من السوق حتى لباب الدار بكل احترافية." },
        { name: "ياسين", role: "أكادير", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", text: "بصفتي كساب، الدعم اللوجستي ديالهم كيعاون بزاف. فاهمين السوق وشنو كيحتاج الكساب." }
      ]
    },
    footer: { desc: "الحفاظ على التراث المغربي من خلال التميز في الخدمات الحديثة.", explore: "استكشف", company: "الخدمات", news: "النشرة الإخبارية" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function App() {
  const [lang, setLang] = useState<Language>('AR');
  const [theme, setTheme] = useState<Theme>('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    "https://lh3.googleusercontent.com/d/1oyHZIHtpDgdFBqbzTOwQROMsbUFtGSGY",
    "https://lh3.googleusercontent.com/d/1d-3xKRIYV8r3pUjDgwpmKcvjUQvRZu8k",
    "https://lh3.googleusercontent.com/d/1UUCqn817M0tWpTbtAL5kHzcr73bpY3YM"
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: lang === 'AR' ? 'أكادير' : 'Agadir',
    date: '',
    service: lang === 'AR' ? 'خدمة التوصيل دهاب و اياب الى السوق' : 'Souq Shuttle Service'
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = lang === 'AR' 
      ? `طلب حجز جديد:\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالمدينة: ${formData.city}\nالتاريخ: ${formData.date}\nالخدمة: ${formData.service}`
      : `New Booking Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nDate: ${formData.date}\nService: ${formData.service}`;
    
    const whatsappUrl = `https://wa.me/212681790696?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const t = translations[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen bg-cream selection:bg-clay selection:text-white overflow-x-hidden zellige-pattern ${lang === 'AR' ? 'font-arabic' : 'font-sans'} transition-colors duration-300 relative`}>
      {/* Decorative Ornaments */}
      <div className="fixed top-0 left-0 w-64 h-64 zellige-pattern opacity-[0.05] pointer-events-none -scale-x-100" />
      <div className="fixed bottom-0 right-0 w-96 h-96 zellige-pattern opacity-[0.06] pointer-events-none" />
      
      {/* Navigation */}
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out px-4 w-full max-w-4xl ${
          isScrolled ? 'top-2' : 'top-6'
        }`}
      >
        <div 
          className={`relative mx-auto rounded-full transition-all duration-500 border shadow-2xl backdrop-blur-md flex items-center justify-between px-6 py-2 ${
            isScrolled 
              ? 'bg-white/70 py-2 border-white/20' 
              : 'bg-white/80 py-4 border-white/30'
          } ${
            theme === 'dark' 
              ? 'bg-black/50 border-white/10 shadow-clay/20' 
              : 'bg-white/70 shadow-olive/10'
          }`}
        >
          <div className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/d/19oXY4vpoXrxPUBhvEZYrOjcgGJ_mxyE8" 
              alt="SouqMa3ak Logo" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shrink-0"
              referrerPolicy="no-referrer"
            />
            <span className={`font-serif font-bold text-lg md:text-xl tracking-tight hidden sm:block ${theme === 'dark' ? 'text-white' : 'text-[#2d6a4f]'}`}>
              SouqMa3ak
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[11px] uppercase font-bold tracking-widest opacity-80">
            <a href="#" className={`hover:text-[#2d6a4f] transition-colors ${theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-[#2d6a4f]/80'}`}>
              {t.nav.home}
            </a>
            <a href="#" className={`hover:text-[#2d6a4f] transition-colors ${theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-[#2d6a4f]/80'}`}>
              {t.nav.services}
            </a>
            <a href="#" className={`hover:text-[#2d6a4f] transition-colors ${theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-[#2d6a4f]/80'}`}>
              {t.nav.guide}
            </a>
            <a href="#" className={`hover:text-[#2d6a4f] transition-colors ${theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-[#2d6a4f]/80'}`}>
              {t.nav.contact}
            </a>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-full transition-all ${
                theme === 'dark' ? 'bg-white/10 text-white' : 'bg-[#2d6a4f]/5 text-[#2d6a4f]'
              }`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Language Selector (Small) */}
            <button 
              onClick={() => setLang(lang === 'EN' ? 'FR' : lang === 'FR' ? 'AR' : 'EN')}
              className={`hidden sm:flex w-8 h-8 rounded-full border items-center justify-center text-[10px] font-black transition-all ${
                theme === 'dark' ? 'border-white/20 text-white hover:bg-white/10' : 'border-[#2d6a4f]/20 text-[#2d6a4f] hover:bg-[#2d6a4f]/5'
              }`}
            >
              {lang}
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              className="md:hidden p-2 opacity-70"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={20} className={theme === 'dark' ? 'text-white' : 'text-[#2d6a4f]'} />
            </button>

            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className={`hidden md:block px-6 py-2.5 bg-[#2d6a4f] text-[#fdf6ec] rounded-full text-[10px] uppercase font-black tracking-widest hover:bg-[#2d6a4f]/90 transition-all shadow-lg shadow-[#2d6a4f]/20`}
            >
              {t.nav.bookNow}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className={`absolute top-full left-0 right-0 mt-4 p-6 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col gap-4 text-center md:hidden ${
                  theme === 'dark' ? 'bg-black/90 text-white' : 'bg-white/90 text-[#2d6a4f]'
                }`}
              >
                <a href="#" className="font-bold uppercase tracking-widest text-sm py-2 border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</a>
                <a href="#" className="font-bold uppercase tracking-widest text-sm py-2 border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
                <a href="#" className="font-bold uppercase tracking-widest text-sm py-2 border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>{t.nav.guide}</a>
                <a href="#" className="font-bold uppercase tracking-widest text-sm py-2 border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
                
                <div className="flex justify-center gap-4 mt-2">
                  {(['EN', 'FR', 'AR'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                      className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${
                        lang === l 
                        ? 'bg-[#2d6a4f] text-white' 
                        : theme === 'dark' ? 'bg-white/10 text-white' : 'bg-[#2d6a4f]/5 text-[#2d6a4f]'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="mt-4 w-full py-4 bg-[#2d6a4f] text-[#fdf6ec] rounded-2xl font-black uppercase tracking-widest text-xs"
                >
                  {t.nav.bookNow}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section - Image Slider */}
          <motion.div 
            className="md:col-span-12 relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl group"
            variants={itemVariants}
          >
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
              >
                <img 
                  src={slide} 
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            {/* Soft Dark Overlay */}
            <div className="absolute inset-0 bg-black/35 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-0" />
            
            {/* Overlay Elements - Content on Top */}
            <div className="relative z-10 h-full w-full flex flex-col justify-end p-12">
              <div className="flex flex-col md:flex-row items-end justify-between gap-8">
              <div className="max-w-2xl">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="inline-block px-4 py-1 bg-clay text-cream text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                    {t.hero.tag}
                  </span>
                  <h1 className="text-4xl md:text-6xl text-white leading-[0.9] mb-4">
                    {t.hero.title} <br /> <span className="italic font-light">{t.hero.subtitle}</span>
                  </h1>
                </motion.div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden lg:block p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="text-white/80 text-[10px] uppercase font-bold tracking-widest mb-1">{t.hero.authentic}</p>
                  <p className="text-white text-xs">{t.hero.direct}</p>
                </div>
                
                <motion.button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-32 h-32 md:w-44 md:h-44 rounded-full flex flex-col items-center text-[#fdf6ec] relative hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group overflow-hidden"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <img 
                    src="https://lh3.googleusercontent.com/d/1o1pvixLDku2nO3UlPt7hegkDbd5fBJN2" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Background"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient at the bottom for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  
                  <div className="relative z-10 flex flex-col items-center justify-end h-full pb-8 md:pb-10 text-center px-4">
                    <span className="text-lg md:text-2xl font-serif font-bold leading-tight uppercase tracking-tight opacity-95">{t.hero.bookYour}</span>
                    <span className="text-lg md:text-2xl font-serif font-bold leading-tight uppercase tracking-tight">{t.hero.service}</span>
                  </div>
                </motion.button>
              </div>
            </div>
            </div>

          </motion.div>

          {/* Block 1: Headline & Sub-caption */}
          <motion.div 
            className="md:col-span-12 lg:col-span-8 bg-card p-12 rounded-3xl shadow-xl shadow-clay/5 flex flex-col justify-center border border-card-border relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-40 h-40 zellige-pattern opacity-10" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-olive leading-tight mb-6">
              {t.headline.title}
            </h2>
            <p className="text-clay text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              {t.headline.desc}
            </p>
            <div className="mt-10 flex items-center gap-6">
              <button className="px-8 py-4 bg-olive text-cream rounded-full font-bold text-sm tracking-widest hover:bg-olive/90 transition-all flex items-center gap-2">
                {t.headline.cta} <ChevronRight size={18} className={lang === 'AR' ? 'rotate-180' : ''} />
              </button>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-clay/20 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-cream flex items-center justify-center text-[10px] font-bold text-clay">
                  +2.4k
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 2: Services */}
          <motion.div 
            className="md:col-span-6 lg:col-span-4 grid grid-cols-1 gap-4"
            variants={itemVariants}
          >
            {[
              { icon: Truck, title: t.services.sardi.title, desc: t.services.sardi.desc },
              { icon: Store, title: t.services.farm.title, desc: t.services.farm.desc },
              { icon: Home, title: t.services.health.title, desc: t.services.health.desc },
            ].map((s, i) => (
              <div key={i} className="bg-olive p-6 rounded-2xl text-cream flex items-start gap-4 group hover:bg-olive/95 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <s.icon size={24} className="text-clay" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">{s.title}</h3>
                  <p className="text-xs opacity-70 leading-relaxed leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Expert Advisors Row */}
          {[
            "https://lh3.googleusercontent.com/d/1rR6230yYJA-JKVdERguO_Tyk2IlzyppR",
            "https://lh3.googleusercontent.com/d/187cdIQoX7k_pzdEfYuVXBNkjfNSAYhu_",
            "https://lh3.googleusercontent.com/d/1v4Jiq-7GrgriPO39TpYvFN2T65MgAGLd"
          ].map((img, index) => (
            <motion.div 
              key={index}
              className="md:col-span-6 lg:col-span-4 bg-clay/10 rounded-3xl overflow-hidden border border-clay/20 group cursor-pointer h-full min-h-[400px]"
              variants={itemVariants}
            >
              <div className="relative h-full">
                <img 
                  src={img} 
                  alt={`Expert Advisor ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clay via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{t.expert.status}</span>
                  </div>
                  <a 
                    href="https://wa.me/212681790696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white/10 backdrop-blur-md rounded-xl text-white text-xs font-bold tracking-widest border border-white/20 hover:bg-white hover:text-clay transition-all flex items-center justify-center"
                  >
                    {t.expert.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Booking Section */}
          <motion.div 
            id="booking"
            className="md:col-span-12 bg-olive rounded-[3rem] p-8 md:p-16 mt-12 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-64 h-64 zellige-pattern opacity-5" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side Info */}
              <div className="text-white space-y-8">
                <div className="space-y-4">
                  <span className="text-clay font-bold uppercase tracking-[0.2em] text-sm">
                    {t.booking.tag}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-serif italic text-white leading-tight">
                    {t.booking.title}
                  </h2>
                  <p className="text-white/80 text-lg font-light max-w-md italic">
                    {t.booking.desc}
                  </p>
                </div>

                <a 
                  href="https://wa.me/212681790696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 md:gap-8 p-6 md:p-10 bg-white/10 rounded-[2.5rem] border border-white/20 shadow-2xl shadow-black/20 hover:bg-white/15 transition-all group cursor-pointer overflow-hidden"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-green-500 rounded-2xl md:rounded-3xl flex items-center justify-center border-2 md:border-4 border-white/20 shadow-xl group-hover:scale-110 transition-transform shrink-0">
                    <Phone size={24} className="md:w-9 md:h-9 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs text-white/70 font-bold uppercase tracking-widest mb-1 md:mb-2 truncate">{t.booking.whatsapp}</p>
                    <p className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tighter truncate" dir="ltr">
                      +212681790696
                    </p>
                  </div>
                </a>
              </div>

              {/* Right Side Form */}
              <div className="bg-cream rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
                <form className="space-y-6" onSubmit={handleBookingSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black tracking-widest text-clay uppercase">
                        <User size={12} />
                        {t.booking.form.name}
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full h-14 bg-card rounded-2xl px-6 border border-clay/10 focus:outline-none focus:border-clay/40 transition-colors"
                        placeholder="..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black tracking-widest text-clay uppercase">
                        <PhoneCall size={12} />
                        {t.booking.form.phone}
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full h-14 bg-card rounded-2xl px-6 border border-clay/10 focus:outline-none focus:border-clay/40 transition-colors"
                        placeholder="+212 ..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black tracking-widest text-clay uppercase">
                        <MapPin size={12} />
                        {t.booking.form.city}
                      </label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full h-14 bg-card rounded-2xl px-6 border border-clay/10 focus:outline-none focus:border-clay/40 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black tracking-widest text-clay uppercase">
                        <Calendar size={12} />
                        {t.booking.form.date}
                      </label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full h-14 bg-card rounded-2xl px-6 border border-clay/10 focus:outline-none focus:border-clay/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-black tracking-widest text-clay uppercase">
                      <ShieldCheck size={12} />
                      {t.booking.form.service}
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-14 bg-card rounded-2xl px-6 border border-clay/10 focus:outline-none focus:border-clay/40 transition-colors appearance-none"
                    >
                      <option>{lang === 'AR' ? 'خدمة التوصيل دهاب و اياب الى السوق' : 'Souq Shuttle Service'}</option>
                      <option>{lang === 'AR' ? 'استشارة خبير في المواشي' : 'Livestock Expert Consultation'}</option>
                      <option>{lang === 'AR' ? 'توصيل المواشي من والى السوق بالنسبة للكساب' : 'Livestock Transport (Breeders)'}</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full h-16 bg-clay text-white rounded-full font-bold text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-clay/90 transition-all shadow-xl shadow-clay/20 mt-4 group"
                  >
                    {t.booking.form.submit}
                    <Send size={18} className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${lang === 'AR' ? 'rotate-180 scale-x-[-1]' : ''}`} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div 
            className="md:col-span-12 mt-20 mb-10"
            variants={itemVariants}
          >
            <div className="text-center mb-16 px-4">
              <span className="inline-block px-4 py-1 bg-olive/10 text-olive text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                {t.testimonials.tag}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-olive leading-tight">
                {t.testimonials.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.items.map((testimonial, i) => (
                <motion.div 
                  key={i}
                  className="bg-card p-10 rounded-[2.5rem] border border-card-border shadow-xl shadow-clay/5 relative group hover:-translate-y-2 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-8 right-8 text-clay/20 group-hover:text-clay/40 transition-colors">
                    <MessageCircle size={40} />
                  </div>
                  <p className="text-olive/80 text-lg leading-relaxed italic mb-8 relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-clay/20 scale-90 group-hover:scale-100 transition-transform duration-500">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-olive">{testimonial.name}</h4>
                      <p className="text-clay text-[10px] font-bold uppercase tracking-widest">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-olive text-cream pt-20 pb-10 px-6 mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 zellige-pattern opacity-5 -scale-x-100" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/d/19oXY4vpoXrxPUBhvEZYrOjcgGJ_mxyE8" 
                  alt="SouqMa3ak Logo" 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="font-serif font-bold text-3xl tracking-tight">SouqMa3ak</span>
              </div>
              <p className="text-cream/60 max-w-sm mb-8 leading-relaxed font-light">
                {t.footer.desc}
              </p>
              <div className="flex items-center gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-clay hover:border-clay transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h5 className="font-serif text-xl mb-6 text-clay">{t.footer.explore}</h5>
                <ul className="space-y-4 text-sm tracking-wide font-light">
                  <li><a href="#" className="hover:text-clay transition-colors italic italic-small italic">{lang === 'AR' ? 'أكباش سردي' : 'Sardi Rams'}</a></li>
                  <li><a href="#" className="hover:text-clay transition-colors italic italic-small italic">{lang === 'AR' ? 'أكباش بركي' : 'Bergui Rams'}</a></li>
                  <li><a href="#" className="hover:text-clay transition-colors italic italic-small italic">{lang === 'AR' ? 'اختيار تيمحضيت' : 'Timahdit Selection'}</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-serif text-xl mb-6 text-clay">{t.footer.company}</h5>
                <ul className="space-y-4 text-sm tracking-wide font-light">
                  <li><a href="#" className="hover:text-clay transition-colors italic italic-small italic">{lang === 'AR' ? 'شهادة صحية' : 'Health Certification'}</a></li>
                  <li><a href="#" className="hover:text-clay transition-colors italic italic-small italic">{lang === 'AR' ? 'لوجستيات سريعة' : 'Rapid Logistics'}</a></li>
                  <li><a href="#" className="hover:text-clay transition-colors italic italic-small italic">{lang === 'AR' ? 'خدمات التضحية' : 'Sacrifice Concierge'}</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h5 className="font-serif text-xl mb-6 text-clay">{t.footer.news}</h5>
                <p className="text-xs text-cream/50 mb-4 tracking-tighter">{lang === 'AR' ? 'ابق على اطلاع بالاختيارات الموسمية.' : 'Stay updated with seasonal selections.'}</p>
                <div className="flex gap-2">
                  <input type="email" placeholder={lang === 'AR' ? 'البريد الإلكتروني' : 'Email'} className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-xs w-full focus:outline-none focus:border-clay" />
                  <button className={`p-2 bg-clay rounded-lg hover:bg-clay/90 transition-colors ${lang === 'AR' ? 'rotate-180' : ''}`}>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-cream/10 flex flex-col md:row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
            <p>{lang === 'AR' ? '© 2024 سوق معاك للخدمات المتميزة. جميع الحقوق محفوظة.' : '© 2024 SOUQMA3AK CONCIERGE. ALL RIGHTS RESERVED.'}</p>
            <div className="flex items-center gap-8">
              <a href="#">{lang === 'AR' ? 'الخصوصية' : 'Privacy'}</a>
              <a href="#">{lang === 'AR' ? 'الشروط' : 'Terms'}</a>
              <a href="#">{lang === 'AR' ? 'أخلاقيات العمل' : 'Ethics'}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/212681790696"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[9999] flex items-center group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Tooltip */}
        <motion.div 
          className="absolute left-16 px-4 py-2 bg-white text-[#25D366] text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#25D366]/20"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          {lang === 'AR' ? 'تواصل معنا' : 'Contact Us'}
        </motion.div>

        {/* Main Button */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] border-2 border-white/20">
          <MessageCircle size={28} fill="currentColor" />
        </div>
      </motion.a>
    </div>
  );
}
