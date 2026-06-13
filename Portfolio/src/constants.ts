import { 
  Code2,
  Layout,
  Database,
  Wrench,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Gamepad2,
  Tv,
  Cpu,
  BookOpen,
  Coffee,
  Music
} from 'lucide-react';
import { SkillCategory, Project, Education, Interest, Testimonial } from './types';
import ecommerceProjectImage from './image/ecommerce-project.svg';
import clinicProjectImage from './image/clinic-project.svg';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 90, icon: Layout, color: "#E34F26" },
      { name: "CSS3", level: 85, icon: Layout, color: "#1572B6" },
      { name: "JavaScript", level: 80, icon: Code2, color: "#F7DF1E" },
      { name: "React Js", level: 75, icon: Code2, color: "#61DAFB" },
      { name: "Vue Js", level: 70, icon: Code2, color: "#4FC08D" },
      { name: "Tailwind CSS", level: 85, icon: Layout, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", level: 85, icon: Code2, color: "#777BB4" },
      { name: "Laravel", level: 80, icon: Code2, color: "#FF2D20" },
      { name: "Node Js", level: 55, icon: Code2, color: "#339933" },
      { name: "TypeScript", level: 55, icon: Code2, color: "#3178C6" },
    ]
  },
  {
    title: "Database Management",
    skills: [
      { name: "MySQL", level: 85, icon: Database, color: "#4479A1" },
      { name: "Postgre SQL", level: 55, icon: Database, color: "#4169E1" },
      { name: "Laragon SQL", level: 50, icon: Database, color: "#35a6ac" },
    ]
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", level: 85, icon: Wrench, color: "#F05032" },
      { name: "VSCode", level: 90, icon: Wrench, color: "#007ACC" },
      { name: "Postman", level: 75, icon: Wrench, color: "#FF6C37" },
      { name: "Jira", level: 55, icon: Wrench, color: "#0052CC" },
      { name: "Power BI", level: 50, icon: Wrench, color: "#F2C811" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-commerce Website",
    description: "Designed and developed a modern e-commerce platform using JavaScript, allowing users to browse products, manage carts, place orders, and enjoy a user-friendly shopping experience.",
    image: ecommerceProjectImage,
    tags: ["JavaScript", "Build as a Team"],
    category: "Full-Stack",
    status: "Completed",
    links: { github: "https://github.com/Nangcoding/E-comerce.project-js", demo: "https://e-comerce-project-js.vercel.app/" }
  },
  {
    id: "2",
    title: "Clinic Service Website",
    description: "Designed and developed a bilingual clinic service website to provide healthcare information, online appointment booking, and patient support services. Integrated with a dynamic CMS.",
    image: clinicProjectImage,
    tags: ["HTML", "CSS", "Elementor"],
    category: "Full-Stack",
    status: "Completed",
    links: { github: "https://github.com/phornya/Web-Design-Project", demo: "https://web-design-project-flame.vercel.app/" }
  },
  {
    id: "3",
    title: "គម្ពី-ELibrary",
    description: "Developed a Library App using Laravel, MySQL,and Tailwind CSS, organizing features like book management and borrowing through Laravel's MVC.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop",
    tags: ["Laravel", "MySQL", "React.js", "Tailwind"],
    category: "Frontend",
    status: "Completed",
    links: { github: "https://github.com/Theom-gif/e_library_admin_author", demo: "#" }
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "Passerelles Numériques Cambodia",
    institution: "Web Development Program",
    period: "2025 - Present",
    description: "Intensive frontend web development program focusing on modern technologies and industry best practices.",
    tags: ["Frontend Development", "Team Collaboration", "Time Management"]
  },
  {
    degree: "Rovieng High School",
    institution: "High School Diploma ",
    period: "2022 - 2024",
    description: "Completed secondary education with focus on mathematics and General Knowledge fundamentals.",
    tags: ["Mathematics Excellence", "Baccalaureate Certificate", "General Knowledge"]
  }
];

export const INTERESTS: Interest[] = [
  { name: "Tech Documentaries", icon: Tv, description: "Exploring the latest tech trends and innovations through documentaries." },
  { name: "Gaming", icon: Gamepad2, description: "Enjoying strategic and creative games in my free time." },
  { name: "AI Exploration", icon: Cpu, description: "Discovering new AI tools and their practical applications." },
  { name: "Learning Frameworks", icon: BookOpen, description: "Always excited to learn new frameworks and web development techniques." },
  { name: "Coffee & Code", icon: Coffee, description: "Perfect combination for productive coding sessions." },
  { name: "Music Production", icon: Music, description: "Creating beats and melodies as a creative outlet." }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ready Y",
    role: "PNC WEP Coordinator",
    content: "Ya is a technically strong student with excellent problem-solving skills. His passion for coding and attention to detail make him stand out in web development.",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQEy_W2B5osjlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1610784133410?e=1781740800&v=beta&t=F2Qq4_EUR_Lhq36tt55m064luXrlKuIc4Hevvr4RJeY"
  }
];

export const CONTACT_INFO = {
  email: "phornya26@gmail.com",
  phone: "+855 71 815 1315",
  location: "Phnom Penh, Cambodia",
  socials: [
    { name: "GitHub", icon: Github, link: "https://github.com/phorn-ya" },
    { name: "LinkedIn", icon: Linkedin, link: "" },
    { name: "Email", icon: Mail, link: "" }
  ]
};
