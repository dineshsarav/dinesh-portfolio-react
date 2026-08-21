import React from 'react';
import { User, Layers, Folder, Briefcase, BookOpen, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      {/* Desktop Header Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 bg-[#070a14]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-full">
          {/* Brand Logo */}
          <a href="#about" className="font-heading font-semibold text-base sm:text-lg tracking-tight text-indigo-400 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-mono">PD</span>
            <span>dinesh<span className="text-white">.dev</span></span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 sm:gap-2">
            <a href="#about" className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-300 hover:bg-white/5 rounded-lg transition-all">About</a>
            <a href="#stack" className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-300 hover:bg-white/5 rounded-lg transition-all">Stack</a>
            <a href="#projects" className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-300 hover:bg-white/5 rounded-lg transition-all">Projects</a>
            <a href="#experience" className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-300 hover:bg-white/5 rounded-lg transition-all">Experience</a>
            <a href="#publications" className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-300 hover:bg-white/5 rounded-lg transition-all">Publications</a>
            <a href="#contact" className="px-3.5 py-1.5 text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">Contact</a>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation Dock */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-50 flex items-center justify-around bg-slate-950/90 border border-white/10 p-2.5 rounded-2xl backdrop-blur-lg shadow-2xl">
        <a href="#about" className="text-[11px] font-medium text-slate-300 hover:text-indigo-400 flex flex-col items-center gap-1"><User className="h-4 w-4" />About</a>
        <a href="#stack" className="text-[11px] font-medium text-slate-300 hover:text-indigo-400 flex flex-col items-center gap-1"><Layers className="h-4 w-4" />Stack</a>
        <a href="#projects" className="text-[11px] font-medium text-slate-300 hover:text-indigo-400 flex flex-col items-center gap-1"><Folder className="h-4 w-4" />Projects</a>
        <a href="#experience" className="text-[11px] font-medium text-slate-300 hover:text-indigo-400 flex flex-col items-center gap-1"><Briefcase className="h-4 w-4" />Experience</a>
        <a href="#publications" className="text-[11px] font-medium text-slate-300 hover:text-indigo-400 flex flex-col items-center gap-1"><BookOpen className="h-4 w-4" />Papers</a>
        <a href="#contact" className="text-[11px] font-medium text-slate-300 hover:text-indigo-400 flex flex-col items-center gap-1"><Mail className="h-4 w-4" />Contact</a>
      </div>
    </>
  );
}
