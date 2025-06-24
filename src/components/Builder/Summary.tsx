import { motion } from "framer-motion";
import type { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData["summary"];
  onChange: (field: "summary", value: string) => void;
}

const Summary = ({ data, onChange }: Props) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
      <textarea
        rows={5}
        placeholder="Write a brief summary about yourself..."
        className="input w-full resize-none"
        value={data}
        onChange={(e) => onChange("summary", e.target.value)}
      ></textarea>
    </motion.div>
  );
};

export default Summary;
