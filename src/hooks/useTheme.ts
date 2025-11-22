import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';

export const useTheme = () => {
  const { darkMode } = useAppStore();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);
};
