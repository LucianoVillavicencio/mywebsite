export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface SpecializationArea {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  progressText?: string;
  progressPercent?: number;
  description?: string;
  isCertification?: boolean;
}

export interface Project {
  id: string;
  year: string;
  tagline: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  mockupStats: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon?: string;
    isMain?: boolean;
  }[];
}
