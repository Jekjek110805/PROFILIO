import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Linkedin, 
  Instagram, 
  Dribbble, 
  Plus, 
  Minus, 
  ArrowUpRight, 
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Download,
  Heading1
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
    <div className="text-2xl font-display font-bold tracking-tighter text-white">ME_PROFILE.</div>
    <div className="hidden md:flex items-center gap-8 text-white/80 font-medium">
      <a href="#services" className="hover:text-white transition-colors">Services</a>
      <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
      <a href="#about" className="hover:text-white transition-colors">About</a>
      <a href="#contact" className="hover:text-white transition-colors">Contact</a>
    </div>
    <div className="flex items-center gap-6">
      <div className="flex gap-4 text-white/60">
        <a href="https://www.linkedin.com/in/riel-jake-engana-585644372/" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
        <a href="https://www.instagram.com/real_jexkz/?hl=en" className="hover:text-white transition-colors"><Instagram size={20} /></a>
        <a href="https://www.facebook.com/Engana08" className="hover:text-white transition-colors"><Facebook size={20} /></a>
      </div>
  <a
  href="/RIEL JAKE_ENGANA _VERCEL RESUME_ Geidi.jpg"
  download
  className="flex items-center gap-2 gradient-bg text-white px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform shadow-lg shadow-accent-start/20"
>
  <Download size={16}/>
  Download my Resume
