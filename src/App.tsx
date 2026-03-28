/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Code, 
  Palette, 
  Globe, 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Cpu,
  Layout,
  Layers,
  Smartphone,
  Languages
} from "lucide-react";
import { useRef, useState } from "react";
import { translations } from "./translations";

const projectsData = [
  {
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    type: "development"
  },
  {
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80",
    type: "design"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    type: "design"
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    type: "development"
  }
];

const serviceIcons = [
  <Layout className="w-6 h-6" />,
  <Code className="w-6 h-6" />,
  <Palette className="w-6 h-6" />,
  <Smartphone className="w-6 h-6" />
];

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Node.js", level: 85 },
  { name: "Figma / Adobe XD", level: 92 },
  { name: "UI/UX Principles", level: 95 },
];

export default function App() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [activeTab, setActiveTab] = useState("all");
  const heroRef = useRef(null);
  
  const t = translations[lang];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const toggleLang = () => {
    setLang(prev => prev === "en" ? "fr" : "en");
  };

  const filteredProjects = projectsData.filter(p => activeTab === "all" || p.type === activeTab);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-display font-bold tracking-tighter">
          Dev&design<span className="text-blue-500">.</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#work" className="hover:text-blue-400 transition-colors">{t.nav.work}</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">{t.nav.services}</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">{t.nav.about}</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">{t.nav.contact}</a>
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 hover:border-blue-400 transition-all text-gray-400 hover:text-white"
          >
            <Languages className="w-4 h-4" />
            <span className="text-xs">{lang === "en" ? "FR" : "EN"}</span>
          </button>
        </div>
        <a 
          href="#contact" 
          className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition-all duration-300"
        >
          {t.nav.cta}
        </a>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
        <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-blue-400 font-medium tracking-[0.2em] uppercase mb-6"
          >
            {t.hero.tag}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8"
          >
            {t.hero.title1} <br />
            <span className="text-stroke">{t.hero.title2}</span> {t.hero.title3}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            {t.hero.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#work" className="group bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="px-8 py-4 rounded-full border border-white/10 hover:border-blue-400 transition-all">
              {t.hero.ctaDownload}
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border border-white/10 hover:border-blue-400 transition-all">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900 rounded-full blur-[160px] -z-10 opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px] -z-10 opacity-10" />
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t.services.title}</h2>
              <p className="text-gray-400 text-lg">
                {t.services.description}
              </p>
            </div>
            <div className="text-sm font-mono text-gray-600 uppercase tracking-widest">
              {t.services.tag}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                className="bg-zinc-900 p-8 rounded-3xl border border-white/5 shadow-sm transition-all"
              >
                <div className="w-12 h-12 bg-blue-900/30 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  {serviceIcons[index]}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.work.title}</h2>
            <div className="flex gap-4 p-1 bg-zinc-900 rounded-full">
              {Object.entries(t.work.tabs).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === key ? "bg-blue-600 text-white" : "text-gray-500 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => {
              const projectInfo = t.work.projects[projectsData.indexOf(project)];
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6 border border-white/5">
                    <img 
                      src={project.image} 
                      alt={projectInfo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white text-black p-4 rounded-full">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                        {projectInfo.category}
                      </span>
                      <h3 className="text-2xl font-bold">{projectInfo.title}</h3>
                      <p className="text-gray-500 mt-2">{projectInfo.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="section-padding bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-6 block">
              {t.about.tag}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              {t.about.title.split(' ').map((word, i) => (
                <span key={i}>
                  {['Design', 'Code', 'Design,', 'Code.'].includes(word) ? (
                    <span className="italic text-blue-400 font-display">{word} </span>
                  ) : word + ' '}
                </span>
              ))}
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {t.about.description}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold mb-1 text-blue-400">50+</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest">{t.about.stats.projects}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1 text-blue-400">15+</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest">{t.about.stats.clients}</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-blue-400" />
              {t.about.arsenal}
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">{t.contact.title}</h2>
          <p className="text-gray-400 text-xl mb-12">
            {t.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:dev-designe@outlook.fr" 
              className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-blue-500 transition-all text-lg font-medium shadow-xl shadow-blue-900/20"
            >
              <Mail className="w-5 h-5" />
              {t.contact.cta}
            </a>
            <div className="flex gap-4">
              <a href="#" className="p-5 rounded-full border border-white/10 hover:border-blue-400 transition-all text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-5 rounded-full border border-white/10 hover:border-blue-400 transition-all text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500">
            {t.footer.rights}
          </div>
          <div className="flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Dribbble</a>
          </div>
          <div className="text-sm font-mono text-gray-600">
            {t.footer.built}
          </div>
        </div>
      </footer>
    </div>
  );
}

