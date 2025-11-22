import { useState } from 'react';
import { SongList } from '../components/features/SongList';
import { useAppStore } from '../store/useAppStore';
import { Search as SearchIcon } from 'lucide-react';

const categories = ['All', 'Worship', 'Holy Spirit', 'Praise', 'Prayer', 'Thanksgiving'];

export const Search = () => {
  const { songs } = useAppStore();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSongs = songs.filter((song) => {
    const matchesQuery =
      query === '' ||
      song.number.toLowerCase().includes(query.toLowerCase()) ||
      song.title_mal.includes(query) ||
      song.title_eng.toLowerCase().includes(query.toLowerCase()) ||
      song.verses.some(
        (v) =>
          v.mal.includes(query) ||
          v.eng.toLowerCase().includes(query.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === 'All' || song.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-4">
      <div className="sticky top-0 bg-bg-primary pt-2 pb-4 space-y-4 z-10">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search by number or lyrics..."
            className="w-full bg-bg-secondary pl-10 pr-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-accent-primary outline-none transition-shadow text-text-primary placeholder:text-text-secondary"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-accent-primary text-white shadow-md'
                  : 'bg-bg-secondary text-text-secondary hover:bg-accent-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-text-secondary mb-2">
        {filteredSongs.length} song{filteredSongs.length !== 1 ? 's' : ''} found
      </div>

      <SongList songs={filteredSongs} />
    </div>
  );
};
