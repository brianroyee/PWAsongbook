import { Search, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-bg-secondary border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 z-50 shadow-sm">
      <Link to="/" className="text-xl font-bold text-accent-primary font-english">
        Songbook
      </Link>
      <div className="flex items-center gap-2">
        <Link to="/search" className="p-2.5 rounded-full hover:bg-bg-primary transition-colors" aria-label="Search">
          <Search className="w-5 h-5 text-text-secondary" />
        </Link>
        <Link to="/settings" className="p-2.5 rounded-full hover:bg-bg-primary transition-colors" aria-label="Settings">
          <Settings className="w-5 h-5 text-text-secondary" />
        </Link>
      </div>
    </header>
  );
};
