import React from 'react';
import { processSteps } from '../data/process';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            <span>Metodologi Kerja</span>
            <span aria-hidden="true" className="text-outline">·</span>
            <span>Tahapan Desain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface leading-tight">
            Alur kerja terstruktur dan transparan mulai dari brief awal hingga berkas akhir.
          </h2>
          <p className="text-sm sm:text-base text-secondary mt-3">
            Tanpa ketidakpastian. Anda selalu mengetahui tahap apa yang sedang berjalan, target yang sedang dikerjakan, dan berkas apa yang akan Anda terima di setiap fase.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant hover:border-primary-container transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large Distinctive Editorial Number */}
                <div className="text-3xl font-extrabold text-primary/80 font-mono tracking-tighter mb-4">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-on-surface mb-2">
                  {step.title}
                </h3>

                <p className="text-xs font-medium text-primary mb-3">
                  {step.shortDesc}
                </p>

                <p className="text-xs text-secondary leading-relaxed mb-6">
                  {step.detailedDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/50">
                <p className="text-[10px] uppercase font-bold tracking-wider text-outline mb-1">
                  Hasil Tahapan:
                </p>
                <p className="text-xs font-medium text-on-surface">
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