</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-6 md:px-20">
    {/* Background Typography */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-black/[0.03] select-none pointer-events-none uppercase tracking-tighter">
      Designer
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
          Web Development,<br />
          <span className="gradient-text"> UI/UX</span><br />
          & Design.
        </h1>
        <p className="text-xl text-ink/60 max-w-md mb-8 leading-relaxed">
          Hi, I'm <span className="text-ink font-semibold">Riel Jake Engaña</span>, A Software Development student at USJ-R with a 'living technology' mindset, having already completed 56 global and local projects
before finishing Senior High School. My background spans freelance web development on Upwork and LinkedIn, graphic
design, and technical maintenance for government platforms. These experiences have sharpened my professional
problem-solving skills and my ability to deliver results for international clients. I am now eager to bring this proven
technical passion and work ethic to a forward-thinking team.
        </p>
        
        <div className="relative inline-block">
          <span className="font-signature text-5xl text-accent-start -rotate-6 block absolute -top-8 -right-12 pointer-events-none opacity-80">
          </span>
          <button className="bg-ink top-20 bottom-20 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-ink/90 transition-colors group">
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
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-accent-start/20 to-transparent blur-3xl rounded-full" />
        
        <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
          <img 
            src="https://instagram.fceb5-1.fna.fbcdn.net/v/t51.29350-15/452075668_1537009290576516_2906078154911533778_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzQxODUzMDkzMTg0MjI2NDk1OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=EqqB2nk7u7cQ7kNvwGgpufX&_nc_oc=AdpNiNgvVOkNNAwpvNLIHrQA3tcrKEm6ftk-1fMYY4PepPDt9nwpv4QPuyF9tk9KPD4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fceb5-1.fna&_nc_gid=TuaGwbkJ9xQUX0ngZ3RA0A&_nc_ss=7a30f&oh=00_AfxUSxLTIE0JFTnbW7EqKueBR9mxslerdZP1w412u7rAHQ&oe=69C2FFCD" 
            alt="Designer Portrait" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floating Tags */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-4 bg-white px-4 py-2 rounded-full shadow-lg font-bold text-sm border border-black/5"
        >
          ✨ UI/UX
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-20 -right-4 bg-white px-4 py-2 rounded-full shadow-lg font-bold text-sm border border-black/5"
          
        >
          🎨 Web Development
        </motion.div>
        <motion.div 
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -right-10 bg-white px-4 py-2 rounded-full shadow-lg font-bold text-sm border border-black/5"
        >
          🚀 Product Design
        </motion.div>

        {/* Experience Badge */}
        <div className="absolute -bottom-6 left-0 bg-white p-6 rounded-2xl shadow-xl border border-black/5 max-w-[200px]">
          <div className="text-3xl font-display font-bold text-accent-start mb-1">5+</div>
          <p className="text-xs font-semibold text-ink/60 uppercase tracking-wider leading-tight">
            Years of Experience. Award-winning creative designer.
          </p>
        </div>
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
    { id: 3, title: "Code", desc: "Clean, performant front-end development using the latest modern frameworks and best practices." }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            My Specialized<br />Services.
          </h2>
          <p className="text-ink/60 max-w-xs text-lg">
            I provide comprehensive design solutions tailored to your business goals.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                expanded === service.id ? 'bg-bg border-transparent shadow-inner' : 'bg-white border-black/5 hover:border-black/20'
              }`}
            >
              <button 
                onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                className="w-full px-8 py-10 flex justify-between items-center text-left"
              >
                <span className="text-3xl md:text-5xl font-display font-bold tracking-tight">
                  {service.title}
                </span>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  expanded === service.id ? 'bg-accent-start text-white' : 'bg-bg text-ink'
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
                    <div className="px-8 pb-10 max-w-2xl">
                      <p className="text-xl text-ink/70 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
        className="text-3xl md:text-5xl font-display font-medium leading-tight mb-20"
      >
        "UI/UX designer crafting intuitive, user-friendly experiences through wireframing, prototyping, and visual design."
      </motion.h2>

      <div className="flex justify-center mb-20">
        <div className="relative group">
          <div className="absolute inset-0 bg-accent-start blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://instagram.fceb5-1.fna.fbcdn.net/v/t51.29350-15/452075668_1537009290576516_2906078154911533778_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzQxODUzMDkzMTg0MjI2NDk1OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=EqqB2nk7u7cQ7kNvwGgpufX&_nc_oc=AdpNiNgvVOkNNAwpvNLIHrQA3tcrKEm6ftk-1fMYY4PepPDt9nwpv4QPuyF9tk9KPD4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fceb5-1.fna&_nc_gid=TuaGwbkJ9xQUX0ngZ3RA0A&_nc_ss=7a30f&oh=00_AfxUSxLTIE0JFTnbW7EqKueBR9mxslerdZP1w412u7rAHQ&oe=69C2FFCD" 
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
          <div key={i} className="flex flex-col items-center">
            <span className="text-5xl md:text-7xl font-display font-bold mb-2">{stat.value}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-ink/40">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const projects = [
    { title: "Mockup Design", category: "Mockup", img: "https://scontent.fceb5-1.fna.fbcdn.net/v/t39.30808-6/648212801_803002569509229_3183050080098602787_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeEbb6JTryoV_sSo_jmStDXsZkhyoRlJzk1mSHKhGUnOTak3rWaN2wxxhOZD3qXrRHKLZ46uLfVDnNiDVaFaruiX&_nc_ohc=L7L6C1pAtvMQ7kNvwEqEBwg&_nc_oc=Adl5zrpL6ehtsPtJEhbmN0nU_BdRiBlD81p2eHY5LtzM4vEoQXQ4UuqX9UnwxR8B5U4&_nc_zt=23&_nc_ht=scontent.fceb5-1.fna&_nc_gid=jiP7AldEXw_YDw1lTl2tlg&_nc_ss=8&oh=00_Afxhg0j5xje958mxgb16HSBhW927KXQMwhf8323fcGOdrg&oe=69B733D7" },
    { title: "Book Design", category: "Editorial", img: "https://i.pinimg.com/1200x/27/7b/fb/277bfbead0fb50f6e38498a302575060.jpg" },
    { title: "Brand Identity", category: "Branding", img: "https://scontent.fceb5-1.fna.fbcdn.net/v/t39.30808-6/648967233_803001692842650_3995361425588863497_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeGXXtDUZh_noqBZMhoVj3gyQ4fY0kYb4GRDh9jSRhvgZLJVMd0HdHsrbTolN53aJkXdG28CJ9UDuFEdSbBrdHLt&_nc_ohc=2e6REckmPVkQ7kNvwGevVkm&_nc_oc=AdmulfOUUy0ErJMZl3kIMM_m9Be6_0eVTwHphHXPaUNTDVewZl47u4JGdapt-tRtvlI&_nc_zt=23&_nc_ht=scontent.fceb5-1.fna&_nc_gid=poXsmbIoP9D4YxVvhzhiHA&_nc_ss=8&oh=00_Afzl5ySNsTICsfe6rW5rUMcP0_fniN7I1FF-py5TAQT4OQ&oe=69B73697" },
    { title: "Application UI", category: "Product", img: "https://i.pinimg.com/1200x/45/30/f2/4530f2da62402ab8c533ffacdab1c867.jpg" }
  ];

  return (
    <section id="portfolio" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Latest<br />Portfolio.</h2>
          <button className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-accent-start transition-colors">
            View All Projects <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
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
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-display font-bold">{project.title}</h3>
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { 
            quote: "Experiensado jud bataa, kamao daghan nakat-unan Visual",
            name: "Carelyn Dimaranan Obeso",
            role: "CEO at UNO Caffee"
          },
          { 
            quote: "Kani si Jake, isa ni sa akong consistent designer when it comes to Festivals",
            name: "Erwin Mandela Jumawan",
            role: " festival Choreographer"
          },
          { 
            quote: "Affordable, Student budget ra iyang mga rates, so ako jud ni sya e recommend",
            name: "Jayzen Cordove",
            role: "Design Director at JT"
          }
        ].map((t, i) => (
          <div key={i} className="flex flex-col h-full">
            <div className="text-accent-start mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
            </div>
            <p className="text-2xl font-display font-medium mb-8 flex-grow italic">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-bg">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt={t.name} referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-xs text-ink/40 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LogoStrip = () => (
  <section className="py-20 px-6 bg-white border-y border-black/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
        {['FIGMA', 'CANVA', 'PHOTOSHOP', 'AFFINITY', 'ILLUSTRATOR'].map((logo) => (
          <div key={logo} className="px-8 py-4 bg-bg rounded-2xl font-display font-black text-2xl tracking-tighter">
            {logo}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [expanded, setExpanded] = useState<number | null>(0);
  const faqs = [
    { q: "What services do you offer?", a: "I offer a full range of design services including UI/UX design, branding, product strategy, graphic design, motion graphics, video editing, photo manipulation, system management, and web development and many more." },
    { q: "How can I contact you?", a: "You can reach out via the contact: Email: riel.engana@student.passerellesnumeriques.org. or call 09850254857" },
    { q: "How much does a project cost?", a: "Project costs vary based on scope and complexity. I provide custom quotes after an initial discovery call." },
    { q: "Which tools do you provide?", a: "I primarily use Figma for design, and for development I use HTML, CSS, PHP, JAVA, REACT, NODEJS, TYPESCRIPT, and modern web technologies like LARAVEL, TAILWIND, and ANYTHING for development, and in regards with databases, I use MongoDB, MySQL and Oracle." }
  ];

  return (
    <section className="py-32 px-6 bg-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20 tracking-tighter">Frequently Asked<br />Questions.</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
              <button 
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left font-bold text-lg"
              >
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-ink/60 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6 relative overflow-hidden bg-white">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-display font-black text-black/[0.03] select-none pointer-events-none uppercase tracking-tighter">
      Contact
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-accent-start blur-3xl opacity-20 rounded-full" />
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-bg shadow-2xl">
            <img 
              src="https://scontent.fceb5-1.fna.fbcdn.net/v/t39.30808-6/583906820_1556896388770285_1978226094479065252_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeGOtLBq4XFKjvSS9v77Tgz2CDBZ1MKVgJ4IMFnUwpWAnvLMwD5X8xy2sPZgfaJJ5coWRF_P47-MMKAzcf3so976&_nc_ohc=K81zsGr9rGUQ7kNvwG-cyG3&_nc_oc=AdlQ15u896VvuPTVGvt0A6bgwPAIReSNKM5AsXTfeGoXa8Rg-SF-c4AH8YsRfjFbXVk&_nc_zt=23&_nc_ht=scontent.fceb5-1.fna&_nc_gid=Lc69t0SpVB1xDZ-HONzb8g&_nc_ss=8&oh=00_Afw01VG-Ca1XEUHPUfTNXgNtYKGY2XXsr3goH5o_GF0mKA&oe=69B745D9" 
              alt="Contact" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div>
                <div className="text-2xl font-display font-bold tracking-tighter">SEND ME AN EMAIL NOW!</div>
<br>
</br>
<form 
  action="https://formsubmit.co/rieljake.engana.24@usjr.edu.ph" 
  method="POST"
  className="space-y-6"
>

  <input type="hidden" name="_subject" value="You have New Message from your client Jake!" />
  <input type="hidden" name="_captcha" value="false" />

  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-ink/40">
      Full Name
    </label>
    <input 
      type="text" 
      name="name"
      required
      placeholder="Name"
      className="w-full bg-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-start"
    />
  </div>

  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-ink/40">
      Email
    </label>
    <input 
      type="email" 
      name="email"
      required
      placeholder="yourname@email.com"
      className="w-full bg-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-start"
    />
  </div>

  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-ink/40">
      Message
    </label>
    <textarea 
      name="message"
      required
      rows="4"
      placeholder="Write your message..."
      className="w-full bg-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-start resize-none"
    />
  </div>

  <button
    type="submit"
    className="w-full gradient-bg text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
  >
    Send Email
  </button>

</form>
          <form>
<div className="flex gap-4 mt-6">


</div>

          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 bg-ink text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-display font-bold tracking-tighter">ME_PROFILE.</div>
      <div className="flex gap-8 text-white/60 text-sm font-medium">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Cookies</a>
      </div>
      <p className="text-white/40 text-xs">© 2026 ME_PROFILE. All rights reserved.</p>
    </div>
  </footer>
);

export default function PortfolioPage() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <ServiceAccordion />
        <AboutStats />
        <Portfolio />
        <Testimonials />
        <LogoStrip />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
