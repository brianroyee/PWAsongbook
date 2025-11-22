import { useState } from 'react';
import { SongList } from '../components/features/SongList';
import { searchSongs } from '../lib/songs';
import { Search } from 'lucide-react';

export const Home = () => {
  const [query, setQuery] = useState('');
  const filteredSongs = searchSongs(query);

  return (
    <div className="space-y-6">
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

      <SongList songs={filteredSongs} />
    </div>
  );
};
