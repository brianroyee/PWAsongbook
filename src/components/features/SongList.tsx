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
          className="block bg-bg-secondary p-3 md:p-4 rounded-xl active:scale-[0.98] transition-all hover:shadow-md border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0 w-12 md:w-14 h-12 md:h-14 bg-accent-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
              <span className="text-lg md:text-xl font-bold text-accent-primary">
                {song.number}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-malayalam font-bold text-base md:text-lg truncate text-text-primary leading-snug">
                {song.title_mal}
              </h3>
              <p className="text-xs md:text-sm text-text-secondary truncate font-english">
                {song.title_eng}
              </p>
              {song.author && (
                <p className="text-[10px] md:text-xs text-text-secondary mt-0.5 font-english">
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
