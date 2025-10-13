import { Download, Lock, FileText, Compass } from 'lucide-react';

interface ResourcesSectionProps {
  language: 'en' | 'es';
  translations: any;
}

const ResourcesSection = ({ language, translations }: ResourcesSectionProps) => {
  const t = translations.resources;

  const resourceIcons = [Compass, FileText, FileText, FileText];
  const gradients = [
    'from-orange-500 to-pink-500',
    'from-pink-500 to-purple-500',
    'from-purple-500 to-blue-500',
    'from-blue-500 to-cyan-500'
  ];

  return (
    <div id="resources" className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400">
            {t.subtitle}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.items.map((item: string, index: number) => {
            const Icon = resourceIcons[index];
            const gradient = gradients[index];

            return (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2 leading-snug">
                    {item}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Download className="w-3 h-3" />
                    <span>{language === 'es' ? 'PDF' : 'PDF'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all">
            <Lock className="w-5 h-5" />
            <span>{t.cta}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
