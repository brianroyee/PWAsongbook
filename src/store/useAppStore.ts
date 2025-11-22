import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Song } from '../lib/songs';

interface AppState {
  darkMode: boolean;
  fontSize: number; // 1 to 5 scale
  languageMode: 'malayalam' | 'manglish' | 'both';
  favorites: number[]; // Song IDs
  songs: Song[];
  lastSyncedAt: number | null;
  toggleTheme: () => void;
  setFontSize: (size: number) => void;
  setLanguageMode: (mode: 'malayalam' | 'manglish' | 'both') => void;
  toggleFavorite: (id: number) => void;
  setSongs: (songs: Song[]) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      darkMode: false,
      fontSize: 3,
      languageMode: 'both',
      favorites: [],
      songs: [],
      lastSyncedAt: null,
      toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
      setFontSize: (size) => set({ fontSize: size }),
      setLanguageMode: (mode) => set({ languageMode: mode }),
      toggleFavorite: (id) => set((state) => ({
        favorites: state.favorites.includes(id)
          ? state.favorites.filter((fid) => fid !== id)
          : [...state.favorites, id]
      })),
      setSongs: (songs) => set({ songs, lastSyncedAt: Date.now() }),
    }),
    { name: 'songbook-prefs' }
  )
);
