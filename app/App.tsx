import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ToolCard from './components/ToolCard';
import SettingsPanel from './components/SettingsPanel';
import ResultPanel from './components/ResultPanel';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import ToolDetailPage from './pages/ToolDetailPage';
import useStore from '../lib/store';
import useTheme from './hooks/useTheme';

const App: React.FC = () => {
  const {
    tools,
    searchTerm,
    setSearchTerm,
    settings,
    updateSettings,
    isSettingsOpen,
    setSettingsOpen,
    isHelpOpen,
    setHelpOpen,
  } = useStore();

  const { theme, setTheme } = useTheme();

  // 过滤工具
  const filteredTools = tools.filter((tool) => {
    const search = searchTerm.toLowerCase();
    return (
      tool.title.toLowerCase().includes(search) ||
      tool.description.toLowerCase().includes(search) ||
      tool.tags.some((tag) => tag.name.toLowerCase().includes(search))
    );
  });

  const handleSettingsClick = () => {
    setSettingsOpen(true);
  };

  const handleHelpClick = () => {
    setHelpOpen(true);
  };

  const handleToolSettings = (id: string) => {
    // 工具设置逻辑将在后续实现
    console.log('Tool settings:', id);
  };

  const handleToolRun = (id: string) => {
    // 工具运行逻辑将在后续实现
    console.log('Run tool:', id);
  };

  const handleToolClone = (id: string) => {
    // 工具克隆逻辑将在后续实现
    console.log('Clone tool:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        onSettingsClick={handleSettingsClick}
        onHelpClick={handleHelpClick}
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools/:id" element={<ToolDetailPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>

      <main className="container mx-auto px-4 py-8">
        {/* 搜索栏 */}
        <div className="mb-8">
          <SearchBar
            onSearch={setSearchTerm}
            className="max-w-2xl mx-auto"
          />
        </div>

        {/* 工具卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.id}
              {...tool}
              onSettingsClick={handleToolSettings}
              onRunClick={handleToolRun}
              onCloneClick={handleToolClone}
            />
          ))}
        </div>

        {/* 设置面板 */}
        <SettingsPanel
          isOpen={isSettingsOpen}
          onClose={() => setSettingsOpen(false)}
          currentLanguage={settings.language}
          onLanguageChange={(language) => updateSettings({ language })}
          currentTheme={theme}
          onThemeChange={setTheme}
          dataDirectory={settings.dataDirectory}
          onDataDirectoryChange={(dataDirectory) => updateSettings({ dataDirectory })}
        />

        {/* 结果面板将在后续实现 */}
      </main>
    </div>
  );
};

export default App; 