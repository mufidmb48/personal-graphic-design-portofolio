import React from 'react';
import { PenTool, Layers, LayoutGrid, Users } from 'lucide-react';
import { designToolsData } from '../data/tools';

const toolIcons: Record<string, React.ReactNode> = {
  'Figma': <LayoutGrid className="w-5 h-5 text-primary" />,
  'Photoshop': <Layers className="w-5 h-5 text-primary" />,
  'Illustrator': <PenTool className="w-5 h-5 text-primary" />,
  'Canva': <Users className="w-5 h-5 text-primary" />
};

export const Tools: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-surface-container-low/40 border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            <span>Alur Kerja & Perangkat</span>
            <span aria-hidden="true" className="text-outline">·</span>
            <span>Software Produksi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
            Perangkat lunak sebagai instrumen eksekusi presisi, bukan persentase keahlian subjektif.
          </h2>
          <p className="text-sm sm:text-base text-secondary mt-3">
            Setiap aplikasi memiliki posisi tertentu dalam alur kerja produksi—mulai dari eksplorasi tata letak di Figma, retouching detail di Photoshop, keakuratan vektor di Illustrator, hingga kemudahan serah terima mandiri bagi klien di Canva.
          </p>
        </div>

        {/* Tools Cards (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {designToolsData.map((tool) => (
            <div
              key={tool.name}
              className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant hover:border-primary-container transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center mb-4">
                  {toolIcons[tool.name] || <PenTool className="w-5 h-5 text-primary" />}
                </div>

                <h3 className="text-base font-bold text-on-surface mb-1">
                  {tool.name}
                </h3>

                <p className="text-xs font-semibold text-primary mb-3">
                  {tool.role}
                </p>

                <p className="text-xs text-secondary leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-outline-variant/40 text-[11px] font-mono text-outline">
                Alur Kerja Terverifikasi
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
