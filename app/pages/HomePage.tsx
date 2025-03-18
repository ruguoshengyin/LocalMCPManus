import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        欢迎使用 LocalMCPManus
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        一个现代化的 MCP 桌面工具集，帮助您更高效地管理和使用 MCP 工具。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">快速开始</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• 使用搜索栏查找工具</li>
            <li>• 点击工具卡片查看详情</li>
            <li>• 配置工具参数</li>
            <li>• 运行或克隆工具</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">功能特点</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• 卡片式界面设计</li>
            <li>• 支持多语言</li>
            <li>• 深色/浅色主题</li>
            <li>• 本地数据存储</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">帮助支持</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• 查看帮助文档</li>
            <li>• 访问 GitHub 仓库</li>
            <li>• 提交问题反馈</li>
            <li>• 参与项目贡献</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 