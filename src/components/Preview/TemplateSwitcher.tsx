import { useState } from 'react';

interface Props {
  templates: string[];
  onSelect: (template: string) => void;
}

const TemplateSwitcher = ({ templates, onSelect }: Props) => {
  const [active, setActive] = useState(templates[0]);

  const handleChange = (template: string) => {
    setActive(template);
    onSelect(template);
  };

  return (
    <div className="flex gap-3 justify-center my-4">
      {templates.map((template) => (
        <button
          key={template}
          onClick={() => handleChange(template)}
          className={`px-4 py-2 rounded-md border transition-colors duration-300 ${
            active === template
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
        >
          {template}
        </button>
      ))}
    </div>
  );
};

export default TemplateSwitcher;