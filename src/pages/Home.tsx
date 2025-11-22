import { useState } from 'react';
import { SongList } from '../components/features/SongList';
import { searchSongs } from '../lib/songs';
import { Search } from 'lucide-react';

export const Home = () => {
  const [query, setQuery] = useState('');
  const filteredSongs = searchSongs(query);

  return (
    <div className="space-y-6 px-4 pt-6">
      <header className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-text-primary mb-1">Songbook</h1>
        <p className="text-text-secondary">Find your favorite hymns</p>
      </header>
      
      <div className="sticky top-4 z-20 bg-bg-primary/95 backdrop-blur-sm py-2 -mx-4 px-4 transition-all">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search by number or lyrics..."
            className="w-full bg-bg-secondary pl-12 pr-4 py-3.5 rounded-2xl border-none focus:ring-2 focus:ring-accent-primary/20 outline-none text-text-primary placeholder:text-text-secondary/60 font-medium transition-all"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-text-primary">
            {query ? 'Results' : 'All Songs'}
          </h2>
          <span className="text-xs font-medium text-text-secondary bg-bg-secondary px-2.5 py-1 rounded-full">
            {filteredSongs.length}
          </span>
        </div>
        <SongList songs={filteredSongs} />
      </div>
    </div>
  );
};
