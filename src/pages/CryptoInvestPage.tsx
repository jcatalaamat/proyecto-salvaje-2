import React, { useState } from 'react';
import { Leaf, Shield, TrendingUp, Coins, Lock, Vote, MapPin, MessageCircle, DollarSign, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';
import frTranslations from '../translations/fr.json';
import deTranslations from '../translations/de.json';

const CryptoInvestPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca' | 'fr' | 'de'>('en');

  const getTranslations = () => {
    switch (language) {
      case 'es': return esTranslations;
      case 'fr': return frTranslations;
      case 'ca': return caTranslations;
      case 'de': return deTranslations;
      default: return enTranslations;
    }
  };

  const t = getTranslations();
  const crypto = (t as any).crypto || enTranslations.crypto;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated mesh background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-terra-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-earth-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <Leaf className="w-8 h-8 text-sage-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent">
                  Proyecto Salvaje
                </span>
              </Link>

              {/* Nav Links - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-8">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-sage-400 transition-colors text-sm">
                  {crypto.navigation.overview}
                </button>
                <button onClick={() => scrollToSection('tiers')} className="text-gray-400 hover:text-terra-400 transition-colors text-sm">
                  {crypto.navigation.tiers}
                </button>
                <button onClick={() => scrollToSection('tokenomics')} className="text-gray-400 hover:text-sage-400 transition-colors text-sm">
                  {crypto.navigation.tokenomics}
                </button>
                <button onClick={() => scrollToSection('faqs')} className="text-gray-400 hover:text-terra-400 transition-colors text-sm">
                  {crypto.navigation.faqs}
                </button>
              </div>

              <div className="flex items-center gap-3">
                {/* Home Button */}
                <Link
                  to="/"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-sage-500 to-terra-500 hover:shadow-lg hover:shadow-sage-500/50 transition-all"
                  title="Home"
                >
                  <Leaf className="w-5 h-5" />
                </Link>

                {/* Investment Button */}
                <Link
                  to="/invest"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-terra-500 to-earth-500 hover:shadow-lg hover:shadow-terra-500/50 transition-all"
                  title="Investment Opportunities"
                >
                  <DollarSign className="w-5 h-5" />
                </Link>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/5219581171682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/50 transition-all"
                  title="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>

                {/* Language Toggle */}
                <button
                  onClick={() => {
                    const languages: Array<'en' | 'es' | 'fr' | 'ca' | 'de'> = ['en', 'es', 'fr', 'ca', 'de'];
                    const currentIndex = languages.indexOf(language);
                    const nextIndex = (currentIndex + 1) % languages.length;
                    setLanguage(languages[nextIndex]);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

      {/* Hero Section */}
      <section className="relative">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/property/property-screenshot-02.png"
            alt="Proyecto Salvaje Land"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sage-700/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10">
              <Leaf className="w-4 h-4 text-sage-300" />
              <span className="text-sm font-medium text-sage-100">{crypto.hero.badge}</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent" style={{
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite'
              }}>
                {crypto.hero.title}
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-8 text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {crypto.hero.subtitle}
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              {crypto.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('tiers')}
                className="group px-8 py-4 bg-gradient-to-r from-sage-500 via-terra-500 to-sage-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-sage-500/50 transform hover:scale-105 transition-all flex items-center gap-3"
              >
                <Coins className="w-5 h-5" />
                <span>{crypto.hero.cta}</span>
              </button>
              <button
                onClick={() => window.open('https://app.colony.io/salvaje', '_blank')}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                {crypto.hero.secondaryCta} →
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Leaf className="w-8 h-8 text-sage-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{crypto.hero.metrics.land.value}</div>
                  <div className="text-sm text-gray-400">{crypto.hero.metrics.land.label}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Coins className="w-8 h-8 text-terra-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{crypto.hero.metrics.supply.value}</div>
                  <div className="text-sm text-gray-400">{crypto.hero.metrics.supply.label}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-earth-500 to-sage-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <TrendingUp className="w-8 h-8 text-earth-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{crypto.hero.metrics.network.value}</div>
                  <div className="text-sm text-gray-400">{crypto.hero.metrics.network.label}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Lock className="w-8 h-8 text-sage-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{crypto.hero.metrics.tiers.value}</div>
                  <div className="text-sm text-gray-400">{crypto.hero.metrics.tiers.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ReFi Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {crypto.whyRefi.title}
            </h2>
            <p className="text-xl text-gray-400">
              {crypto.whyRefi.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {crypto.whyRefi.benefits.map((benefit: any, index: number) => {
              const icons = [Shield, Vote, Leaf, TrendingUp];
              const iconColors = ['text-sage-400', 'text-blue-400', 'text-emerald-400', 'text-purple-400'];
              const bgColors = ['bg-sage-900/50', 'bg-blue-900/50', 'bg-emerald-900/50', 'bg-purple-900/50'];
              const borderColors = ['border-sage-700/30', 'border-blue-700/30', 'border-emerald-700/30', 'border-purple-700/30'];
              const gradients = [
                'from-sage-500 to-terra-500',
                'from-terra-500 to-earth-500',
                'from-earth-500 to-sage-500',
                'from-sage-500 to-terra-500'
              ];
              const Icon = icons[index];

              return (
                <div key={index} className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                    <div className={`w-12 h-12 ${bgColors[index]} rounded-xl flex items-center justify-center mb-4 border ${borderColors[index]}`}>
                      <Icon className={`w-6 h-6 ${iconColors[index]}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="tiers" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {crypto.tiers.title}
            </h2>
            <p className="text-xl text-gray-400">
              {crypto.tiers.subtitle}
              <br className="hidden md:block" />
              {crypto.tiers.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {crypto.tiers.items.map((tier: any, index: number) => {
              const tierStyles = [
                {
                  gradient: 'from-sage-500 to-terra-500',
                  headerGradient: 'from-sage-600 to-terra-600',
                  hoverGradient: 'hover:from-sage-500 hover:to-terra-500',
                  border: 'border-white/10',
                  blurOpacity: 'opacity-20 group-hover:opacity-40',
                  icon: Lock,
                  tokenColor: 'text-sage-400',
                  bulletColor: 'bg-sage-400',
                  textColor: 'text-sage-100',
                  shadow: 'hover:shadow-sage-500/50'
                },
                {
                  gradient: 'from-terra-500 to-earth-500',
                  headerGradient: 'from-terra-600 to-earth-600',
                  hoverGradient: 'hover:from-terra-500 hover:to-earth-500',
                  border: 'border-2 border-terra-500/50',
                  blurOpacity: 'opacity-30 group-hover:opacity-50',
                  icon: Lock,
                  tokenColor: 'text-terra-400',
                  bulletColor: 'bg-terra-400',
                  textColor: 'text-terra-100',
                  shadow: 'hover:shadow-terra-500/50'
                },
                {
                  gradient: 'from-earth-500 to-sage-500',
                  headerGradient: 'from-purple-700 to-indigo-700',
                  hoverGradient: 'hover:from-purple-600 hover:to-indigo-600',
                  border: 'border-2 border-purple-500/50',
                  blurOpacity: 'opacity-30 group-hover:opacity-50',
                  icon: MapPin,
                  tokenColor: 'text-purple-400',
                  bulletColor: 'bg-purple-400',
                  textColor: 'text-purple-100',
                  shadow: 'hover:shadow-purple-500/50'
                },
                {
                  gradient: 'from-yellow-500 via-orange-500 to-red-500',
                  headerGradient: 'from-yellow-700 via-orange-700 to-red-700',
                  hoverGradient: 'hover:from-yellow-500 hover:via-orange-500 hover:to-red-500',
                  border: 'border-2 border-yellow-500/50',
                  blurOpacity: 'opacity-40 group-hover:opacity-60',
                  icon: MapPin,
                  tokenColor: 'text-orange-400',
                  bulletColor: 'bg-orange-400',
                  textColor: 'text-orange-100',
                  shadow: 'hover:shadow-orange-500/50'
                }
              ];

              const style = tierStyles[index];
              const Icon = style.icon;

              return (
                <div key={index} className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${style.gradient} rounded-2xl blur ${style.blurOpacity} transition`}></div>
                  <div className={`relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl overflow-hidden ${style.border}`}>
                    {tier.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                        POPULAR
                      </div>
                    )}
                    {tier.founder && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                        FOUNDER
                      </div>
                    )}
                    <div className={`bg-gradient-to-r ${style.headerGradient} p-6 text-white border-b border-white/10`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium opacity-90">{tier.tier}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold">{tier.price}</span>
                        <span className={style.textColor}>{tier.currency}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className={`flex items-center gap-2 mb-4 ${style.tokenColor}`}>
                        <Coins className="w-5 h-5" />
                        <span className="font-bold text-lg">{tier.tokens}</span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature: string, fIndex: number) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 ${style.bulletColor} rounded-full mt-2`}></div>
                            <span className={feature.includes('ownership') || feature.includes('Seat on') ? 'text-white font-semibold' : 'text-gray-300'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className={`w-full bg-gradient-to-r ${style.headerGradient} ${style.hoverGradient} px-6 py-3 rounded-lg font-semibold text-white transition-all shadow-lg ${style.shadow}`}
                        onClick={() => window.open('https://app.unlock-protocol.com/checkout', '_blank')}
                      >
                        {tier.cta}
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        {tier.note}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              {crypto.tiers.footer.split('Unlock Protocol')[0]}
              <a
                href="https://app.unlock-protocol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-400 hover:text-sage-300 font-medium underline"
              >
                Unlock Protocol
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* TERRA Tokenomics */}
      <section id="tokenomics" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-sage-900/50 text-sage-300 px-4 py-2 rounded-full mb-4 border border-sage-700/30">
                <Coins className="w-4 h-4" />
                <span className="text-sm font-medium">{crypto.tokenomics.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {crypto.tokenomics.title}
              </h2>
              <p className="text-xl text-gray-400">
                {crypto.tokenomics.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {crypto.tokenomics.metrics.map((metric: any, index: number) => {
                const gradients = ['from-sage-500 to-terra-500', 'from-terra-500 to-earth-500', 'from-earth-500 to-sage-500'];
                const colors = ['text-sage-400', 'text-terra-400', 'text-earth-400'];

                return (
                  <div key={index} className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                      <div className={`text-3xl font-bold ${colors[index]} mb-2`}>{metric.value}</div>
                      <div className="text-sm text-gray-300 font-medium">{metric.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{metric.note}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 via-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">{crypto.tokenomics.distribution.title}</h3>

              <div className="space-y-4">
                {crypto.tokenomics.distribution.items.map((item: any, index: number) => {
                  const colors = ['bg-sage-500', 'bg-terra-500', 'bg-purple-500', 'bg-earth-500', 'bg-orange-500'];
                  const widths = ['40%', '30%', '15%', '10%', '5%'];

                  return (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{item.category}</span>
                        <span className="text-white font-bold">{item.amount}</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-3">
                        <div className={`${colors[index]} h-3 rounded-full`} style={{ width: widths[index] }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colony DAO Governance */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full mb-4 border border-blue-700/30">
                <Vote className="w-4 h-4" />
                <span className="text-sm font-medium">{crypto.dao.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {crypto.dao.title}
              </h2>
              <p className="text-xl text-gray-400">
                {crypto.dao.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">{crypto.dao.howItWorks.title}</h3>
                <ul className="space-y-4">
                  {crypto.dao.howItWorks.steps.map((step: any, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-sage-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-sage-700/30">
                        <span className="text-sage-300 text-xs font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{step.title}</div>
                        <div className="text-sm text-gray-400">{step.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">{crypto.dao.votingTopics.title}</h3>
                <ul className="space-y-4">
                  {crypto.dao.votingTopics.topics.map((topic: any, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-terra-400 rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-white">{topic.title}</div>
                        <div className="text-sm text-gray-400">{topic.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                className="bg-gradient-to-r from-terra-600 to-earth-600 hover:from-terra-500 hover:to-earth-500 px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-lg hover:shadow-terra-500/50"
                onClick={() => window.open('https://app.colony.io/salvaje', '_blank')}
              >
                {crypto.dao.cta} →
              </button>
              <p className="text-sm text-gray-500 mt-3">
                {crypto.dao.ctaNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Assets */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {crypto.land.title}
              </h2>
              <p className="text-xl text-gray-400">
                {crypto.land.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">{crypto.land.property.title}</h3>
                <div className="space-y-4">
                  {crypto.land.property.details.map((detail: any, index: number) => (
                    <div key={index} className={`flex justify-between py-2 ${index < crypto.land.property.details.length - 1 ? 'border-b border-white/10' : ''}`}>
                      <span className="text-gray-400">{detail.label}</span>
                      <span className="font-bold text-white">{detail.value}</span>
                    </div>
                  ))}
                </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">{crypto.land.assets.title}</h3>
                <ul className="space-y-3">
                  {crypto.land.assets.items.map((item: any, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              {crypto.faqs.title}
            </h2>

            <div className="space-y-6">
              {crypto.faqs.questions.map((faq: any, index: number) => (
                <details key={index} className="bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 group hover:border-sage-500/30 transition-all">
                  <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sage-900 via-terra-900 to-earth-900 text-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {crypto.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {crypto.cta.subtitle}
              <br />
              {crypto.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-sage-500 via-terra-500 to-sage-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-sage-500/50 transform hover:scale-105 transition-all min-w-[220px]"
                onClick={() => scrollToSection('tiers')}
              >
                {crypto.cta.primaryCta}
              </button>
              <button
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all min-w-[220px]"
                onClick={() => window.open('https://app.colony.io/salvaje', '_blank')}
              >
                {crypto.cta.secondaryCta} →
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-sage-300">
              {crypto.cta.links.map((link: any, index: number) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="text-sage-600">•</span>}
                  <a
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </React.Fragment>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                {crypto.cta.footer}
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default CryptoInvestPage;
