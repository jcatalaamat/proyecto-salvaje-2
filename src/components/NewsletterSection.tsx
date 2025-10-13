import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

interface NewsletterSectionProps {
  language: 'en' | 'es';
  translations: any;
}

const NewsletterSection = ({ language, translations }: NewsletterSectionProps) => {
  const t = translations.newsletter;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    setLoading(true);

    try {
      const convertKitApiKey = (import.meta as any).env.VITE_CONVERTKIT_API_KEY || 'WL4dvqOgWKNB2eq6RLOflQ';
      const convertKitFormId = (import.meta as any).env.VITE_CONVERTKIT_FORM_ID || '8630317';

      if (convertKitApiKey && convertKitFormId) {
        const response = await fetch(`https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: convertKitApiKey,
            email: email,
            tags: ['astral-integration-newsletter']
          })
        });

        if (response.ok) {
          setSubmitted(true);
          setEmail('');
          setLoading(false);
          return;
        }
      }
      throw new Error('Subscription failed');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitted(true);
      setEmail('');
    }

    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div id="newsletter" className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

          {/* Card */}
          <div className="relative bg-zinc-900/90 backdrop-blur-2xl rounded-3xl border border-white/10 p-12 md:p-16">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                {t.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-2">
                {t.subtitle}
              </p>
              <p className="text-sm text-gray-500">
                {t.frequency}
              </p>
            </div>

            {/* Form or Success */}
            {!submitted ? (
              <div className="max-w-md mx-auto">
                <div className="relative group/input">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl blur opacity-30 group-hover/input:opacity-50 transition"></div>
                  <div className="relative bg-black/50 backdrop-blur-xl p-2 rounded-xl border border-white/10 flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={t.placeholder}
                      className="flex-1 px-6 py-3 bg-transparent border-none focus:outline-none text-white placeholder-gray-600"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={loading || !email}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 flex items-center gap-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span className="hidden sm:inline">{t.cta}</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4 animate-bounce">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {language === 'es' ? '¡Bienvenido al Círculo!' : 'Welcome to the Circle!'}
                </h3>
                <p className="text-gray-400">
                  {language === 'es'
                    ? 'Revisa tu email para confirmar tu suscripción.'
                    : 'Check your email to confirm your subscription.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
