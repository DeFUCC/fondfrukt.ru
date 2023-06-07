<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import { data } from '../../../../pages.data.js'
import { usePage, usePages } from 'vitepress-pages'

const { site, frontmatter, theme } = useData();

const route = useRoute();

const { pages } = usePages(route, data)
const page = usePage(route, data)

</script>

<template lang='pug'>
.m-0
  .flex.flex-col.items-center
    a.no-underline.p-4(href="/")
      img.w-32rem(:src="theme.logo")
    .flex.flex-wrap.rounded-xl.overflow-hidden.shadow-lg
      a.link.p-4.no-underline.transition-all.duration-300.text-xl.justify-center(
        v-for="card in pages[route.path]"
        :key="card.url"
        :href="card.url"
        :class="{ active: route.path.includes(card.url) }"
      ) {{ card.title }} 
  content.content


</template>