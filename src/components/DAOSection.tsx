import { Coins, Users, Vote, Shield, CheckCircle, Layers } from 'lucide-react';

interface DAOSectionProps {
  language: 'en' | 'es' | 'fr' | 'ca' | 'de';
  translations: any;
}

const DAOSection = ({ translations }: DAOSectionProps) => {
  const t = translations.dao;

  return (
    <section id="dao" className="py-24 px-4 bg-gradient-to-b from-earth-900/20 to-black">
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

        {/* Three Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Token System Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-sage-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-8 h-full">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-terra-500/20 to-sage-500/20 border border-terra-500/30">
                  <Coins className="w-8 h-8 text-terra-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{t.tokens.title}</h3>

              {/* $TIERRA */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-sage-400" />
                  <h4 className="text-xl font-bold text-sage-400">{t.tokens.tierra.name}</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">{t.tokens.tierra.type}</p>
                <p className="text-xs text-gray-500 mb-3">{t.tokens.tierra.supply}</p>
                <p className="text-sm text-gray-300 mb-4">{t.tokens.tierra.description}</p>
                <ul className="space-y-2">
                  {t.tokens.tierra.distribution.map((item: string, index: number) => (
                    <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-sage-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* $SEEDS */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-earth-400" />
                  <h4 className="text-xl font-bold text-earth-400">{t.tokens.seeds.name}</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">{t.tokens.seeds.type}</p>
                <p className="text-xs text-gray-500 mb-3">{t.tokens.seeds.supply}</p>
                <p className="text-sm text-gray-300 mb-4">{t.tokens.seeds.description}</p>
                <ul className="space-y-2">
                  {t.tokens.seeds.uses.map((item: string, index: number) => (
                    <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-earth-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* NFT Tiers Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8 h-full">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-sage-500/20 to-earth-500/20 border border-sage-500/30">
                  <Users className="w-8 h-8 text-sage-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{t.nftTiers.title}</h3>

              <div className="space-y-6">
                {t.nftTiers.tiers.map((tier: any, index: number) => (
                  <div key={index} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">{tier.name}</h4>
                      <span className="text-terra-400 font-bold text-sm">{tier.price}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500">{tier.count}</span>
                      <span className="text-xs text-sage-400 font-semibold">{tier.tokens}</span>
                    </div>
                    <ul className="space-y-1">
                      {tier.benefits.map((benefit: string, i: number) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-sage-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Governance Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-earth-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-earth-500/20 p-8 h-full">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-earth-500/20 to-terra-500/20 border border-earth-500/30">
                  <Vote className="w-8 h-8 text-earth-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.governance.title}</h3>
              <p className="text-sm text-gray-400 mb-6">{t.governance.intro}</p>

              <div className="space-y-6">
                {t.governance.levels.map((level: any, index: number) => (
                  <div key={index} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <h4 className="text-lg font-bold text-white mb-2">{level.name}</h4>
                    <p className="text-sm text-gray-300 mb-2">{level.description}</p>
                    <p className="text-xs text-terra-400 font-semibold">{level.requirement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center mb-8 md:col-span-2 lg:col-span-4">
            <h3 className="text-3xl font-bold text-white mb-2">{t.benefits.title}</h3>
          </div>
          {t.benefits.items.map((item: any, index: number) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-xl blur opacity-20"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-sage-500/20 p-6 text-center h-full">
                <CheckCircle className="w-8 h-8 text-sage-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DAOSection;
