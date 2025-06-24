
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({ className = '', ...props }: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={`w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white ${className}`}
    />
  );
};

export default TextArea;