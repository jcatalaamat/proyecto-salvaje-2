import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Leaf, Globe, Mountain, Droplet, Sprout, TrendingUp } from 'lucide-react';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import VisionSection from './components/VisionSection';
import LandSection from './components/LandSection';
import CommunitySection from './components/CommunitySection';
import IndigenousSection from './components/IndigenousSection';
import JoinCTASection from './components/JoinCTASection';
import ContactSection from './components/ContactSection';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import InvestmentPage from './pages/InvestmentPage';

// Main Landing Page Component
function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const t = language === 'es' ? esTranslations : enTranslations;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(109, 134, 94, 0.15), transparent 40%)`
  };

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

      {/* Mouse spotlight effect */}
      <div className="fixed inset-0 pointer-events-none" style={spotlightStyle}></div>

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
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Leaf className="w-8 h-8 text-sage-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent">
                  Proyecto Salvaje
                </span>
              </div>

              {/* Nav Links - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => scrollToSection('vision')} className="text-gray-400 hover:text-sage-400 transition-colors">
                  {t.navigation.vision}
                </button>
                <button onClick={() => scrollToSection('land')} className="text-gray-400 hover:text-terra-400 transition-colors">
                  {t.navigation.land}
                </button>
                <button onClick={() => scrollToSection('community')} className="text-gray-400 hover:text-sage-400 transition-colors">
                  {t.navigation.community}
                </button>
                <button onClick={() => scrollToSection('join')} className="text-gray-400 hover:text-terra-400 transition-colors">
                  {t.navigation.join}
                </button>
                <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-gradient-to-r from-sage-500 to-terra-500 rounded-full font-semibold hover:shadow-lg hover:shadow-sage-500/50 transition-all">
                  {t.navigation.contact}
                </button>
              </div>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'ES'}</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="inline-block animate-fadeIn bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent" style={{
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite'
              }}>
                {t.hero.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-gray-400 mb-6 max-w-4xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => scrollToSection('join')}
                className="group px-8 py-4 bg-gradient-to-r from-sage-500 via-terra-500 to-sage-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-sage-500/50 transform hover:scale-105 transition-all flex items-center gap-3"
              >
                <span>{t.hero.cta}</span>
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                {t.hero.secondaryCta}
              </button>
              <Link
                to="/invest"
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2"
              >
                {t.hero.tertiaryCta}
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Mountain className="w-8 h-8 text-sage-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{t.hero.stats.land}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Sprout className="w-8 h-8 text-terra-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{t.hero.stats.capacity}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-earth-500 to-sage-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Droplet className="w-8 h-8 text-earth-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{t.hero.stats.water}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Sections */}
        <VisionSection language={language} translations={t} />
        <LandSection language={language} translations={t} />
        <CommunitySection language={language} translations={t} />
        <IndigenousSection language={language} translations={t} />
        <JoinCTASection language={language} translations={t} />
        <ContactSection language={language} translations={t} />

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Logo & Tagline */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-8 h-8 text-sage-400" />
                  <span className="text-xl font-bold bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent">
                    Proyecto Salvaje
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t.footer.tagline}
                </p>
              </div>

              {/* Explore Links */}
              <div>
                <h4 className="text-white font-bold mb-4">{t.footer.explore.title}</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => scrollToSection('vision')} className="text-gray-400 hover:text-sage-400 transition-colors">
                      {t.footer.explore.vision}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('land')} className="text-gray-400 hover:text-sage-400 transition-colors">
                      The Land
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('community')} className="text-gray-400 hover:text-sage-400 transition-colors">
                      {t.footer.explore.practices}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('indigenous')} className="text-gray-400 hover:text-sage-400 transition-colors">
                      {t.footer.explore.integration}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Join Links */}
              <div>
                <h4 className="text-white font-bold mb-4">{t.footer.join.title}</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => scrollToSection('join')} className="text-gray-400 hover:text-terra-400 transition-colors">
                      {t.footer.join.volunteer}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('join')} className="text-gray-400 hover:text-terra-400 transition-colors">
                      {t.footer.join.residency}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-terra-400 transition-colors">
                      {t.footer.join.support}
                    </button>
                  </li>
                  <li>
                    <Link to="/support" className="text-gray-400 hover:text-terra-400 transition-colors">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-gray-400 hover:text-terra-400 transition-colors">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-white/5">
              <p className="text-sm text-gray-600">
                {t.footer.made}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/invest" element={<InvestmentPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
