import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EDUCATION & COURSEWORK', href: '#education-skills' },
    { label: 'SKILLS & TOOLS', href: '#skills' },
    { label: 'HACKATHON & LEADERSHIP', href: '#leadership' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0d]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3.5'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-display text-white text-lg tracking-wider shadow-sm shadow-red-900/50 group-hover:scale-105 transition-transform">
              ST
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-wider text-zinc-100 uppercase group-hover:text-red-400 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-[12px] font-mono-tech tracking-wider text-zinc-400 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0 after:transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions & Status */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Live Status indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono-tech text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">OPEN FOR ROLES</span>
            </div>

            {/* Real Resume Button */}
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-mono-tech font-semibold text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-red-900/60 rounded transition-all cursor-pointer"
            >
              RÉSUMÉ
            </button>

            {/* Red Action CTA */}
            <button
              onClick={onOpenContact}
              className="px-4 py-1.5 text-xs font-bold font-mono-tech text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded transition-all shadow-md shadow-red-900/30 hover:shadow-red-700/50 hover:-translate-y-0.5 cursor-pointer"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-mono-tech font-semibold text-zinc-200 bg-zinc-900 border border-zinc-700 rounded"
            >
              RÉSUMÉ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900/80 border border-zinc-800 rounded focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0e1017] border border-zinc-800 rounded-lg shadow-2xl animate-in fade-in duration-200">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-800/80 text-[11px] font-mono-tech text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Software Engineering Roles & Internships</span>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 px-3 text-xs font-mono-tech text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-zinc-800/80 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-2 text-center text-xs font-mono-tech font-semibold text-zinc-200 bg-zinc-900 border border-zinc-700 rounded hover:bg-zinc-800"
                >
                  View Résumé
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="flex-1 py-2 text-center text-xs font-mono-tech font-bold text-white bg-red-600 rounded hover:bg-red-500"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
