
interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const Toggle = ({ checked, onChange, label }: ToggleProps) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <span>{label}</span>
      <div
        className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
          checked ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={onChange}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            checked ? 'translate-x-4' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Toggle;
