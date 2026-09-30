/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Tools } from './components/Tools';
import { Portfolio } from './components/Portfolio';
import { CaseStudy } from './components/CaseStudy';
import { Process } from './components/Process';
import { WhyMe } from './components/WhyMe';
import { TestimonialPlaceholder } from './components/TestimonialPlaceholder';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types';
import { projectsData } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToPortfolio = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Find the featured case study project
  const featuredProject = projectsData.find((p) => p.id === 'nescafe-savior-flavor') || projectsData[0];

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onScrollToPortfolio={scrollToPortfolio}
          onScrollToContact={scrollToContact}
        />

        {/* 2. "Who I Am" / About Section */}
        <About />

        {/* 3. "What I Can Do" / Services Section */}
        <Services />

        {/* 4. Tools I Work With / Workflow Capabilities */}
        <Tools />

        {/* 5. Curated Selected Work (Bento Gallery) */}
        <Portfolio 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* 6. Selected Case Study (Problem → Approach → Design → Outcome) */}
        <CaseStudy
          featuredProject={featuredProject}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 7. Design Process ("How I Work") */}
        <Process />

        {/* 8. Why Work With Me (Kenapa Harus Menggunakan Jasa Saya) */}
        <WhyMe />

        {/* 9. Authentic Testimonial Placeholder & Guarantees */}
        <TestimonialPlaceholder />

        {/* 10. Large Expressive CTA */}
        <CtaSection
          onOpenContact={scrollToContact}
          onScrollToPortfolio={scrollToPortfolio}
        />

        {/* 11. Contact Section */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={scrollToContact}
      />
    </div>
  );
}
