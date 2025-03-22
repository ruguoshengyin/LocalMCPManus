import React, { useState } from 'react';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: '你好！我是MCP助手，有什么可以帮助你的吗？', isUser: false }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // 添加用户消息
    setMessages([...messages, { text: inputText, isUser: true }]);
    
    // 模拟AI回复
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `我收到了你的消息："${inputText}"。正在处理中...`, 
        isUser: false 
      }]);
    }, 1000);
    
    setInputText('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="text-xl font-bold mb-4">聊天助手</div>
      
      {/* 聊天消息区域 */}
      <div className="flex-1 overflow-auto bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
          >
            <div 
              className={`inline-block rounded-lg px-4 py-2 max-w-3/4 ${
                message.isUser 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      
      {/* 输入区域 */}
      <div className="flex">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 rounded-l-lg border border-gray-300 dark:border-gray-600 p-2 dark:bg-gray-700 dark:text-white"
          placeholder="输入消息..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg"
        >
          发送
        </button>
      </div>
    </div>
  );
};

export default ChatPage;