<script setup>
import { watch, ref, computed, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import { getMediaPath } from './composables/media.js'

import { useParents, useSiblings } from './composables/links.js'

const parents = useParents();
const siblings = useSiblings();

const reverseParents = computed(() => [...parents.value].reverse())

const { site, frontmatter, theme } = useData();
const route = useRoute();


</script>

<template lang="pug">
.min-h-100vh.flex.flex-col.leading-relaxed
  nav-dark.p-4.mr-4.fixed.top-4.left-4.z-90
  nav-scroll.fixed.bottom-8.left-4.p-4.rounded-full.cursor-pointer.z-90
    la-angle-up
  .flex.flex-wrap.flex-1.bg-cover.bg-fixed.z-10
    header.bg-light-200.bg-opacity-90.z-2.dark_bg-dark-200.dark_bg-opacity-90(
      style="flex: 1 1 320px"
      )
      .sticky.top-0.flex.flex-col.items-center.text-center
        a.no-underline.p-4(href="/")
          img.w-12rem(:src="theme.logo")

        .flex.flex-wrap.items-stretch.w-full
          a.link.p-4.justify-center(
            style="flex: 1 1 100px;"
            v-for="page in parents", :key="page.title" :href="page.link") {{ page.title }}
        h1.w-full.text-xl.font-bold.mb-2.p-4.bg-light-600.dark_bg-dark-500.shadow-lg {{ frontmatter.title }}
        .p-4.flex.flex-wrap(v-if="route.path != '/'")
          .p-2(style="flex: 1 1 120px" v-if="frontmatter.icon")
            img.max-h-60vh.rounded-3xl(:src="getMediaPath(route.path, frontmatter.icon)")
          .p-4.flex-auto
            .text-md {{ frontmatter.subtitle }}
        .flex.flex-col.w-full(v-else)
          a.link.p-4.no-underline.transition-all.duration-300.text-xl.justify-center.w-full(
            v-for="page in theme.pages.main"
            :key= "page.link"
            :href="page.link"
            :class="{ active: route.path.includes(page.link) }"
          ) {{ page.title }} 


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
      .flex.flex-wrap.items-stretch.justify-stretch.w-full
        a.link.px-4.py-8(style="flex:1 1 auto" v-if="siblings.prev" :href="siblings.prev.link") 
          carbon-arrow-left.mr-2
          span {{ siblings.prev.title }}
        a.link.justify-end.px-4.py-8(style="flex:1 1 auto" v-if="siblings.next" :href="siblings.next.link") 
          span {{ siblings.next.title }}
          carbon-arrow-right.ml-2
      .flex.flex-wrap.items-stretch.w-full
        a.link.px-4.py-8.justify-center(
          style="flex: 1 1 auto;"
          v-for="page in reverseParents", :key="page.title" :href="page.link") {{ page.title }}
    .flex-auto(style="flex:100")
  footer.flex.flex-wrap.p-4.justify-center.transition-all.duration-600.bg-dark-500.items-center.dark_bg-dark-600
    a.no-underline.p-4(href="/")
      img.w-12rem(:src="theme.logo")

</template>

<style lang="postcss" scoped>
.link {
  @apply flex-auto  flex items-center text-lg text-center transition-all duration-500 no-underline bg-light-800/60 dark_(bg-dark-100/10) hover_(bg-light-100 dark_bg-dark-100);
}
</style>