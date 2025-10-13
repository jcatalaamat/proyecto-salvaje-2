import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceTimelineProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const ExperienceTimeline = ({ translations }: ExperienceTimelineProps) => {
  const t = translations.experience;

  return (
    <section id="experience" className="py-24 px-4 bg-zinc-950/50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-20"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {t.roles.map((role: any, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="relative group">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>

                      {/* Card */}
                      <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                        {/* Role Title */}
                        <div className="flex items-center gap-3 mb-3" style={{ justifyContent: isEven && window.innerWidth >= 768 ? 'flex-end' : 'flex-start' }}>
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                          <h3 className="text-xl font-bold text-white">{role.title}</h3>
                        </div>

                        {/* Company */}
                        <div className="text-cyan-400 font-medium mb-2">{role.company}</div>

                        {/* Period */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4" style={{ justifyContent: isEven && window.innerWidth >= 768 ? 'flex-end' : 'flex-start' }}>
                          <Calendar className="w-4 h-4" />
                          <span>{role.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed">{role.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-50"></div>
                      <div className="relative w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-black"></div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
