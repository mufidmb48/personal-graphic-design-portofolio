import React from 'react';
import { HelpCircle, Lightbulb, PenTool, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyProps {
  onSelectProject: (project: Project) => void;
  featuredProject: Project;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ onSelectProject, featuredProject }) => {
  return (
    <section className="py-20 sm:py-28 bg-surface-container-low/50 border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            <span>Studi Kasus Unggulan</span>
            <span aria-hidden="true" className="text-outline">·</span>
            <span>Dari Masalah Menjadi Solusi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface leading-tight">
            Bagaimana sasaran promosi diubah menjadi visual komersial berdampak tinggi.
          </h2>
          <p className="text-sm sm:text-base text-secondary mt-3">
            Desain grafis komersial melampaui preferensi subjektif—ini adalah proses terencana untuk menyelesaikan target komunikasi dan komersial brand.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant p-6 sm:p-10 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
            {/* Visual Column */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/60 aspect-[4/3]">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-primary mb-2">
                  <span>{featuredProject.category}</span>
                  <span aria-hidden="true" className="text-outline">·</span>
                  <span className="font-mono text-[11px] text-primary/80 bg-primary-container/15 px-2 py-0.5 rounded-md">{featuredProject.fileRef}</span>
                  <span aria-hidden="true" className="text-outline">·</span>
                  <span className="text-outline font-normal text-xs">{featuredProject.projectType}</span>
                  <span aria-hidden="true" className="text-outline">·</span>
                  <span className="text-secondary font-normal">{featuredProject.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-on-surface mb-4">
                  {featuredProject.title}
                </h3>

                <p className="text-base text-secondary leading-relaxed mb-6">
                  {featuredProject.details.overview}
                </p>
              </div>

              <button
                onClick={() => onSelectProject(featuredProject)}
                className="self-start px-5 py-2.5 text-xs font-semibold text-primary bg-surface-container-high hover:bg-surface-container-highest rounded-xl border border-outline-variant/80 transition-colors cursor-pointer"
              >
                Lihat Rincian Proyek & Berkas Output →
              </button>
            </div>
          </div>

          {/* 4-Step Process Breakdown: Masalah → Pendekatan → Desain → Hasil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-outline-variant/60">
            
            {/* 1. Problem */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-error mb-2">
                <HelpCircle className="w-4 h-4 text-error shrink-0" />
                <span>01. Masalah</span>
              </div>
              <h4 className="text-sm font-bold text-on-surface mb-2">Tantangan Perhatian</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Kategori kopi siap minum sangat kompetitif. Kampanye memerlukan visual yang langsung membangkitkan dahaga dan menghentikan scroll layar dalam sepersekian detik.
              </p>
            </div>

            {/* 2. Approach */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                <Lightbulb className="w-4 h-4 text-primary shrink-0" />
                <span>02. Pendekatan</span>
              </div>
              <h4 className="text-sm font-bold text-on-surface mb-2">Konsep POV Imersif</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Menerapkan perspektif orang pertama (POV) mengambil kaleng dari dalam kulkas dingin, didukung tipografi 3D yang dinamis dan pencahayaan hangat.
              </p>
            </div>

            {/* 3. Design */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-tertiary mb-2">
                <PenTool className="w-4 h-4 text-tertiary shrink-0" />
                <span>03. Desain</span>
              </div>
              <h4 className="text-sm font-bold text-on-surface mb-2">Retouching Presisi</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Mengeksekusi tetesan embun kondensasi es yang mendetail di Photoshop, menyusun hierarki headline tegas, dan menyiapkan format multi-rasio di Illustrator.
              </p>
            </div>

            {/* 4. Outcome */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>04. Hasil Akhir</span>
              </div>
              <h4 className="text-sm font-bold text-on-surface mb-2">Visual Penuh Energi</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Materi siap tayang di kanal iklan digital maupun pajangan toko fisik, memproyeksikan citra brand yang modern, menyegarkan, dan siap konversi.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
