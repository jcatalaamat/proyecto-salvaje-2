import { Users, Heart, Sprout, Shield } from 'lucide-react';

interface VisionSectionProps {
  language: 'en' | 'es';
  translations: any;
}

const VisionSection = ({ translations }: VisionSectionProps) => {
  const t = translations.vision;

  const pillarIcons = [Users, Heart, Sprout, Shield];

  return (
    <section id="vision" className="py-24 px-4 bg-gradient-to-b from-black to-earth-900/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sage-400 via-terra-400 to-sage-500 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-2xl text-sage-300 mb-6 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-4">
            {t.intro}
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {t.pillars.map((pillar: any, index: number) => {
            const Icon = pillarIcons[index];
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8 hover:border-sage-500/40 transition-all">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-sage-500/20 to-terra-500/20 border border-sage-500/30">
                      <Icon className="w-8 h-8 text-sage-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
