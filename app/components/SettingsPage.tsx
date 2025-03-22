import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('zh');

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">应用设置</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">界面设置</h2>
        
        <div className="flex items-center justify-between py-3 border-b dark:border-gray-700">
          <div>
            <h3 className="font-medium">深色模式</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">启用深色主题</p>
          </div>
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              id="toggle-dark-mode"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle-dark-mode"
              className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                darkMode ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></label>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b dark:border-gray-700">
          <div>
            <h3 className="font-medium">通知</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">接收应用通知</p>
          </div>
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              id="toggle-notifications"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle-notifications"
              className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                notifications ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></label>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-3">
          <div>
            <h3 className="font-medium">语言</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">选择应用语言</p>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">账户设置</h2>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
          保存设置
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;