import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { Home } from './pages/Home';
import { SongView } from './components/features/SongView';
import { SettingsPanel } from './components/features/SettingsPanel';
import { Favorites } from './pages/Favorites';
import { useAppStore } from './store/useAppStore';
import { songs as localSongs } from './lib/songs';

function App() {
  const { setSongs } = useAppStore();

  useEffect(() => {
    // Load songs from local data on mount
    setSongs(localSongs);
  }, [setSongs]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="song/:id" element={<SongView />} />
          <Route path="search" element={<div className="p-4">Search Page (Coming Soon)</div>} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="settings" element={<SettingsPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
