<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import routes from '~pages'
import { getPage, getPages } from 'vitepress-pages/browser'

const { site, frontmatter, theme } = useData();

const route = useRoute();

const page = computed(() => getPage(route.path, routes))

const pages = getPages(routes)

</script>

<template lang='pug'>
.m-0
  .flex.flex-col.items-center
    a.no-underline.p-4(href="/")
      img.w-32rem(:src="theme.logo")
    .flex.flex-wrap.rounded-xl.overflow-hidden.shadow-lg
      a.link.p-4.no-underline.transition-all.duration-300.text-xl.justify-center(
        v-for="card in pages[route.path]"
        :key="card.path"
        :href="card.path"
        :class="{ active: route.path.includes(card.path) }"
      ) {{ card.title }} 
  content.content


</template>