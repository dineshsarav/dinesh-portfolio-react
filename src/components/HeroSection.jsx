import React, { useEffect } from 'react';
import { MessageSquareQuote, MapPin, PhoneCall } from 'lucide-react';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';
import TiltedCard from './TiltedCard';

export default function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const portrait = document.getElementById('hero-portrait-img');
      if (!portrait) return;
      const scrollY = window.scrollY;
      const zoomVal = 1 + Math.min(scrollY / 1000, 0.35);
      portrait.style.setProperty('--scroll-bg-zoom', zoomVal.toFixed(3));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openGmail = (e) => {
    e.preventDefault();
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=dineshsaravan64@gmail.com&su=Portfolio%20Inquiry%20-%20Perumalla%20Dinesh%20Saravan";
    const mailtoUrl = "mailto:dineshsaravan64@gmail.com?subject=Portfolio%20Inquiry";
    const newWin = window.open(gmailUrl, '_blank');
    if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="about" className="min-h-[80vh] flex items-center py-6 scroll-mt-24">
      <div className="grid items-center gap-10 md:grid-cols-12 w-full">
        
        {/* Left Hero Content (7 Cols) */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-medium text-indigo-300 hover:border-indigo-400 hover:bg-indigo-500/20 transition-all cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
            </span>
            <span>Available for AI & Full Stack Roles</span>
          </div>

          {/* MASKED HEADING FOR NAME */}
          <div className="space-y-3">
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Perumalla <br/>
              <span className="reactbits-masked-heading reactbits-masked-heading-bg">Dinesh Saravan</span>
            </h1>

            {/* OFFICIAL REACTBITS DECRYPTEDTEXT COMPONENT */}
            <div className="pt-2 flex items-center gap-2.5 font-mono text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-indigo-400 font-mono font-bold">&gt;</span>
              <h2 className="font-heading text-white">
                <DecryptedText phrases={[
                  "AI & Python Specialist",
                  "RAG Systems & LLM Specialist",
                  "SaaS Platform Engineer @ Alstonair",
                  "Computer Vision & Deep Learning Researcher"
                ]} />
              </h2>
            </div>
          </div>

          {/* Hero Bio Paragraph */}
          <div className="space-y-3 text-base text-slate-300 leading-relaxed max-w-xl">
            <p className="text-sm text-slate-300 leading-relaxed">
              Proficient in bridging scalable backend microservice architectures (<strong className="text-white">FastAPI, Django, REST APIs</strong>) and interactive frontends (<strong className="text-white">React.js</strong>) with advanced AI capabilities including <strong className="text-indigo-300">semantic resume matching</strong>, <strong className="text-indigo-300">RAG recommendation pipelines</strong>, and deep learning computer vision models.
            </p>
          </div>

          {/* Hero Action Buttons with Shimmer Light Sweeps & Magnetic Hover */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Contact Me Button */}
            <a href="#contact" className="magnetic-btn shimmer-btn inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95">
              <MessageSquareQuote className="h-4 w-4 text-white" />
              <span>Contact Me</span>
            </a>

            {/* Email Me Button (Gmail Web Compose) */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dineshsaravan64@gmail.com" onClick={openGmail} target="_blank" rel="noopener noreferrer" className="magnetic-btn shimmer-btn inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white font-medium text-sm hover:bg-white/10 hover:border-indigo-400/60 transition-all hover:scale-105">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/gmail.svg" alt="Gmail Official Logo" className="h-4 w-4 filter invert" />
              <span>Email Me</span>
            </a>

            {/* Call Mobile Number Button */}
            <a href="tel:+917207231279" className="magnetic-btn shimmer-btn inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-medium text-sm hover:bg-indigo-600 hover:text-white transition-all hover:scale-105">
              <PhoneCall className="h-4 w-4 text-cyan-400" />
              <span>Call +91 7207231279</span>
            </a>
          </div>

          {/* Quick Stats Bar with ReactBits Spotlight & 3D Tilt */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
            <TiltCard className="rounded-xl p-3 text-center hover:border-indigo-500/50">
              <span className="font-heading text-2xl font-bold text-indigo-400 group-hover:scale-110 transition-transform">3</span>
              <p className="text-[11px] font-mono text-slate-400">Research Papers</p>
            </TiltCard>
            <TiltCard className="rounded-xl p-3 text-center hover:border-indigo-500/50">
              <span className="font-heading text-2xl font-bold text-indigo-400 group-hover:scale-110 transition-transform">6+</span>
              <p className="text-[11px] font-mono text-slate-400">AI/ML Systems</p>
            </TiltCard>
            <TiltCard className="rounded-xl p-3 text-center hover:border-indigo-500/50">
              <span className="font-heading text-2xl font-bold text-indigo-400 group-hover:scale-110 transition-transform">10+</span>
              <p className="text-[11px] font-mono text-slate-400">Tech Covered</p>
            </TiltCard>
          </div>
        </div>

        {/* Right Hero Photo (WITH SPECIALTY HOVER GLOW & BACKGROUND ZOOM) */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 opacity-30 blur-2xl animate-pulse"></div>
            
            <TiltedCard
              rotateAmplitude={14}
              scaleOnHover={1.06}
              showTooltip={true}
              captionText="Perumalla Dinesh Saravan — AI & Full Stack Developer"
              className="relative rounded-2xl p-3 overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(129,140,248,0.5)]"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                <img id="hero-portrait-img" src="./dinesh-portrait.jpg" alt="Perumalla Dinesh Saravan Portrait" className="hero-bg-zoom-media h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>

                {/* Location Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 group-hover:border-indigo-500/40 transition-all">
                  <p className="font-heading text-sm font-bold text-white">Perumalla Dinesh Saravan</p>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                    <span className="flex items-center gap-1 text-indigo-400"><MapPin className="h-3 w-3 text-rose-400" /> Bengaluru, KA</span>
                    <span className="text-slate-400">AI Full Stack</span>
                  </div>
                </div>
              </div>
            </TiltedCard>
          </div>
        </div>

      </div>
    </section>
  );
}
