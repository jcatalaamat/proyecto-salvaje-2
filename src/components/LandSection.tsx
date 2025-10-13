import { Mountain, Waves, Droplet, Trees, MapPin, Home, Download } from 'lucide-react';

interface LandSectionProps {
  language: 'en' | 'es';
  translations: any;
}

const LandSection = ({ translations }: LandSectionProps) => {
  const t = translations.land;

  const highlightIcons = [Waves, Trees, Droplet, MapPin];

  return (
    <section id="land" className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-terra-400 via-sage-400 to-earth-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-2xl text-terra-300 mb-6 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-4">
            {t.intro}
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl md:text-3xl font-light text-sage-300 italic max-w-4xl mx-auto">
            "{t.quote}"
          </blockquote>
        </div>

        {/* Topographic Map Download */}
        <div className="text-center mb-16">
          <a
            href="/images/property/topographic-map.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-terra-500 to-sage-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-terra-500/50 transition-all"
          >
            <Download className="w-5 h-5" />
            <span>View Topographic Map</span>
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Topography & Access */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-sage-500/30 to-earth-500/30 rounded-2xl blur"></div>
            <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8">
              <div className="mb-6">
                <Mountain className="w-10 h-10 text-sage-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">{t.features.topography.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.features.topography.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-sage-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Location & Community */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-terra-500/30 to-sage-500/30 rounded-2xl blur"></div>
            <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-8">
              <div className="mb-6">
                <MapPin className="w-10 h-10 text-terra-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">{t.features.location.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.features.location.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-terra-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Development Potential */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-earth-500/30 to-terra-500/30 rounded-2xl blur"></div>
            <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-earth-500/20 p-8">
              <div className="mb-6">
                <Home className="w-10 h-10 text-earth-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">{t.features.development.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.features.development.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-earth-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.highlights.map((highlight: any, index: number) => {
            const Icon = highlightIcons[index];
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-sage-500 to-terra-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-sage-500/20 p-6 hover:border-sage-500/40 transition-all">
                  <Icon className="w-8 h-8 text-sage-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Property Photo Gallery */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">{t.gallery.title}</h3>
            <p className="text-xl text-sage-300 mb-6">{t.gallery.subtitle}</p>
            <p className="text-gray-400 max-w-3xl mx-auto">{t.gallery.description}</p>
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
                      alt={`Aerial view ${num} of Proyecto Salvaje land`}
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
                    alt="Topographic view of Proyecto Salvaje"
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Video Embed */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-white mb-8">{t.gallery.videoTitle}</h3>
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-sage-500 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-terra-500/30 overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/SYMMEFsQ_-g?autoplay=1&mute=1&loop=1&playlist=SYMMEFsQ_-g&controls=1&modestbranding=1&rel=0&showinfo=0"
                    title="Proyecto Salvaje Land Tour"
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
              <span>{t.gallery.downloadTopo}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandSection;
