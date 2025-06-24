import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Preview from '../../components/Builder/Preview';
// import Preview from '../../components/Preview'
import { templates } from '../../constants/templates';
import TemplateSwitcher from './TemplateSwitcher';
import type { ResumeData } from '../../types/resume';

interface Props {
  data: ResumeData;
}

const ResumePreview = ({ data }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

const handlePrint = useReactToPrint({
  content: () => componentRef.current,
  documentTitle: `${data.name}-Resume`,
} as any);


  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Modern':
        return <Preview data={data} />;
      case 'Classic':
        return <Preview data={data} />;
      case 'Elegant':
        return <Preview data={data} />;
      case 'Professional':
        return <Preview data={data} />;
      default:
        return <Preview data={data} />;
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <TemplateSwitcher templates={templates} onSelect={setSelectedTemplate} />
      <div className="flex justify-end w-full max-w-4xl">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>
      <div ref={componentRef} className="w-full">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;