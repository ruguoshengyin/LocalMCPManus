import React, { useState } from 'react';
import { PlusCircleIcon, CogIcon, PlayIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

interface Tool {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon?: string;
}

const HomePage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const dummyTools: Tool[] = [
    {
      id: '1',
      title: 'ChatGPT工具',
      description: '基于ChatGPT的对话工具',
      tags: ['AI', '对话'],
    },
    {
      id: '2',
      title: '图像生成器',
      description: 'AI图像生成工具',
      tags: ['AI', '图像'],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* 左侧工具区 */}
      <div className="w-80 border-r border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="搜索工具..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <button className="w-full mb-4 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          添加工具
        </button>

        <div className="space-y-4">
          {dummyTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer"
              onClick={() => setSelectedTool(tool)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{tool.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex space-x-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <CogIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <PlayIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <DocumentDuplicateIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 右侧编辑与结果区 */}
      <div className="flex-1 p-6 overflow-y-auto">
        {selectedTool ? (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">工具设置</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">标题</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border"
                    value={selectedTool.title}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">描述</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border"
                    rows={3}
                    value={selectedTool.description}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">标签</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border"
                    value={selectedTool.tags.join(', ')}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">模型设置</h2>
              <select className="w-full px-4 py-2 rounded-lg border">
                <option>OpenAI</option>
                <option>Anthropic</option>
                <option>Google</option>
              </select>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">运行结果</h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 min-h-[200px]">
                <p className="text-gray-500 dark:text-gray-400">暂无运行结果</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            请选择左侧工具进行操作
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage; 