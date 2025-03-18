import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

interface ResultPanelProps {
  toolId: string;
  status: 'idle' | 'running' | 'success' | 'error';
  result?: string;
  error?: string;
  history?: {
    id: string;
    timestamp: string;
    status: 'success' | 'error';
    result?: string;
    error?: string;
  }[];
  onRetry?: () => void;
  onEdit?: (result: string) => void;
}

const ResultPanel: React.FC<ResultPanelProps> = ({
  toolId,
  status,
  result,
  error,
  history,
  onRetry,
  onEdit,
}) => {
  const { t } = useTranslation();

  const renderStatusIcon = () => {
    switch (status) {
      case 'running':
        return (
          <ArrowPathIcon
            className="h-6 w-6 text-blue-500 animate-spin"
            aria-hidden="true"
          />
        );
      case 'success':
        return (
          <CheckCircleIcon
            className="h-6 w-6 text-green-500"
            aria-hidden="true"
          />
        );
      case 'error':
        return (
          <XCircleIcon
            className="h-6 w-6 text-red-500"
            aria-hidden="true"
          />
        );
      default:
        return (
          <ClockIcon
            className="h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <div className="card">
      {/* 状态栏 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {renderStatusIcon()}
          <span className="font-medium text-gray-900 dark:text-white">
            {status === 'idle' && t('result.waiting')}
            {status === 'running' && t('result.running')}
            {status === 'success' && t('result.success')}
            {status === 'error' && t('result.error')}
          </span>
        </div>
        {status === 'error' && onRetry && (
          <button
            onClick={onRetry}
            className="btn-secondary"
            title={t('result.retry')}
          >
            <ArrowPathIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* 结果区域 */}
      {status === 'success' && result && (
        <div className="mb-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <pre className="whitespace-pre-wrap text-sm text-gray-900 dark:text-gray-100">
              {result}
            </pre>
          </div>
          {onEdit && (
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => onEdit(result)}
                className="btn-secondary text-sm"
              >
                {t('result.edit')}
              </button>
            </div>
          )}
        </div>
      )}

      {/* 错误信息 */}
      {status === 'error' && error && (
        <div className="mb-4">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
            <pre className="whitespace-pre-wrap text-sm text-red-600 dark:text-red-400">
              {error}
            </pre>
          </div>
        </div>
      )}

      {/* 历史记录 */}
      {history && history.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            {t('result.history')}
          </h4>
          <div className="space-y-2">
            {history.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  {item.status === 'success' ? (
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircleIcon className="h-4 w-4 text-red-500" />
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {new Date(item.timestamp).toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => onEdit?.(item.result || '')}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  disabled={!item.result || !onEdit}
                >
                  {t('result.view')}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultPanel; 