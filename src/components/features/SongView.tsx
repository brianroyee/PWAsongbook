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
      <div className="fixed top-0 left-0 right-0 h-16 bg-bg-primary/80 backdrop-blur-md flex items-center justify-between px-4 z-[60] border-b border-gray-100/50 dark:border-gray-800/50 transition-all">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-bg-secondary rounded-full transition-colors active:scale-95">
          <ArrowLeft className="w-6 h-6 text-text-primary" />
        </button>
        <span className="font-bold text-lg text-text-primary font-english">#{song.number}</span>
        <button onClick={() => toggleFavorite(song.id)} className="p-2 hover:bg-bg-secondary rounded-full transition-colors active:scale-95">
          <Heart className={`w-6 h-6 transition-all ${isFavorite ? 'fill-status-error text-status-error scale-110' : 'text-text-secondary'}`} />
        </button>
      </div>

      <div className="mt-4 px-2 max-w-md mx-auto">
        {showMal && (
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 font-malayalam text-accent-primary leading-tight">
            {song.title_mal}
          </h1>
        )}
        {showEng && (
          <h2 className={`text-lg md:text-xl text-center mb-2 text-text-secondary font-english ${!showMal ? 'text-2xl md:text-3xl font-bold text-accent-primary' : ''}`}>
            {song.title_eng}
          </h2>
        )}
        
        {song.author && (
          <p className="text-center text-xs md:text-sm text-text-secondary/60 mb-6 md:mb-8 font-english italic">
            Written by {song.author}
          </p>
        )}

        <div className={`space-y-8 md:space-y-10 ${currentSize} leading-loose transition-all duration-200`}>
          {song.chorus && (
            <div className="px-4 py-6 bg-bg-secondary/50 rounded-3xl border border-gray-100 dark:border-gray-800">
              <span className="text-xs md:text-sm text-accent-primary font-bold uppercase tracking-widest mb-4 block opacity-90">Chorus</span>
              {showMal && <p className="font-malayalam mb-3 text-text-primary whitespace-pre-line tracking-wide">{song.chorus.mal}</p>}
              {showEng && <p className="font-english text-text-primary whitespace-pre-line tracking-wide leading-loose">{song.chorus.eng}</p>}
            </div>
          )}

          {song.verses.map((verse, idx) => (
            <div key={idx} className="px-4 py-2">
              <span className="text-xs md:text-sm text-text-secondary mb-3 block font-medium opacity-50 uppercase tracking-wider">Verse {idx + 1}</span>
              {showMal && <p className="font-malayalam mb-3 text-text-primary whitespace-pre-line tracking-wide">{verse.mal}</p>}
              {showEng && <p className="font-english text-text-primary whitespace-pre-line tracking-wide leading-loose">{verse.eng}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
