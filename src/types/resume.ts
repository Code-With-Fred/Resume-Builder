// src/types/resume.ts
export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  education: {
    school: string;
    degree: string;
    year: string;
  }[];
  experience: {
    company: string;
    role: string;
    year: string;
  }[];
  skills: string[];
  projects: {
    name: string;
    description: string;
    link: string;
  }[];
}