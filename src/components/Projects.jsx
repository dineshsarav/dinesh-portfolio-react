import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

const PROJECTS = [
  {
    title: 'AI Resume Screener & Candidate Ranker',
    description: 'Semantic vector matching and RAG extraction engine built with FastAPI, LangChain, and ChromaDB. Automates resume parsing and candidate relevancy scoring.',
    tags: ['FastAPI', 'RAG', 'ChromaDB', 'Python', 'React.js'],
    github: 'https://github.com',
    demo: '#'
  },
  {
    title: 'Enterprise ERP Microservice Suite',
    description: 'Scalable multi-tenant SaaS ERP engine built @ Alstonair. Features automated invoice generation, inventory tracking, role RBAC, and real-time dashboard analytics.',
    tags: ['Django', 'PostgreSQL', 'Docker', 'Redis', 'React.js'],
    github: 'https://github.com',
    demo: '#'
  },
  {
    title: 'Autonomous Object Detection Pipeline',
    description: 'Deep learning computer vision system trained on custom YOLOv8 model for real-time industrial anomaly detection and spatial video tracking.',
    tags: ['PyTorch', 'YOLOv8', 'OpenCV', 'Python', 'FastAPI'],
    github: 'https://github.com',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-8 scroll-mt-24">
      <div className="space-y-8">

        {/* Header */}
        <div className="space-y-2">
          <h2 className="reactbits-masked-heading font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Real-world AI recommendation engines, microservice SaaS architectures, and vision pipelines.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((proj, idx) => (
            <TiltCard key={idx} className="rounded-2xl p-6 flex flex-col justify-between space-y-6">

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div className="flex items-center gap-2">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-white leading-snug">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
