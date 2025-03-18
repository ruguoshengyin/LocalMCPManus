import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  currentTheme: 'light' | 'dark' | 'system';
  onThemeChange: (theme: 'light' | 'dark' | 'system') => void;
  dataDirectory: string;
  onDataDirectoryChange: (path: string) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onLanguageChange,
  currentTheme,
  onThemeChange,
  dataDirectory,
  onDataDirectoryChange,
}) => {
  const { t } = useTranslation();

  const languages = [
    { value: 'zh-CN', label: '中文' },
    { value: 'en-US', label: 'English' },
  ];

  const themes = [
    { value: 'light', label: t('settings.light') },
    { value: 'dark', label: t('settings.dark') },
    { value: 'system', label: t('settings.system') },
  ];

  const handleBrowse = async () => {
    // 使用Electron的dialog来选择目录
    // 这部分将在后续实现
    console.log('Browse for directory');
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform transition-all">
              <div className="flex justify-between items-center">
                <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                  {t('settings.title')}
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                {/* 语言设置 */}
                <div>
                  <label className="label" htmlFor="language">
                    {t('settings.language')}
                  </label>
                  <select
                    id="language"
                    value={currentLanguage}
                    onChange={(e) => onLanguageChange(e.target.value)}
                    className="input mt-1"
                  >
                    {languages.map((lang) => (
                      <option key={lang.value} value={lang.value}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 主题设置 */}
                <div>
                  <label className="label" htmlFor="theme">
                    {t('settings.theme')}
                  </label>
                  <select
                    id="theme"
                    value={currentTheme}
                    onChange={(e) => onThemeChange(e.target.value as 'light' | 'dark' | 'system')}
                    className="input mt-1"
                  >
                    {themes.map((theme) => (
                      <option key={theme.value} value={theme.value}>
                        {theme.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 数据目录设置 */}
                <div>
                  <label className="label" htmlFor="dataDirectory">
                    {t('settings.dataDirectory')}
                  </label>
                  <div className="flex mt-1 space-x-2">
                    <input
                      id="dataDirectory"
                      type="text"
                      value={dataDirectory}
                      readOnly
                      className="input flex-1"
                    />
                    <button
                      onClick={handleBrowse}
                      className="btn-secondary whitespace-nowrap"
                    >
                      {t('settings.browse')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SettingsPanel; 