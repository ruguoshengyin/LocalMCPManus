import React from 'react';
import useStore from '../../lib/store';
import useTheme from '../hooks/useTheme';

const SettingsPage: React.FC = () => {
  const { settings, updateSettings } = useStore();
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        设置
      </h1>

      <div className="space-y-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">界面设置</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                主题
              </label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
                className="input"
              >
                <option value="light">浅色</option>
                <option value="dark">深色</option>
                <option value="system">跟随系统</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                语言
              </label>
              <select
                value={settings.language}
                onChange={(e) => updateSettings({ language: e.target.value })}
                className="input"
              >
                <option value="zh-CN">简体中文</option>
                <option value="en-US">English</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">数据设置</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                数据存储目录
              </label>
              <input
                type="text"
                value={settings.dataDirectory}
                onChange={(e) => updateSettings({ dataDirectory: e.target.value })}
                className="input"
                placeholder="请输入数据存储目录路径"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 