import { useState } from 'react';
import { Mail, Send, MapPin, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  language: 'en' | 'es' | 'fr' | 'ca' | 'de';
  translations: any;
}

const ContactSection = ({ translations }: ContactSectionProps) => {
  const t = translations.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create detailed email body with all form information
    const emailBody = encodeURIComponent(
      `Contact Form Submission from proyectosalvaje.com\n\n` +
      `-----------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Interest: ${formData.interest}\n` +
      `-----------------------------------\n\n` +
      `Message:\n${formData.message}\n\n` +
      `-----------------------------------\n` +
      `Sent from: proyectosalvaje.com contact form`
    );

    const emailSubject = encodeURIComponent(
      `Contact Form: ${formData.name} - ${formData.interest}`
    );

    const mailtoLink = `mailto:${t.email}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-earth-900/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-sage-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sage-500 transition-colors"
                    placeholder={t.form.name}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sage-500 transition-colors"
                    placeholder={t.form.email}
                  />
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.form.interest}
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white focus:outline-none focus:border-sage-500 transition-colors"
                  >
                    <option value="general">{t.form.interestOptions.general}</option>
                    <option value="steward">{t.form.interestOptions.steward}</option>
                    <option value="investor">{t.form.interestOptions.investor}</option>
                    <option value="contributor">{t.form.interestOptions.contributor}</option>
                    <option value="visitor">{t.form.interestOptions.visitor}</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-sage-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sage-500 transition-colors resize-none"
                    placeholder={t.form.messagePlaceholder}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-sage-500 to-terra-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-sage-500/50 transform hover:scale-[1.02] transition-all"
                >
                  <span>{t.form.submit}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-sage-500/20 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-sage-500 to-terra-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Email</h3>
                </div>
                <a
                  href={`mailto:${t.email}`}
                  className="text-sage-400 hover:text-sage-300 transition-colors"
                >
                  {t.email}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-green-500/20 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                </div>
                <a
                  href={`https://wa.me/${t.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors block"
                >
                  {t.whatsappText}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-terra-500/20 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-terra-500 to-earth-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Location</h3>
                </div>
                <p className="text-terra-400">{t.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
