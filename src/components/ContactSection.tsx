import { useState } from 'react';
import { Check, Copy, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Send, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: '',
    message: '',
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopy = (field: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.name} - ${formData.scope || 'Software Engineering'}`);
    const body = encodeURIComponent(
      `Hello Suraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.scope || 'N/A'}\n\nMessage:\n${formData.message}\n\nSent from Portfolio quick_connect.sh`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Connect Cards (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span className="font-mono-tech text-xs tracking-widest text-red-500 uppercase font-semibold">
                INITIATE COLLABORATION
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wider uppercase leading-none mb-4">
              LET'S WORK <br />
              <span className="text-red-500 red-glow">TOGETHER</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6 max-w-lg">
              I am currently open for full-time software engineering roles, full-stack internships, and high-impact software collaborations. Direct reachout channels from my resume:
            </p>

            {/* Direct Connect Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {/* Email Card */}
              <div className="p-3.5 bg-[#0e1017] border border-zinc-800 rounded-lg hover:border-red-900/60 transition-colors">
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-zinc-500 mb-1">
                  <span>DIRECT EMAIL</span>
                  <button
                    onClick={() => handleCopy('email', PORTFOLIO_DATA.personal.email)}
                    className="text-zinc-400 hover:text-red-400 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-xs font-mono-tech text-zinc-200 hover:text-red-400 truncate block transition-colors"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-3.5 bg-[#0e1017] border border-zinc-800 rounded-lg hover:border-red-900/60 transition-colors">
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-zinc-500 mb-1">
                  <span>PHONE / WHATSAPP</span>
                  <button
                    onClick={() => handleCopy('phone', PORTFOLIO_DATA.personal.phone)}
                    className="text-zinc-400 hover:text-red-400 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="text-xs font-mono-tech text-zinc-200 hover:text-red-400 block transition-colors"
                >
                  {PORTFOLIO_DATA.personal.phone}
                </a>
              </div>

              {/* GitHub Card */}
              <div className="p-3.5 bg-[#0e1017] border border-zinc-800 rounded-lg hover:border-red-900/60 transition-colors">
                <div className="text-[10px] font-mono-tech text-zinc-500 mb-1">
                  GITHUB PROFILE
                </div>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono-tech text-zinc-200 hover:text-red-400 flex items-center justify-between transition-colors"
                >
                  <span>github.com/SurajThakur42</span>
                  <ExternalLink className="w-3 h-3 text-red-400" />
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="p-3.5 bg-[#0e1017] border border-zinc-800 rounded-lg hover:border-red-900/60 transition-colors">
                <div className="text-[10px] font-mono-tech text-zinc-500 mb-1">
                  LINKEDIN
                </div>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono-tech text-zinc-200 hover:text-red-400 flex items-center justify-between transition-colors"
                >
                  <span>linkedin.com/in/suraj</span>
                  <ExternalLink className="w-3 h-3 text-red-400" />
                </a>
              </div>
            </div>

            {/* Live Availability Badge */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded bg-zinc-950/80 border border-zinc-800 text-xs font-mono-tech text-zinc-300 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.statusText}</span>
            </div>
          </div>

          {/* Right Column: Terminal Contact Form (col-span-6) */}
          <div className="lg:col-span-6">
            <div className="bg-[#0e1017] border border-zinc-800/90 rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="px-4 py-2.5 bg-[#141722] border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <div className="flex items-center gap-1.5 ml-2 text-zinc-400 font-mono-tech text-xs">
                    <Terminal className="w-3.5 h-3.5 text-red-400" />
                    <span>quick_connect.sh</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono-tech text-zinc-500">BASH v5.2</span>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-5 sm:p-6 flex flex-col gap-4">
                {/* Name Field */}
                <div>
                  <label className="block text-[11px] font-mono-tech text-zinc-400 uppercase tracking-wider mb-1.5">
                    YOUR NAME / ORGANIZATION <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruiter / Tech Lead"
                    className="w-full px-3.5 py-2.5 bg-[#090a0d] border border-zinc-800 rounded font-mono-tech text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-[11px] font-mono-tech text-zinc-400 uppercase tracking-wider mb-1.5">
                    YOUR EMAIL ADDRESS <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 bg-[#090a0d] border border-zinc-800 rounded font-mono-tech text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Scope Field */}
                <div>
                  <label className="block text-[11px] font-mono-tech text-zinc-400 uppercase tracking-wider mb-1.5">
                    PURPOSE / ROLE SCOPE
                  </label>
                  <input
                    type="text"
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    placeholder="e.g. Software Engineer Role / Internship"
                    className="w-full px-3.5 py-2.5 bg-[#090a0d] border border-zinc-800 rounded font-mono-tech text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] font-mono-tech text-zinc-400 uppercase tracking-wider mb-1.5">
                    MESSAGE / DETAILS <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the role or project specifications..."
                    className="w-full px-3.5 py-2.5 bg-[#090a0d] border border-zinc-800 rounded font-mono-tech text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-mono-tech text-xs font-bold tracking-wider rounded transition-all shadow-md shadow-red-950/60 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>INITIALIZING DISPATCH...</span>
                  ) : submitSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>INITIALIZED — OPENING MAIL CLIENT...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE / INITIALIZE</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
