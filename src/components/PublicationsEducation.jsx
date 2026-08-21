import React from 'react';
import { ExternalLink, GraduationCap } from 'lucide-react';
import TiltCard from './TiltCard';

export default function PublicationsEducation() {
  return (
    <section id="publications" className="py-12 scroll-mt-24">
      <div className="mb-10">
        <h2 className="reactbits-masked-heading font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Research Publications & Education</h2>
        <p className="mt-2 text-slate-400 font-semibold text-base sm:text-lg">IEEE Papers, SSRN Elsevier Publications & Academic Background</p>
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        
        {/* Authentic Publications List */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-4">
            
            {/* Publication 1: Malaria ICCCNT IEEE */}
            <TiltCard className="rounded-xl p-5 block group hover:border-indigo-500/60 transition-all">
              <a href="https://doi.org/10.1109/ICCCNT61001.2024.10724659" target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 font-semibold group-hover:bg-indigo-500/20">IEEE Xplore • ICCCNT 2024</span>
                  <span className="flex items-center gap-1 text-indigo-400 group-hover:underline group-hover:translate-x-1 transition-transform">Open Paper <ExternalLink className="h-3.5 w-3.5" /></span>
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-indigo-300 leading-snug transition-colors">Malaria Cell Image Classification using Deep Learning</h4>
                <p className="text-xs text-slate-400 font-mono mt-1.5">P. D. Saravan, S. S. M, S. V. Mahesh and T. Singh</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT), Kamand, India, 2024, pp. 1-6, doi: 10.1109/ICCCNT61001.2024.10724659.</p>
                
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300 group-hover:border-indigo-500/30">Deep Learning</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300 group-hover:border-indigo-500/30">Medical Imaging</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300 group-hover:border-indigo-500/30">Malaria Cell</span>
                </div>
              </a>
            </TiltCard>

            {/* Publication 2: DenseNet201 UPCON IEEE */}
            <TiltCard className="rounded-xl p-5 block group hover:border-indigo-500/60 transition-all">
              <a href="https://doi.org/10.1109/UPCON62832.2024.10983305" target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 font-semibold group-hover:bg-indigo-500/20">IEEE Xplore • UPCON 2024</span>
                  <span className="flex items-center gap-1 text-indigo-400 group-hover:underline group-hover:translate-x-1 transition-transform">Open Paper <ExternalLink className="h-3.5 w-3.5" /></span>
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-indigo-300 leading-snug transition-colors">Enhanced Skin Lesion Classification Using Fine-Tuned DenseNet201 with Self-Attention Mechanisms</h4>
                <p className="text-xs text-slate-400 font-mono mt-1.5">P. D. Saravan, M. S. Subhash, S. V. Mahesh and R. P. Singh</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">2024 IEEE 11th Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON), Lucknow, India, 2024, pp. 1-6, doi: 10.1109/UPCON62832.2024.10983305.</p>
                
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300 group-hover:border-indigo-500/30">DenseNet201</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300 group-hover:border-indigo-500/30">Self-Attention</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300 group-hover:border-indigo-500/30">Skin Lesion</span>
                </div>
              </a>
            </TiltCard>

            {/* Publication 3: SSRN Elsevier Paper */}
            <TiltCard className="rounded-xl p-5 block group hover:border-indigo-500/60 transition-all">
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5086763" target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 font-semibold group-hover:bg-indigo-500/20">SSRN Elsevier • Abstract 5086763</span>
                  <span className="flex items-center gap-1 text-indigo-400 group-hover:underline group-hover:translate-x-1 transition-transform">Open SSRN Paper <ExternalLink className="h-3.5 w-3.5" /></span>
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-indigo-300 leading-snug transition-colors">Research Paper Publication — SSRN Elsevier</h4>
                <p className="text-xs text-slate-400 font-mono mt-1.5">P. D. Saravan et al.</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">Indexed on SSRN Elsevier Digital Library (Abstract ID 5086763). Available for open academic research and citation download.</p>
                
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300 group-hover:border-indigo-500/30">SSRN Elsevier</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300 group-hover:border-indigo-500/30">Machine Learning</span>
                </div>
              </a>
            </TiltCard>

          </div>
        </div>

        {/* Education List (WITH SPECIALTY HOVER NEON CGPA PULSE) */}
        <div className="md:col-span-5 space-y-6">
          <div className="border-b border-white/10 pb-3">
            <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-indigo-400" />
              <span>Education</span>
            </h3>
          </div>

          <div className="space-y-6 border-l-2 border-white/10 pl-4">
            {/* College B.E. with CGPA */}
            <TiltCard className="rounded-xl p-4 relative pl-3 group hover:border-indigo-500/50">
              <span className="absolute -left-[27px] top-4 h-3.5 w-3.5 rounded-full bg-indigo-400 border-2 border-slate-950 group-hover:scale-125 transition-transform"></span>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-indigo-400 font-semibold">2021 — 2025</span>
                <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-bold group-hover:bg-indigo-500/30 group-hover:shadow-[0_0_12px_rgba(129,140,248,0.5)] transition-all">CGPA: 7.56</span>
              </div>
              <h4 className="font-bold text-white text-sm mt-1.5 group-hover:text-indigo-300 transition-colors">B.E. Computer Science & Engineering (AI)</h4>
              <p className="text-xs text-slate-300 mt-0.5">Amrita School of Computing, Bengaluru</p>
            </TiltCard>

            {/* Intermediate with Score */}
            <TiltCard className="rounded-xl p-4 relative pl-3 group hover:border-cyan-500/50">
              <span className="absolute -left-[27px] top-4 h-3.5 w-3.5 rounded-full bg-cyan-400 border-2 border-slate-950 group-hover:scale-125 transition-transform"></span>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-semibold">2019 — 2021</span>
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold group-hover:bg-cyan-500/30 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-all">Score: 95%</span>
              </div>
              <h4 className="font-bold text-white text-sm mt-1.5 group-hover:text-cyan-300 transition-colors">Board of Intermediate Education</h4>
              <p className="text-xs text-slate-300 mt-0.5">Bhashyam High School, Guntur</p>
            </TiltCard>

            {/* Secondary 10th with CGPA */}
            <TiltCard className="rounded-xl p-4 relative pl-3 group hover:border-purple-500/50">
              <span className="absolute -left-[27px] top-4 h-3.5 w-3.5 rounded-full bg-purple-400 border-2 border-slate-950 group-hover:scale-125 transition-transform"></span>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-purple-400 font-semibold">2018 — 2019</span>
                <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 font-bold group-hover:bg-purple-500/30 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all">CGPA: 9.8</span>
              </div>
              <h4 className="font-bold text-white text-sm mt-1.5 group-hover:text-purple-300 transition-colors">Board of Secondary Education</h4>
              <p className="text-xs text-slate-300 mt-0.5">Bhashyam High School, Guntur</p>
            </TiltCard>
          </div>
        </div>

      </div>
    </section>
  );
}
