import { useAppStore } from '../store/useAppStore';
import { getSongById } from '../lib/songs';
import type { Song } from '../lib/songs';
import { SongList } from '../components/features/SongList';
import { Heart } from 'lucide-react';

export const Favorites = () => {
  const { favorites } = useAppStore();
  // Filter out undefined results in case a song was removed but ID persists
  const favoriteSongs = favorites
    .map((id: number) => getSongById(id))
    .filter((song): song is Song => song !== undefined);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold font-malayalam px-2 text-accent-primary">Favorites</h1>
      
      {favoriteSongs.length > 0 ? (
        <SongList songs={favoriteSongs} />
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-text-secondary space-y-4">
          <div className="bg-bg-secondary p-6 rounded-full">
            <Heart className="w-12 h-12 opacity-20" />
          </div>
          <p>No favorites yet.</p>
          <p className="text-sm opacity-60">Heart a song to see it here!</p>
        </div>
      )}
    </div>
  );
};
