import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 dark:bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">Balram<span className="text-blue-500">.</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Front-End Developer & AI/ML student based in Hyderabad, building beautiful, accessible
              web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get In Touch</h4>
            <div className="space-y-2.5">
              <a
                href="mailto:nvlbalaram@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                <Mail size={14} /> nvlbalaram@gmail.com
              </a>
              <a
                href="https://github.com/balram960"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                <Github size={14} /> github.com/balram960
              </a>
              <a
                href="https://linkedin.com/in/nvl-balaram-69b125350/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                <Linkedin size={14} /> linkedin.com/in/nvl-balaram
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {year} N.V.L. Balram. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Crafted with <Heart size={13} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
