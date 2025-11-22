import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { SongView } from './components/features/SongView';
import { Favorites } from './pages/Favorites';
import { useAppStore } from './store/useAppStore';
import { songs as localSongs } from './lib/songs';
import { PageTransition } from './components/layout/PageTransition';

function App() {
  const { setSongs } = useAppStore();

  useEffect(() => {
    setSongs(localSongs);
  }, [setSongs]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="song/:id" element={<PageTransition><SongView /></PageTransition>} />
          <Route path="search" element={<PageTransition><Search /></PageTransition>} />
          <Route path="favorites" element={<PageTransition><Favorites /></PageTransition>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
