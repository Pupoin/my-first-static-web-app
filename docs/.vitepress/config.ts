import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pupoin",
  ignoreDeadLinks: true,
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // siteTitle: 'My Custom Title',
    logo: '2150265.svg',
    // siteTitle: false,
    // aside: 'left',
    sidebarMenuLabel: 'Content',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Tag', link: "/" },
      // { text: 'Blog', link: 'test/markdown-examples' },
      {
        text: '近现代史',
        link: 'history/zhenmianWar2_1919'
      },
      { text: '杂记', link: 'other/Z0' },
      {text:'那年那事', link: 'other/history'},

      {
        text: 'About',
        link: 'about'
      }
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: '...',
        apiKey: '...',
        indexName: '...'
      }
    },
    sidebar: {

      '/test/': [
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: 'test/markdown-examples' },
            { text: 'Runtime API Examples', link: 'test/api-examples' }
          ]
        }

      ],



      '/history/': [
        {
          text: '历史',
          items: [
            { text: '从1840到1919', link: 'history/zhenmianWar2_1919' },
            { text: '北洋政府时期（1912-1928）', link: 'history/beiyang_war' },
            {text:'清中后期，清军与主要农民运动', link:'history/Qin_peasantMovement'},
          ]
        }
      ]




    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pupoin' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Pupoin'
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      // copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    }





  }
})
