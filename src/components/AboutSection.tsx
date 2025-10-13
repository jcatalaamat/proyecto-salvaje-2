import { Sparkles, Heart, Eye } from 'lucide-react';

interface AboutSectionProps {
  language: 'en' | 'es';
  translations: any;
}

const AboutSection = ({ translations }: AboutSectionProps) => {
  const t = translations.about;

  return (
    <div id="about" className="container mx-auto px-4 py-32">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t.title}
          </h2>
        </div>

        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-10"></div>

          {/* Content Card */}
          <div className="relative bg-zinc-900/80 backdrop-blur-2xl rounded-3xl border border-white/10 p-12 md:p-16">
            {/* Three Aspects */}
            <div className="space-y-12">
              {/* Intro */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl group-hover:scale-110 transition-transform">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {t.intro}
                    </p>
                  </div>
                </div>
              </div>

              {/* Journey */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl group-hover:scale-110 transition-transform">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {t.journey}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gift */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl group-hover:scale-110 transition-transform">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {t.gift}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-12 border-t border-white/10 text-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all">
                {t.cta}
              </button>
            </div>
          </div>
        </div>

        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-purple-500 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border-2 border-orange-500 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
