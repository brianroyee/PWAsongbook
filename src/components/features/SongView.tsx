import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { getSongById } from '../../lib/songs';
import { useAppStore } from '../../store/useAppStore';

export const SongView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const song = getSongById(Number(id));
  const { fontSize, languageMode, favorites, toggleFavorite } = useAppStore();

  if (!song) return <div className="p-4 text-center">Song not found</div>;

  const isFavorite = favorites.includes(song.id);
  const textSizes = ['text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
  const currentSize = textSizes[fontSize - 1] || 'text-xl';

  const showMal = languageMode === 'malayalam' || languageMode === 'both';
  const showEng = languageMode === 'manglish' || languageMode === 'both';

  return (
    <div className="pb-20 animate-in fade-in duration-300">
      {/* Custom Header for Song View - Overrides default header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-bg-primary flex items-center justify-between px-4 z-[60] border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-bg-secondary rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-text-primary" />
        </button>
        <span className="font-bold text-lg text-text-primary">#{song.number}</span>
        <button onClick={() => toggleFavorite(song.id)} className="p-2 hover:bg-bg-secondary rounded-full transition-colors">
          <Heart className={`w-6 h-6 transition-colors ${isFavorite ? 'fill-status-error text-status-error' : 'text-text-secondary'}`} />
        </button>
      </div>

      <div className="mt-4 px-2 max-w-md mx-auto">
        {showMal && (
          <h1 className="text-2xl font-bold text-center mb-2 font-malayalam text-accent-primary leading-tight">
            {song.title_mal}
          </h1>
        )}
        {showEng && (
          <h2 className={`text-lg text-center mb-2 text-text-secondary font-english ${!showMal ? 'text-2xl font-bold text-accent-primary' : ''}`}>
            {song.title_eng}
          </h2>
        )}
        
        {song.author && (
          <p className="text-center text-sm text-text-secondary/60 mb-8 font-english italic">
            Written by {song.author}
          </p>
        )}

        <div className={`space-y-8 ${currentSize} leading-relaxed`}>
          {song.chorus && (
            <div className="px-2">
              <span className="text-xs text-accent-primary font-bold uppercase tracking-wider mb-2 block">Chorus</span>
              {showMal && <p className="font-malayalam mb-2 text-text-primary whitespace-pre-line">{song.chorus.mal}</p>}
              {showEng && <p className="font-english text-text-secondary opacity-80 whitespace-pre-line">{song.chorus.eng}</p>}
            </div>
          )}

          {song.verses.map((verse, idx) => (
            <div key={idx} className="px-2">
              <span className="text-xs text-text-secondary mb-2 block font-medium opacity-60">Verse {idx + 1}</span>
              {showMal && <p className="font-malayalam mb-2 text-text-primary whitespace-pre-line">{verse.mal}</p>}
              {showEng && <p className="font-english text-text-secondary opacity-80 whitespace-pre-line">{verse.eng}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
