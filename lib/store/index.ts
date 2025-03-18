import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Tag {
  id: string;
  name: string;
  color?: string;
}

interface Tool {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  command?: string;
  config?: {
    id: string;
    label: string;
    type: string;
    value: string;
    placeholder?: string;
  }[];
}

interface Settings {
  language: string;
  theme: 'light' | 'dark' | 'system';
  dataDirectory: string;
}

interface State {
  tools: Tool[];
  searchTerm: string;
  settings: Settings;
  isSettingsOpen: boolean;
  isHelpOpen: boolean;
  setSearchTerm: (term: string) => void;
  updateSettings: (settings: Partial<Settings>) => void;
  setSettingsOpen: (isOpen: boolean) => void;
  setHelpOpen: (isOpen: boolean) => void;
}

// 获取初始主题
const getInitialTheme = (): 'light' | 'dark' | 'system' => {
  // 如果用户之前设置过主题，从localStorage中获取
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
    return savedTheme as 'light' | 'dark' | 'system';
  }
  // 否则返回系统主题
  return 'system';
};

const useStore = create<State>()(
  persist(
    (set) => ({
      tools: [],
      searchTerm: '',
      settings: {
        language: 'zh-CN',
        theme: getInitialTheme(),
        dataDirectory: '',
      },
      isSettingsOpen: false,
      isHelpOpen: false,
      setSearchTerm: (term) => set({ searchTerm: term }),
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      setSettingsOpen: (isOpen) => set({ isSettingsOpen: isOpen }),
      setHelpOpen: (isOpen) => set({ isHelpOpen: isOpen }),
    }),
    {
      name: 'localmcpmanus-storage',
      partialize: (state) => ({
        tools: state.tools,
        settings: state.settings,
      }),
      // 在store初始化时应用主题
      onRehydrateStorage: () => (state) => {
        if (state) {
          const { theme } = state.settings;
          const root = document.documentElement;
          const isDark =
            theme === 'dark' ||
            (theme === 'system' &&
              window.matchMedia('(prefers-color-scheme: dark)').matches);
          
          if (isDark) {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
        }
      },
    }
  )
);

export default useStore; 