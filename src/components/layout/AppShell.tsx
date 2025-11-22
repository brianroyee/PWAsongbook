import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { useTheme } from '../../hooks/useTheme';

export const AppShell = () => {
  useTheme();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col">
      <Header />
      <main className="flex-1 pt-16 pb-20 px-4 overflow-y-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
