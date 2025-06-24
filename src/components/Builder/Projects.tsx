import { motion } from "framer-motion";
import type { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData["projects"];
  onChange: (field: "projects", value: ResumeData["projects"]) => void;
}

const Projects = ({ data, onChange }: Props) => {
  const handleUpdate = (index: number, key: string, value: string) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [key]: value };
    onChange("projects", updated);
  };

  const addProject = () => {
    onChange("projects", [...data, { name: "", description: "", link: "" }]);
  };

  const removeProject = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    onChange("projects", updated);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      {data.map((proj, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Project Name"
            className="input"
            value={proj.name}
            onChange={(e) => handleUpdate(index, "name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="input"
            value={proj.description}
            onChange={(e) => handleUpdate(index, "description", e.target.value)}
          />
          <input
            type="text"
            placeholder="Project Link"
            className="input"
            value={proj.link}
            onChange={(e) => handleUpdate(index, "link", e.target.value)}
          />
          <button
            onClick={() => removeProject(index)}
            className="text-sm text-red-500 hover:underline sm:col-span-3 text-left"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addProject}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        + Add Project
      </button>
    </motion.div>
  );
};

export default Projects;
