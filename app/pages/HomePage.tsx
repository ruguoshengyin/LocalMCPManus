import React from 'react';
import SearchBar from '../components/SearchBar';
import ToolCard from '../components/ToolCard';
import useStore from '../../lib/store';

const HomePage: React.FC = () => {
  const { tools, searchTerm, setSearchTerm } = useStore();

  // 过滤工具
  const filteredTools = tools.filter((tool) => {
    const search = searchTerm.toLowerCase();
    return (
      tool.title.toLowerCase().includes(search) ||
      tool.description.toLowerCase().includes(search) ||
      tool.tags.some((tag) => tag.name.toLowerCase().includes(search))
    );
  });

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
    <div className="container mx-auto px-4 py-8">
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
    </div>
  );
};

export default HomePage; 