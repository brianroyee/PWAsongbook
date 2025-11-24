import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { InstallPrompt } from '../features/InstallPrompt';
import { useTheme } from '../../hooks/useTheme';

export const AppShell = () => {
  useTheme();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-24 px-4 md:px-6 max-w-md md:max-w-2xl mx-auto w-full overflow-y-auto transition-all duration-300 ease-in-out">
        <Outlet />
      </main>
      <BottomNav />
      <InstallPrompt />
    </div>
  );
};
