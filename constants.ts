
import { UserProfile } from './types';

export const DEFAULT_USER_PROFILE: UserProfile = {
  name: 'Alex Rivera',
  jobTitle: 'Senior Full Stack Developer',
  bio: 'Passionate software engineer with 5+ years of experience building scalable web applications. Expert in React, Node.js, and Cloud Architecture.',
  location: 'San Francisco, CA',
  photoUrl: 'https://picsum.photos/seed/alex/200/200',
  skills: [
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Intermediate' }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.S. Computer Science',
      institution: 'Stanford University',
      year: '2015 - 2019',
      cgpa: '3.9'
    }
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Lead Developer',
      company: 'TechFlow Systems',
      duration: '2021 - Present',
      description: 'Led a team of 10 developers to build a high-performance CRM platform. Reduced server costs by 40% through microservices optimization.'
    },
    {
      id: 'exp-2',
      role: 'Full Stack Engineer',
      company: 'StartupGen',
      duration: '2019 - 2021',
      description: 'Developed and launched 5 greenfield projects. Implemented real-time analytics using WebSockets.'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'E-Commerce Engine',
      description: 'A headless e-commerce platform with stripe integration.',
      techStack: ['Next.js', 'Prisma', 'Stripe'],
      githubUrl: 'https://github.com/example/shop',
      liveUrl: 'https://shop-demo.com'
    }
  ],
  social: {
    email: 'alex.rivera@example.com',
    github: 'github.com/arivera',
    linkedin: 'linkedin.com/in/arivera'
  },
  theme: {
    templateId: 'modern',
    primaryColor: '#3b82f6',
    isDark: false
  }
};

export const TEMPLATES = [
  { id: 'modern', name: 'Modern Minimal' },
  { id: 'classic', name: 'Professional Classic' },
  { id: 'creative', name: 'Creative Portfolio' }
];

export const COLORS = [
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Slate', value: '#475569' }
];
