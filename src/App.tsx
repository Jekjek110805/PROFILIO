import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Prism from './components/Prism/Prism';
import Logo from './components/Logo/Logo';
import Coverflow from './components/Coverflow/Coverflow';
import Reviews from './components/Reviews/Reviews';
import EyeTicker from './components/EyeTicker/EyeTicker';
import { 
  Linkedin, 
  Instagram, 
  Dribbble, 
  Plus, 
  Minus, 
  ArrowUpRight, 
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Github,
  Download,
  Heading1,
  Moon,
  Sun
} from 'lucide-react';

// --- Components ---

const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'left' | 'right', className?: string }) => {
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0 },
    visible: { opacity: 1, y: 0, x: 0 }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 px-6 transition-all duration-500 flex justify-between items-center ${
        isScrolled
          ? 'top-3 md:top-4 left-3 right-3 md:left-6 md:right-6 lg:left-12 lg:right-12 py-3 md:py-4 rounded-xl bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-lg border border-black/5 dark:border-white/5'
          : 'top-0 left-0 right-0 py-6 rounded-none bg-transparent'
      }`}
    >
      <a href="#" className="flex items-center">
        <Logo className="text-xl md:text-2xl text-ink dark:text-white transition-colors" />
      </a>
      <div className="hidden md:flex items-center gap-8 font-medium">
        <a href="#services" className="hover:text-accent-start transition-colors">Services</a>
        <a href="#education" className="hover:text-accent-start transition-colors">Education</a>
        <a href="#portfolio" className="hover:text-accent-start transition-colors">Portfolio</a>
        <a href="#about" className="hover:text-accent-start transition-colors">About</a>
        <a href="#contact" className="hover:text-accent-start transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex gap-4 opacity-60 hover:opacity-100 transition-opacity">
          <a href="https://www.linkedin.com/in/riel-jake-engana-585644372/" className="hover:text-accent-start hover:scale-110 transition-all"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/real_jexkz/?hl=en" className="hover:text-accent-start hover:scale-110 transition-all"><Instagram size={20} /></a>
          <a href="https://www.facebook.com/Engana08" className="hover:text-accent-start hover:scale-110 transition-all"><Facebook size={20} /></a>
          <a href="https://github.com/Jekx-geidi" target="_blank" rel="noopener noreferrer" className="hover:text-accent-start hover:scale-110 transition-all"><Github size={20} /></a>
        </div>
        <a
          href="/RIEL JAKE_ENGANA _VERCEL RESUME_ Geidi.jpg"
          download
          className="flex items-center gap-2 gradient-bg text-white px-4 md:px-6 py-2 rounded-full font-semibold text-xs md:text-sm hover:scale-105 transition-transform shadow-lg shadow-accent-start/20"
        >
          <Download size={16}/>
          <span className="hidden md:inline">Download Resume</span>
          <span className="inline md:hidden">Resume</span>
        </a>
      </div>
    </nav>
  );
};

const heroSlides = [
  {
    title: "Behind the Lens",
    image: {
      src: "/474476352_1323057112154215_6879089384102707022_n.jpg",
      alt: "Riel Jake Engaña crouching to shoot with a Fujifilm camera at an AMA Senior High event"
    }
  },
  {
    title: "Senior High",
    image: {
      src: "/474590781_1323907835402476_1613737370478227588_n.jpg",
      alt: "Riel Jake Engaña in a blazer and AMA Senior High lanyard"
    }
  },
  {
    title: "Graduation",
    image: {
      src: "/475029024_1325299558596637_1364348765224487916_n - Copy.jpg",
      alt: "Riel Jake Engaña in a red graduation toga holding his certificate"
    }
  },
  {
    title: "USJ-R 2024–2026",
    image: {
      src: "/475047621_1325302188596374_5734427133831803104_n.jpg",
      alt: "Riel Jake Engaña — University of San Jose-Recoletos 2024–2026 portrait"
    }
  }
];

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-6 md:px-20">
    {/* Background Typography */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-black/[0.03] dark:text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter transition-colors">
      Agentic
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6 mt-12 md:mt-0">
          AI Augmented,<br />
          <span className="gradient-text"> Software</span><br />
          Developer.
        </h1>
        <p className="text-xl text-ink/60 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
          Hi, I'm <span className="text-ink dark:text-white font-semibold">Riel Jake Engaña</span>, a Software-Augmented Software Developer Intern at Geidi IT, specializing in AI automation and intelligent software systems. My work focuses on developing AI-augmented applications, autonomous agents, and agentic workflows capable of reasoning, planning, and executing complex tasks.
My background combines the analytical and process-oriented principles of Industrial Engineering with practical experience in software development and artificial intelligence. I work with multi-agent architectures, LLM orchestration, AI integration, and end-to-end process automation to develop efficient and scalable software solutions.
Currently, I contribute to the development and deployment of production-ready AI-augmented and agentic systems at Geidi IT while completing my degree in Software Development at the University of San Jose–Recoletos (USJ-R).
        </p>
        
        <div className="relative inline-block">
          <span className="font-signature text-5xl text-accent-start -rotate-6 block absolute -top-8 -right-12 pointer-events-none opacity-80">
          </span>
          <button className="bg-ink dark:bg-white top-20 bottom-20 text-white dark:text-ink px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-ink/90 dark:hover:bg-white/90 transition-colors group">
            View My Work
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex justify-center"
      >
        {/* 3D Coverflow Gallery */}
        <div className="relative w-full h-[380px] md:h-[440px]">
          <Coverflow
            slides={heroSlides}
            cardWidth={280}
            cardHeight={280}
            radius={4}
            tilt={12}
            sideTilt={6}
            gap={6}
            opacity={55}
            showTitle={false}
          />
        </div>

        {/* Floating Tags */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                  className="absolute top-4 md:top-10 -left-2 md:-left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg font-bold text-xs md:text-sm border border-black/5 dark:border-white/10 cursor-pointer"
                >
                  🤖 Agentic AI
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                  className="absolute bottom-10 md:bottom-20 -right-2 md:-right-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg font-bold text-xs md:text-sm border border-black/5 dark:border-white/10 cursor-pointer"
                >
                  ⚡ Multi-Agent
                </motion.div>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                  className="absolute top-1/2 -right-2 md:-right-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg font-bold text-xs md:text-sm border border-black/5 dark:border-white/10 cursor-pointer"
                >
                  🔧 LLM Ops
                </motion.div>
      </motion.div>
    </div>
  </section>
);

const ServiceAccordion = () => {
  const [expanded, setExpanded] = useState<number | null>(1);

  const services = [
    { id: 0, title: "Branding", desc: "Crafting unique visual identities that resonate with your audience and stand the test of time." },
    { id: 1, title: "Design", desc: "Efficient, knowledgeable, and smooth experience. Highly recommended for complex UI/UX challenges." },
    { id: 2, title: "Marketing", desc: "Strategic digital marketing campaigns designed to drive growth and maximize ROI." },
    { id: 3, title: "Code", desc: "Clean, performant front-end development using the latest modern frameworks and best practices." },
    { id: 4, title: "Video Editing", desc: "Creating high-quality, engaging videos by cutting, mixing, and adding effects to tell your story." },
    { id: 5, title: "Agentic Automation", desc: "Building autonomous AI agents and automated workflows that reason, plan, and execute complex tasks independently." }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            My Specialized<br />Services.
          </h2>
          <p className="text-ink/60 dark:text-slate-400 max-w-xs text-lg">
            I provide comprehensive design solutions tailored to your business goals.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, idx) => (
            <FadeIn 
              key={service.id}
              delay={idx * 0.1}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                expanded === service.id ? 'bg-black/5 dark:bg-white/10 border-transparent shadow-inner' : 'bg-white/50 dark:bg-slate-800/50 border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 backdrop-blur-sm'
              }`}
            >
              <button 
                onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                className="w-full p-6 md:px-8 md:py-10 flex justify-between items-center text-left gap-4"
              >
                <span className="text-2xl md:text-5xl font-display font-bold tracking-tight">
                  {service.title}
                </span>
                <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                  expanded === service.id ? 'bg-accent-start text-white' : 'bg-black/5 dark:bg-white/10 text-ink dark:text-white'
                }`}>
                  {expanded === service.id ? <Minus /> : <Plus />}
                </div>
              </button>
              <AnimatePresence>
                {expanded === service.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-10 max-w-2xl">
                      <p className="text-lg md:text-xl text-ink/70 dark:text-slate-300 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutStats = () => (
  <section id="about" className="py-32 px-6 relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-5xl font-display font-medium leading-tight mb-12 md:mb-20"
      >
        "UI/UX designer crafting intuitive, user-friendly experiences through wireframing, prototyping, and visual design."
      </motion.h2>

      <div className="flex justify-center mb-20">
        <div className="relative group">
          <div className="absolute inset-0 bg-accent-start blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl transition-colors cursor-pointer hover:scale-105 duration-500">
            <img 
              src="/699273422_1702802617512994_1962015335284207172_n.jpg" 
              alt="Designer Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Years of Experience", value: "05" },
          { label: "Projects Completed", value: "50+" },
          { label: "Client Rating", value: "4.50" },
          { label: "Design Awards", value: "17" }
        ].map((stat, i) => (
          <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center">
            <span className="text-4xl md:text-7xl font-display font-bold mb-2">{stat.value}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-ink/40 dark:text-slate-500">{stat.label}</span>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const JourneyTimeline = () => {
  const journey = [
    {
      year: "2022",
      title: "Started as a student builder",
      body: "I began turning curiosity into real output: websites, graphic design work, and small systems that trained my eye for details and delivery at AMA ACLC College of Mandaue.",
      image: "/GRAP.jpg"
    },
    {
      year: "2023",
      title: "Graduated at AMA ",
      body: "Afterall, I Graduate at AMA ACLC College of Mandaue as Visual Graphic Design and Animation, but instead of continue to work, I continue my studies;",
      image: "/CERTS.jpg"
    },
    {
      year: "2024",
      title: "Joined PNPh",
      body: "I joined PNPh become their student scholar, Taking 2.5yrs of professional training at USJR. While focusing to study Software Development as an Associate of Computer Technology.",
      image: "/PN.png"
    },
    {
      year: "2025",
      title: "Prepared for the workplace",
      body: "I sharpened my portfolio, practiced professional communication, and kept delivering freelance and school projects with stronger standards.",
      image: "/JP.jpg"
    },
    {
      year: "2026",
      title: "From student to work",
      body: "Now I am growing as an Software Developer Intern at Geidi IT, building AI automation, agentic workflows, and production-minded tools.",
      image: "/GEIDI.jpg"
    }
  ];
  const [activeIndex, setActiveIndex] = useState(journey.length - 1);
  const active = journey[activeIndex];
  const goToPrevious = () => setActiveIndex((activeIndex - 1 + journey.length) % journey.length);
  const goToNext = () => setActiveIndex((activeIndex + 1) % journey.length);

  return (
    <section id="journey" className="scroll-mt-24 py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <p className="text-sm font-bold uppercase tracking-widest text-accent-start mb-4">Philippines</p>
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-16 items-end">
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
                Tech Journey<br />the years.
              </h2>
              <p className="text-lg md:text-xl text-ink/65 dark:text-slate-300 leading-relaxed max-w-2xl">
              My journey as a student, builder, and young professional - from learning the craft to applying it at work.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="hidden md:block absolute left-16 right-16 top-[7.35rem] border-t-2 border-dashed border-black/25 dark:border-white/25" />

          <div className="flex items-center justify-between gap-2 md:gap-4 mb-10 pr-14 md:pr-0">
            <button
              type="button"
              onClick={goToPrevious}
              className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/20 dark:border-white/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md flex items-center justify-center hover:border-accent-start hover:text-accent-start transition-colors"
              aria-label="Previous journey milestone"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="relative z-10 flex-1 grid grid-cols-5 gap-1 md:gap-6">
              {journey.map((item, index) => (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex flex-col items-center gap-3 transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-45 hover:opacity-80'}`}
                  aria-label={`Show ${item.year} journey milestone`}
                >
                  <span className={`text-sm md:text-4xl font-display font-bold transition-colors ${index === activeIndex ? 'text-ink dark:text-white' : 'text-ink/50 dark:text-white/50'}`}>
                    {item.year}
                  </span>
                  <span className={`w-5 h-5 rounded-full border-4 transition-colors ${index === activeIndex ? 'bg-accent-start border-white dark:border-slate-950 shadow-lg shadow-accent-start/30' : 'bg-white dark:bg-slate-800 border-accent-start/70'}`} />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/20 dark:border-white/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md flex items-center justify-center hover:border-accent-start hover:text-accent-start transition-colors"
              aria-label="Next journey milestone"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.year}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center"
            >
              <div className="md:text-right">
                <p className="text-sm font-bold uppercase tracking-widest text-accent-start mb-3">My journey</p>
                <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-5">{active.title}</h3>
                <p className="text-lg text-ink/65 dark:text-slate-300 leading-relaxed md:ml-auto max-w-xl">
                  {active.body}
                </p>
              </div>

              <div className="relative flex justify-center md:justify-start">
                <div className="absolute top-1/2 left-1/2 md:left-28 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent-start/10 blur-3xl" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white/80 dark:border-slate-800/80 shadow-2xl bg-white/40 dark:bg-slate-900/40">
                  <img
                    src={active.image}
                    alt={`${active.year} ${active.title}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const education = [
    {
      years: "2016 – 2021",
      title: "Junior High School",
      institution: "Junior High School Science Class",
      body: "Completed junior high school under the Science curriculum, building the academic foundation before pursuing a technical and creative track in senior high.",
      link: "https://www.youtube.com/channel/UCSZq2Jfqy8chv6jnsC1E0NA",
      logo: "/PaknaanNHS-logo.png"
    },
    {
      years: "2022 – 2024",
      title: "Senior High School",
      institution: "ACLC College of Mandaue",
      body: "TVL strand, Major in Visual Graphic Design and Animation — where I first started applying design and technical skills to real projects.",
      link: "https://www.facebook.com/ACLCCMandaueRegistrar/",
      logo: "/ACLC-logo.png"
    },
    {
      years: "2024 – Present",
      title: "College",
      institution: "University of San Jose–Recoletos",
      body: "Associate in Computer Technology, Major in Software Development — currently completing my degree while working as a Software Developer Intern.",
      link: "https://en.wikipedia.org/wiki/University_of_San_Jose%E2%80%93Recoletos",
      logo: "/USJR-logo.png"
    }
  ];
  const [activeIndex, setActiveIndex] = useState(education.length - 1);
  const active = education[activeIndex];

  return (
    <section id="education" className="scroll-mt-24 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <p className="text-sm font-bold uppercase tracking-widest text-accent-start mb-4">Background</p>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
              Education.
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-6 border-t-2 border-dashed border-black/25 dark:border-white/25" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-14">
            {education.map((item, index) => (
              <button
                key={item.years}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group flex flex-col items-center text-center gap-3 transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-45 hover:opacity-80'}`}
                aria-label={`Show ${item.years} education milestone`}
              >
                <span className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white p-1.5 border-4 transition-colors ${index === activeIndex ? 'border-accent-start shadow-lg shadow-accent-start/30' : 'border-black/10 dark:border-white/20'}`}>
                  <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </span>
                <span className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${index === activeIndex ? 'text-ink dark:text-white' : 'text-ink/50 dark:text-white/50'}`}>
                  {item.years}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.years}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full bg-white p-3 shadow-xl border border-black/5">
                <img src={active.logo} alt={`${active.institution} logo`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent-start mb-3">{active.title}</p>
              <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-5">{active.institution}</h3>
              <p className="text-lg text-ink/65 dark:text-slate-300 leading-relaxed mb-6">{active.body}</p>
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-accent-start transition-colors"
              >
                Visit <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "Before you Dig Australia", category: "Mining Documentation Automation System", img: "/BYDA.png" },
    { title: "PNPh Tourna Website", category: "Tournament Website", img: "/TOUR.png" },
    { title: "MAAI WebApp Project", category: "SEO AI Agent", img: "/maai.png" },
    { title: "LostLink WebApp Project", category: "Lost and Found Management", img: "/Web App.png" },
    { title: "Wendears Cake", category: "E-Commerce Website", img: "/Wendears.png" },
    { title: "Tourmate", category: "AI Travel Companion App", img: "/Tourmate'.png" }
  ];

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Latest<br />Portfolio.</h2>
            <button className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-accent-start transition-colors">
              View All Projects <ArrowUpRight size={18} />
            </button>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="text-ink" size={32} />
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 dark:bg-slate-800/90 dark:text-white backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-display font-bold">{project.title}</h3>
                <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-ink dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-ink transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsTicker = () => {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "JAVA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "REACT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "NODE.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TYPESCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "LARAVEL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "TAILWIND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MONGODB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MYSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "ORACLE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "FIGMA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "CANVA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "PHOTOSHOP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    { name: "AFFINITY", icon: "/affinity-logotype.svg" },
    { name: "ILLUSTRATOR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg" },
    { name: "HERMES AGENT", icon: "https://hermes-agent.nousresearch.com/img/desktop/badge.webp" },
    { name: "PYTHON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OBSIDIAN", icon: "https://cdn.simpleicons.org/obsidian/7C3AED" },
    { name: "SUPABASE", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    { name: "JAVASCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "CLAUDE", icon: "https://cdn.simpleicons.org/claude/D97757" },
    { name: "OPENAI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" },
    { name: "APACHE LOUNGE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    { name: "VUE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "GITHUB", icon: "https://cdn.simpleicons.org/github/181717" },
    { name: "GITLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "GIT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "UBUNTU LINUX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
    { name: "LINUX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "FASTAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "COMPOSIO", icon: "https://composio.dev/favicon.ico" },
    { name: "NOTEPAD++", icon: "https://cdn.simpleicons.org/notepadplusplus/90E59A" },
    { name: "SIXTH AI", icon: "https://trysixth.com/favicon.ico" }
  ];

  // Two arced rows travelling in opposite directions; split the list in half.
  const half = Math.ceil(skills.length / 2);
  const toSlides = (list: typeof skills) =>
    list.map(({ name, icon }) => ({ image: { src: icon, alt: `${name} logo` } }));

  return (
    <section className="py-12">
      <h2 className="text-center text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-ink/40 dark:text-slate-500 mb-4">
        Tools &amp; Technologies
      </h2>
      <div className="h-[400px] md:h-[500px]">
        <EyeTicker
          topImages={toSlides(skills.slice(0, half))}
          bottomImages={toSlides(skills.slice(half))}
          cardWidth={100}
          cardHeight={150}
          rowGap={120}
          fit="contain"
          rounded={3}
          speed={12}
          // Same surface as the review cards — see --card-surface in index.css.
          cardStyle={{
            background: 'var(--card-surface)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid var(--card-border)',
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
          }}
          cardPadding={14}
        />
      </div>
    </section>
  );
};

const faqGradients = [
  'linear-gradient(160deg, #6366F1 0%, #8B5CF6 100%)',
  'linear-gradient(160deg, #F97316 0%, #EF4444 100%)',
  'linear-gradient(160deg, #10B981 0%, #06B6D4 100%)',
  'linear-gradient(160deg, #EC4899 0%, #F43F5E 100%)'
];

// Fanned card carousel — center card active, side cards splay out and rotate,
// styled after the "Daily Energy" Framer demo (decisive-reassurance-155626.framer.app).
const FaqFanCard = ({
  faq,
  offset,
  isActive,
  onSelect,
  gradient
}: {
  faq: { q: string; a: string };
  offset: number;
  isActive: boolean;
  onSelect: () => void;
  gradient: string;
}) => {
  const abs = Math.abs(offset);
  const hidden = abs > 3;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-current={isActive}
      className="absolute top-0 left-1/2 w-[240px] h-[340px] md:w-[300px] md:h-[400px] rounded-[1.75rem] overflow-hidden text-left shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      style={{ background: gradient, transformOrigin: 'bottom center' }}
      initial={false}
      animate={{
        x: `calc(-50% + ${offset * 64}px)`,
        y: abs * 16,
        rotate: offset * 10,
        scale: isActive ? 1 : Math.max(0.8, 1 - abs * 0.09),
        opacity: hidden ? 0 : isActive ? 1 : 0.45,
        filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
        zIndex: 100 - abs
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
    >
      <div className="relative h-full p-6 md:p-7 flex flex-col text-white">
        <span className="self-end shrink-0 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest">
          FAQ
        </span>
        <div className="mt-4 flex-1 min-h-0 flex flex-col">
          <h3 className="font-display font-bold text-xl md:text-2xl leading-tight mb-3 line-clamp-2 shrink-0">{faq.q}</h3>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex-1 min-h-0 overflow-y-auto no-scrollbar pr-1"
              >
                <p className="text-sm md:text-base leading-relaxed text-white/90">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isActive && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/25 to-transparent rounded-b-[1.75rem]" />
        )}
      </div>
    </motion.button>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "What services do you offer?", a: "I offer a full range of design services including UI/UX design, branding, product strategy, graphic design, motion graphics, video editing, photo manipulation, system management, and web development and many more." },
    { q: "How can I contact you?", a: "You can reach out via the contact: Email: riel.engana@student.passerellesnumeriques.org. or call 09850254857" },
    { q: "How much does a project cost?", a: "Project costs vary based on scope and complexity. I provide custom quotes after an initial discovery call." },
    { q: "Which tools do you provide?", a: "I primarily use Figma for design, and for development I use HTML, CSS, PHP, JAVA, REACT, NODEJS, TYPESCRIPT, and modern web technologies like LARAVEL, TAILWIND, and ANYTHING for development, and in regards with databases, I use MongoDB, MySQL and Oracle." }
  ];
  const [activeIndex, setActiveIndex] = useState(Math.floor((faqs.length - 1) / 2));
  const goToPrevious = () => setActiveIndex((activeIndex - 1 + faqs.length) % faqs.length);
  const goToNext = () => setActiveIndex((activeIndex + 1) % faqs.length);

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-4 tracking-tighter">Frequently Asked<br />Questions.</h2>
          <p className="text-center text-ink/60 dark:text-slate-400 mb-16 md:mb-20">Tap a card to flip through the answers.</p>
        </FadeIn>

        <div className="relative h-[400px] md:h-[460px] mb-12">
          {faqs.map((faq, index) => (
            <FaqFanCard
              key={faq.q}
              faq={faq}
              offset={index - activeIndex}
              isActive={index === activeIndex}
              onSelect={() => setActiveIndex(index)}
              gradient={faqGradients[index % faqGradients.length]}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goToPrevious}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/20 dark:border-white/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md flex items-center justify-center hover:border-accent-start hover:text-accent-start transition-colors"
            aria-label="Previous question"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {faqs.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-accent-start' : 'bg-black/20 dark:bg-white/20'}`}
                aria-label={`Show question ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goToNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/20 dark:border-white/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md flex items-center justify-center hover:border-accent-start hover:text-accent-start transition-colors"
            aria-label="Next question"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-display font-black text-black/[0.03] dark:text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter transition-colors">
      Contact
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn direction="right" className="relative">
          <div className="absolute inset-0 bg-accent-start blur-3xl opacity-20 rounded-full" />
          <div className="relative aspect-square rounded-3xl md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white/50 dark:border-slate-800/50 shadow-2xl transition-colors">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NW0zeGhkM3I3MGJmMzczYXN1bHUxa2ZzMmRnanhxMm5pN3gxZmV3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/J2Cn43dJvkMjn6xICf/giphy.gif" 
              alt="Contact" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
        
        <FadeIn direction="left">
          <div className="text-2xl font-display font-bold tracking-tighter mb-8">SEND ME AN EMAIL NOW!</div>
          
          <form 
            action="https://formsubmit.co/rieljake.engana.24@usjr.edu.ph" 
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="You have New Message from your client Jake!" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-ink/40 dark:text-slate-500">
                Full Name
              </label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Name"
                className="w-full bg-black/5 dark:bg-white/10 dark:text-white rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-start transition-shadow"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-ink/40 dark:text-slate-500">
                Email
              </label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="yourname@email.com"
                className="w-full bg-black/5 dark:bg-white/10 dark:text-white rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-start transition-shadow"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-ink/40 dark:text-slate-500">
                Message
              </label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-black/5 dark:bg-white/10 dark:text-white rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-start resize-none transition-shadow"
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-bg text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
            >
              Send Email
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 bg-ink dark:bg-black text-white transition-colors duration-500">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <Logo className="text-2xl text-white" />
      <div className="flex gap-8 text-white/60 text-sm font-medium">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Cookies</a>
      </div>
      <p className="text-white/40 text-xs">© 2026 Ipseity. All rights reserved.</p>
    </div>
  </footer>
);

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      window.localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      window.localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const target = window.location.hash ? document.querySelector(window.location.hash) : null;
    if (target) requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-ink dark:text-white transition-colors duration-500 selection:bg-accent-start selection:text-white">
      <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden pointer-events-none">
        <Prism
          animationType="3drotate"
          height={3.8}
          baseWidth={5.8}
          glow={1.35}
          noise={0.22}
          transparent
          scale={2.9}
          hueShift={0.45}
          colorFrequency={1.15}
          bloom={1.1}
          timeScale={0.35}
        />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-white/62 dark:bg-slate-950/48" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-slate-50/70 via-white/38 to-[#a3beff]/26 dark:from-slate-950/45 dark:via-slate-900/24 dark:to-[#a3beff]/16" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ServiceAccordion />
        <AboutStats />
        <JourneyTimeline />
        <Education />
        <Portfolio />
        <Reviews />
        <SkillsTicker />
        <FAQ />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-ink dark:bg-white text-white dark:text-ink shadow-2xl hover:scale-110 transition-transform"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDarkMode}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
}
