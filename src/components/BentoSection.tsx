import { useState } from 'react';
import { Award, BookOpen, CheckCircle, Cpu, GraduationCap, Trophy, Users, Wrench, Terminal, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function BentoSection() {
  return (
    <section id="education-skills" className="py-20 border-b border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Layout matching Stitch reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMN 1: EDUCATION & COURSEWORK (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <h3 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-semibold">
                  EDUCATION & COURSEWORK
                </h3>
              </div>
              <h2 className="font-display text-3xl text-white tracking-wider uppercase mb-5">
                ACADEMIC CREDENTIALS
              </h2>
            </div>

            {/* Academic Cards from Real Resume */}
            <div className="flex flex-col gap-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#0e1017] border border-zinc-800/90 hover:border-red-900/60 rounded-xl transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5 text-zinc-300 font-semibold text-xs tracking-wide">
                      <GraduationCap className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-red-600/20 text-red-400 border border-red-900/50 rounded font-mono-tech text-[11px] font-bold">
                      {edu.score}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-200 font-medium mb-1 capitalize">
                    {edu.degree}
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-zinc-500 pt-2 border-t border-zinc-800/60 mt-2">
                    <span>{edu.location}</span>
                    <span>{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Coursework Grid from Resume */}
            <div className="mt-2 pt-4 border-t border-zinc-800/60">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-red-500" />
                <h4 className="font-mono-tech text-xs tracking-widest text-zinc-300 uppercase font-semibold">
                  COURSEWORK FOUNDATIONS
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {PORTFOLIO_DATA.courseworkSkills.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-zinc-900/70 border border-zinc-800 text-[11px] font-mono-tech text-zinc-300 rounded flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span className="truncate">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: TECHNICAL STACK & TOOLS (lg:col-span-4) */}
          <div id="skills" className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <h3 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-semibold">
                  TECHNICAL CAPABILITIES
                </h3>
              </div>
              <h2 className="font-display text-3xl text-white tracking-wider uppercase mb-5">
                SKILLS & TOOLING
              </h2>
            </div>

            {/* Languages */}
            <div className="p-4 bg-[#0e1017] border border-zinc-800/90 rounded-xl">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono-tech text-zinc-300 uppercase font-semibold">
                <Cpu className="w-4 h-4 text-red-500" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.technicalSkills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-zinc-900/90 border border-zinc-800 hover:border-red-900/50 text-xs font-mono-tech text-zinc-200 rounded transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Developer Tools */}
            <div className="p-4 bg-[#0e1017] border border-zinc-800/90 rounded-xl">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono-tech text-zinc-300 uppercase font-semibold">
                <Wrench className="w-4 h-4 text-red-500" />
                <span>Developer Tools</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.technicalSkills.developerTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 bg-zinc-900/90 border border-zinc-800 hover:border-red-900/50 text-xs font-mono-tech text-zinc-200 rounded transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies & Frameworks */}
            <div className="p-4 bg-[#0e1017] border border-zinc-800/90 rounded-xl">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono-tech text-zinc-300 uppercase font-semibold">
                <Layers className="w-4 h-4 text-red-500" />
                <span>Technologies & Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.technicalSkills.technologiesFrameworks.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-zinc-900/90 border border-zinc-800 hover:border-red-900/50 text-xs font-mono-tech text-zinc-200 rounded transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3: EXTRACURRICULAR & CERTIFICATIONS (lg:col-span-4) */}
          <div id="leadership" className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <h3 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-semibold">
                  LEADERSHIP & RECOGNITION
                </h3>
              </div>
              <h2 className="font-display text-3xl text-white tracking-wider uppercase mb-5">
                HACKATHON & MERIT
              </h2>
            </div>

            {/* Red Spotlight Card - Smart India Hackathon 2026 from Resume */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-red-950/80 via-red-900/40 to-[#0e1017] border border-red-600/50 shadow-2xl shadow-red-950/40 overflow-hidden group">
              {/* Header */}
              <div className="flex items-center justify-between text-[11px] font-mono-tech text-red-300 pb-2 mb-3 border-b border-red-800/40">
                <div className="flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span className="uppercase font-bold tracking-wider">{PORTFOLIO_DATA.extracurricular.title}</span>
                </div>
                <span>{PORTFOLIO_DATA.extracurricular.duration}</span>
              </div>

              {/* Role Title */}
              <h3 className="font-display text-2xl text-white tracking-wider uppercase mb-1">
                {PORTFOLIO_DATA.extracurricular.role}
              </h3>
              <div className="inline-block px-2.5 py-0.5 bg-red-600 text-white font-mono-tech text-xs font-bold tracking-wider rounded mb-3 shadow-sm">
                College Team Leader
              </div>

              {/* Bullet points from real resume */}
              <ul className="space-y-1.5 mb-4">
                {PORTFOLIO_DATA.extracurricular.bullets.slice(0, 3).map((b, i) => (
                  <li key={i} className="text-xs text-zinc-200 leading-relaxed flex items-start gap-2">
                    <span className="text-red-400 text-sm leading-none mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-[10px] font-mono-tech text-red-200 bg-red-950/80 border border-red-800/50 px-3 py-1.5 rounded">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Participation Certificate Awarded</span>
              </div>
            </div>

            {/* Certifications List from Real Resume */}
            <div className="p-5 bg-[#0e1017] border border-zinc-800/90 rounded-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-800">
                  <span className="font-mono-tech text-xs text-red-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-red-400" />
                    CERTIFICATIONS
                  </span>
                  <span className="text-[10px] font-mono-tech text-zinc-500">VERIFIED</span>
                </div>

                <div className="space-y-2.5">
                  {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700 transition-colors flex items-center justify-between"
                    >
                      <span className="text-xs font-medium text-zinc-200">
                        {cert.title}
                      </span>
                      <span className="text-[10px] font-mono-tech text-red-400 shrink-0">
                        {cert.issuer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-zinc-800/60 text-[10px] font-mono-tech text-zinc-500 flex items-center justify-between">
                <span>Official Resume Certifications</span>
                <span className="text-emerald-400">All Completed</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
