import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const directEmail = 'mufidmb085@gmail.com';
  const whatsappNumber = '+62 831-9851-2127';
  const whatsappUrl = 'https://wa.me/6283198512127?text=Hi%20Mufid,%20I%20would%20like%20to%20discuss%20a%20graphic%20design%20project';

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Poster & Flyer',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Direct email button handler (guaranteed to trigger an action in any browser/iframe)
  const handleOpenEmailClient = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(`Design Inquiry - ${formData.name || 'New Project'}`);
    const bodyContent = formData.message 
      ? `Hi Mufid,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Brief:\n${formData.message}`
      : 'Hi Mufid,\n\nI would like to discuss a graphic design project with you.';
    const body = encodeURIComponent(bodyContent);

    // 1. Try opening Gmail web composer in a new tab (reliable across all browsers and devices)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${directEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    // 2. Also invoke native mailto for users with desktop clients (Apple Mail, Outlook, Thunderbird)
    const mailtoUrl = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    // Prepare text summary and copy to clipboard so user never loses it
    const summary = `Design Inquiry for Mufid (MXT)
Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Project Details:
${formData.message}`;

    navigator.clipboard.writeText(summary);

    // Trigger email client action
    handleOpenEmailClient();

    // Show confirmation view
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface-container-low/50 border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            <span>Direct Channels & Inquiry</span>
            <span aria-hidden="true" className="text-outline">·</span>
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface leading-tight mb-4">
            Let’s start a conversation about your project.
          </h2>

          <p className="text-base text-secondary leading-relaxed">
            Reach out via WhatsApp for fast responses or send your project details through the email form below.
          </p>
        </div>

        {/* 2-Column Layout: Direct Action Channels on Left, Clean Email Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Direct WhatsApp Action */}
            <div className="p-7 rounded-3xl bg-surface-container-lowest border border-outline-variant shadow-sm hover:border-primary-container transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container/40 text-primary flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Fastest Response
                </span>
              </div>

              <h3 className="text-xl font-bold text-on-surface mb-2">
                WhatsApp Chat
              </h3>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-5">
                Quickest way to brainstorm ideas, ask for availability, check deadlines, or get immediate answers.
              </p>

              <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/50 mb-5">
                <p className="text-[11px] text-outline mb-0.5">Phone / WhatsApp</p>
                <p className="text-sm font-bold text-on-surface tracking-wide">{whatsappNumber}</p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 text-xs sm:text-sm font-bold text-on-primary bg-primary hover:bg-primary/95 active:scale-[0.99] rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
                title="Chat directly on WhatsApp"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2: Quick Email Copy Card */}
            <div className="p-7 rounded-3xl bg-surface-container-lowest border border-outline-variant shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-container/30 text-primary flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  Direct Inbox
                </span>
              </div>

              <h3 className="text-xl font-bold text-on-surface mb-2">
                Direct Email Address
              </h3>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-5">
                Send attachments, brand guidelines, RFP documents, or comprehensive project briefs directly.
              </p>

              <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/50 mb-5 flex items-center justify-between gap-2">
                <div className="truncate">
                  <p className="text-[11px] text-outline mb-0.5">Primary Email</p>
                  <p className="text-sm font-bold text-on-surface tracking-wide truncate">{directEmail}</p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-primary transition-colors flex items-center gap-1.5 shrink-0 focus-visible:outline-2 focus-visible:outline-primary"
                  title="Copy email address to clipboard"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-primary" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={handleOpenEmailClient}
                className="w-full py-3.5 px-5 text-xs sm:text-sm font-bold text-primary bg-surface-container-high hover:bg-surface-container-highest active:scale-[0.99] rounded-2xl border border-outline-variant transition-all flex items-center justify-center gap-2"
                title="Open your email app to write to Mufid"
              >
                <span>Write Direct Email</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Working Email Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-7 sm:p-10 rounded-3xl border border-outline-variant shadow-sm">
              
              {submitted ? (
                <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-primary-container/30 text-primary flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-2">
                    Inquiry Prepared & Email Opened!
                  </h3>

                  <p className="text-sm text-secondary max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-on-surface">{formData.name}</span>. Your message text has also been copied to your clipboard so you won't lose it if your email client takes a moment to load.
                  </p>

                  {/* Fallback Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <button
                      type="button"
                      onClick={() => handleOpenEmailClient()}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-on-primary bg-primary hover:bg-primary/95 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                      title="Launch Email Client Again"
                    >
                      <span>Reopen Email App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(formData.message);
                        setCopiedSummary(true);
                        setTimeout(() => setCopiedSummary(false), 2000);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-primary bg-surface-container hover:bg-surface-container-high rounded-xl transition-colors flex items-center justify-center gap-2"
                      title="Copy message to clipboard"
                    >
                      {copiedSummary ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSummary ? 'Message Copied!' : 'Copy Message Text'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Poster & Flyer',
                        message: ''
                      });
                    }}
                    className="text-xs text-secondary hover:text-primary transition-colors underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="border-b border-outline-variant/60 pb-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-on-surface">
                      Send an Email Inquiry
                    </h3>
                    <p className="text-xs text-secondary mt-1">
                      Fill out your project details below to open your email client pre-filled and ready to send.
                    </p>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Your Name / Brand <span className="text-primary">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson or Brand Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-outline-variant focus:border-primary text-sm text-on-surface placeholder:text-outline transition-colors outline-none"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Your Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-outline-variant focus:border-primary text-sm text-on-surface placeholder:text-outline transition-colors outline-none"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="inquiry-service" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Service Needed
                    </label>
                    <select
                      id="inquiry-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-outline-variant focus:border-primary text-sm text-on-surface transition-colors outline-none cursor-pointer"
                    >
                      <option value="Poster & Flyer">Poster & Flyer Design</option>
                      <option value="Social Media Design">Social Media Design</option>
                      <option value="Banner Design">Banner Design</option>
                      <option value="Event Visuals">Event Visuals</option>
                      <option value="Promotional Design">Promotional Campaign Design</option>
                      <option value="Branding & Visual Identity">Branding & Visual Identity</option>
                    </select>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Project Brief / Details <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      required
                      placeholder="Tell me a bit about your product, expected deliverables, timeline, or links to references..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-outline-variant focus:border-primary text-sm text-on-surface placeholder:text-outline transition-colors outline-none resize-none"
                    />
                  </div>

                  {/* Action Button with Clean Title and Guaranteed Action */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 text-sm font-bold text-on-primary bg-primary hover:bg-primary/95 active:scale-[0.99] rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
                    title="Send Email Inquiry"
                  >
                    <span>Send Email Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-outline">
                    Clicking sends your brief and pre-populates your email client to <strong className="text-secondary">{directEmail}</strong>.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Social Links Strip */}
        <div className="pt-8 border-t border-outline-variant/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-1">
              Social Channels & Profiles
            </h4>
            <p className="text-xs text-secondary">
              Follow along or view creative updates across platforms:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://instagram.com/mufidmb38"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant text-secondary hover:text-primary hover:border-primary transition-colors flex items-center gap-2 text-xs font-semibold"
            >
              <span>Instagram (@mufidmb38)</span>
            </a>

            <a
              href="https://github.com/mufidmb48"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant text-secondary hover:text-primary hover:border-primary transition-colors flex items-center gap-2 text-xs font-semibold"
            >
              <span>GitHub (mufidmb48)</span>
            </a>

            <a
              href="https://facebook.com/mufidmb48"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant text-secondary hover:text-primary hover:border-primary transition-colors flex items-center gap-2 text-xs font-semibold"
            >
              <span>Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
