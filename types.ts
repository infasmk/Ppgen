
export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  cgpa?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLinks {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface UserProfile {
  name: string;
  jobTitle: string;
  bio: string;
  location: string;
  photoUrl: string;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  social: SocialLinks;
  theme: {
    templateId: string;
    primaryColor: string;
    isDark: boolean;
  };
}

export enum AppRoute {
  HOME = '/',
  DASHBOARD = '/dashboard',
  EDITOR = '/editor',
  PREVIEW = '/preview',
  RESUME = '/resume',
  LOGIN = '/login'
}
