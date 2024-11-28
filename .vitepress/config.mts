import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的大学课程文档",
  description: "我的大学课程文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
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
      copyright: 'Copyright © 2014-present eveningwater(夕水)'
    }
  }
})
