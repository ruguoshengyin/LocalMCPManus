import React from 'react';
import useStore from '../../lib/store';
import useTheme from '../hooks/useTheme';

const SettingsPage: React.FC = () => {
  const { settings, updateSettings } = useStore();
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 dark:text-white">设置</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="space-y-6">
          {/* 主题设置 */}
          <div>
            <h2 className="text-lg font-semibold mb-2 dark:text-white">主题</h2>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="light">浅色</option>
              <option value="dark">深色</option>
              <option value="system">跟随系统</option>
            </select>
          </div>

          {/* 语言设置 */}
          <div>
            <h2 className="text-lg font-semibold mb-2 dark:text-white">语言</h2>
            <select
              value={settings.language}
              onChange={(e) => updateSettings({ language: e.target.value })}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="zh-CN">简体中文</option>
              <option value="en-US">English</option>
            </select>
          </div>

          {/* 数据目录设置 */}
          <div>
            <h2 className="text-lg font-semibold mb-2 dark:text-white">数据目录</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={settings.dataDirectory}
                onChange={(e) => updateSettings({ dataDirectory: e.target.value })}
                className="flex-1 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="请选择数据存储目录"
              />
              <button
                onClick={() => {/* 选择目录的逻辑将在后续实现 */}}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                浏览
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 