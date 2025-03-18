import React from 'react';

const HelpPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 dark:text-white">帮助中心</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="space-y-8">
          {/* 快速开始 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">快速开始</h2>
            <div className="prose dark:prose-invert">
              <p>欢迎使用LocalMCPManus！本应用程序可以帮助您管理和运行本地工具。</p>
              <ol>
                <li>在主页浏览可用的工具</li>
                <li>使用搜索栏快速找到所需工具</li>
                <li>点击工具卡片上的运行按钮来执行工具</li>
                <li>在设置中配置您的偏好</li>
              </ol>
            </div>
          </section>

          {/* 常见问题 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">常见问题</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2 dark:text-white">如何添加新工具？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  您可以通过点击主页右上角的"添加工具"按钮来创建新工具。您需要提供工具的名称、描述、命令等信息。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 dark:text-white">如何修改工具配置？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  在工具卡片上点击设置图标，您可以编辑工具的所有配置信息。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 dark:text-white">数据存储在哪里？</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  您可以在设置页面中查看和修改数据存储目录。默认情况下，数据存储在应用程序的本地目录中。
                </p>
              </div>
            </div>
          </section>

          {/* 联系支持 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">联系支持</h2>
            <p className="text-gray-600 dark:text-gray-300">
              如果您遇到任何问题或需要帮助，请通过以下方式联系我们：
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
              <li>在GitHub上提交Issue</li>
              <li>发送邮件至支持团队</li>
              <li>查看我们的文档网站</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpPage; 