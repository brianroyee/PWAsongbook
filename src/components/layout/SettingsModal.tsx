import { X } from 'lucide-react';
import { SettingsPanel } from '../features/SettingsPanel';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-bg-primary rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300 sm:slide-in-from-bottom-0">
        <div className="sticky top-0 bg-bg-primary/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-text-primary">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bg-secondary rounded-full transition-colors"
            aria-label="Close settings"
          >
            <X className="w-6 h-6 text-text-secondary" />
          </button>
        </div>
        <SettingsPanel />
      </div>
    </div>
  );
};
