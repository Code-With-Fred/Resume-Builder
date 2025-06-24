// src/components/Builder/PersonalInfo.tsx
import { motion } from 'framer-motion';
// import type { ResumeData } from '../types/resume';
import type { ResumeData } from '../../types/resume';

interface Props {
  data: ResumeData;
  onChange: (field: keyof ResumeData, value: any) => void;
}

const PersonalInfo = ({ data, onChange }: Props) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input"
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
        />
        <input
          type="text"
          placeholder="Title (e.g. Frontend Developer)"
          className="input"
          value={data.title}
          onChange={(e) => onChange('title', e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          className="input"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          className="input"
          value={data.linkedin}
          onChange={(e) => onChange('linkedin', e.target.value)}
        />
        <input
          type="text"
          placeholder="GitHub URL"
          className="input"
          value={data.github}
          onChange={(e) => onChange('github', e.target.value)}
        />
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
