import React from 'react';

const Popup = ({ isOpen, onClose, title, content, size }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    xxl: 'w-full',  
    xl: 'w-[80%]',
    lg: 'w-[60%]',
    md: 'w-[40%]',
  };

  const popupWidth = sizeClasses[size] || sizeClasses.md;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`bg-white p-6 rounded-lg ${popupWidth}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="mb-4">{content}</div>
      </div>
    </div>
  );
};

export default Popup;
