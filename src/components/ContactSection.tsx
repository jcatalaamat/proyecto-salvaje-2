import { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  language: 'en' | 'es';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Fallback to mailto if EmailJS is not configured
    if (!serviceId || !templateId || !publicKey ||
        serviceId === 'your_service_id_here' ||
        templateId === 'your_contact_template_id' ||
        publicKey === 'your_public_key_here') {
      console.warn('EmailJS not configured, falling back to mailto');
      const mailtoLink = `mailto:${t.email}?subject=Contact from ${formData.name} - ${formData.interest}&body=${formData.message}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          interest: formData.interest,
          message: formData.message,
          to_email: t.email
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', interest: 'general', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-sage-500 to-terra-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-sage-500/50 transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span>{isSubmitting ? 'Sending...' : t.form.submit}</span>
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-sage-400 bg-sage-500/10 border border-sage-500/20 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or email us directly.</span>
                  </div>
                )}
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
