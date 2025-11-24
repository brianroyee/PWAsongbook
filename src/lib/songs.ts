import Fuse from 'fuse.js';
import songsData from '../data/songs.json';

export interface Song {
  id: number;
  number: string;
  title_mal: string;
  title_eng: string;
  category: string;
  author?: string;
  language?: string;
  verses: {
    mal: string;
    eng: string;
  }[];
  chorus?: {
    mal: string;
    eng: string;
  };
}

export const songs: Song[] = songsData;

const fuseOptions = {
  keys: ['number', 'title_mal', 'title_eng', 'verses.mal', 'verses.eng'],
  threshold: 0.3,
  ignoreLocation: true,
};

const fuse = new Fuse(songs, fuseOptions);

export const searchSongs = (query: string): Song[] => {
  if (!query) return songs;
  return fuse.search(query).map((result) => result.item);
};

export const getSongById = (id: number): Song | undefined => {
  return songs.find((song) => song.id === id);
};
