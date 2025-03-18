import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const App: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleHelpClick = () => {
    setShowHelp(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        onSettingsClick={handleSettingsClick}
        onHelpClick={handleHelpClick}
      />
      
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          {/* 其他路由将在后续添加 */}
        </Routes>
      </main>

      {/* Settings和Help模态框将在后续实现 */}
    </div>
  );
};

export default App; 