// src/components/Builder/Skills.tsx
import { motion } from 'framer-motion';
// import type { ResumeData } from '../types/resume';
import type { ResumeData } from '../../types/resume';

interface Props {
  data: ResumeData['skills'];
  onChange: (field: 'skills', value: ResumeData['skills']) => void;
}

const Skills = ({ data, onChange }: Props) => {
  const handleUpdate = (index: number, value: string) => {
    const updated = [...data];
    updated[index] = value;
    onChange('skills', updated);
  };

  const addSkill = () => {
    onChange('skills', [...data, '']);
  };

  const removeSkill = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    onChange('skills', updated);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      {data.map((skill, index) => (
        <div key={index} className="flex items-center gap-2 mb-3">
          <input
            type="text"
            placeholder="e.g. React.js"
            className="input flex-grow"
            value={skill}
            onChange={(e) => handleUpdate(index, e.target.value)}
          />
          <button
            onClick={() => removeSkill(index)}
            className="text-red-500 hover:underline text-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addSkill}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        + Add Skill
      </button>
    </motion.div>
  );
};

export default Skills;
