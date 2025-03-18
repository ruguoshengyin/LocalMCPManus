import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Tool } from '../types/tool';

interface Settings {
  language: string;
  theme: 'light' | 'dark' | 'system';
  dataDirectory: string;
}

interface StoreState {
  // 工具相关
  tools: Tool[];
  addTool: (tool: Tool) => void;
  updateTool: (id: string, updates: Partial<Tool>) => void;
  deleteTool: (id: string) => void;
  
  // 搜索相关
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  
  // 设置相关
  settings: Settings;
  updateSettings: (updates: Partial<Settings>) => void;
  
  // 模态框状态
  isSettingsOpen: boolean;
  setSettingsOpen: (isOpen: boolean) => void;
  isHelpOpen: boolean;
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

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // 工具相关
      tools: [],
      addTool: (tool) =>
        set((state) => ({ tools: [...state.tools, tool] })),
      updateTool: (id, updates) =>
        set((state) => ({
          tools: state.tools.map((tool) =>
            tool.id === id ? { ...tool, ...updates } : tool
          ),
        })),
      deleteTool: (id) =>
        set((state) => ({
          tools: state.tools.filter((tool) => tool.id !== id),
        })),

      // 搜索相关
      searchTerm: '',
      setSearchTerm: (term) => set({ searchTerm: term }),

      // 设置相关
      settings: {
        language: 'zh-CN',
        theme: getInitialTheme(),
        dataDirectory: '',
      },
      updateSettings: (updates) =>
        set((state) => {
          const newSettings = { ...state.settings, ...updates };
          // 如果更新了主题，保存到localStorage
          if (updates.theme) {
            localStorage.setItem('theme', updates.theme);
          }
          return { settings: newSettings };
        }),

      // 模态框状态
      isSettingsOpen: false,
      setSettingsOpen: (isOpen) => set({ isSettingsOpen: isOpen }),
      isHelpOpen: false,
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