import { useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onOpenResume, onOpenContact }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Permanently loads the user's photo from localStorage if added, or the verified portrait
  const [portraitSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('suraj_custom_portrait');
      if (saved) return saved;
    }
    return PORTFOLIO_DATA.personal.portraitUrl;
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-zinc-800/60">
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-10 left-1/4 w-[400px] h-[250px] bg-red-950/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Stitch-style top title: DEVELOPER */}
        <div className="text-center mb-6 sm:mb-8 select-none">
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[140px] leading-none text-red-600 font-extrabold tracking-[0.08em] sm:tracking-[0.14em] red-glow transition-all duration-700">
            DEVELOPER
          </h1>
        </div>

        {/* 3-Column Hero Grid matching Stitch layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Personal Intro & CTAs (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
            {/* Script kicker */}
            <div className="flex items-center gap-2 mb-1">
              <span className="font-script text-2xl sm:text-3xl text-red-500 font-semibold tracking-wide">
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wider uppercase leading-[0.95] mb-3">
              {PORTFOLIO_DATA.personal.name}
            </h2>

            {/* Red role kicker */}
            <div className="inline-flex items-center gap-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <p className="font-mono-tech text-[11px] sm:text-xs tracking-widest text-red-500 uppercase font-bold">
                {PORTFOLIO_DATA.personal.role}
              </p>
            </div>

            {/* Bio paragraph from real resume */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-4 max-w-md">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Location & Academic Note */}
            <div className="flex flex-col gap-1.5 mb-6 text-xs font-mono-tech text-zinc-400">
              <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded w-fit">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-mono-tech text-xs font-bold tracking-wider rounded transition-all flex items-center gap-2 shadow-lg shadow-red-950/50 hover:shadow-red-700/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-mono-tech text-xs tracking-wider border border-zinc-800 hover:border-red-900/50 rounded transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-red-400" />
                <span>VIEW RÉSUMÉ</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-3.5 py-2.5 bg-transparent hover:bg-zinc-900 text-zinc-300 hover:text-white font-mono-tech text-xs tracking-wider border border-zinc-800 rounded transition-all cursor-pointer"
              >
                CONTACT
              </button>
            </div>

            {/* Contact Details Bar from real resume */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-zinc-400 pt-3 border-t border-zinc-800/60">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>SurajThakur42</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-red-400 transition-colors truncate text-left cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[190px]">
                      {PORTFOLIO_DATA.personal.email}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Center Column: Portrait Image (Locked & Non-Editable, col-span-5) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 select-none">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[3/4] rounded-lg overflow-hidden border border-red-950/50 bg-zinc-950 shadow-2xl red-subtle-glow group">
              {/* Subtle red vertical lighting aura inside card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-transparent to-red-950/20 z-10 pointer-events-none" />
              <div className="absolute -inset-1 bg-gradient-to-b from-red-600/10 via-transparent to-red-950/30 blur-md pointer-events-none" />

              {/* Portrait Image */}
              <img
                src={portraitSrc}
                alt="Suraj Thakur"
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Seamless gradient mask at the bottom so it melts into dark background */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/80 to-transparent z-20 pointer-events-none" />

              {/* Permanent cinematic corner accent marks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-red-500/80 z-20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-red-500/80 z-20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-red-500/80 z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-red-500/80 z-20 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Key Academic & Accomplishment Metrics from Real Resume (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4 justify-center order-3">
            {PORTFOLIO_DATA.heroStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 bg-zinc-950/70 border border-zinc-800/80 hover:border-red-900/60 rounded-lg transition-all hover:bg-zinc-900/50 group"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="font-display text-2xl sm:text-3xl text-red-500 tracking-wider font-bold group-hover:text-red-400 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono-tech text-zinc-500 uppercase tracking-wider">
                    {stat.badge}
                  </span>
                </div>
                <div className="text-xs font-semibold text-zinc-200 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  {stat.institution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

