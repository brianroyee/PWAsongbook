import { Link } from 'react-router-dom';
import type { Song } from '../../lib/songs';
import { motion } from 'framer-motion';

interface SongListProps {
  songs: Song[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.2
    }
  }
};

export const SongList = ({ songs }: SongListProps) => {
  return (
    <motion.div 
      className="space-y-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {songs.map((song) => (
        <motion.div key={song.id} variants={item}>
          <Link
            to={`/song/${song.id}`}
            className="card block p-4 active:scale-[0.98] group"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-heading font-bold text-accent-primary w-10 text-center bg-accent-primary/10 rounded-lg py-1.5 transition-colors group-hover:bg-accent-primary group-hover:text-white">
                {song.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-malayalam font-bold text-lg truncate text-text-primary mb-0.5 group-hover:text-accent-primary transition-colors">
                  {song.title_mal}
                </h3>
                <p className="text-sm text-text-secondary truncate font-english">
                  {song.title_eng}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
