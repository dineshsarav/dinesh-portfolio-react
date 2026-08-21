import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-xs font-mono text-slate-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© 2026 Perumalla Dinesh Saravan • AI & Python Specialist</p>
        
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/_perumalla_dinesh/" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-btn text-slate-400 hover:text-purple-400 transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg" alt="Instagram" className="h-4 w-4 filter invert opacity-80 hover:opacity-100" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-btn text-slate-400 hover:text-indigo-400 transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg" alt="GitHub" className="h-4 w-4 filter invert opacity-80 hover:opacity-100" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-btn text-slate-400 hover:text-sky-400 transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg" alt="LinkedIn" className="h-4 w-4 filter invert opacity-80 hover:opacity-100" />
          </a>
        </div>
      </div>
    </footer>
  );
}
