import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface CtaSectionProps {
  onOpenContact: () => void;
  onScrollToPortfolio: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenContact,
  onScrollToPortfolio
}) => {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Expressive Primary Container Destination */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-primary text-on-primary p-8 sm:p-14 lg:p-20 overflow-hidden shadow-xl">
          
          {/* Subtle geometric pattern decor */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary-container/20 rounded-full blur-2xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute bottom-0 left-0 translate-y-16 -translate-x-16 w-80 h-80 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none" 
          />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-fixed mb-4">
              Kolaborasi Baru · Terbuka untuk Proyek Pilihan
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6 text-balance">
              Memiliki rencana proyek desain atau kampanye promosi?
            </h2>

            <p className="text-base sm:text-lg text-primary-fixed/90 leading-relaxed mb-10 max-w-2xl font-normal">
              Mari ubah visi produk Anda menjadi komunikasi visual yang memikat pandangan, mudah dipahami, dan melekat di benak pelanggan.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-4 text-sm font-bold text-on-primary-fixed bg-primary-fixed hover:bg-white active:scale-[0.98] rounded-2xl shadow-md transition-all flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
              >
                <span>Mulai Proyek Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToPortfolio}
                className="px-7 py-4 text-sm font-semibold text-on-primary bg-primary-container/30 hover:bg-primary-container/50 active:scale-[0.98] rounded-2xl border border-primary-fixed/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Jelajahi Portofolio</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
