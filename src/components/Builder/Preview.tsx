
import type { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
}

const Preview = ({ data }: Props) => {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p>{data.title}</p>
    </div>
  );
};

export default Preview;
