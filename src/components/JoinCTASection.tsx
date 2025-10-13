import { Heart, Users, Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JoinCTASectionProps {
  language: 'en' | 'es';
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
          <h3 className="text-3xl font-bold text-center text-white mb-12">{t.timeline.title}</h3>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phase 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-terra-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-sage-500/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-sage-500 to-terra-500 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{t.timeline.phase1.title}</h4>
                    <p className="text-sm text-sage-400">{t.timeline.phase1.period}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-earth-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-terra-500/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-terra-500 to-earth-500 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{t.timeline.phase2.title}</h4>
                    <p className="text-sm text-terra-400">{t.timeline.phase2.period}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Year 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-earth-500 to-sage-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-earth-500/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-earth-500 to-sage-500 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{t.timeline.year2.title}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Year 3 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-terra-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-sage-500/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-sage-500 to-terra-500 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{t.timeline.year3.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 1 Details */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8">
              <h4 className="text-xl font-bold text-white mb-6">{t.timeline.phase1.title} ({t.timeline.phase1.period})</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.timeline.phase1.steps.map((step: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-sage-400 mt-1">→</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            style={{ display: 'none' }}
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
