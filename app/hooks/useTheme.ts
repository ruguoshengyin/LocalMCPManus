import { useEffect } from 'react';
import useStore from '../../lib/store';

type Theme = 'light' | 'dark' | 'system';

const useTheme = () => {
  const { settings, updateSettings } = useStore();
  const { theme } = settings;

  // 应用主题到DOM
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const isDark =
      newTheme === 'dark' ||
      (newTheme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // 监听系统主题变化
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // 当主题设置改变时应用主题
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // 切换主题
  const setTheme = (newTheme: Theme) => {
    updateSettings({ theme: newTheme });
  };

  return {
    theme,
    setTheme,
    isDark:
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  };
};

export default useTheme; 