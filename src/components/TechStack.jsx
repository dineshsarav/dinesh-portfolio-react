import React from 'react';
import TiltCard from './TiltCard';

export default function TechStack() {
  return (
    <section id="stack" className="py-12 scroll-mt-24">
      <div className="mb-10">
        <h2 className="reactbits-masked-heading font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Tech Stack</h2>
        <p className="mt-2 text-slate-400 font-semibold text-base sm:text-lg">Technologies Covered & Engineering Toolkit</p>
      </div>

      <div className="space-y-8">
        
        {/* Core Languages */}
        <div>
          <p className="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-indigo-400 mb-4">Core Languages</p>
          <div className="flex flex-wrap gap-4">
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/python.svg" alt="Python Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">Python</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/javascript.svg" alt="JavaScript Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">JavaScript</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/openjdk.svg" alt="Java Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">Java</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/html5.svg" alt="HTML5 Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">HTML5</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/css3.svg" alt="CSS3 Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">CSS3</span>
            </TiltCard>
          </div>
        </div>

        {/* Frameworks & Backend */}
        <div>
          <p className="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-indigo-400 mb-4">Frameworks & Web Backend</p>
          <div className="flex flex-wrap gap-4">
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/fastapi.svg" alt="FastAPI Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">FastAPI</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/django.svg" alt="Django Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">Django</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/react.svg" alt="React Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">React.js</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/postman.svg" alt="REST API Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">REST APIs</span>
            </TiltCard>
          </div>
        </div>

        {/* AI & Databases */}
        <div>
          <p className="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-indigo-400 mb-4">AI, Machine Learning & Databases</p>
          <div className="flex flex-wrap gap-4">
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-28 h-24 text-center cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/openai.svg" alt="OpenAI RAG & Prompt Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">RAG & Prompt</span>
            </TiltCard>

            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-28 h-24 text-center cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/pytorch.svg" alt="PyTorch Transformers Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">Transformers</span>
            </TiltCard>

            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/pandas.svg" alt="Pandas Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">Pandas</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/numpy.svg" alt="NumPy Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">NumPy</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mongodb.svg" alt="MongoDB Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">MongoDB</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mysql.svg" alt="MySQL Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">MySQL</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/git.svg" alt="Git Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">Git</span>
            </TiltCard>
            <TiltCard className="tech-icon-wrapper flex flex-col items-center justify-center p-4 rounded-xl w-24 h-24 cursor-pointer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/jira.svg" alt="Jira Logo" className="h-8 w-8 mb-2 filter invert" />
              <span className="text-xs font-medium text-slate-200">Jira</span>
            </TiltCard>
          </div>
        </div>

      </div>
    </section>
  );
}
