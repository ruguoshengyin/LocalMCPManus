import React, { useState, useEffect } from 'react';

function ResultsPanel({ toolId }) {
  const [tool, setTool] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // 模拟从数据库获取工具数据
  useEffect(() => {
    // 这里应该是从数据库或状态管理获取工具数据
    // 这里使用模拟数据
    const dummyTools = {
      '1': {
        id: '1',
        title: '文本摘要工具',
        description: '使用AI模型自动生成文本摘要',
        model: 'openai'
      },
      '2': {
        id: '2',
        title: '图像识别工具',
        description: '识别图像中的物体和场景',
        model: 'google'
      },
      '3': {
        id: '3',
        title: '数据分析助手',
        description: '帮助分析和可视化数据集',
        model: 'anthropic'
      }
    };
    
    setTool(dummyTools[toolId]);
  }, [toolId]);
  
  const handleRun = () => {
    setIsLoading(true);
    setError(null);
    
    // 模拟API调用
    setTimeout(() => {
      if (tool) {
        if (tool.id === '1') {
          setResults({
            summary: "这是一个使用AI生成的文本摘要示例。该文本讨论了人工智能在现代社会中的应用及其带来的挑战和机遇。文章强调了伦理考量的重要性，并提出了一些监管框架的建议。",
            confidence: 0.92,
            wordCount: 120,
            processingTime: "1.2秒"
          });
        } else if (tool.id === '2') {
          setResults({
            objects: [
              { name: "猫", confidence: 0.98 },
              { name: "沙发", confidence: 0.95 },
              { name: "植物", confidence: 0.82 }
            ],
            sceneType: "室内生活",
            processingTime: "0.8秒"
          });
        } else if (tool.id === '3') {
          setResults({
            insights: [
              "数据显示销售额在过去3个月呈上升趋势",
              "客户满意度与产品质量呈正相关",
              "北方地区市场有较大增长潜力"
            ],
            charts: ["趋势图", "分布图", "热力图"],
            processingTime: "2.5秒"
          });
        } else {
          setResults({
            message: "工具执行完成，但没有特定的结果格式。"
          });
        }
      } else {
        setError("无法找到该工具");
      }
      setIsLoading(false);
    }, 1500);
  };
  
  const renderResults = () => {
    if (!results) return null;
    
    if (tool.id === '1') {
      return (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-medium">摘要结果</h4>
            <p className="mt-2">{results.summary}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">置信度</h4>
              <p className="mt-1 text-2xl font-semibold">{results.confidence * 100}%</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">字数</h4>
              <p className="mt-1 text-2xl font-semibold">{results.wordCount}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">处理时间</h4>
              <p className="mt-1 text-2xl font-semibold">{results.processingTime}</p>
            </div>
          </div>
        </div>
      );
    } else if (tool.id === '2') {
      return (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-medium">识别结果</h4>
            <div className="mt-4">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-100 dark:bg-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">物体</th>
                    <th className="px-6 py-3 bg-gray-100 dark:bg-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">置信度</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                  {results.objects.map((obj, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{obj.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{obj.confidence * 100}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">场景类型</h4>
              <p className="mt-1 text-2xl font-semibold">{results.sceneType}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">处理时间</h4>
              <p className="mt-1 text-2xl font-semibold">{results.processingTime}</p>
            </div>
          </div>
        </div>
      );
    } else if (tool.id === '3') {
      return (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-medium">数据洞察</h4>
            <ul className="mt-2 space-y-2">
              {results.insights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {insight}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-medium">图表</h4>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {results.charts.map((chart, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-600 p-4 rounded-lg text-center">
                  <svg className="h-12 w-12 mx-auto text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="mt-2 text-sm font-medium">{chart}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">处理时间</h4>
              <p className="mt-1 text-2xl font-semibold">{results.processingTime}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <p>{results.message}</p>
        </div>
      );
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            {tool?.title || '工具运行'}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            {tool?.description || '运行MCP工具并查看结果'}
          </p>
        </div>
        <button
          onClick={handleRun}
          disabled={isLoading}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              处理中...
            </>
          ) : '运行工具'}
        </button>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
        {error && (
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">错误</h3>
                <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <svg className="animate-spin h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">正在处理您的请求...</p>
          </div>
        )}
        
        {!isLoading && !error && results && renderResults()}
        
        {!isLoading && !error && !results && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">没有结果</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">点击上方的"运行工具"按钮开始处理。</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsPanel;