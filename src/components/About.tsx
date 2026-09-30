import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Wrench, 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  Eye, 
  Compass, 
  Sliders, 
  RefreshCw, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  X
} from 'lucide-react';
import { cvData } from '../data/cv';
import mufidPhoto from '../assets/images/mufid-pas-foto.jpg';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'education' | 'skills'>('overview');
  const [showCvModal, setShowCvModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedCvText, setCopiedCvText] = useState(false);

  const { personalInfo, education, workExperiences, organizations, skills } = cvData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyFullCv = () => {
    const cvText = `CURRICULUM VITAE
${personalInfo.fullName}, ${personalInfo.degree}
${personalInfo.location} | ${personalInfo.phone} | ${personalInfo.email}

TENTANG SAYA:
${personalInfo.summary}

PENDIDIKAN:
${education.institution} (${education.location})
${education.degree} - ${education.major} | ${education.period}
IPK: ${education.gpa}

PENGALAMAN KERJA:
${workExperiences.map(exp => `• ${exp.role} — ${exp.company} (${exp.period})
  ${exp.responsibilities.map(r => `  - ${r.category ? `[${r.category}] ` : ''}${r.points.join(' ')}`).join('\n')}`).join('\n\n')}

PENGALAMAN ORGANISASI:
${organizations.map(org => `• ${org.role} — ${org.organization} (${org.period})
  ${org.points.join(' ')}`).join('\n')}

KEAHLIAN:
${skills.map(s => `• ${s.category}: ${s.items.join(', ')}`).join('\n')}
`;
    navigator.clipboard.writeText(cvText);
    setCopiedCvText(true);
    setTimeout(() => setCopiedCvText(false), 2500);
  };

  const values = [
    {
      title: 'Clarity',
      subtitle: 'Pesan utama terbaca dalam 3 detik pertama.',
      desc: 'Desain yang kuat tidak membiarkan audiens menebak. Headline, foto fokus, dan aksen warna diposisikan untuk mengarahkan pandangan secara terstruktur.',
      icon: Eye
    },
    {
      title: 'Visual Thinking',
      subtitle: 'Struktur informasi mendahului ornamen.',
      desc: 'Sebelum memilih estetika gaya, hierarki komunikasi dirumuskan terlebih dahulu: mana yang harus dilihat pertama, mana konteks pendukung, dan apa aksi akhirnya.',
      icon: Compass
    },
    {
      title: 'Attention to Detail',
      subtitle: 'Kerning presisi, margin konsisten, dan grid rapi.',
      desc: 'Kualitas profesional tercermin pada detail mikro—jarak huruf yang presisi, kontras warna yang nyaman dibaca, serta ritme visual yang seimbang.',
      icon: Sliders
    },
    {
      title: 'Adaptability',
      subtitle: 'Satu konsep terpadu, siap untuk layar maupun cetak.',
      desc: 'Memahami standar teknis media digital (RGB, rasio layar smartphone) maupun kebutuhan cetak komersial (CMYK, margin bleed, separasi resolusi).',
      icon: RefreshCw
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-surface-container-low/60 border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary mb-4">
          <span>Tentang Saya</span>
          <span aria-hidden="true" className="text-outline">·</span>
          <span>Profil & Rekam Jejak Profesional</span>
        </div>

        {/* Profile Card & Bio Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Official Pas Foto Card */}
          <div className="lg:col-span-4">
            <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/80 p-6 shadow-sm overflow-hidden flex flex-col items-center text-center">
              
              {/* Photo Frame */}
              <div className="relative mb-5 group">
                <div className="w-52 h-68 sm:w-56 sm:h-72 rounded-2xl overflow-hidden shadow-md border-2 border-outline-variant/60 bg-white">
                  <img
                    src={mufidPhoto}
                    alt={`${personalInfo.fullName}, ${personalInfo.degree} - Pas Foto Formal`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm border border-outline-variant/60 px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available</span>
                </div>
              </div>

              {/* Identity & Credentials */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-on-surface tracking-tight mb-1">
                {personalInfo.fullName}
              </h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                {personalInfo.degree} · Graphic Designer & PR
              </p>

              {/* Quick Contact & Location Meta */}
              <div className="w-full py-4 border-y border-outline-variant/40 my-3 flex flex-col gap-2 text-xs text-secondary text-left">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-1 hover:text-primary transition-colors text-outline"
                    title="Salin email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a 
                    href={`https://wa.me/6283198512127?text=Halo%20Mufid,%20saya%20tertarik%20dengan%20portofolio%20Anda`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-primary transition-colors"
                  >
                    {personalInfo.formattedPhone} (WhatsApp)
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => setShowCvModal(true)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-on-primary bg-primary hover:bg-primary/95 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Lihat CV & Kredensial Lengkap</span>
                </button>
                <a
                  href={`https://wa.me/6283198512127?text=Halo%20Mufid,%20saya%20ingin%20berdiskusi%20mengenai%20proyek%20desain`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 text-xs font-medium text-secondary hover:text-on-surface bg-surface-container hover:bg-surface-container-high rounded-xl transition-all flex items-center justify-center gap-2 border border-outline-variant/60"
                >
                  <span>Hubungi via WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Narrative & Strategic Highlights */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface leading-tight mb-5 text-balance">
                Menghubungkan pesan strategis dengan{' '}
                <span className="text-primary underline decoration-primary-container decoration-4 underline-offset-4">
                  estetika visual yang komunikatif
                </span>.
              </h2>

              <p className="text-base text-secondary leading-relaxed mb-6 font-normal">
                {personalInfo.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/60">
                  <div className="text-2xl font-black text-primary mb-1">2+ Tahun</div>
                  <div className="text-xs font-semibold text-on-surface mb-0.5">Media Kreatif Legislatif</div>
                  <p className="text-[11px] text-secondary leading-snug">Menangani visual kelembagaan, liputan, dan reels resmi.</p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/60">
                  <div className="text-2xl font-black text-primary mb-1">3.55 IPK</div>
                  <div className="text-xs font-semibold text-on-surface mb-0.5">Sarjana Humaniora (S.Hum.)</div>
                  <p className="text-[11px] text-secondary leading-snug">UIN SGD Bandung dengan fokus riset sejarah dan peradaban.</p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/60">
                  <div className="text-2xl font-black text-primary mb-1">Multi-Disiplin</div>
                  <div className="text-xs font-semibold text-on-surface mb-0.5">Desain, Riset & PR</div>
                  <p className="text-[11px] text-secondary leading-snug">Integrasi administrasi formal, relasi publik, dan grafis visual.</p>
                </div>
              </div>
            </div>

            {/* Interactive Tab Controller */}
            <div className="border-b border-outline-variant/60 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all flex items-center gap-2 ${
                  activeTab === 'overview'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-secondary hover:text-on-surface'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Filosofi Desain</span>
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all flex items-center gap-2 ${
                  activeTab === 'experience'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-secondary hover:text-on-surface'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Pengalaman Kerja</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all flex items-center gap-2 ${
                  activeTab === 'education'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-secondary hover:text-on-surface'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Pendidikan & Organisasi</span>
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all flex items-center gap-2 ${
                  activeTab === 'skills'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-secondary hover:text-on-surface'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Keahlian & Toolkit</span>
              </button>
            </div>

          </div>

        </div>

        {/* Tab Content Display Area */}
        <div className="mt-8">
          
          {/* TAB 1: Overview & Design Philosophy */}
          {activeTab === 'overview' && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-lg font-bold text-on-surface">
                  4 Prinsip Kerja dalam Setiap Proyek Visual
                </h4>
                <span className="text-xs text-secondary">Standar konsistensi & eksekusi</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((v, index) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/70 hover:border-primary-container hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-11 h-11 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center mb-5">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h5 className="text-base font-bold text-on-surface mb-1">
                          {v.title}
                        </h5>
                        <p className="text-xs font-medium text-primary mb-2.5">
                          {v.subtitle}
                        </p>
                        <p className="text-xs text-secondary leading-relaxed">
                          {v.desc}
                        </p>
                      </div>

                      <div className="pt-4 mt-5 border-t border-outline-variant/40 text-[11px] font-mono text-outline">
                        Prinsip 0{index + 1}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: Work Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-bold text-on-surface">
                  Pengalaman Kerja Profesional
                </h4>
                <span className="text-xs text-secondary">Legislatif & Independen</span>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {workExperiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container-lowest rounded-3xl border border-outline-variant/70 p-6 sm:p-7 shadow-xs hover:border-primary-container transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
                            {exp.period}
                          </span>
                          {exp.note && (
                            <span className="text-[11px] text-secondary hidden sm:inline">
                              · {exp.note}
                            </span>
                          )}
                        </div>
                        <h5 className="text-lg font-bold text-on-surface">
                          {exp.role}
                        </h5>
                        <p className="text-sm font-medium text-secondary">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {exp.note && (
                      <p className="text-xs text-primary/80 italic mb-4 sm:hidden">
                        *{exp.note}
                      </p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-outline-variant/40">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="bg-surface-container-low/50 p-4 rounded-2xl">
                          {resp.category && (
                            <h6 className="text-xs font-bold text-on-surface mb-2 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {resp.category}
                            </h6>
                          )}
                          <ul className="space-y-1.5">
                            {resp.points.map((pt, pIdx) => (
                              <li key={pIdx} className="text-xs text-secondary leading-relaxed flex items-start gap-2">
                                <span className="text-primary font-bold">›</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Education & Organizations */}
          {activeTab === 'education' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Education Box */}
              <div className="lg:col-span-5 bg-surface-container-lowest rounded-3xl border border-outline-variant/70 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-primary uppercase mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span>Pendidikan Formal</span>
                </div>

                <div className="border-l-2 border-primary pl-4 py-1 mb-6">
                  <div className="text-xs font-semibold text-primary mb-1">{education.period}</div>
                  <h5 className="text-lg font-bold text-on-surface leading-snug mb-1">
                    {education.institution}
                  </h5>
                  <p className="text-sm text-secondary font-medium mb-2">
                    {education.degree} — {education.major}
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-primary-container/20 text-xs font-bold text-primary">
                    <span>IPK: {education.gpa}</span>
                    <span className="text-[10px] font-normal text-secondary">(Sangat Memuaskan)</span>
                  </div>
                </div>

                <div className="text-xs text-secondary leading-relaxed bg-surface-container-low p-4 rounded-2xl">
                  <p className="font-semibold text-on-surface mb-1">Fokus Studi & Relevansi Visual:</p>
                  Melatih kemampuan riset mendalam, analisis kontekstual teks & arsip historis, ketajaman penulisan naratif, serta pemahaman budaya yang menjadi fondasi dalam merancang konsep visual yang berkarakter.
                </div>
              </div>

              {/* Leadership & Organizations */}
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl border border-outline-variant/70 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-primary uppercase mb-4">
                  <Users className="w-4 h-4" />
                  <span>Pengalaman Organisasi & Kepemimpinan</span>
                </div>

                <div className="space-y-4">
                  {organizations.map((org, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-surface-container-low/60 border border-outline-variant/40">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-primary">{org.role}</span>
                        <span className="text-[11px] font-mono text-outline">{org.period}</span>
                      </div>
                      <h6 className="text-sm font-bold text-on-surface mb-2">
                        {org.organization}
                      </h6>
                      <ul className="space-y-1">
                        {org.points.map((pt, pIdx) => (
                          <li key={pIdx} className="text-xs text-secondary leading-relaxed flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: Skills & Tools */}
          {activeTab === 'skills' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-bold text-on-surface">
                  Matriks Keahlian & Perangkat Kerja
                </h4>
                <span className="text-xs text-secondary">Kompetensi terintegrasi</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((group, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container-lowest rounded-3xl border border-outline-variant/70 p-6 flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-primary mb-4 pb-2 border-b border-outline-variant/40">
                        {group.category}
                      </div>
                      <ul className="space-y-2.5">
                        {group.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-xs text-on-surface font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-3 border-t border-outline-variant/30 text-[10px] font-mono text-outline">
                      {group.items.length} Kompetensi
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* CV Full Detail Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-surface rounded-3xl max-w-3xl w-full border border-outline-variant shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="px-6 py-5 bg-surface-container border-b border-outline-variant flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-bold">
                  MXT
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface">Curriculum Vitae</h3>
                  <p className="text-xs text-secondary">{personalInfo.fullName}, {personalInfo.degree}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyFullCv}
                  className="px-3 py-1.5 rounded-xl bg-surface hover:bg-surface-container-high border border-outline-variant text-xs font-medium text-on-surface flex items-center gap-1.5 transition-colors"
                >
                  {copiedCvText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCvText ? 'Tersalin!' : 'Salin Teks CV'}</span>
                </button>
                <button
                  onClick={() => setShowCvModal(false)}
                  className="p-1.5 rounded-xl text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Complete Formatted CV */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-sm">
              
              {/* Header Info */}
              <div className="border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight">
                    {personalInfo.fullName}
                  </h2>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {personalInfo.degree} · Graphic Designer & PR
                  </p>
                  <p className="text-xs text-secondary mt-1">
                    {personalInfo.location} · {personalInfo.phone} · {personalInfo.email}
                  </p>
                </div>
                <div className="w-20 h-24 rounded-xl overflow-hidden border border-outline-variant shrink-0">
                  <img src={mufidPhoto} alt="Pas foto" className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                </div>
              </div>

              {/* Ringkasan */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Tentang Saya</h4>
                <p className="text-xs text-secondary leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Pengalaman Kerja */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Pengalaman Kerja</h4>
                <div className="space-y-4">
                  {workExperiences.map((exp, idx) => (
                    <div key={idx} className="border-l-2 border-primary/40 pl-3.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                        <span className="font-bold text-on-surface">{exp.role}</span>
                        <span className="text-secondary font-mono">{exp.period}</span>
                      </div>
                      <div className="text-xs font-semibold text-primary">{exp.company}</div>
                      {exp.note && <div className="text-[11px] text-secondary italic mb-1.5">{exp.note}</div>}
                      <ul className="mt-2 space-y-1">
                        {exp.responsibilities.flatMap(r => r.points).map((pt, pIdx) => (
                          <li key={pIdx} className="text-xs text-secondary leading-relaxed flex items-start gap-1.5">
                            <span className="text-primary">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pendidikan */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Pendidikan</h4>
                <div className="border-l-2 border-primary/40 pl-3.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-on-surface">{education.institution}</span>
                    <span className="text-secondary font-mono">{education.period}</span>
                  </div>
                  <div className="text-xs text-secondary">
                    {education.degree} — {education.major} (IPK: {education.gpa})
                  </div>
                </div>
              </div>

              {/* Organisasi */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Pengalaman Organisasi</h4>
                <div className="space-y-3">
                  {organizations.map((org, idx) => (
                    <div key={idx} className="border-l-2 border-primary/40 pl-3.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                        <span className="font-bold text-on-surface">{org.role}</span>
                        <span className="text-secondary font-mono">{org.period}</span>
                      </div>
                      <div className="text-xs text-secondary mb-1">{org.organization}</div>
                      <ul className="space-y-1">
                        {org.points.map((pt, pIdx) => (
                          <li key={pIdx} className="text-xs text-secondary leading-relaxed flex items-start gap-1.5">
                            <span className="text-primary">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keahlian Utama */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Keahlian Utama</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.map((s, idx) => (
                    <div key={idx} className="bg-surface-container-low p-3 rounded-xl text-xs">
                      <span className="font-bold text-on-surface block mb-1">{s.category}:</span>
                      <span className="text-secondary leading-relaxed">{s.items.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-surface-container border-t border-outline-variant flex items-center justify-between">
              <span className="text-xs text-secondary">
                Hubungi langsung: {personalInfo.phone}
              </span>
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/6283198512127?text=Halo%20Mufid,%20saya%20sudah%20melihat%20CV%20Anda%20dan%20tertarik%20untuk%20berdiskusi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold hover:bg-primary/95 transition-all flex items-center gap-1.5"
                >
                  <span>Chat WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
