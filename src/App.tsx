import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { Sparkles, Globe, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import OfferingsSection from './components/OfferingsSection';
import TransformationStages from './components/TransformationStages';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ResourcesSection from './components/ResourcesSection';
import NewsletterSection from './components/NewsletterSection';

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
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.15), transparent 40%)`
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
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
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
                <Sparkles className="w-8 h-8 text-orange-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Astral Integration
                </span>
              </div>

              {/* Nav Links - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => scrollToSection('offerings')} className="text-gray-400 hover:text-white transition-colors">
                  {t.navigation.offerings}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  {t.navigation.about}
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">
                  {t.navigation.testimonials}
                </button>
                <button onClick={() => scrollToSection('booking')} className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                  {t.navigation.booking}
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
              <span className="inline-block animate-fadeIn bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent" style={{
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

            {/* Tagline */}
            <p className="text-lg text-gray-500 mb-12">
              {t.hero.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => scrollToSection('booking')}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all flex items-center gap-3"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('offerings')}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                {t.hero.secondaryCta}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <TrendingUp className="w-8 h-8 text-orange-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{t.hero.stats.transformations.split(' ')[0]}</div>
                  <div className="text-sm text-gray-500">{t.hero.stats.transformations.split(' ').slice(1).join(' ')}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Clock className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{t.hero.stats.sessions.split(' ')[0]}</div>
                  <div className="text-sm text-gray-500">{t.hero.stats.sessions.split(' ').slice(1).join(' ')}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Users className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{language === 'es' ? 'Linajes' : 'Lineages'}</div>
                  <div className="text-sm text-gray-500">{t.hero.stats.lineages}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Sections */}
        <OfferingsSection language={language} translations={t} />
        <TransformationStages language={language} translations={t} />
        <AboutSection language={language} translations={t} />
        <TestimonialsSection language={language} translations={t} />
        <BookingSection language={language} translations={t} />
        <ResourcesSection language={language} translations={t} />
        <NewsletterSection language={language} translations={t} />

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-8">
              {/* Logo */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-orange-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Astral Integration
                </span>
              </div>

              {/* Tagline */}
              <p className="text-gray-500 text-lg">
                {t.footer.tagline}
              </p>

              {/* Email */}
              <p className="text-sm">
                <a href={`mailto:${t.footer.email}`} className="text-orange-400 hover:text-orange-300 transition-colors">
                  {t.footer.email}
                </a>
              </p>

              {/* Social */}
              <div className="flex items-center justify-center gap-6 text-sm">
                <a href={`https://instagram.com/${t.footer.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Instagram
                </a>
                <span className="text-gray-700">•</span>
                <a href={`https://${t.footer.social.bio}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Bio Link
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center justify-center gap-6 text-sm mb-8">
              <Link to="/support" className="text-gray-400 hover:text-orange-400 transition-colors">
                Support
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy
              </Link>
            </div>

            {/* Copyright & Disclaimer */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                {t.footer.made}
              </p>
              <p className="text-xs text-gray-700">
                {t.footer.disclaimer}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Event Route Component
function EventRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <EventPreview eventId={id || ''} language={language} />;
}

// Place Route Component
function PlaceRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <PlacePreview placeId={id || ''} language={language} />;
}

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event/:id" element={<EventRoute />} />
        <Route path="/place/:id" element={<PlaceRoute />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
