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
      <!-- afdasfdas -->
    </template>

  </Layout>
</template>