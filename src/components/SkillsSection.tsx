import { Code2, Database, Blocks, Cloud } from 'lucide-react';

interface SkillsSectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const SkillsSection = ({ translations }: SkillsSectionProps) => {
  const t = translations.skills;

  const iconMap: { [key: string]: any } = {
    frontend: Code2,
    backend: Database,
    blockchain: Blocks,
    devops: Cloud
  };

  const colorMap: { [key: string]: string } = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-green-500 to-emerald-500',
    blockchain: 'from-purple-500 to-pink-500',
    devops: 'from-orange-500 to-red-500'
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(t.categories).map(([key, category]: [string, any]) => {
            const Icon = iconMap[key];
            const colorClass = colorMap[key];

            return (
              <div key={key} className="relative group">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${colorClass} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>

                {/* Card */}
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClass}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill: string, index: number) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
