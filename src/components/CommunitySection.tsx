import { Leaf, Shield, ArrowRightLeft, Sparkles, Users, Network, Calendar, Vote, Target } from 'lucide-react';

interface CommunitySectionProps {
  language: 'en' | 'es' | 'fr' | 'ca' | 'de';
  translations: any;
}

const CommunitySection = ({ translations }: CommunitySectionProps) => {
  const t = translations.community;

  const valueIcons = [Leaf, Shield, ArrowRightLeft, Sparkles];
  const governanceIcons = [Network, Users, Calendar];

  return (
    <section id="community" className="py-24 px-4 bg-gradient-to-b from-earth-900/20 to-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sage-400 via-terra-400 to-sage-500 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-2xl text-sage-300 mb-6 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">{t.values.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.items.map((value: any, index: number) => {
              const Icon = valueIcons[index];
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-sage-500 to-terra-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-sage-500/20 p-6 hover:border-sage-500/40 transition-all h-full">
                    <Icon className="w-8 h-8 text-sage-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Development Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">{t.timeline.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.timeline.phases.map((phase: any, index: number) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-sage-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-6 hover:border-terra-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-terra-500 to-sage-500 text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{phase.title}</h4>
                      <p className="text-sm text-terra-400">{phase.period}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Governance Structure */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">{t.governance.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.governance.items.map((item: any, index: number) => {
              const Icon = governanceIcons[index];
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8 hover:border-sage-500/40 transition-all">
                    <Icon className="w-10 h-10 text-sage-400 mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transparency & DAO Section */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sage-600/20 via-terra-600/20 to-earth-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-sage-900/30 via-terra-900/30 to-earth-900/30 backdrop-blur-xl rounded-3xl border border-sage-500/30 p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{t.transparency.title}</h3>
                <blockquote className="text-xl text-sage-300 italic max-w-3xl mx-auto">
                  "{t.transparency.quote}"
                </blockquote>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* DAO */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-sage-500 to-terra-500 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-sage-500/20 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Vote className="w-8 h-8 text-sage-400" />
                      <h4 className="text-xl font-bold text-white">{t.transparency.dao.title}</h4>
                    </div>
                    <p className="text-gray-400 mb-4 leading-relaxed">{t.transparency.dao.description}</p>
                    <ul className="space-y-2">
                      {t.transparency.dao.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-sage-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contribution Paths */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-terra-500 to-earth-500 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-terra-500/20 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-terra-400" />
                      <h4 className="text-xl font-bold text-white">{t.transparency.contribution.title}</h4>
                    </div>
                    <p className="text-gray-400 mb-4 leading-relaxed">{t.transparency.contribution.description}</p>
                    <ul className="space-y-2 mb-4">
                      {t.transparency.contribution.paths.map((path: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-terra-400 mt-1">•</span>
                          <span>{path}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-sage-300 italic">{t.transparency.contribution.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
