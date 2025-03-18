import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import useStore from '../../lib/store';

const ToolDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tools } = useStore();

  const tool = tools.find((t) => t.id === id);

  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            工具未找到
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            抱歉，您请求的工具不存在或已被删除。
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        返回
      </button>

      <div className="space-y-8">
        <div className="card">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {tool.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-2 py-1 text-sm rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="btn btn-secondary">设置</button>
              <button className="btn btn-primary">运行</button>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {tool.description}
          </p>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-xl font-semibold mb-4">配置选项</h2>
            <div className="space-y-4">
              {tool.config?.map((item) => (
                <div key={item.id}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    value={item.value}
                    onChange={(e) => {/* 配置更新逻辑将在后续实现 */}}
                    className="input"
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">运行历史</h2>
          <div className="space-y-4">
            {tool.history?.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {new Date(record.timestamp).toLocaleString()}
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {record.status}
                  </p>
                </div>
                <button
                  onClick={() => {/* 查看详情逻辑将在后续实现 */}}
                  className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  查看详情
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage; 