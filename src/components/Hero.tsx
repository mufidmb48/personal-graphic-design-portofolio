import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, CheckCircle, Palette, Layers } from 'lucide-react';
import { MxtLogo } from './ui/MxtLogo';

interface HeroProps {
  onScrollToPortfolio: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToPortfolio, onScrollToContact }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background subtle ambient glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-container/20 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-48 right-10 w-[450px] h-[250px] bg-secondary-container/30 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Personal Intro Strip with MXT Logo */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-primary mb-4">
              <MxtLogo size={24} />
              <span>Mufid Muhammad Baihaqi, S.Hum. (MXT)</span>
              <span aria-hidden="true" className="text-outline">·</span>
              <span>Desainer Grafis & Media Kreatif</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.12] mb-6 text-balance">
              Mengubah kebutuhan komunikasi menjadi{' '}
              <span className="text-primary underline decoration-primary-container decoration-4 underline-offset-6">
                desain visual yang jelas, berani & siap pakai
              </span>.
            </h1>

            <p className="text-lg sm:text-xl text-secondary leading-relaxed max-w-2xl mb-8 font-normal">
              Merancang Poster & Brosur, Desain Media Sosial, Banner & Spanduk, Visual Acara, Materi Promosi Komersial, serta Identitas Brand yang memikat audiens dan menghasilkan dampak nyata.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onScrollToPortfolio}
                className="px-7 py-3.5 text-sm font-semibold text-on-primary bg-primary hover:bg-primary/95 active:scale-[0.98] rounded-2xl shadow-sm transition-all flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
              >
                <span>Lihat Karya Pilihan</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToContact}
                className="px-7 py-3.5 text-sm font-semibold text-primary bg-surface-container-high hover:bg-surface-container-highest active:scale-[0.98] rounded-2xl border border-outline-variant/60 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
              >
                Mulai Kerja Sama
              </button>
            </div>

            {/* Micro credibility proof items */}
            <div className="pt-6 border-t border-outline-variant/70 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-medium text-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>Alur Kerja di Figma, Photoshop, Illustrator & Canva</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>Standar Siap Cetak (CMYK/Bleed) & Aset Digital</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>Kolaborasi Langsung & Komitmen Tenggat Waktu</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Expressive Graphic Showcase Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Showcase Card with Mufid's Nescafe Commercial Poster */}
            <div className="relative rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-lg group">
              <div className="aspect-[4/3] sm:aspect-[16/12] relative overflow-hidden bg-surface-container">
                <img
                  src="/Nescafe/1.jpg"
                  alt="Poster promosi komersial Nescafe Savior The Flavor oleh Mufid Muhammad Baihaqi"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent opacity-60" />
                
                {/* Floating internal badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface/90 backdrop-blur-md border border-outline-variant/60 flex items-center justify-between shadow-sm">
                  <div>
                    <p className="text-xs font-semibold text-primary">Sorotan Komersial</p>
                    <p className="text-sm font-bold text-on-surface">Poster Nescafe "Savior The Flavor"</p>
                  </div>
                  <span className="text-xs font-mono text-secondary">Photoshop · 2025</span>
                </div>
              </div>
            </div>

            {/* Floating expressive companion card 1: Purpose-Driven */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant shadow-md items-center gap-3.5 max-w-[250px]"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-container/40 text-on-primary-container flex items-center justify-center shrink-0">
                <Palette className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Hierarki Visual</p>
                <p className="text-[11px] text-secondary leading-tight">Desain yang memandu mata pembaca secara alami dan terstruktur.</p>
              </div>
            </motion.div>

            {/* Floating expressive companion card 2: Production Ready */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden sm:flex absolute -top-5 -right-5 bg-surface-container-lowest p-3.5 rounded-2xl border border-outline-variant shadow-md items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Cetak & Digital</p>
                <p className="text-[11px] text-secondary">Siap CMYK, Bleed & Iklan Medsos</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
