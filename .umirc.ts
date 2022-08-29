import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'rt-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'src'],
  },
  navs: [
    {
      title: 'Components',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/qiushilong/rt-ui',
    },
  ],
  // more config: https://d.umijs.org/config
});
