import React from 'react';
import { Eye, Compass, Sliders, RefreshCw } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      title: 'Clarity',
      subtitle: 'The core message connects within the first 3 seconds.',
      desc: 'Great design never forces the audience to guess. Every headline, focal photo, and color accent is placed to guide the eye intuitively.',
      icon: Eye
    },
    {
      title: 'Visual Thinking',
      subtitle: 'Information structure precedes decoration.',
      desc: 'Before exploring aesthetic styles, I define the communication flow: what needs to be seen first, what provides context, and what drives action.',
      icon: Compass
    },
    {
      title: 'Attention to Detail',
      subtitle: 'Precision kerning, micro-margins, and consistent grids.',
      desc: 'Professional craft lives in the subtleties—calibrated letter spacing, balanced contrast ratios for reading comfort, and unified visual rhythm.',
      icon: Sliders
    },
    {
      title: 'Adaptability',
      subtitle: 'One unified concept, optimized for screen or print.',
      desc: 'Respecting the technical divergence between high-density smartphone screens and physical commercial print presses so your brand stays consistent everywhere.',
      icon: RefreshCw
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-surface-container-low/60 border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            <span>Who I Am</span>
            <span aria-hidden="true" className="text-outline">·</span>
            <span>Philosophy & Approach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface leading-tight mb-6 text-balance">
            “Design isn't only about making things look good. It's about making your ideas easier to understand and impossible to ignore.”
          </h2>

          <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal">
            Hello, I’m <span className="font-semibold text-on-surface">Mufid Muhammad Baihaqi (MXT)</span>. I am an independent graphic designer dedicated to promotional design, brand identities, and digital collateral. I treat design as a strategic communication bridge—translating your product's core value into visuals that earn trust, command attention, and drive meaningful client action.
          </p>
        </div>

        {/* 4 Value Cards with Material 3 Expressive shapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, index) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-surface-container-lowest p-6 sm:p-7 rounded-3xl border border-outline-variant hover:border-primary-container hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-1">
                    {v.title}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-3">
                    {v.subtitle}
                  </p>
                  <p className="text-sm text-secondary leading-relaxed">
                    {v.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-outline-variant/40 text-[11px] font-mono text-outline">
                  Working Principle 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
