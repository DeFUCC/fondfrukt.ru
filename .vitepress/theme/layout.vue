<script setup>
import { useData, useRoute } from 'vitepress'
import { getMediaPath } from './composables/media.js'

const { site, frontmatter, theme } = useData();
const route = useRoute();

function scrollTop() {
  window.scrollTo(0, 0)
}

</script>

<template lang="pug">
.min-h-100vh.flex.flex-col
  header.sticky.top-0.left-0.flex.flex-wrap

    a.no-underline(href="/")
      img.w-12rem(:src="theme.logo")
    //- .flex.flex-col
    //-   nav-links.my-4
    //-   .flex.p-2
    page-parents
    .flex-auto
    nav-dark.p-4.mr-4
  .content.z-20
    img(v-if="frontmatter.cover" :src="getMediaPath(route.path, frontmatter.cover)")
    transition(name="fade" mode="out-in" )
      .flex.flex-col.h-full(:key="route.path")

        header.my-8.px-8
          img(v-if="frontmatter.icon" :src="getMediaPath(route.path, frontmatter.icon)")
          h1.text-4xl.font-bold.mb-8 {{ frontmatter.title }}
          .text-xl {{ frontmatter.subtitle }}
        content.px-8.mb-16.markdown

        page-list.panel(
        :key="route.path"
        v-if="frontmatter.list"
          )
        page-siblings
  .p-4.rounded-full.shadow-lg.bg-light-200.fixed.bottom-2.left-2(@click="scrollTop()")
    la-angle-up
  page-footer
</template>

<style lang="postcss" scoped>
.panel {
  @apply bg-light-800/90 dark_bg-dark-300;
  flex: 1 1 clamp(320, 100%, 65ch);
}
.content {
  @apply min-w-full flex flex-col justify-between sm_min-w-320px bg-light-400/99 dark_bg-dark-500/98 shadow-2xl;
  flex: 1 1 clamp(320, 100%, 65ch);
  backdrop-filter: blur(30px);
}
.markdown {
  flex: 1 1 100%;
}
.header {
  @apply bg-true-gray-200/50 dark_bg-true-gray-800/50 p-8 shadow-xl;
  scroll-snap-align: end;
  flex: 0 1 300px;
  backdrop-filter: blur(20px);
}
</style>