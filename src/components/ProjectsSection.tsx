import { useState } from 'react';
import { ArrowUpRight, Code, ExternalLink, FileCode, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'cpp' | 'python'>('all');
  const [viewModes, setViewModes] = useState<Record<string, 'code' | 'preview'>>({
    'skill-bridge': 'code',
    'task-manager': 'code',
    'python-course': 'code',
  });

  const toggleViewMode = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setViewModes((prev) => ({
      ...prev,
      [projectId]: prev[projectId] === 'code' ? 'preview' : 'code',
    }));
  };

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 border-b border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-semibold">
                PROVEN WORK & DELIVERABLES
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider uppercase">
              SELECTED PROJECTS
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono-tech tracking-wider text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 group"
            >
              <span>VIEW ALL REPOSITORIES ON GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'ALL PROJECTS' },
            { id: 'fullstack', label: 'AI & FULL-STACK' },
            { id: 'cpp', label: 'C++ & SYSTEMS' },
            { id: 'python', label: 'PYTHON & REPOSITORIES' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono-tech tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-red-600 text-white shadow-sm shadow-red-900/50 font-bold'
                  : 'bg-zinc-900/70 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 border border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3-Column IDE Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isCodeView = viewModes[project.id] === 'code';

            return (
              <div
                key={project.id}
                className="bg-[#0e1017] border border-zinc-800/90 hover:border-red-900/60 rounded-xl overflow-hidden shadow-xl hover:shadow-red-950/20 transition-all duration-300 flex flex-col group"
              >
                {/* macOS Terminal Window Title Bar */}
                <div className="px-4 py-2.5 bg-[#141722] border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="flex items-center gap-1.5 ml-2 text-zinc-400 font-mono-tech text-[11px]">
                      <FileCode className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-zinc-300 font-semibold">{project.filename}</span>
                    </div>
                  </div>

                  {/* Toggle code vs preview */}
                  <button
                    onClick={(e) => toggleViewMode(project.id, e)}
                    className="text-[10px] font-mono-tech text-zinc-400 hover:text-red-400 bg-zinc-900/80 hover:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-800 flex items-center gap-1 transition-colors cursor-pointer"
                    title="Toggle Code / Screen View"
                  >
                    {isCodeView ? (
                      <>
                        <Layers className="w-3 h-3 text-red-400" />
                        <span>PREVIEW</span>
                      </>
                    ) : (
                      <>
                        <Code className="w-3 h-3 text-red-400" />
                        <span>CODE</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Interactive Window Content (Code / Preview) */}
                <div className="relative h-44 bg-[#0a0c11] border-b border-zinc-800/80 overflow-hidden">
                  {isCodeView ? (
                    <div className="p-3.5 font-mono-tech text-[11px] leading-relaxed text-zinc-300 h-full overflow-y-auto scrollbar-thin">
                      <div className="flex items-center justify-between text-[10px] text-zinc-500 pb-1 mb-2 border-b border-zinc-800/60">
                        <span className="text-red-400 font-semibold">$ SYSTEM SOURCE</span>
                        <span className="text-emerald-400 font-bold">{project.statusBadge}</span>
                      </div>
                      <pre className="text-zinc-300 whitespace-pre font-mono-tech text-[11px]">
                        <code>{project.codePreview}</code>
                      </pre>
                    </div>
                  ) : (
                    <div
                      className="relative w-full h-full group/img cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-center filter brightness-90 group-hover/img:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                        <span className="text-xs font-mono-tech text-zinc-200 bg-black/60 px-2 py-1 rounded backdrop-blur-sm border border-zinc-800">
                          Click to expand Case Study
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body Information from real resume */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header with Project Number Badge */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-5 h-5 rounded bg-red-600/20 text-red-500 border border-red-900/60 font-mono-tech text-xs font-bold flex items-center justify-center">
                            {project.number}
                          </span>
                          <h3 className="font-display text-xl text-white tracking-wider group-hover:text-red-400 transition-colors">
                            {project.name}
                          </h3>
                        </div>
                        <p className="text-[11px] font-mono-tech text-red-400 font-semibold tracking-wide">
                          {project.categoryKicker}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono-tech text-zinc-500">{project.date}</span>
                    </div>

                    {/* Description & Bullets */}
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Bullet point preview */}
                    <div className="p-2.5 bg-zinc-950/70 border border-zinc-800/60 rounded mb-4 text-[11px] text-zinc-300">
                      <span className="text-red-400 font-semibold font-mono-tech mr-1">Highlight:</span>
                      <span className="text-zinc-400">{project.bulletPoints[0]}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[10px] font-mono-tech text-zinc-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono-tech">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-zinc-300 hover:text-red-400 font-medium transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-red-400" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
