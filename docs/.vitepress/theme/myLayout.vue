<!-- https://vitepress.dev/guide/extending-default-theme -->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <!-- My custom sidebar top content -->
    </template>

    <template #home-hero-before>
      <center>
<audio src="/lc_ba_lc_ba_qu_na_li_ya.mp3" preload="none" controls loop>
  你的浏览器不支持 audio 标签。
</audio>
</center>
    </template>

  </Layout>
</template>