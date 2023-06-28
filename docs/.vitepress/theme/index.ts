// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import myLayout from './myLayout.vue'
import './style.css'


export default {
  extends: Theme,

    // override the Layout with a wrapper component that
  // injects the slots
  Layout: myLayout,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
