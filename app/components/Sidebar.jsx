import React, { useState, useEffect } from 'react';
import SearchTools from './SearchTools';
import NewToolButton from './NewToolButton';
import ToolCard from './ToolCard';

function Sidebar({ onToolAction }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [tools, setTools] = useState([]);

  useEffect(() => {
    window.api.invoke('get-tools-data').then((data) => {
      console.log('获取到的工具数据:', data);
      // 确保data是数组
      if (Array.isArray(data)) {
        setTools(data);
      } else {
        console.error('工具数据不是数组:', data);
        setTools([]); // 设置为空数组以避免错误
      }
    }).catch(err => {
      console.error('获取工具数据错误:', err);
      setTools([]);
    });
  }, []);

  // 过滤工具
  const filteredTools = Array.isArray(tools) ? tools.filter(tool => 
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : [];

  // 创建新工具
  const handleCreateTool = () => {
    // 确保tools是数组
    const currentTools = Array.isArray(tools) ? tools : [];
    
    const newTool = {
      id: `${currentTools.length + 1}`,
      title: '新建工具',
      description: '请编辑此工具的描述',
      icon: '🔧',
      tags: ['新建']
    };
    
    const updatedTools = [...currentTools, newTool];
    setTools(updatedTools);
    onToolAction(newTool.id, 'settings');

    // 保存工具数据到本地
    window.api.invoke('save-tools-data', updatedTools);
  };

  return (
    <aside className="w-80 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden flex flex-col">
      <div className="p-4">
        <SearchTools value={searchTerm} onChange={setSearchTerm} />
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <NewToolButton onClick={handleCreateTool} />
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {filteredTools.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
              onSettings={() => onToolAction(tool.id, 'settings')}
              onRun={() => onToolAction(tool.id, 'results')}
              onClone={() => {
                const currentTools = Array.isArray(tools) ? tools : [];
                const clonedTool = {
                  ...tool,
                  id: `${currentTools.length + 1}`,
                  title: `${tool.title} (副本)`
                };
                const updatedTools = [...currentTools, clonedTool];
                setTools(updatedTools);
                // 保存更新后的工具数据
                window.api.invoke('save-tools-data', updatedTools);
              }}
            />
          ))}
          
          {filteredTools.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              未找到匹配的工具
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;