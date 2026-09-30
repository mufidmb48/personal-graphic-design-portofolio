import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const directEmail = 'mufidmb085@gmail.com';
  const whatsappNumber = '+62 831-9851-2127';
  const whatsappUrl = 'https://wa.me/6283198512127?text=Halo%20Mufid,%20saya%20ingin%20berdiskusi%20mengenai%20kebutuhan%20desain%20grafis';

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Desain Poster & Brosur',
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

  // Direct email button handler
  const handleOpenEmailClient = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(`Permintaan Desain - ${formData.name || 'Proyek Baru'}`);
    const bodyContent = formData.message 
      ? `Halo Mufid,\n\nNama/Brand: ${formData.name}\nEmail: ${formData.email}\nLayanan: ${formData.service}\n\nRincian Kebutuhan Proyek:\n${formData.message}`
      : 'Halo Mufid,\n\nSaya ingin berdiskusi mengenai proyek desain grafis dengan Anda.';
    const body = encodeURIComponent(bodyContent);

    // 1. Try opening Gmail web composer
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${directEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    // 2. Also invoke native mailto
    const mailtoUrl = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const summary = `Permintaan Desain untuk Mufid (MXT)
Nama: ${formData.name}
Email: ${formData.email}
Layanan: ${formData.service}
Rincian Proyek:
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
            <span>Saluran Komunikasi Langsung</span>
            <span aria-hidden="true" className="text-outline">·</span>
            <span>Hubungi Saya</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface leading-tight mb-4">
            Mari mulai berdiskusi tentang proyek dan visi Anda.
          </h2>

          <p className="text-base text-secondary leading-relaxed">
            Hubungi via WhatsApp untuk respon tercepat atau kirimkan rincian kebutuhan desain Anda melalui formulir di bawah ini.
          </p>
        </div>

        {/* 2-Column Layout */}
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
                  Respon Tercepat
                </span>
              </div>

              <h3 className="text-xl font-bold text-on-surface mb-2">
                WhatsApp Chat
              </h3>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-5">
                Cara tercepat untuk mendiskusikan konsep, menanyakan ketersediaan jadwal, perkiraan biaya, atau konsultasi langsung.
              </p>

              <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/50 mb-5">
                <p className="text-[11px] text-outline mb-0.5">Telepon / WhatsApp</p>
                <p className="text-sm font-bold text-on-surface tracking-wide">{whatsappNumber}</p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 text-xs sm:text-sm font-bold text-on-primary bg-primary hover:bg-primary/95 active:scale-[0.99] rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                title="Chat langsung di WhatsApp"
              >
                <span>Chat via WhatsApp</span>
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
                  Email Langsung
                </span>
              </div>

              <h3 className="text-xl font-bold text-on-surface mb-2">
                Alamat Email Resmi
              </h3>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-5">
                Kirimkan dokumen TOR, panduan brand (brand guideline), lampiran aset foto, atau brief komprehensif langsung ke inbox.
              </p>

              <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/50 mb-5 flex items-center justify-between gap-2">
                <div className="truncate">
                  <p className="text-[11px] text-outline mb-0.5">Email Utama</p>
                  <p className="text-sm font-bold text-on-surface tracking-wide truncate">{directEmail}</p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-primary transition-colors flex items-center gap-1.5 shrink-0 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
                  title="Salin alamat email ke clipboard"
                  aria-label="Salin alamat email ke clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-primary" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={handleOpenEmailClient}
                className="w-full py-3.5 px-5 text-xs sm:text-sm font-bold text-primary bg-surface-container-high hover:bg-surface-container-highest active:scale-[0.99] rounded-2xl border border-outline-variant transition-all flex items-center justify-center gap-2 cursor-pointer"
                title="Buka aplikasi email untuk mengirim pesan"
              >
                <span>Tulis Email Langsung</span>
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
                    Rincian Disiapkan & Aplikasi Email Terbuka!
                  </h3>

                  <p className="text-sm text-secondary max-w-md mx-auto mb-6 leading-relaxed">
                    Terima kasih, <span className="font-semibold text-on-surface">{formData.name}</span>. Pesan Anda juga telah otomatis disalin ke clipboard agar Anda tidak kehilangan catatan saat aplikasi email dibuka.
                  </p>

                  {/* Fallback Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <button
                      type="button"
                      onClick={() => handleOpenEmailClient()}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-on-primary bg-primary hover:bg-primary/95 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                      title="Buka Ulang Aplikasi Email"
                    >
                      <span>Buka Ulang Aplikasi Email</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(formData.message);
                        setCopiedSummary(true);
                        setTimeout(() => setCopiedSummary(false), 2000);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-primary bg-surface-container hover:bg-surface-container-high rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      title="Salin teks pesan ke clipboard"
                    >
                      {copiedSummary ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSummary ? 'Pesan Tersalin!' : 'Salin Teks Pesan'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Desain Poster & Brosur',
                        message: ''
                      });
                    }}
                    className="text-xs text-secondary hover:text-primary transition-colors underline cursor-pointer"
                  >
                    Kirim formulir pesan lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="border-b border-outline-variant/60 pb-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-on-surface">
                      Kirim Pesan Rincian Proyek
                    </h3>
                    <p className="text-xs text-secondary mt-1">
                      Lengkapi rincian proyek di bawah untuk membuka draf pesan siap kirim di aplikasi email Anda.
                    </p>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Nama Anda / Nama Brand <span className="text-primary">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso atau Nama Brand Usaha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-outline-variant focus:border-primary text-sm text-on-surface placeholder:text-outline transition-colors outline-none"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Alamat Email Anda <span className="text-primary">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="nama@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-outline-variant focus:border-primary text-sm text-on-surface placeholder:text-outline transition-colors outline-none"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="inquiry-service" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Layanan yang Dibutuhkan
                    </label>
                    <select
                      id="inquiry-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-outline-variant focus:border-primary text-sm text-on-surface transition-colors outline-none cursor-pointer"
                    >
                      <option value="Desain Poster & Brosur">Desain Poster & Brosur (Flyer)</option>
                      <option value="Desain Media Sosial">Desain Media Sosial</option>
                      <option value="Desain Banner & Spanduk">Desain Banner & Spanduk</option>
                      <option value="Visual Acara & Kelembagaan">Visual Acara & Kelembagaan</option>
                      <option value="Desain Promosi & Penjualan">Desain Promosi & Penjualan</option>
                      <option value="Identitas Brand & Visual">Identitas Brand & Visual</option>
                    </select>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Rincian Kebutuhan / Deskripsi Singkat <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      required
                      placeholder="Ceritakan sedikit tentang produk, output yang diharapkan, estimasi tenggat waktu, atau tautan referensi desain..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-outline-variant focus:border-primary text-sm text-on-surface placeholder:text-outline transition-colors outline-none resize-none"
                    />
                  </div>

                  {/* Action Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 text-sm font-bold text-on-primary bg-primary hover:bg-primary/95 active:scale-[0.99] rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
                    title="Kirim Pesan Rincian Proyek"
                  >
                    <span>Kirim Pesan via Email</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-outline">
                    Pesan akan otomatis dimuat di aplikasi email Anda yang ditujukan langsung ke <strong className="text-secondary">{directEmail}</strong>.
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
              Kanal Media Sosial & Tautan
            </h4>
            <p className="text-xs text-secondary">
              Ikuti perkembangan portofolio dan pembaruan karya terbaru di media sosial:
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
