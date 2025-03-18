import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Cog6ToothIcon,
  PlayIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import type { ToolCardProps } from '../../../lib/types/tool';

const ToolCard: React.FC<ToolCardProps> = ({
  id,
  title,
  description,
  icon,
  tags,
  onSettingsClick,
  onRunClick,
  onCloneClick,
}) => {
  const { t } = useTranslation();

  return (
    <div className="card hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          {icon && (
            <img
              src={icon}
              alt={title}
              className="w-10 h-10 rounded-lg mr-3"
            />
          )}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onSettingsClick(id)}
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            title={t('toolCard.settings')}
          >
            <Cog6ToothIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => onRunClick(id)}
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            title={t('toolCard.run')}
          >
            <PlayIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => onCloneClick(id)}
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            title={t('toolCard.clone')}
          >
            <DocumentDuplicateIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {description || t('toolCard.noDescription')}
      </p>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                tag.color || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolCard; 