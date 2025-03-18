import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'zh-CN': {
    translation: {
      common: {
        search: '搜索',
        settings: '设置',
        help: '帮助',
        back: '返回',
        save: '保存',
        cancel: '取消',
        delete: '删除',
        edit: '编辑',
        run: '运行',
        clone: '克隆',
      },
      settings: {
        title: '设置',
        interface: '界面设置',
        theme: '主题',
        language: '语言',
        data: '数据设置',
        dataDirectory: '数据存储目录',
      },
      help: {
        title: '帮助中心',
        basicUsage: '基本使用',
        faq: '常见问题',
        contact: '联系与支持',
      },
      tool: {
        notFound: '工具未找到',
        notFoundDesc: '抱歉，您请求的工具不存在或已被删除。',
        backToHome: '返回首页',
        config: '配置选项',
        history: '运行历史',
        viewDetails: '查看详情',
      },
    },
  },
  'en-US': {
    translation: {
      common: {
        search: 'Search',
        settings: 'Settings',
        help: 'Help',
        back: 'Back',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        run: 'Run',
        clone: 'Clone',
      },
      settings: {
        title: 'Settings',
        interface: 'Interface Settings',
        theme: 'Theme',
        language: 'Language',
        data: 'Data Settings',
        dataDirectory: 'Data Directory',
      },
      help: {
        title: 'Help Center',
        basicUsage: 'Basic Usage',
        faq: 'FAQ',
        contact: 'Contact & Support',
      },
      tool: {
        notFound: 'Tool Not Found',
        notFoundDesc: 'Sorry, the tool you requested does not exist or has been deleted.',
        backToHome: 'Back to Home',
        config: 'Configuration',
        history: 'Run History',
        viewDetails: 'View Details',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh-CN', // 默认语言
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false, // React已经安全地转义了
    },
  });

export default i18n; 