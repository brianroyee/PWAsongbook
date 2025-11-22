import { Home, Search, Heart, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { SettingsModal } from './SettingsModal';

export const BottomNav = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Heart, label: 'Favorites', path: '/favorites' },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-bg-secondary border-t border-gray-200 dark:border-gray-800 flex items-center justify-around z-50 pb-safe">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full h-full transition-colors ${
                isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
              }`
            }
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="flex flex-col items-center justify-center w-full h-full transition-colors text-text-secondary hover:text-text-primary"
        >
          <Settings className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">Settings</span>
        </button>
      </nav>
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
};
