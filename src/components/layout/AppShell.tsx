import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { useTheme } from '../../hooks/useTheme';

export const AppShell = () => {
  useTheme();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-24 px-4 max-w-2xl mx-auto w-full overflow-y-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
