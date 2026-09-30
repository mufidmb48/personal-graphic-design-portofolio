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
            <span>Featured Case Study</span>
            <span aria-hidden="true" className="text-outline">·</span>
            <span>Problem to Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface leading-tight">
            How promotional goals are transformed into high-impact commercial visuals.
          </h2>
          <p className="text-sm sm:text-base text-secondary mt-3">
            Commercial graphic design goes far beyond personal taste—it is a methodical process to resolve market communication objectives.
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
                className="self-start px-5 py-2.5 text-xs font-semibold text-primary bg-surface-container-high hover:bg-surface-container-highest rounded-xl border border-outline-variant/80 transition-colors"
              >
                View Full Project Details & Deliverables →
              </button>
            </div>
          </div>

          {/* 4-Step Process Breakdown: Problem → Approach → Design → Outcome */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-outline-variant/60">
            
            {/* 1. Problem */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-error mb-2">
                <HelpCircle className="w-4 h-4 text-error shrink-0" />
                <span>01. Problem</span>
              </div>
              <h4 className="text-sm font-bold text-on-surface mb-2">Attention Challenge</h4>
              <p className="text-xs text-secondary leading-relaxed">
                The ready-to-drink coffee sector is heavily saturated. The campaign demanded a visual hook that sparks thirst and halts scrolling within fractions of a second.
              </p>
            </div>

            {/* 2. Approach */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                <Lightbulb className="w-4 h-4 text-primary shrink-0" />
                <span>02. Approach</span>
              </div>
              <h4 className="text-sm font-bold text-on-surface mb-2">Immersive POV Concept</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Adopted a first-person perspective reaching into a chilled refrigerator, backed by dynamic 3D typography and vibrant warm lighting.
              </p>
            </div>

            {/* 3. Design */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-tertiary mb-2">
                <PenTool className="w-4 h-4 text-tertiary shrink-0" />
                <span>03. Design</span>
              </div>
              <h4 className="text-sm font-bold text-on-surface mb-2">Precision Retouching</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Executed intricate ice condensation effects in Photoshop, established bold headline hierarchy, and configured multi-ratio ad formats in Illustrator.
              </p>
            </div>

            {/* 4. Outcome */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>04. Outcome</span>
              </div>
              <h4 className="text-sm font-bold text-on-surface mb-2">High-Energy Visual</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Campaign-ready across digital ad channels and in-store displays, projecting a modern, refreshing, and high-conversion brand presence.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
