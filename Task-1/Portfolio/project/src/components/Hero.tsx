import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 dark:bg-blue-400/5 rounded-full blur-3xl" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 animate-fade-in">
          <Sparkles size={14} />
          Available for Internship & Projects
        </div>

        {/* Avatar placeholder */}
        <div className="relative inline-block mb-8">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold shadow-2xl shadow-blue-500/30 mx-auto">
            B
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Balram
          </span>
        </h1>

        <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 mb-5 tracking-wide">
          Front-End Developer &nbsp;·&nbsp; AI & ML Student
        </p>

        {/* Bio */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
          Motivated B.Tech (AI & ML) student at Malla Reddy University, Hyderabad — building
          responsive, accessible web applications with React, TypeScript & Tailwind CSS. Hackathon
          finalist and 3x front-end intern.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToProjects}
            className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            View My Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-base hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm"
          >
            <Mail size={16} className="inline mr-2" />
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/balram960"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors duration-200">
              <Github size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-200" />
            </div>
            <span className="hidden sm:block">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/nvl-balaram-69b125350/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <Linkedin size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
            </div>
            <span className="hidden sm:block">LinkedIn</span>
          </a>
          <a
            href="mailto:nvlbalaram@gmail.com"
            aria-label="Email"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-red-500 transition-colors duration-200">
              <Mail size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
            </div>
            <span className="hidden sm:block">Email</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 animate-bounce"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
