
import { motion } from 'framer-motion';
import type { ResumeData } from '../../types/resume';

interface Props {
  data: ResumeData['experience'];
  onChange: (field: 'experience', value: ResumeData['experience']) => void;
}

const Experience = ({ data, onChange }: Props) => {
  const handleUpdate = (index: number, key: string, value: string) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [key]: value };
    onChange('experience', updated);
  };

  const addExperience = () => {
    onChange('experience', [...data, { company: '', role: '', year: '' }]);
  };

  const removeExperience = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    onChange('experience', updated);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      {data.map((exp, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Company"
            className="input"
            value={exp.company}
            onChange={(e) => handleUpdate(index, 'company', e.target.value)}
          />
          <input
            type="text"
            placeholder="Role"
            className="input"
            value={exp.role}
            onChange={(e) => handleUpdate(index, 'role', e.target.value)}
          />
          <input
            type="text"
            placeholder="Year"
            className="input"
            value={exp.year}
            onChange={(e) => handleUpdate(index, 'year', e.target.value)}
          />
          <button
            onClick={() => removeExperience(index)}
            className="text-sm text-red-500 hover:underline sm:col-span-3 text-left"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addExperience}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        + Add Experience
      </button>
    </motion.div>
  );
};

export default Experience;