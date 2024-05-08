import React, { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="modal mt-4">
      <div className="modal-content">
        {children}
        <button  className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition duration-150 ease-in-out ml-1 mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
