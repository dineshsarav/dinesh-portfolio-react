import React from 'react';
import CyberGridWaves from './components/CyberGridWaves';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeTicker from './components/MarqueeTicker';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import PublicationsEducation from './components/PublicationsEducation';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Cyber Grid Waves Canvas Background */}
      <CyberGridWaves />
      
      {/* Multi-layered Ambient Light Mesh */}
      <div className="ambient-aurora-top"></div>
      <div className="ambient-aurora-bottom"></div>
      <div className="ambient-grid-pattern"></div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-20 space-y-20 sm:space-y-24">
        <HeroSection />
        <MarqueeTicker />
        <TechStack />
        <Projects />
        <Experience />
        <PublicationsEducation />
        <GetInTouch />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
