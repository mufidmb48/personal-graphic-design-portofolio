export type ProjectCategory = 
  | 'All' 
  | 'Poster & Flyer' 
  | 'Social Media' 
  | 'Banner & Promo' 
  | 'Event Visual' 
  | 'Branding';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  image: string;
  shortDescription: string;
  client: string;
  tools: string[];
  projectType: string;
  fileRef: string;
  supportingRefs?: string[];
  featured?: boolean;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  details: {
    overview: string;
    objective: string;
    approach: string;
    deliverables: string[];
    outcome: string;
    additionalImages?: string[];
  };
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface DesignTool {
  name: string;
  role: string;
  description: string;
  category: 'vector' | 'raster' | 'layout' | 'collaboration';
}

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  deliverable: string;
}

export interface WhyMePoint {
  title: string;
  description: string;
  benefit: string;
  iconName: string;
}
