import { useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, GraduationCap, Award, Briefcase, Code, MapPin, Mail, Phone, Github, Linkedin, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainResume = `
SURAJ THAKUR
New Delhi, India
Phone: ${PORTFOLIO_DATA.personal.phone} | Email: ${PORTFOLIO_DATA.personal.email}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin} | GitHub: ${PORTFOLIO_DATA.personal.github}
LeetCode: ${PORTFOLIO_DATA.personal.leetcode} | HackerRank: ${PORTFOLIO_DATA.personal.hackerrank}

EDUCATION
Ambedkar Institute of Technology (08 2024 – 06 2027)
Diploma in computer science and engineering - CGPA - 9.55
Shakarpur, India

Govt. Boys sr. sec. school (04 2023 – 03 2024)
10th Percentage - 90%
Gokulpuri, India

COURSEWORK / SKILLS
• Data Structures & Algorithms
• Operating Systems
• Computer Networks
• Database Management System (DBMS)
• Artificial Intelligence
• OOPS Concept
• Web Development
• Software Engineering

PROJECTS
SkillBridge | Typescript, Vite, React, Rest API (09 2026)
• Built a full-stack AI-driven LMS prototype for Smart India Hackathon using React.js, Flask REST APIs, MySQL, and Google Gemini API.
• Developed an AI-based skill-gap analysis and recommendation workflow that compares current employee competencies with required organizational skills.
• Implemented role-based access and competency assessment modules for Learners, Trainers, and Administrators, enabling secure workflows and learning-progress tracking.

Task Manager | C++, Git and GitHub (05 2026)
• Developed a console-based task management application in C++ to create, update, delete, and organize tasks efficiently.
• Implemented Object-Oriented Programming (OOP) concepts and data structures to manage task information and application workflows.
• Added task status and priority management, enabling users to track pending and completed tasks.

Python Course | Python, Git and GitHub (08 2025)
• Created a beginner-friendly Python learning repository covering fundamental syntax and core programming concepts through clear explanations and examples.
• Developed a structured practice set to help learners reinforce Python fundamentals through hands-on coding exercises.

TECHNICAL SKILLS
Languages: Python, Java, C, C++, JavaScript, SQL, HTML, CSS
Developer Tools: VS Code, Google Ai Studio, Codex, Figma, Claude Code, JSON Web Token(JWT)
Technologies/Frameworks: Linux, GitHub, Gitlab, Git, React js, Rest API, Google Software Development Kit(SDK)

EXTRACURRICULAR
Smart India Hackathon 2026 (08 2026 – 09 2026)
Team Leader (College)
• Led a 6-member team in developing SkillBridge, an AI-powered capacity-building and learning management platform.
• Coordinated task allocation, development activities, integration, and project progress across frontend, backend, database/AI, and deployment responsibilities.
• Facilitated technical discussions and decision-making, keeping the team aligned with project requirements and hackathon timelines.
• Participation Certificate.

CERTIFICATIONS
• HTML & CSS - AlgoZenith
• Introduction to UI/UX
• OOPS - AlgoZenith
• C++ for Competitive Coding - AlgoZenith
• Introduction to Generative AI
    `.trim();

    navigator.clipboard.writeText(plainResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[94vh] bg-[#0c0e14] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 bg-[#141722] border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
            <span className="font-mono-tech text-xs font-semibold text-zinc-200">
              OFFICIAL_RÉSUMÉ // SURAJ_THAKUR.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1 text-xs font-mono-tech text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 rounded transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1 text-xs font-mono-tech text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 rounded transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-red-600 rounded transition-colors ml-2"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper-Styled Clean Authentic Resume Document matching PDF */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans bg-[#0c0e14] text-zinc-200 print:bg-white print:text-black">
          {/* Header Section */}
          <div className="text-center pb-5 mb-5 border-b border-zinc-800">
            <h1 className="font-display text-4xl sm:text-5xl tracking-wider text-white uppercase mb-1">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-xs text-zinc-400 font-mono-tech mb-2.5">
              {PORTFOLIO_DATA.personal.location}
            </p>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs font-mono-tech text-zinc-300">
              <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="hover:text-red-400 flex items-center gap-1">
                <Phone className="w-3 h-3 text-red-500" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>
              <span>·</span>
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-red-400 flex items-center gap-1">
                <Mail className="w-3 h-3 text-red-500" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <span>·</span>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-400 flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-red-500" />
                <span>Suraj</span>
              </a>
              <span>·</span>
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:text-red-400 flex items-center gap-1">
                <Github className="w-3 h-3 text-red-500" />
                <span>SurajThakur42</span>
              </a>
              <span>·</span>
              <span className="text-zinc-400">LeetCode: surajthakur8312</span>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="mb-6">
            <h2 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-bold border-b border-zinc-800 pb-1 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </h2>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-zinc-300 italic">
                      {edu.degree} - <span className="font-semibold text-red-400 not-italic">{edu.score}</span>
                    </p>
                  </div>
                  <div className="text-left sm:text-right text-xs font-mono-tech text-zinc-400">
                    <div>{edu.duration}</div>
                    <div className="text-[11px] text-zinc-500">{edu.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COURSEWORK / SKILLS */}
          <div className="mb-6">
            <h2 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-bold border-b border-zinc-800 pb-1 mb-3">
              COURSEWORK / SKILLS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {PORTFOLIO_DATA.courseworkSkills.map((c, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div className="mb-6">
            <h2 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-bold border-b border-zinc-800 pb-1 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>PROJECTS</span>
            </h2>

            <div className="space-y-5">
              {PORTFOLIO_DATA.projects.map((project) => (
                <div key={project.id} className="p-3.5 bg-zinc-950/60 border border-zinc-800/80 rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {project.name}
                      </h3>
                      <span className="text-[11px] font-mono-tech text-zinc-400">
                        | {project.technologies.slice(0, 4).join(', ')}
                      </span>
                    </div>
                    <span className="text-xs font-mono-tech text-red-400 font-semibold shrink-0">
                      {project.date}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mt-2">
                    {project.bulletPoints.map((bullet, idx) => (
                      <li key={idx} className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2">
                        <span className="text-red-500 text-sm leading-none mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2.5 pt-2 border-t border-zinc-800/60 flex items-center gap-4 text-xs font-mono-tech">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-red-400 flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-400 hover:text-red-300 flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Site / Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="mb-6">
            <h2 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-bold border-b border-zinc-800 pb-1 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>TECHNICAL SKILLS</span>
            </h2>

            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                <span className="font-semibold text-white w-44 shrink-0 font-mono-tech">
                  Languages:
                </span>
                <span className="text-zinc-300">
                  {PORTFOLIO_DATA.technicalSkills.languages.join(', ')}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                <span className="font-semibold text-white w-44 shrink-0 font-mono-tech">
                  Developer Tools:
                </span>
                <span className="text-zinc-300">
                  {PORTFOLIO_DATA.technicalSkills.developerTools.join(', ')}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                <span className="font-semibold text-white w-44 shrink-0 font-mono-tech">
                  Technologies/Frameworks:
                </span>
                <span className="text-zinc-300">
                  {PORTFOLIO_DATA.technicalSkills.technologiesFrameworks.join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* EXTRACURRICULAR */}
          <div className="mb-6">
            <h2 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-bold border-b border-zinc-800 pb-1 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>EXTRACURRICULAR</span>
            </h2>

            <div className="p-3.5 bg-zinc-950/60 border border-zinc-800/80 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {PORTFOLIO_DATA.extracurricular.title}
                  </h3>
                  <span className="text-xs font-mono-tech text-red-400 font-semibold">
                    {PORTFOLIO_DATA.extracurricular.role} ({PORTFOLIO_DATA.extracurricular.organization})
                  </span>
                </div>
                <span className="text-xs font-mono-tech text-zinc-400">
                  {PORTFOLIO_DATA.extracurricular.duration}
                </span>
              </div>

              <ul className="space-y-1.5 mt-2">
                {PORTFOLIO_DATA.extracurricular.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2">
                    <span className="text-red-500 text-sm leading-none mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h2 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-bold border-b border-zinc-800 pb-1 mb-3">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.certifications.map((c, idx) => (
                <div key={idx} className="flex items-center gap-2 text-zinc-300 p-2 bg-zinc-950/40 border border-zinc-800/60 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span className="font-medium text-white">{c.title}</span>
                  <span className="text-zinc-500 font-mono-tech text-[11px]">({c.issuer})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#141722] border-t border-zinc-800 flex items-center justify-between shrink-0 text-xs font-mono-tech text-zinc-400">
          <span>SOURCE: VERIFIED RÉSUMÉ DOCUMENT</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded font-bold transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
