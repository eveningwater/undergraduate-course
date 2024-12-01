import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.mts'

const base = process.env.NODE_ENV === 'development' ? '/' : '/undergraduate-course/'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  outDir: './dist',
  title: "我的大学课程文档",
  description: "我的大学课程文档",
  head:[
    ['link', { rel: 'stylesheet', href: `${base}style.css` }],
    [
      'script', { type: 'text/javascript', src: 'https://www.eveningwater.com/static/plugin/viewer.min.js' },
    ],
    [
      'script', { type: 'text/javascript', src: `${base}preview.js` },
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '古汉语在线字典', link: 'https://eveningwater.github.io/ancient-chinese-website/' },
      { text: '个人小说', link: 'https://www.eveningwater.com/novel-website/index.html' },
      { text: '个人诗词', link: 'https://eveningwater.github.io/my-poem-website' },
      { text: '诗意出生', link: 'https://www.eveningwater.com/birth-poem/index.html' },
    ],
    search: {
      provider: 'local',
    },
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eveningwater/Information-resource-course' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present eveningwater(夕水)'
    }
  }
})
