import { useAppStore } from '../../store/useAppStore';
import { Moon, Sun, Type } from 'lucide-react';

export const SettingsPanel = () => {
  const { darkMode, toggleTheme, fontSize, setFontSize, languageMode, setLanguageMode } = useAppStore();

  return (
    <div className="p-4 space-y-6">
      
      {/* Theme Toggle */}
      <div className="bg-bg-secondary p-4 rounded-xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          {darkMode ? <Moon className="w-6 h-6 text-accent-primary" /> : <Sun className="w-6 h-6 text-accent-primary" />}
          <span className="font-medium text-lg">Dark Mode</span>
        </div>
        <button 
          onClick={toggleTheme}
          className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 ${darkMode ? 'bg-accent-primary' : 'bg-gray-300'}`}
          aria-label="Toggle Dark Mode"
        >
          <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${darkMode ? 'translate-x-6' : ''}`} />
        </button>
      </div>

      {/* Language Mode */}
      <div className="bg-bg-secondary p-4 rounded-xl space-y-4 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-medium text-lg">Language Display</span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-1 bg-bg-primary rounded-lg border border-gray-100 dark:border-gray-800">
          {(['malayalam', 'both', 'manglish'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setLanguageMode(mode)}
              className={`py-2 px-3 rounded-md text-sm font-medium transition-all ${
                languageMode === mode
                  ? 'bg-accent-primary text-white shadow-sm'
                  : 'text-text-secondary hover:bg-bg-secondary'
              }`}
            >
              {mode === 'malayalam' ? 'Mal' : mode === 'manglish' ? 'Eng' : 'Both'}
            </button>
          ))}
        </div>
      </div>

      {/* Font Size Control */}
      <div className="bg-bg-secondary p-4 rounded-xl space-y-4 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <Type className="w-6 h-6 text-accent-primary" />
          <span className="font-medium text-lg">Font Size</span>
        </div>
        <div className="flex items-center justify-between gap-4 px-2">
          <span className="text-sm font-bold text-text-secondary">A</span>
          <input 
            type="range" 
            min="1" 
            max="5" 
            step="1"
            value={fontSize} 
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-primary"
            aria-label="Adjust Font Size"
          />
          <span className="text-2xl font-bold text-text-secondary">A</span>
        </div>
        <div className="mt-4 p-4 bg-bg-primary rounded-lg border border-gray-100 dark:border-gray-800 text-center">
          <p className={`font-malayalam transition-all duration-300 ${
            ['text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'][fontSize - 1]
          }`}>
            ആത്മാവിൽ വരേണമേ
          </p>
        </div>
      </div>

      {/* Report Bug */}
      <div className="bg-bg-secondary p-4 rounded-xl shadow-sm">
        <h2 className="font-medium text-lg mb-3">Help & Support</h2>
        <a
          href="mailto:briancodee@gmail.com?subject=Songbook%20Bug%20Report&body=Please%20describe%20the%20issue%20you%20encountered%3A%0A%0A"
          className="block w-full py-3 px-4 bg-accent-primary text-white text-center rounded-lg font-medium hover:bg-accent-secondary transition-colors"
        >
          Report a Bug
        </a>
        <p className="text-xs text-text-secondary mt-2 text-center">
          Your feedback helps us improve the app
        </p>
      </div>
    </div>
  );
};
