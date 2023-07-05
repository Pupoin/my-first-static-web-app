import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pupoin",
  ignoreDeadLinks: true,
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // siteTitle: 'My Custom Title',
    // siteTitle: false,
    // aside: 'left',
    // outlineTitle: 'In hac pagina',
    returnToTopLabel: 'Return to the top',
    // docFooter: {
    //   prev: 'Pagina prior',
    //   next: 'Proxima pagina'
    // },
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      // { text: 'Tag', link: "/" },
      // { text: 'Blog', link: 'test/markdown-examples' },
      {
        text: '近现代史',
        link: 'history/zhenmianWar2_1919'
      },
      { text: '杂记', link: 'other/Z0' },
      // {text:'那年那事', link: 'other/history'},

      {
        text: '关于',
        link: 'about'
      }
    ],
    sidebarMenuLabel: 'Content',
    editLink: {
      pattern: 'https://github.com/Pupoin/staticWebBlog/edit/main/docs/:path',
      text: 'Edit this page🐇'
    },
    search: {
      provider: 'local'
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

      '/other/': [
        {
          text: '杂记',
          collapsed: false,
          items: [
            { text: '杂谈', link: 'other/Z0' },
            { text: '那年那事', link: 'other/history' }
          ]
        }

      ],


      '/history/': [
        {
          text: '历史',
          items: [
            { text: '从1840到1919【时局图】', link: 'history/zhenmianWar2_1919' },
            {text:'中晚清，清军与主要农民运动', link:'history/Qin_peasantMovement'},
            { text: '北洋政府时期之军事行动一览（1912-1928）', link: 'history/beiyang_war' },
            { text: '北洋政府之群雄逐鹿', link: 'history/beiyang_persons' },
          ]
        }
      ]




    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pupoin' },
      { icon: 'linkedin', link: "https://www.linkedin.com/in/zhaoyang"},
      
    ],

    footer: {
      // message: 'Released under the MIT License.',
      message: 'Welcome to the Pupoin\'s website. ',
      copyright: 'Copyright © 2023-present Pupoin'
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      // copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    }

    



  }
})
