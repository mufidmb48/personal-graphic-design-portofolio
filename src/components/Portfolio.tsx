import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projects';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

const categories: ProjectCategory[] = [
  'All',
  'Poster & Flyer',
  'Social Media',
  'Banner & Promo',
  'Event Visual',
  'Branding'
];

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary mb-3">
              <span>Curated Showcase</span>
              <span aria-hidden="true" className="text-outline">·</span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface leading-tight">
              Selected projects from your graphic design portfolio.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-secondary max-w-md">
            Commercial packaging, branding identities, smartphone tech infographics, and high-energy sports and character posters.
          </p>
        </div>

        {/* Filter Chips / Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-primary cursor-pointer ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-high text-secondary hover:text-on-surface hover:bg-surface-container-highest'
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Bento & Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isWide = idx === 0 && activeFilter === 'All';
            const colSpanClass = isWide 
              ? 'md:col-span-8' 
              : idx % 3 === 1 
              ? 'md:col-span-4' 
              : idx % 3 === 2 
              ? 'md:col-span-6' 
              : 'md:col-span-6';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpanClass} group cursor-pointer bg-surface-container-lowest rounded-3xl border border-outline-variant overflow-hidden hover:border-primary-container hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                {/* Visual Image container */}
                <div className="relative overflow-hidden aspect-[16/10] bg-surface-container flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/90 backdrop-blur-md border border-outline-variant/60 flex items-center justify-center text-on-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Card Content with zero-pill metadata */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Clean unboxed metadata strip */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-secondary font-medium mb-2.5">
                      <span className="text-primary font-semibold">{project.category}</span>
                      <span aria-hidden="true" className="text-outline">·</span>
                      <span className="font-mono text-[11px] text-primary bg-primary-container/20 px-2 py-0.5 rounded-md font-semibold">
                        {project.fileRef}
                      </span>
                      <span aria-hidden="true" className="text-outline">·</span>
                      <span className="text-outline text-[11px]">{project.projectType}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-2.5 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-secondary leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Footer Tools & Interaction clue */}
                  <div className="pt-6 mt-6 border-t border-outline-variant/50 flex items-center justify-between text-xs">
                    <div className="text-outline truncate max-w-[240px]">
                      {project.tools.slice(0, 2).join(' · ')}
                    </div>
                    <span className="font-semibold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      View Project Deep-Dive →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-surface-container-low rounded-3xl border border-outline-variant">
            <p className="text-secondary text-sm">No projects listed under this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
};
