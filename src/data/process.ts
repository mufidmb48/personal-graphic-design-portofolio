import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    shortDesc: 'Deep-dive into objectives, target audience, and communication context.',
    detailedDesc: 'Every project starts with thorough alignment: who the audience is, what primary message must take precedence, and what technical parameters must be met.',
    deliverable: 'Creative Brief & Goal Alignment'
  },
  {
    number: '02',
    title: 'Explore',
    shortDesc: 'Visual direction research, moodboards, and composition sketches.',
    detailedDesc: 'Conducting industry benchmark research, curating moodboards, and drafting thumbnail layouts before proceeding to digital production.',
    deliverable: 'Moodboard & Visual Direction'
  },
  {
    number: '03',
    title: 'Design',
    shortDesc: 'Developing the visual system with strict typographic hierarchy.',
    detailedDesc: 'Translating the chosen direction into finished vector graphics: font pairings, modular grid structure, balanced color distribution, and negative space.',
    deliverable: 'Comprehensive Design Draft'
  },
  {
    number: '04',
    title: 'Refine',
    shortDesc: 'Sharpening micro-details, contrast evaluation, and client feedback.',
    detailedDesc: 'Reviewing drafts collaboratively, calibrating kerning, testing contrast compliance across displays, and executing agreed refinements.',
    deliverable: 'Refined & Polished Assets'
  },
  {
    number: '05',
    title: 'Deliver',
    shortDesc: 'Preparing organized production master files for print and digital use.',
    detailedDesc: 'Handing over the complete archive with cleanly labeled layers (AI, PSD, Press-Ready PDF with bleed, SVG, and optimized PNGs) along with usage notes.',
    deliverable: 'Press-Ready & Digital Master Files'
  }
];
