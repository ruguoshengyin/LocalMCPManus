import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useStore from '../../lib/store';

const ToolDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tools } = useStore();

  const tool = tools.find(t => t.id === id);

  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">工具未找到</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            抱歉，您请求的工具不存在或已被删除。
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            返回主页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <button
          onClick={() => navigate('/')}
          className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          ← 返回主页
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2 dark:text-white">{tool.title}</h1>
          <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 dark:text-white">标签</h2>
          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 dark:text-white">命令</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4">
            <code className="text-sm dark:text-white">{tool.command}</code>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => {/* 运行工具的逻辑将在后续实现 */}}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            运行工具
          </button>
          <button
            onClick={() => {/* 编辑工具的逻辑将在后续实现 */}}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            编辑工具
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage; 