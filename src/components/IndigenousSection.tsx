import { Heart, BookOpen, GraduationCap, DollarSign, Sunset, Calendar, Award, Sparkles } from 'lucide-react';

interface IndigenousSectionProps {
  language: 'en' | 'es';
  translations: any;
}

const IndigenousSection = ({ translations }: IndigenousSectionProps) => {
  const t = translations.indigenous;

  const principleIcons = [Heart, BookOpen, GraduationCap, DollarSign];
  const ceremonyIcons = [Sunset, Calendar, Award, Sparkles];

  return (
    <section id="indigenous" className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-terra-400 via-sage-400 to-earth-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-2xl text-terra-300 mb-6 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Indigenous Wisdom Quotes */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.quotes.map((quote: any, index: number) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8 hover:border-sage-500/40 transition-all h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="text-6xl text-sage-400/30 mb-4">"</div>
                    <p className="text-lg text-gray-300 italic leading-relaxed mb-6">
                      {quote.text}
                    </p>
                  </div>
                  <p className="text-sm text-sage-400 font-medium">— {quote.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values and Approach */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Values */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t.values.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{t.values.description}</p>
                <p className="text-gray-400 leading-relaxed">{t.values.commitment}</p>
              </div>
            </div>

            {/* Our Approach */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t.approach.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{t.approach.description}</p>
                <p className="text-gray-400 leading-relaxed">{t.approach.integration}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">{t.principles.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.principles.items.map((principle: any, index: number) => {
              const Icon = principleIcons[index];
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-terra-500 to-sage-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-terra-500/20 p-6 hover:border-terra-500/40 transition-all h-full">
                    <Icon className="w-8 h-8 text-terra-400 mb-4" />
                    <h4 className="text-lg font-bold text-white mb-3">{principle.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ceremonial Practices */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">{t.ceremonies.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.ceremonies.items.map((ceremony: any, index: number) => {
              const Icon = ceremonyIcons[index];
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-sage-500 to-earth-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-sage-500/20 p-6 hover:border-sage-500/40 transition-all h-full">
                    <Icon className="w-8 h-8 text-sage-400 mb-4" />
                    <h4 className="text-lg font-bold text-white mb-3">{ceremony.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{ceremony.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndigenousSection;
