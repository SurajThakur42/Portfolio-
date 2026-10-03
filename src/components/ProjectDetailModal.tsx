import { X, ExternalLink, Github, CheckCircle2, Terminal } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0e1017] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="px-6 py-4 bg-[#141722] border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
            <span className="font-mono-tech text-xs font-semibold text-zinc-300">
              PROJECT_VIEWER // {project.filename}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-red-600/80 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {/* Top Banner / Image */}
          <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden mb-6 border border-zinc-800 bg-black">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-center filter brightness-95"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="px-2 py-0.5 bg-red-600 text-white font-mono-tech text-[10px] font-bold rounded mb-1 inline-block">
                  {project.statusBadge}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider uppercase">
                  {project.name}
                </h2>
                <span className="text-xs font-mono-tech text-zinc-400 block mt-0.5">{project.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-zinc-900/90 hover:bg-zinc-800 text-xs font-mono-tech text-zinc-200 border border-zinc-700 rounded flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-xs font-mono-tech font-bold text-white rounded flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Overview & Problem Solved */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-bold mb-2">
                PROJECT OVERVIEW
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-bold mb-2">
                PROBLEM & APPLICATION WORKFLOW
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Real Resume Bullets */}
          <div className="mb-6 p-4 bg-zinc-950/70 border border-zinc-800 rounded-xl">
            <h3 className="font-mono-tech text-xs tracking-widest text-zinc-300 uppercase font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              <span>OFFICIAL RÉSUMÉ DELIVERABLES</span>
            </h3>

            <div className="space-y-2.5">
              {project.bulletPoints.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Architecture Preview */}
          <div className="mb-6">
            <h3 className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-bold mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE CODE</span>
            </h3>
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg overflow-x-auto">
              <pre className="text-xs font-mono-tech text-zinc-300">
                <code>{project.codePreview}</code>
              </pre>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="font-mono-tech text-xs tracking-widest text-zinc-400 uppercase font-bold mb-2">
              TECHNOLOGIES & STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono-tech text-zinc-200 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#141722] border-t border-zinc-800 flex items-center justify-between shrink-0 text-xs font-mono-tech text-zinc-500">
          <span>PORTFOLIO DELIVERABLE ARCHIVE</span>
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
