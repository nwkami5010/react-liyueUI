import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-liyueUI',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/liyue-ui',
  mode: 'site',
  exportStatic: {},
  resolve: {
    includes: ['docs', 'components'],
  },
  // more config: https://d.umijs.org/config
  publicPath: '/react-liyueUI/',
  exportStatic: {},
  history: {
    type: 'hash',
  },
  sass: {},

});
