import { GraduationCap, MapPin, Trophy, Briefcase } from 'lucide-react';

const SKILLS = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript (ES6+)', level: 88 },
  { name: 'TypeScript', level: 78 },
  { name: 'React.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Python', level: 70 },
  { name: 'SQL', level: 72 },
  { name: 'Express.js', level: 65 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'API Integration', level: 78 },
];

const SKILL_TAGS = [
  'Responsive Design', 'Component Architecture', 'VS Code',
  'RESTful APIs', 'UI/UX Principles', 'Cross-Browser Compatibility',
  'Performance Optimization', 'Accessibility (a11y)',
];

const STATS = [
  { icon: Briefcase, value: '3+', label: 'Internships' },
  { icon: Trophy, value: '2nd', label: 'Hackathon Finish' },
  { icon: GraduationCap, value: '2028', label: 'Expected Grad' },
  { icon: MapPin, value: 'HYD', label: 'Based In' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Who I Am
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio + stats */}
          <div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-5">
                I'm <span className="font-semibold text-gray-900 dark:text-white">N.V.L. Balram</span>,
                a passionate Front-End Developer and B.Tech student specializing in{' '}
                <span className="text-blue-500 font-semibold">Artificial Intelligence & Machine Learning</span>{' '}
                at Malla Reddy University, Hyderabad.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-5">
                I love crafting pixel-perfect, performant, and accessible web experiences. My
                internship journey across Cognifyz Technologies, Saiket Systems, and Code4EdTech
                has sharpened my skills in building real-world UI components and improving
                application responsiveness.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
                Outside of coding, I thrive in competitive environments — earning 2nd Runner-up at
                Epitome Hackathon 2025 is a highlight I'm proud of. I'm actively seeking front-end
                internship opportunities where I can contribute and grow.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3 group-hover:bg-blue-500 transition-colors duration-200">
                    <Icon size={18} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-xl font-extrabold text-gray-900 dark:text-white">{value}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</span>
                </div>
              ))}
            </div>

            {/* Experience timeline */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Experience</h3>
              <div className="space-y-4">
                {[
                  { role: 'Front-End Intern', company: 'Code4EdTech', period: 'Dec 2025 – Jan 2026', color: 'blue' },
                  { role: 'Front-End Intern', company: 'Cognifyz Technologies', period: 'Sep – Oct 2025', color: 'cyan' },
                  { role: 'Front-End Intern', company: 'Saiket Systems', period: 'Sep – Oct 2025', color: 'sky' },
                ].map((exp) => (
                  <div
                    key={exp.company}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{exp.role}</p>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{exp.company}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — skills */}
          <div id="skills">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Technical Proficiency</h3>
            <div className="space-y-5 mb-10">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs font-semibold text-blue-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 skill-bar"
                      style={{ '--skill-width': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional skill tags */}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Additional Skills</h3>
            <div className="flex flex-wrap gap-2.5">
              {SKILL_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-medium hover:shadow-sm hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
