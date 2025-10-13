import { Star, ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  language: 'en' | 'es';
  translations: any;
}

const TestimonialsSection = ({ language, translations }: TestimonialsSectionProps) => {
  const t = translations.testimonials;

  // Sample testimonials - replace with real data
  const testimonials = [
    {
      quote: language === 'es'
        ? "Trabajar con este proceso cambió completamente mi línea temporal. Liberé patrones ancestrales que ni siquiera sabía que cargaba."
        : "Working with this process completely shifted my timeline. I released ancestral patterns I didn't even know I was carrying.",
      author: "Sarah M.",
      role: language === 'es' ? "Empresaria Consciente" : "Conscious Entrepreneur",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      quote: language === 'es'
        ? "La integración después de mi ceremonia de Bufo fue transformadora. Finalmente entendí mis visiones y las ancle en mi realidad."
        : "The integration after my Bufo ceremony was transformative. I finally understood my visions and anchored them into my reality.",
      author: "Marcus L.",
      role: language === 'es' ? "Buscador Espiritual" : "Spiritual Seeker",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      quote: language === 'es'
        ? "Mi negocio finalmente está alineado con mi propósito del alma. La abundancia fluye de manera que nunca imaginé posible."
        : "My business is finally aligned with my soul's purpose. Abundance flows in ways I never imagined possible.",
      author: "Elena R.",
      role: language === 'es' ? "Sanadora & Coach" : "Healer & Coach",
      gradient: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <div id="testimonials" className="container mx-auto px-4 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`}></div>

              {/* Card */}
              <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-all">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-6 border-t border-white/10">
                  <div className={`font-semibold text-white mb-1 bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all">
            <span>{t.cta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
