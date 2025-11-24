import React from 'react';

interface ExitModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ExitModal: React.FC<ExitModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCancel}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-xs bg-bg-primary rounded-2xl shadow-2xl p-6 border border-gray-100 dark:border-gray-800 scale-100 animate-in zoom-in-95 duration-200">
        <h3 className="text-lg font-bold text-text-primary mb-2 text-center">Exit App?</h3>
        <p className="text-text-secondary text-center mb-6 text-sm">
          Are you sure you want to exit the application?
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 rounded-xl bg-bg-secondary text-text-primary font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 rounded-xl bg-status-error text-white font-medium hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20 active:scale-95"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};
