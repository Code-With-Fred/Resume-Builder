// src/pages/ResumeBuilder.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import PersonalInfo from "../components/Builder/PersonalInfo";
import Education from "../components/Builder/Education";
import Experience from "../components/Builder/Experience";
import Skills from "../components/Builder/Skills";
import Projects from "../components/Builder/Projects";
import Summary from "../components/Builder/Summary";
// import ResumePreview from '../components/Preview/ResumePreview';
import ResumePreview from "../components/Preview/ResumePreview";
import type { ResumeData } from "../types/resume";

const defaultResume: ResumeData = {
  name: "",
  title: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  education: [],
  experience: [],
  skills: [],
  projects: [],
  summary: "",
};

const ResumeBuilder = () => {
  const [resume, setResume] = useState<ResumeData>(defaultResume);

  const handleChange = (field: keyof ResumeData, value: any) => {
    setResume((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 px-4">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-4">🛠 Build Your Resume</h1>

          <PersonalInfo data={resume} onChange={handleChange} />
          <Education data={resume.education} onChange={handleChange} />
          <Experience data={resume.experience} onChange={handleChange} />
          <Skills data={resume.skills} onChange={handleChange} />
          <Projects data={resume.projects} onChange={handleChange} />
          <Summary data={resume.summary} onChange={handleChange} />
        </div>

        <motion.div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ResumePreview data={resume} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResumeBuilder;
