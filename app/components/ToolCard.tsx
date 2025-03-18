import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cog6ToothIcon, 
  PlayIcon, 
  DocumentDuplicateIcon 
} from '@heroicons/react/24/outline';

interface Tag {
  id: string;
  name: string;
  color?: string;
}

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  onSettingsClick: (id: string) => void;
  onRunClick: (id: string) => void;
  onCloneClick: (id: string) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({
  id,
  title,
  description,
  tags,
  onSettingsClick,
  onRunClick,
  onCloneClick,
}) => {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      {/* 卡片头部 */}
      <div className="flex justify-between items-start mb-4">
        <Link 
          to={`/tools/${id}`}
          className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {title}
        </Link>
        <button
          onClick={() => onSettingsClick(id)}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          title="工具设置"
        >
          <Cog6ToothIcon className="w-5 h-5" />
        </button>
      </div>

      {/* 描述 */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {description}
      </p>

      {/* 标签 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="px-2.5 py-0.5 rounded-full text-sm font-medium"
            style={{
              backgroundColor: `${tag.color}20`,
              color: tag.color,
            }}
          >
            {tag.name}
          </span>
        ))}
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-2">
        <button
          onClick={() => onRunClick(id)}
          className="flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <PlayIcon className="w-4 h-4" />
          运行
        </button>
        <button
          onClick={() => onCloneClick(id)}
          className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <DocumentDuplicateIcon className="w-4 h-4" />
          克隆
        </button>
      </div>
    </div>
  );
};

export default ToolCard; 