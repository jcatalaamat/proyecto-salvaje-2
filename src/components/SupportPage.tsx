import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageCircle, Globe, HelpCircle, Book, Users } from 'lucide-react';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';

// Extend translations with support page content
const supportTranslations = {
  en: {
    ...enTranslations,
    support: {
      title: "How can we help?",
      subtitle: "Get support and technical assistance",
      backToHome: "Back to Home",
      sections: {
        email: {
          title: "Email Support",
          description: "Send us an email and we'll get back to you within 24 hours",
          action: "hello@astralamat.com"
        },
        faq: {
          title: "Frequently Asked Questions",
          description: "Find answers to common questions",
          items: [
            {
              q: "What services do you offer?",
              a: "I offer full-stack development, cloud infrastructure architecture, AI/ML integration, and technical consulting for startups and enterprises."
            },
            {
              q: "What's your availability for new projects?",
              a: "I'm currently available for select consulting engagements and project collaborations. Contact me to discuss your specific needs."
            },
            {
              q: "What technologies do you specialize in?",
              a: "I specialize in React, TypeScript, Node.js, Python, AWS, and modern web technologies. I'm also experienced in AI/ML integration and cloud architecture."
            },
            {
              q: "Do you work with startups?",
              a: "Yes! I have extensive experience working with startups, from early-stage MVPs to scaling production systems."
            }
          ]
        },
        community: {
          title: "Connect & Collaborate",
          description: "Let's discuss your next project or explore collaboration opportunities"
        },
        docs: {
          title: "Case Studies & Portfolio",
          description: "Explore my work and technical documentation"
        }
      }
    }
  },
  es: {
    ...esTranslations,
    support: {
      title: "¿Cómo podemos ayudarte?",
      subtitle: "Obtén soporte y asistencia técnica",
      backToHome: "Volver al Inicio",
      sections: {
        email: {
          title: "Soporte por Email",
          description: "Envíanos un email y te responderemos en 24 horas",
          action: "hello@astralamat.com"
        },
        faq: {
          title: "Preguntas Frecuentes",
          description: "Encuentra respuestas a preguntas comunes",
          items: [
            {
              q: "¿Qué servicios ofreces?",
              a: "Ofrezco desarrollo full-stack, arquitectura de infraestructura en la nube, integración de IA/ML y consultoría técnica para startups y empresas."
            },
            {
              q: "¿Cuál es tu disponibilidad para nuevos proyectos?",
              a: "Actualmente estoy disponible para proyectos de consultoría selectos y colaboraciones. Contáctame para discutir tus necesidades específicas."
            },
            {
              q: "¿En qué tecnologías te especializas?",
              a: "Me especializo en React, TypeScript, Node.js, Python, AWS y tecnologías web modernas. También tengo experiencia en integración de IA/ML y arquitectura en la nube."
            },
            {
              q: "¿Trabajas con startups?",
              a: "¡Sí! Tengo amplia experiencia trabajando con startups, desde MVPs en etapas tempranas hasta escalar sistemas en producción."
            }
          ]
        },
        community: {
          title: "Conectar y Colaborar",
          description: "Discutamos tu próximo proyecto o exploremos oportunidades de colaboración"
        },
        docs: {
          title: "Casos de Estudio y Portfolio",
          description: "Explora mi trabajo y documentación técnica"
        }
      }
    }
  }
};

export default function SupportPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t = supportTranslations[language];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated mesh background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
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
        {/* Back Button */}
        <div className="fixed top-4 left-4 z-50">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{t.support.backToHome}</span>
          </Link>
        </div>

        {/* Language Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-16 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.support.title}
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              {t.support.subtitle}
            </p>
          </div>
        </div>

        {/* Support Options Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Email Support */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{t.support.sections.email.title}</h3>
                    <p className="text-gray-400 mb-4">{t.support.sections.email.description}</p>
                    <a
                      href={`mailto:${t.support.sections.email.action}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all"
                    >
                      {t.support.sections.email.action}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{t.support.sections.faq.title}</h3>
                    <p className="text-gray-400">{t.support.sections.faq.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {t.support.sections.faq.items.map((item, index) => (
                    <div key={index} className="bg-black/30 rounded-xl border border-white/5 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all"
                      >
                        <span className="font-semibold text-white">{item.q}</span>
                        <MessageCircle className={`w-5 h-5 text-blue-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === index && (
                        <div className="px-6 py-4 border-t border-white/5 bg-white/5">
                          <p className="text-gray-400">{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Support Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Community */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t.support.sections.community.title}</h3>
                  <p className="text-gray-400">{t.support.sections.community.description}</p>
                </div>
              </div>

              {/* Documentation */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <Book className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t.support.sections.docs.title}</h3>
                  <p className="text-gray-400">{t.support.sections.docs.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500">
              {t.footer.made}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
