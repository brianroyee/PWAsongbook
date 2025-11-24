import { Link } from 'react-router-dom';
import type { Song } from '../../lib/songs';

interface SongListProps {
  songs: Song[];
}

export const SongList = ({ songs }: SongListProps) => {
  return (
    <div className="space-y-2">
      {songs.map((song) => (
        <Link
          key={song.id}
          to={`/song/${song.id}`}
          className="block bg-bg-secondary p-4 rounded-xl active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-accent-secondary w-8 text-center">
              {song.number}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-malayalam font-bold text-lg truncate text-text-primary">
                {song.title_mal}
              </h3>
              <p className="text-sm text-text-secondary truncate font-english">
                {song.title_eng}
              </p>
              {song.author && (
                <p className="text-xs text-text-secondary/60 mt-1 font-english">
                  {song.author}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
