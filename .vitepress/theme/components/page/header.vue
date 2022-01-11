<template lang="pug">
header
  .sticky.top-0
    a.no-underline(href="/")
      img.w-12rem(:src="theme.logo")
    .flex.flex-col
      nav-links.my-4
      .flex.p-2
        nav-dark
  .flex-1
</template>

<script setup>
import { useData } from 'vitepress'
const { site, theme } = useData();

</script>

<style scoped>
</style>