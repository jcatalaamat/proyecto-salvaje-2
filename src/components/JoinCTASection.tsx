import { Heart, Users, Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JoinCTASectionProps {
  language: 'en' | 'es' | 'fr' | 'ca' | 'de';
  translations: any;
}

const JoinCTASection = ({ translations }: JoinCTASectionProps) => {
  const t = translations.join;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="join" className="py-24 px-4 bg-gradient-to-b from-black to-earth-900/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-terra-400 via-sage-400 to-terra-500 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-2xl text-terra-300 mb-6 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">{t.timeline.title}</h3>
            <p className="text-xl text-terra-300 mb-4">{t.timeline.subtitle}</p>
            <p className="text-gray-400 max-w-3xl mx-auto">{t.timeline.intro}</p>
          </div>

          {/* Phase Cards - Always Expanded */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.timeline.phases.map((phase: any, index: number) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-sage-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-terra-400">{phase.number}</span>
                    <span className="text-xs px-3 py-1 bg-terra-500/20 text-terra-300 rounded-full">{phase.status}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{phase.title}</h4>
                  <p className="text-sm text-sage-400 mb-4">{phase.period}</p>

                  {/* Always Expanded Content */}
                  <div className="pt-4 border-t border-white/10 mt-4">
                    <ul className="space-y-2">
                      {phase.highlights.map((highlight: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-sage-400 mt-1">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Structure & Contributions */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-terra-600/20 via-sage-600/20 to-earth-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-terra-900/30 via-sage-900/30 to-earth-900/30 backdrop-blur-xl rounded-3xl border border-terra-500/30 p-12">
              <h3 className="text-3xl font-bold text-white text-center mb-6">{t.structure.title}</h3>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto text-center mb-6 leading-relaxed">
                {t.structure.description}
              </p>
              <p className="text-lg text-sage-300 max-w-4xl mx-auto text-center leading-relaxed">
                {t.structure.calling}
              </p>
            </div>
          </div>
        </div>

        {/* Ways to Participate */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">{t.ways.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.ways.items.map((way: any, index: number) => {
              const icons = [Heart, TrendingUp, Users, Calendar];
              const Icon = icons[index];
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8 hover:border-sage-500/40 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-sage-500/20 to-terra-500/20 border border-sage-500/30">
                        <Icon className="w-6 h-6 text-sage-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white">{way.title}</h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{way.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-sage-500 via-terra-500 to-sage-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-sage-500/50 transform hover:scale-105 transition-all"
          >
            <span>{t.subtitle}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link
            to="/invest"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 border border-white/20 text-white text-lg font-bold rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all"
          >
            <span>View Investment Details</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinCTASection;
