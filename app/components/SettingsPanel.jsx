import React, { useState, useEffect } from 'react';

function SettingsPanel({ toolId }) {
  const [tool, setTool] = useState({
    id: '',
    title: '',
    description: '',
    tags: [],
    model: 'openai',
    dataDirectory: '/user/data'
  });
  
  const [newTag, setNewTag] = useState('');
  
  // 模拟从数据库获取工具数据
  useEffect(() => {
    // 这里应该是从数据库或状态管理获取工具数据
    // 这里使用模拟数据
    const dummyTools = {
      '1': {
        id: '1',
        title: '文本摘要工具',
        description: '使用AI模型自动生成文本摘要',
        tags: ['文本', 'AI', '摘要'],
        model: 'openai',
        dataDirectory: '/user/documents'
      },
      '2': {
        id: '2',
        title: '图像识别工具',
        description: '识别图像中的物体和场景',
        tags: ['图像', 'AI', '识别'],
        model: 'google',
        dataDirectory: '/user/images'
      },
      '3': {
        id: '3',
        title: '数据分析助手',
        description: '帮助分析和可视化数据集',
        tags: ['数据', '分析', '可视化'],
        model: 'anthropic',
        dataDirectory: '/user/data'
      }
    };
    
    setTool(dummyTools[toolId] || {
      id: toolId,
      title: '新工具',
      description: '',
      tags: [],
      model: 'openai',
      dataDirectory: '/user/data'
    });
  }, [toolId]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTool({ ...tool, [name]: value });
  };
  
  const handleAddTag = () => {
    if (newTag && !tool.tags.includes(newTag)) {
      setTool({ ...tool, tags: [...tool.tags, newTag] });
      setNewTag('');
    }
  };
  
  const handleRemoveTag = (tagToRemove) => {
    setTool({
      ...tool,
      tags: tool.tags.filter(tag => tag !== tagToRemove)
    });
  };
  
  const handleSave = () => {
    // 保存数据到数据库或状态管理
    console.log('保存工具设置:', tool);
    // 在实际应用中，这里会发送到后端API或更新全局状态
  };

  const models = [
    { id: 'openai', name: 'OpenAI' },
    { id: 'google', name: 'Google AI' },
    { id: 'anthropic', name: 'Anthropic' },
    { id: 'local', name: '本地模型' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            工具设置
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            配置你的MCP工具
          </p>
        </div>
        <button
          onClick={handleSave}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          保存设置
        </button>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700">
        <dl>
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              标题
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="title"
                value={tool.title}
                onChange={handleChange}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
              />
            </dd>
          </div>
          
          <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              描述
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              <textarea
                name="description"
                rows="3"
                value={tool.description}
                onChange={handleChange}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
              />
            </dd>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              标签
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-700 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    >
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
              
              <div className="flex">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
                  placeholder="添加标签..."
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="ml-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  添加
                </button>
              </div>
            </dd>
          </div>
          
          <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              模型设置
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              <select
                name="model"
                value={tool.model}
                onChange={handleChange}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
              >
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </dd>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              MCP配置
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              <div className="flex space-x-3">
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  浏览MCP商店
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  一键配置
                </button>
              </div>
            </dd>
          </div>
          
          <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
              数据目录
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              <div className="flex">
                <input
                  type="text"
                  name="dataDirectory"
                  value={tool.dataDirectory}
                  onChange={handleChange}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
                />
                <button
                  type="button"
                  className="ml-3 inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  浏览
                </button>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default SettingsPanel;