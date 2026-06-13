import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'Design' | 'Software';
  status: 'Completed' | 'In Progress';
  links: {
    github?: string;
    demo?: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Interest {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
