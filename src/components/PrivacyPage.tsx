import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Shield, Lock, Eye, Database, Users, Bell } from 'lucide-react';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';

// Extend translations with privacy page content
const privacyTranslations = {
  en: {
    ...enTranslations,
    privacy: {
      title: "Privacy Policy",
      subtitle: "How we protect and handle your data",
      backToHome: "Back to Home",
      lastUpdated: "Last Updated: October 2025",
      sections: [
        {
          icon: "shield",
          title: "Our Commitment",
          content: [
            "At Astral Amat, your privacy is fundamental. I'm committed to being transparent about what data is collected and how it's used.",
            "This policy explains practices regarding your personal information when you use this website and contact forms."
          ]
        },
        {
          icon: "database",
          title: "Information Collected",
          content: [
            "Contact Information: When you reach out via email or contact forms, I collect your email address and any information you provide to respond to your inquiry.",
            "Usage Data: Basic analytics are collected to improve the website, such as page views and navigation patterns. This data is anonymized.",
            "No Third-Party Tracking: This site does not use invasive tracking or sell data to third parties."
          ]
        },
        {
          icon: "lock",
          title: "How Information is Used",
          content: [
            "To respond to your inquiries and provide requested services",
            "To improve website functionality and user experience",
            "To maintain security and prevent abuse",
            "Your personal data is never sold to third parties",
            "Data is retained only as long as necessary"
          ]
        },
        {
          icon: "eye",
          title: "Data Sharing",
          content: [
            "Personal information is not sold, rented, or shared with third parties for marketing purposes.",
            "Anonymized analytics may be used to improve services.",
            "Trusted service providers (email, hosting) are used with appropriate confidentiality agreements."
          ]
        },
        {
          icon: "users",
          title: "Your Rights",
          content: [
            "Access: You can request information about what personal data is stored",
            "Correction: You can request corrections to your information",
            "Deletion: You can request deletion of your data at any time",
            "Opt-out: You can unsubscribe from any communications",
            "Contact hello@astralamat.com to exercise these rights"
          ]
        },
        {
          icon: "bell",
          title: "Cookies and Tracking",
          content: [
            "Essential cookies are used for basic functionality.",
            "Analytics help understand how visitors use the site to make improvements.",
            "You can disable cookies in your browser settings, though some features may not work properly."
          ]
        },
        {
          icon: "shield",
          title: "Security",
          content: [
            "Industry-standard security measures protect your data.",
            "Data is encrypted in transit using HTTPS.",
            "Security practices are regularly reviewed and updated.",
            "However, no internet transmission method is 100% secure, and absolute security cannot be guaranteed."
          ]
        }
      ],
      contact: {
        title: "Questions?",
        description: "If you have any questions about this Privacy Policy, please contact:",
        email: "hello@astralamat.com"
      }
    }
  },
  es: {
    ...esTranslations,
    privacy: {
      title: "Política de Privacidad",
      subtitle: "Cómo protegemos y manejamos tus datos",
      backToHome: "Volver al Inicio",
      lastUpdated: "Última Actualización: Octubre 2025",
      sections: [
        {
          icon: "shield",
          title: "Nuestro Compromiso",
          content: [
            "En Astral Amat, tu privacidad es fundamental. Me comprometo a ser transparente sobre qué datos se recopilan y cómo se usan.",
            "Esta política explica las prácticas con respecto a tu información personal cuando usas este sitio web y formularios de contacto."
          ]
        },
        {
          icon: "database",
          title: "Información Recopilada",
          content: [
            "Información de Contacto: Cuando te comunicas por email o formularios de contacto, recopilo tu dirección de correo electrónico y la información que proporciones para responder a tu consulta.",
            "Datos de Uso: Se recopilan análisis básicos para mejorar el sitio web, como vistas de página y patrones de navegación. Estos datos son anónimos.",
            "Sin Seguimiento de Terceros: Este sitio no usa seguimiento invasivo ni vende datos a terceros."
          ]
        },
        {
          icon: "lock",
          title: "Cómo se Usa la Información",
          content: [
            "Para responder a tus consultas y proporcionar servicios solicitados",
            "Para mejorar la funcionalidad del sitio web y la experiencia del usuario",
            "Para mantener la seguridad y prevenir abusos",
            "Tus datos personales nunca se venden a terceros",
            "Los datos se conservan solo el tiempo necesario"
          ]
        },
        {
          icon: "eye",
          title: "Compartir Datos",
          content: [
            "La información personal no se vende, alquila ni comparte con terceros para fines de marketing.",
            "Los análisis anónimos pueden usarse para mejorar los servicios.",
            "Se utilizan proveedores de servicios confiables (email, hosting) con acuerdos de confidencialidad apropiados."
          ]
        },
        {
          icon: "users",
          title: "Tus Derechos",
          content: [
            "Acceso: Puedes solicitar información sobre qué datos personales se almacenan",
            "Corrección: Puedes solicitar correcciones a tu información",
            "Eliminación: Puedes solicitar la eliminación de tus datos en cualquier momento",
            "Cancelación: Puedes cancelar la suscripción a cualquier comunicación",
            "Contacta hello@astralamat.com para ejercer estos derechos"
          ]
        },
        {
          icon: "bell",
          title: "Cookies y Seguimiento",
          content: [
            "Se utilizan cookies esenciales para la funcionalidad básica.",
            "Los análisis ayudan a entender cómo los visitantes usan el sitio para hacer mejoras.",
            "Puedes deshabilitar las cookies en la configuración de tu navegador, aunque algunas funciones pueden no funcionar correctamente."
          ]
        },
        {
          icon: "shield",
          title: "Seguridad",
          content: [
            "Se usan medidas de seguridad estándar de la industria para proteger tus datos.",
            "Los datos se encriptan en tránsito usando HTTPS.",
            "Las prácticas de seguridad se revisan y actualizan regularmente.",
            "Sin embargo, ningún método de transmisión por internet es 100% seguro, y no se puede garantizar seguridad absoluta."
          ]
        }
      ],
      contact: {
        title: "¿Preguntas?",
        description: "Si tienes alguna pregunta sobre esta Política de Privacidad, contacta:",
        email: "hello@astralamat.com"
      }
    }
  }
};

const iconMap = {
  shield: Shield,
  lock: Lock,
  eye: Eye,
  database: Database,
  users: Users,
  bell: Bell
};

export default function PrivacyPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const t = privacyTranslations[language];

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
            <span className="text-sm font-medium">{t.privacy.backToHome}</span>
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
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.privacy.title}
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              {t.privacy.subtitle}
            </p>
            <p className="text-sm text-gray-500">
              {t.privacy.lastUpdated}
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {t.privacy.sections.map((section, index) => {
              const IconComponent = iconMap[section.icon as keyof typeof iconMap] || Shield;
              const gradients = [
                'from-cyan-500 to-blue-500',
                'from-blue-500 to-purple-500',
                'from-purple-500 to-indigo-500',
                'from-indigo-500 to-cyan-500',
                'from-cyan-500 to-teal-500',
                'from-teal-500 to-blue-500',
                'from-blue-500 to-cyan-500'
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                  <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                        <div className="space-y-3">
                          {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-gray-400 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Contact Section */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t.privacy.contact.title}</h3>
                <p className="text-gray-400 mb-4">{t.privacy.contact.description}</p>
                <a
                  href={`mailto:${t.privacy.contact.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all"
                >
                  {t.privacy.contact.email}
                </a>
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
