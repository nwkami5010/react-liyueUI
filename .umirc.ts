import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-liyueUI',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: [
    {
      title: '快速上手',
      path: '/docs',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/nwkami5010',
    },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: '基础组件',
        children: [
          // 菜单子项（可选）
          'components/useUpdate/index.md',
          'components/Dialog/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
      {
        title: '表单组件',
        children: [],
      },
    ],
    '/docs': [
      {
        title: '快速上手',
        children: [
          // 菜单子项（可选）
          '/docs/intro.md',
          '/docs/start.md',
        ],
      },
    ],
  },
});
