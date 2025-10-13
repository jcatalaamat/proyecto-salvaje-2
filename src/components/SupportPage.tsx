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
      subtitle: "Get in touch with Proyecto Salvaje",
      backToHome: "Back to Home",
      sections: {
        email: {
          title: "Email Us",
          description: "Send us an email and we'll get back to you as soon as possible",
          action: "info@proyectosalvaje.com"
        },
        faq: {
          title: "Frequently Asked Questions",
          description: "Find answers to common questions",
          items: [
            {
              q: "What is Proyecto Salvaje?",
              a: "Proyecto Salvaje is a regenerative land development project in Mazunte, Oaxaca, Mexico. We're creating an ecological community focused on sustainable living, permaculture, and indigenous wisdom integration."
            },
            {
              q: "How can I get involved?",
              a: "There are multiple ways to participate: as a founding land steward, aligned investor, community contributor, or future visitor. Visit our homepage to learn more about each path."
            },
            {
              q: "Where is the project located?",
              a: "We're located in Mazunte, Oaxaca, Mexico - a beautiful coastal region known for its ecological diversity and indigenous heritage."
            },
            {
              q: "Can I visit the property?",
              a: "Yes! We welcome visitors who are interested in learning about the project. Please contact us to arrange a visit."
            }
          ]
        },
        community: {
          title: "Join Our Community",
          description: "Connect with like-minded individuals building a regenerative future together"
        },
        docs: {
          title: "Project Information",
          description: "Learn more about our vision, timeline, and development plans"
        }
      }
    }
  },
  es: {
    ...esTranslations,
    support: {
      title: "¿Cómo podemos ayudarte?",
      subtitle: "Comunícate con Proyecto Salvaje",
      backToHome: "Volver al Inicio",
      sections: {
        email: {
          title: "Envíanos un Email",
          description: "Envíanos un correo y te responderemos lo antes posible",
          action: "info@proyectosalvaje.com"
        },
        faq: {
          title: "Preguntas Frecuentes",
          description: "Encuentra respuestas a preguntas comunes",
          items: [
            {
              q: "¿Qué es Proyecto Salvaje?",
              a: "Proyecto Salvaje es un proyecto de desarrollo de tierra regenerativa en Mazunte, Oaxaca, México. Estamos creando una comunidad ecológica enfocada en vida sostenible, permacultura e integración de sabiduría indígena."
            },
            {
              q: "¿Cómo puedo participar?",
              a: "Hay múltiples formas de participar: como custodio fundador de la tierra, inversionista alineado, colaborador comunitario o futuro visitante. Visita nuestra página principal para aprender más sobre cada camino."
            },
            {
              q: "¿Dónde está ubicado el proyecto?",
              a: "Estamos ubicados en Mazunte, Oaxaca, México - una hermosa región costera conocida por su diversidad ecológica y herencia indígena."
            },
            {
              q: "¿Puedo visitar la propiedad?",
              a: "¡Sí! Damos la bienvenida a visitantes interesados en conocer el proyecto. Por favor contáctanos para organizar una visita."
            }
          ]
        },
        community: {
          title: "Únete a Nuestra Comunidad",
          description: "Conéctate con personas afines construyendo un futuro regenerativo juntos"
        },
        docs: {
          title: "Información del Proyecto",
          description: "Aprende más sobre nuestra visión, cronograma y planes de desarrollo"
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
