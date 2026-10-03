import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-10 bg-[#07080a] border-t border-zinc-900 text-zinc-400 text-xs font-mono-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand & Copyright */}
          <div className="flex items-center gap-3">
            <span className="font-display text-lg text-white tracking-wider">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-500">
              © {new Date().getFullYear()} All Rights Reserved
            </span>
          </div>

          {/* Center: Clean Nav Links */}
          <div className="flex items-center gap-5 text-zinc-400">
            <button
              onClick={() => scrollTo('#projects')}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('#education-skills')}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => scrollTo('#skills')}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              Skills & Tools
            </button>
            <button
              onClick={() => scrollTo('#leadership')}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              Hackathon & Leadership
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right: Geographic note & back to top */}
          <div className="flex items-center gap-4">
            <span className="text-zinc-500">
              New Delhi, India
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
