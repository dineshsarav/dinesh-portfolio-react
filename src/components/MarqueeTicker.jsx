import React from 'react';

const SKILLS = [
  'FastAPI & Microservices',
  'RAG Systems & Vector DBs',
  'React.js & Tailwind CSS',
  'Python & PyTorch AI',
  'Computer Vision (YOLO/OpenCV)',
  'PostgreSQL & MongoDB',
  'Docker & Cloud Deployments',
  'Deep Learning Research'
];

export default function MarqueeTicker() {
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className="relative overflow-hidden py-4 border-y border-white/10 bg-slate-950/60 backdrop-blur-md rounded-2xl">
      <div className="flex w-max animate-marquee items-center gap-8">
        {items.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
