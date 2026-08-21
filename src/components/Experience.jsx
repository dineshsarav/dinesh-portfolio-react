import React from 'react';
import TiltCard from './TiltCard';

export default function Experience() {
  return (
    <section id="experience" className="py-12 scroll-mt-24">
      <div className="mb-10">
        <h2 className="reactbits-masked-heading font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Professional Experience</h2>
        <p className="mt-2 text-slate-400 font-semibold text-base sm:text-lg">Industry Software Development Trainee Role</p>
      </div>

      <TiltCard className="rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-xs font-mono text-indigo-300 border border-indigo-500/30 font-semibold">Software Developer Trainee</span>
            <h3 className="mt-2 font-heading text-xl sm:text-2xl font-bold text-white leading-snug">Alstonair Technologies Pvt. Ltd., Bengaluru</h3>
            <p className="text-xs sm:text-sm font-mono text-indigo-300 mt-1">Project: FuSteps — AI-Powered College-to-Corporate SaaS Platform</p>
          </div>

          <div className="sm:text-right font-mono text-xs text-slate-400 shrink-0">
            <span className="text-white font-semibold block sm:inline">June 2026 — Present</span>
            <p className="text-slate-400">Bengaluru, Karnataka</p>
          </div>
        </div>

        {/* CONDENSED EXACTLY INTO 2 EXECUTIVE PARAGRAPHS */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <p className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
            At Alstonair Technologies, I lead technical requirement gathering, microservice architecture design, and workflow mapping for enterprise SaaS products to translate complex institutional requirements into robust, high-performance web applications. As a Software Developer Trainee, I architected and scaled end-to-end features for the AI-native FuSteps platform, successfully unifying student, recruiter, and placement workflows into a high-concurrency SaaS portal.
          </p>

          <p className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
            Within the EduYata ecosystem, I engineered AI-driven course recommendation pipelines that dynamically match educational content to user skill gaps, while integrating TopSCA to power assessment-driven learning paths using real-time score analytics. Additionally, I spearheaded R&D in semantic resume matching and LLM recommendation engines, enforcing Agile/Scrum standards, structured Jira epics, and clean Git code reviews.
          </p>
        </div>
      </TiltCard>
    </section>
  );
}
