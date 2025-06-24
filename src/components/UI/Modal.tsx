import type { ReactNode } from 'react';
interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
