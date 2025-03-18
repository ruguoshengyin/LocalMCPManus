import React from 'react';

const HelpPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        帮助中心
      </h1>

      <div className="space-y-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">基本使用</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <h3 className="font-medium">搜索工具</h3>
            <p>使用顶部的搜索栏输入关键词，可以快速找到需要的工具。支持按工具名称、描述和标签进行搜索。</p>

            <h3 className="font-medium">工具操作</h3>
            <p>每个工具卡片都提供了以下操作按钮：</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>设置：配置工具的参数和选项</li>
              <li>运行：执行工具的功能</li>
              <li>克隆：创建工具的副本</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">常见问题</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <div>
              <h3 className="font-medium">如何更改主题？</h3>
              <p>点击右上角的设置图标，在设置页面中可以选择浅色、深色或跟随系统主题。</p>
            </div>

            <div>
              <h3 className="font-medium">如何切换语言？</h3>
              <p>在设置页面中可以选择简体中文或英文界面语言。</p>
            </div>

            <div>
              <h3 className="font-medium">数据存储在哪里？</h3>
              <p>默认情况下，数据存储在用户目录下。你可以在设置页面中修改数据存储目录。</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">联系与支持</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>如果你遇到问题或有建议：</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>访问我们的 <a href="https://github.com/yourusername/LocalMCPManus" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300" target="_blank" rel="noopener noreferrer">GitHub 仓库</a></li>
              <li>提交 Issue 报告问题</li>
              <li>参与项目讨论</li>
              <li>贡献代码改进项目</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage; 