import { motion } from "framer-motion";
// import type { ResumeData } from '../types/resume';
import type { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData["education"];
  onChange: (field: "education", value: ResumeData["education"]) => void;
}

const Education = ({ data, onChange }: Props) => {
  const handleUpdate = (index: number, key: string, value: string) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [key]: value };
    onChange("education", updated);
  };

  const addEducation = () => {
    onChange("education", [...data, { school: "", degree: "", year: "" }]);
  };

  const removeEducation = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    onChange("education", updated);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {data.map((edu, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="School"
            className="input"
            value={edu.school}
            onChange={(e) => handleUpdate(index, "school", e.target.value)}
          />
          <input
            type="text"
            placeholder="Degree"
            className="input"
            value={edu.degree}
            onChange={(e) => handleUpdate(index, "degree", e.target.value)}
          />
          <input
            type="text"
            placeholder="Year"
            className="input"
            value={edu.year}
            onChange={(e) => handleUpdate(index, "year", e.target.value)}
          />
          <button
            onClick={() => removeEducation(index)}
            className="text-sm text-red-500 hover:underline sm:col-span-3 text-left"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addEducation}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        + Add Education
      </button>
    </motion.div>
  );
};

export default Education;
