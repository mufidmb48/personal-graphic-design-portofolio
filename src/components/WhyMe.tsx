import React from 'react';
import { Target, Maximize2, Cpu, CheckCircle2, MessageSquare } from 'lucide-react';
import { whyMeData } from '../data/whyMe';

const iconMap = {
  Target,
  Maximize2,
  Cpu,
  CheckCircle2,
  MessageSquareCheck: MessageSquare
};

export const WhyMe: React.FC = () => {
  return (
    <section id="why-me" className="py-20 sm:py-28 bg-surface-container-low/40 border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            <span>Nilai & Komitmen</span>
            <span aria-hidden="true" className="text-outline">·</span>
            <span>Mengapa Memilih Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface leading-tight">
            Mengapa mempercayakan kebutuhan desain grafis Anda kepada saya?
          </h2>
          <p className="text-sm sm:text-base text-secondary mt-3">
            Bukan sekadar klaim estetika—melainkan standar kerja profesional yang menjaga reputasi komunikasi brand dan efektivitas promosi Anda.
          </p>
        </div>

        {/* 5 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMeData.map((item, index) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || Target;
            const isFeatured = index === 0;

            return (
              <div
                key={item.title}
                className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-surface-container-lowest border-primary/40 shadow-md ring-1 ring-primary/20'
                    : 'bg-surface-container-lowest border-outline-variant hover:border-primary-container hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-container/30 text-primary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-outline-variant/50">
                  <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-1">
                    Manfaat Nyata untuk Anda:
                  </p>
                  <p className="text-xs font-medium text-on-surface">
                    {item.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
