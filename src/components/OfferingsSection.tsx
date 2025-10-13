import { Sparkles, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';

interface OfferingsSectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const OfferingsSection = ({ translations }: OfferingsSectionProps) => {
  const t = translations.offerings;

  const offerings = [
    {
      key: 'soulWork',
      icon: Sparkles,
      gradient: 'from-orange-500 via-pink-500 to-purple-500',
      shadowColor: 'shadow-orange-500/50'
    },
    {
      key: 'integration',
      icon: Heart,
      gradient: 'from-pink-500 via-purple-500 to-blue-500',
      shadowColor: 'shadow-pink-500/50'
    },
    {
      key: 'entrepreneur',
      icon: Zap,
      gradient: 'from-purple-500 via-blue-500 to-cyan-500',
      shadowColor: 'shadow-purple-500/50'
    }
  ];

  return (
    <div id="offerings" className="container mx-auto px-4 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            const offeringData = t[offering.key];

            return (
              <div key={offering.key} className="group relative">
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${offering.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                {/* Card */}
                <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-all">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${offering.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Tagline */}
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    {offeringData.tagline}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {offeringData.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {offeringData.description}
                  </p>

                  {/* Includes List */}
                  <div className="space-y-3 mb-8">
                    {offeringData.includes.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className={`text-lg font-semibold bg-gradient-to-r ${offering.gradient} bg-clip-text text-transparent`}>
                      {offeringData.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full group/btn px-6 py-4 bg-gradient-to-r ${offering.gradient} text-white rounded-xl font-semibold hover:shadow-2xl ${offering.shadowColor} transform hover:scale-105 transition-all flex items-center justify-center gap-2`}>
                    <span>{offeringData.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
