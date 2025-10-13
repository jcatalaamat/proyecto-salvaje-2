import { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectsShowcaseProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const ProjectsShowcase = ({ translations }: ProjectsShowcaseProps) => {
  const t = translations.projects;
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? t.items
    : t.items.filter((project: any) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {t.categories.map((category: string) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: any, index: number) => {
            const gradients = [
              'from-purple-500 to-pink-500',
              'from-cyan-500 to-blue-500',
              'from-green-500 to-emerald-500',
              'from-orange-500 to-red-500'
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div key={index} className="relative group">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition`}></div>

                {/* Card */}
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradient} text-white`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Code className="w-6 h-6" />
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" style={{ color: 'currentColor' }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
