import { useState } from 'react';
import { SongList } from '../components/features/SongList';
import { searchSongs } from '../lib/songs';
import { Search } from 'lucide-react';

export const Home = () => {
  const [query, setQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'All' | 'Malayalam' | 'English'>('All');
  
  const allSongs = searchSongs(query);
  const filteredSongs = allSongs.filter(song => {
    if (selectedLanguage === 'All') return true;
    return song.language === selectedLanguage || !song.language; // Show if matches or undefined (legacy)
  });

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search by number or lyrics..."
            className="w-full bg-bg-secondary pl-10 pr-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-accent-primary outline-none transition-shadow text-text-primary placeholder:text-text-secondary"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mask-fade-right">
          {(['All', 'Malayalam', 'English'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap active:scale-95 ${
                selectedLanguage === lang
                  ? 'bg-accent-primary text-white shadow-md shadow-accent-primary/20'
                  : 'bg-bg-secondary text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <SongList songs={filteredSongs} />
    </div>
  );
};
