import { ExternalLink, Github, Tag } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: 'Return & Support Assistant',
    description:
      'A full-featured order tracking and returns portal. Customers can view real-time order status, initiate returns, and track return details — reducing operational confusion for both shoppers and support teams.',
    image: 'https://images.pexels.com/photos/6169132/pexels-photo-6169132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    github: 'https://github.com/balram960',
    demo: '#',
    featured: true,
  },
  {
    title: 'AI-Based Diet & Nutrition Store',
    description:
      'An intelligent nutrition platform that delivers personalized diet recommendations based on user health data. Combines AI-driven insights with a clean, accessible storefront UI.',
    image: 'https://images.pexels.com/photos/8844387/pexels-photo-8844387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React.js', 'Python', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/balram960',
    demo: '#',
    featured: true,
  },
  {
    title: 'Secure Payment Application',
    description:
      'A secure, fully responsive payment interface built with a focus on UX clarity and visual feedback. Features transaction flows, form validation, and a polished mobile-first design.',
    image: 'https://images.pexels.com/photos/6406691/pexels-photo-6406691.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    github: 'https://github.com/balram960',
    demo: '#',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      {project.featured && (
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-blue-500 text-white text-xs font-semibold shadow">
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Code"
            className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-gray-900 hover:text-white transition-colors duration-200 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} />
          </a>
          {project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="w-11 h-11 rounded-full bg-blue-500/90 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-200 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-100 dark:border-blue-800"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <Github size={15} />
            View Code
          </a>
          <a
            href={project.demo !== '#' ? project.demo : project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-md hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
          <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
            A selection of projects built from scratch, each tackling a real-world problem with clean
            code and thoughtful design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/balram960"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 bg-white dark:bg-gray-900"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
