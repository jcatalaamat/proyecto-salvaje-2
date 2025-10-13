import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf, Globe, MapPin, TrendingUp, Shield, Home, Droplet,
  Mountain, Check, AlertCircle, Send, Download, Clock, Users,
  DollarSign, Grid, BarChart3
} from 'lucide-react';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';
import frTranslations from '../translations/fr.json';
import deTranslations from '../translations/de.json';

function InvestmentPage() {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca' | 'fr' | 'de'>('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    citizenship: '',
    package: 'exploring',
    visit: '',
    message: ''
  });

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
  const inv = (t as any).investment || enTranslations.investment;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create detailed email body with all form information
    const emailBody = encodeURIComponent(
      `Investment Inquiry from proyectosalvaje.com/invest\n\n` +
      `=========================================\n` +
      `CONTACT INFORMATION\n` +
      `=========================================\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Citizenship: ${formData.citizenship}\n\n` +
      `=========================================\n` +
      `INVESTMENT DETAILS\n` +
      `=========================================\n` +
      `Package Interest: ${formData.package}\n` +
      `Preferred Visit Date: ${formData.visit}\n\n` +
      `=========================================\n` +
      `MESSAGE\n` +
      `=========================================\n` +
      `${formData.message}\n\n` +
      `=========================================\n` +
      `Sent from: proyectosalvaje.com/invest`
    );

    const emailSubject = encodeURIComponent(
      `Investment Inquiry: ${formData.name} - ${formData.package}`
    );

    const mailtoLink = `mailto:${inv.contact.info.email}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <Leaf className="w-8 h-8 text-sage-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent">
                Proyecto Salvaje
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-400 hover:text-sage-400 transition-colors">
                Main Site
              </Link>
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
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black via-earth-900/20 to-black">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-terra-400 via-sage-400 to-earth-400 bg-clip-text text-transparent">
            {inv.hero.title}
          </h1>
          <p className="text-2xl text-gray-400 mb-6 max-w-3xl mx-auto">
            {inv.hero.subtitle}
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto">
            {inv.hero.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.values(inv.hero.stats).map((stat, index: number) => {
              const icons = [Mountain, Home, Clock, TrendingUp];
              const Icon = icons[index];
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-sage-500 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-terra-500/20 p-6">
                    <Icon className="w-8 h-8 text-terra-400 mb-2 mx-auto" />
                    <div className="text-lg font-bold text-white">{String(stat)}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-terra-500 to-sage-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-terra-500/50 transition-all"
            >
              {inv.hero.cta}
            </a>
            <button className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              {inv.hero.secondaryCta}
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-terra-400 mb-4">INVESTMENT OPPORTUNITY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Proyecto Salvaje: Where Investment Meets Regeneration
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {inv.pricing?.subtitle || "Secure your place in a unique regenerative community with exceptional growth potential. Phase 1 lots available now at pre-construction pricing."}
            </p>
          </div>

          {/* 4 Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inv.pricing?.cards.map((card: any, index: number) => {
              const icons = [DollarSign, Grid, TrendingUp, BarChart3];
              const Icon = icons[index];
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-sage-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-8 h-full flex flex-col">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-terra-500/20 to-sage-500/20 border border-terra-500/30 mb-6 mx-auto">
                      <Icon className="w-7 h-7 text-terra-400" />
                    </div>
                    <p className="text-xs font-bold tracking-widest text-gray-400 mb-3 text-center">
                      {card.label}
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
                      {card.value}
                    </p>
                    <p className="text-sm text-gray-400 text-center">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{inv.location.title}</h2>
            <p className="text-xl text-sage-300 mb-6">{inv.location.subtitle}</p>
            <p className="text-gray-400 max-w-3xl mx-auto">{inv.location.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Property Aerial View */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-sage-500/20 overflow-hidden">
                <img
                  src="/images/property/property-screenshot-01.png"
                  alt="Aerial view of Proyecto Salvaje property"
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-sage-400" />
                    <p className="text-lg text-white font-semibold">{inv.location.mapTitle}</p>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">Aerial view of the property</p>
                </div>
              </div>
            </div>

            {/* Location Highlights */}
            <div className="space-y-4">
              {inv.location.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg border border-sage-500/20">
                  <Check className="w-5 h-5 text-sage-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}

              {/* Topographic Map Download */}
              <div className="mt-6">
                <a
                  href="/images/property/topographic-map.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-terra-500 to-sage-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-terra-500/50 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>View Topographic Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phased Development */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-earth-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{inv.development.title}</h2>
            <p className="text-xl text-terra-300 mb-6">{inv.development.subtitle}</p>
            <p className="text-gray-400 max-w-3xl mx-auto">{inv.development.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inv.development.phases.map((phase: any, index: number) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-sage-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-terra-400">{phase.number}</span>
                    <span className="text-xs px-3 py-1 bg-terra-500/20 text-terra-300 rounded-full">{phase.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-sm text-sage-400 mb-3">{phase.period}</p>
                  <p className="text-sm text-gray-400 mb-4">{phase.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-lg font-bold text-terra-300">{phase.price}</p>
                    <p className="text-xs text-gray-500">{phase.availability}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{inv.packages.title}</h2>
            <p className="text-xl text-sage-300 mb-6">{inv.packages.subtitle}</p>
            <p className="text-gray-400 max-w-3xl mx-auto">{inv.packages.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {inv.packages.items.map((pkg: any, index: number) => (
              <div key={index} className={`relative group ${pkg.popular ? 'md:-mt-8' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-terra-500 to-sage-500 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-terra-500 rounded-2xl blur opacity-20"></div>
                <div className={`relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border ${pkg.popular ? 'border-terra-500/40' : 'border-sage-500/20'} p-8 h-full flex flex-col`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                  <p className="text-3xl font-bold text-terra-400 mb-4">{pkg.price}</p>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {pkg.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-sage-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400 mb-1">ROI Projection</p>
                    <p className="text-lg font-bold text-sage-300 mb-2">{pkg.roi}</p>
                    <p className="text-xs text-gray-500">{pkg.timeline}</p>
                  </div>

                  <a
                    href="#contact"
                    className={`mt-6 w-full py-3 rounded-lg font-semibold text-center transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-terra-500 to-sage-500 text-white hover:shadow-lg hover:shadow-terra-500/50'
                        : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appreciation Potential */}
      <section className="py-20 px-4 bg-gradient-to-b from-earth-900/20 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{inv.appreciation.title}</h2>
            <p className="text-xl text-terra-300 mb-6">{inv.appreciation.subtitle}</p>
            <p className="text-gray-400 max-w-3xl mx-auto">{inv.appreciation.intro}</p>
          </div>

          {/* Projection Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">{inv.appreciation.projection.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {inv.appreciation.projection.phases.map((phase: any, index: number) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-sage-500 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-terra-500/20 p-6 text-center">
                    <p className="text-sm text-gray-400 mb-2">{phase.phase}</p>
                    <p className="text-2xl font-bold text-terra-300 mb-2">{phase.price}</p>
                    <p className="text-sm text-gray-500">{phase.totalLot}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Factors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inv.appreciation.factors.items.map((factor: any, index: number) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-sage-500 to-terra-500 rounded-xl blur opacity-20"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-sage-500/20 p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{factor.title}</h4>
                  <p className="text-sm text-gray-400">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{inv.infrastructure.title}</h2>
            <p className="text-xl text-sage-300 mb-6">{inv.infrastructure.subtitle}</p>
            <p className="text-gray-400 max-w-3xl mx-auto">{inv.infrastructure.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {inv.infrastructure.included.map((category: any, index: number) => {
              const icons = [Shield, Droplet, Mountain, Users];
              const Icon = icons[index];
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-terra-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-8 h-8 text-sage-400" />
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-sage-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clubhouse Option */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-terra-600/20 via-sage-600/20 to-earth-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-terra-900/30 via-sage-900/30 to-earth-900/30 backdrop-blur-xl rounded-3xl border border-terra-500/30 p-12">
              <div className="flex items-start gap-4 mb-6">
                <Home className="w-12 h-12 text-terra-400" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{inv.infrastructure.clubhouse.title}</h3>
                  <p className="text-terra-300 text-xl font-bold">{inv.infrastructure.clubhouse.price}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{inv.infrastructure.clubhouse.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {inv.infrastructure.clubhouse.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sage-400" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">{inv.infrastructure.clubhouse.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-earth-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{inv.guidelines.title}</h2>
            <p className="text-xl text-terra-300 mb-6">{inv.guidelines.subtitle}</p>
            <p className="text-gray-400 max-w-3xl mx-auto">{inv.guidelines.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Permitted */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-terra-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6 text-sage-400" />
                  {inv.guidelines.permitted.title}
                </h3>
                <ul className="space-y-3">
                  {inv.guidelines.permitted.items.map((item: string, index: number) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-sage-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Restricted */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-earth-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-terra-400" />
                  {inv.guidelines.restricted.title}
                </h3>
                <ul className="space-y-3">
                  {inv.guidelines.restricted.items.map((item: string, index: number) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-terra-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Building */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-earth-500 to-sage-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-earth-500/20 p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Home className="w-6 h-6 text-earth-400" />
                  {inv.guidelines.building.title}
                </h3>
                <ul className="space-y-3">
                  {inv.guidelines.building.items.map((item: string, index: number) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-earth-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Governance Note */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8">
              <h4 className="text-lg font-bold text-white mb-3">{inv.guidelines.governance.title}</h4>
              <p className="text-gray-400 mb-2">{inv.guidelines.governance.description}</p>
              <p className="text-sm text-sage-300 italic">{inv.guidelines.governance.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Support */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{inv.legal.title}</h2>
            <p className="text-xl text-terra-300 mb-6">{inv.legal.subtitle}</p>
            <p className="text-gray-400 max-w-3xl mx-auto">{inv.legal.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {inv.legal.services.items.map((service: any, index: number) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-terra-500 to-sage-500 rounded-xl blur opacity-20"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-terra-500/20 p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fideicomiso */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-terra-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8">
                <h3 className="text-xl font-bold text-white mb-4">{inv.legal.fideicomiso.title}</h3>
                <p className="text-gray-400 mb-6">{inv.legal.fideicomiso.description}</p>
                <ul className="space-y-3">
                  {inv.legal.fideicomiso.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-sage-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* DAO Transparency */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-earth-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-8">
                <h3 className="text-xl font-bold text-white mb-4">{inv.legal.transparency.title}</h3>
                <p className="text-gray-400 mb-6">{inv.legal.transparency.description}</p>
                <ul className="space-y-3">
                  {inv.legal.transparency.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-terra-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Gallery */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-earth-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Explore the Property</h2>
            <p className="text-xl text-sage-300 mb-6">Visual Tour of the Land</p>
            <p className="text-gray-400 max-w-3xl mx-auto">See the beauty and potential of Proyecto Salvaje through aerial views and on-site photography.</p>
          </div>

          {/* Featured Aerial Views + Topographic View */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-terra-500 to-sage-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
                  <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-terra-500/20 overflow-hidden group-hover:border-terra-500/40 transition-all">
                    <img
                      src={`/images/property/property-screenshot-0${num}.png`}
                      alt={`Aerial view ${num} of investment property`}
                      className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              {/* Add topographic view as 6th image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-sage-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
                <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-sage-500/20 overflow-hidden group-hover:border-sage-500/40 transition-all">
                  <img
                    src="/images/property/property-photo-04.jpg"
                    alt="Topographic view of property"
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Video Embed */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Video Tour</h3>
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-sage-500 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-terra-500/30 overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/SYMMEFsQ_-g?autoplay=1&mute=1&loop=1&playlist=SYMMEFsQ_-g&controls=1&modestbranding=1&rel=0&showinfo=0"
                    title="Proyecto Salvaje Property Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Topographic Map Download */}
          <div className="text-center">
            <a
              href="/images/property/topographic-map.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sage-500 to-earth-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-sage-500/50 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download Full Topographic Map</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-earth-900/20 to-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{inv.contact.title}</h2>
            <p className="text-xl text-sage-300 mb-6">{inv.contact.subtitle}</p>
            <p className="text-gray-400">{inv.contact.description}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-sage-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-terra-500/20 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">{inv.contact.form.name}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sage-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">{inv.contact.form.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sage-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">{inv.contact.form.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sage-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">{inv.contact.form.citizenship}</label>
                    <input
                      type="text"
                      name="citizenship"
                      value={formData.citizenship}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sage-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">{inv.contact.form.package}</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white focus:outline-none focus:border-sage-500 transition-colors"
                    >
                      {Object.entries(inv.contact.form.packageOptions).map(([key, value]) => (
                        <option key={key} value={key}>{value as string}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">{inv.contact.form.visit}</label>
                    <input
                      type="date"
                      name="visit"
                      value={formData.visit}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white focus:outline-none focus:border-sage-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{inv.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sage-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-terra-500 to-sage-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-terra-500/50 transform hover:scale-[1.02] transition-all"
                >
                  <span>{inv.contact.form.submit}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-sage-300">{inv.contact.info.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="text-sage-300">{inv.contact.info.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-sage-300">{inv.contact.info.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl text-center">
          <Link to="/" className="inline-flex items-center gap-3 mb-4">
            <Leaf className="w-8 h-8 text-sage-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent">
              Proyecto Salvaje
            </span>
          </Link>
          <p className="text-sm text-gray-600 mb-4">© 2025 Proyecto Salvaje. All rights reserved.</p>
          <Link to="/" className="text-sm text-sage-400 hover:text-sage-300 transition-colors">
            Return to Main Site
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default InvestmentPage;
