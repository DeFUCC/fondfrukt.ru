<script setup>
import { watch, ref, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import { getMediaPath } from './composables/media.js'

const { site, frontmatter, theme } = useData();
const route = useRoute();

function scrollTop() {
  window.scrollTo(0, 0)
}

</script>

<template lang="pug">
.min-h-100vh.flex.flex-col.leading-relaxed
  nav.sticky.top-0.left-0.flex.flex-wrap
    a.no-underline.p-4(href="/")
      img.w-12rem(:src="theme.logo")
    .flex-auto
    nav-dark.p-4.mr-4
  .flex.flex-wrap.flex-1.bg-cover.bg-fixed.z-10
    header.bg-light-200.bg-opacity-90.z-2.dark_bg-dark-200.dark_bg-opacity-90(
      style="flex: 1 1 320px"
      )
      .sticky.top-0

        page-parents(:root="route.path != '/' ? site.title : null" )
        h1.text-xl.font-bold.mb-2.p-4.bg-light-600.dark_bg-dark-500 {{ frontmatter.title }}
        .p-4.flex.flex-wrap(v-if="route.path != '/'")
          .p-2(style="flex: 1 1 120px" v-if="frontmatter.icon")
            img.max-h-60vh.rounded-3xl(:src="getMediaPath(route.path, frontmatter.icon)")
          .p-4.flex-auto
            .text-md {{ frontmatter.subtitle }}
        .flex.flex-col.px-8(v-else)
          nav-links.my-2
        page-siblings
    .flex.flex-wrap.overflow-hidden.z-20.bg-light-500.bg-opacity-95.z-2.dark_bg-dark-500.dark_bg-opacity-95.max-w-3xl(style="flex: 1000 1 420px")
      .flex.flex-col(
        style="flex: 100 1 300px"
      )
        img.w-full.max-w-100vw(v-if="frontmatter.cover" :src="getMediaPath(route.path, frontmatter.cover)")
        content.content
        .flex-auto(
          style="flex: 1000 1"
        )
        page-list(
          style="flex: 1 1 400px"
          v-if="frontmatter.list"
          )
    .flex-auto(style="flex:100")
  footer.flex.flex-wrap.p-4
    a.flex.flex-col.items-center.no-underline(href="/") 
      .font-bold.text-2xl.p-2 {{ site.title }}
    .flex-auto
    .p-4.rounded-full.cursor-pointer(@click="scrollTop()")
      la-angle-up
</template>

<style lang="postcss" scoped>
footer {
  @apply transition-all duration-600 bg-dark-100 text-light-300/80  items-center dark_(bg-dark-900);
}
</style>