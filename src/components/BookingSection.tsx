import { Calendar, Zap, Clock, AlertCircle } from 'lucide-react';

interface BookingSectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const BookingSection = ({ language, translations }: BookingSectionProps) => {
  const t = translations.booking;

  return (
    <div id="booking" className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
            <div className="relative bg-red-950/30 backdrop-blur-xl rounded-2xl border border-red-500/30 p-4 flex items-center justify-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-semibold">{t.urgency.limited}</span>
            </div>
          </div>
        </div>

        {/* Booking Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Discovery Call */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/10 p-10 hover:border-white/20 transition-all">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-3 text-white">
                {t.discovery.title}
              </h3>

              {/* Free Badge */}
              <div className="inline-block px-4 py-1 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
                <span className="text-green-300 text-sm font-semibold">{t.discovery.free}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t.discovery.description}
              </p>

              {/* Details */}
              <div className="flex items-center gap-2 text-gray-500 mb-8">
                <Clock className="w-4 h-4" />
                <span className="text-sm">30 {language === 'es' ? 'minutos' : 'minutes'}</span>
              </div>

              {/* CTA Button */}
              <button className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all">
                {t.discovery.cta}
              </button>
            </div>
          </div>

          {/* Intensive */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-10 hover:border-purple-500/50 transition-all">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-3 text-white">
                {t.intensive.title}
              </h3>

              {/* Premium Badge */}
              <div className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                <span className="text-purple-300 text-sm font-semibold">{language === 'es' ? 'Elite' : 'Premium'}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t.intensive.description}
              </p>

              {/* Details */}
              <div className="flex items-center gap-2 text-gray-500 mb-8">
                <Clock className="w-4 h-4" />
                <span className="text-sm">3 {language === 'es' ? 'meses' : 'months'}</span>
              </div>

              {/* CTA Button */}
              <button className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all">
                {t.intensive.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
