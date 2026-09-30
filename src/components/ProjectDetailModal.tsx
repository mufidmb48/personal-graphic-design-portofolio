import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, ArrowRight, Calendar, User, Wrench, FileCode, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenContact
}) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-on-surface/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-surface max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-outline-variant shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 bg-surface/90 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-outline-variant/60 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-secondary">
            <span className="font-semibold text-primary">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.projectType}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
            aria-label="Tutup detail proyek"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          
          {/* Main Visual Image Display */}
          <div className="rounded-2xl overflow-hidden bg-surface-container-lowest mb-4 border border-outline-variant/60 shadow-sm flex items-center justify-center min-h-[300px] max-h-[520px]">
            <img
              src={activeImage || project.image}
              alt={project.title}
              className="w-full h-auto max-h-[520px] object-contain"
            />
          </div>

          {/* Interactive Artwork Gallery Strip */}
          {project.supportingRefs && project.supportingRefs.length > 0 && (
            <div className="mb-8 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/50">
              <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                Galeri Karya & Berkas Pendukung ({1 + project.supportingRefs.length} karya):
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {/* Main Cover Thumbnail */}
                <button
                  onClick={() => setActiveImage(project.image)}
                  className={`group relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === project.image 
                      ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-sm' 
                      : 'border-outline-variant/70 opacity-70 hover:opacity-100 hover:border-primary/50'
                  }`}
                  title={`Sampul: ${project.fileRef}`}
                >
                  <img src={project.image} alt={project.fileRef} className="w-full h-full object-cover" />
                </button>

                {/* Supporting Thumbnails */}
                {project.supportingRefs.map((ref) => {
                  const refPath = `/${ref}`;
                  const isSelected = activeImage === refPath;
                  return (
                    <button
                      key={ref}
                      onClick={() => setActiveImage(refPath)}
                      className={`group relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-sm' 
                          : 'border-outline-variant/70 opacity-70 hover:opacity-100 hover:border-primary/50'
                      }`}
                      title={ref}
                    >
                      <img src={refPath} alt={ref} className="w-full h-full object-cover" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Title & Metadata Strip */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary-container/20 text-primary text-xs font-mono font-bold">
                <FileCode className="w-3.5 h-3.5" />
                <span>Sumber Berkas: {project.fileRef}</span>
              </span>
              {project.supportingRefs && project.supportingRefs.length > 0 && (
                <span className="text-xs font-mono text-outline">
                  (Berkas pendukung: {project.supportingRefs.join(', ')})
                </span>
              )}
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-on-surface mb-3">
              {project.title}
            </h2>
            <p className="text-base text-secondary leading-relaxed mb-6">
              {project.details.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/50 text-xs">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-outline">Jenis Proyek</p>
                  <p className="font-semibold text-on-surface truncate">{project.projectType}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-outline">Klien / Konteks</p>
                  <p className="font-semibold text-on-surface truncate">{project.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-outline">Tahun Rilis</p>
                  <p className="font-semibold text-on-surface">{project.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-outline">Perangkat Lunak</p>
                  <p className="font-semibold text-on-surface truncate">{project.tools.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Dive Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-6 border-t border-outline-variant/50">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                Tantangan & Sasaran Proyek
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {project.details.objective}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                Pendekatan Desain & Eksekusi
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {project.details.approach}
              </p>
            </div>
          </div>

          {/* Deliverables & Real Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/60">
            <div>
              <h3 className="text-sm font-bold text-on-surface mb-3">
                Daftar Output Berkas yang Diserahkan
              </h3>
              <ul className="space-y-2 text-xs text-secondary">
                {project.details.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-on-surface mb-3">
                Penerapan & Dampak Visual
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                {project.details.outcome}
              </p>
            </div>
          </div>

          {/* CTA Footer in Modal */}
          <div className="pt-6 border-t border-outline-variant/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-secondary">
              Tertarik dengan gaya visual atau pendekatan serupa untuk kebutuhan brand Anda?
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-secondary hover:bg-surface-container rounded-xl transition-colors cursor-pointer"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-5 py-2.5 text-xs font-semibold text-on-primary bg-primary hover:bg-primary/95 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Diskusikan Proyek Anda</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
