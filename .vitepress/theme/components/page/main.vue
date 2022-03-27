<script setup>
import { watch, ref, computed, onMounted } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { getMediaPath } from '../../composables/media.js'

import { useParents, useSiblings } from '../../composables/links.js'


const reverseParents = computed(() => [...parents.value].reverse())

const { site, frontmatter, theme } = useData();
const route = useRoute();


import { getSiblings, getParents, trailing, pages, routes } from '../../composables/pages.js'

const siblings = computed(() => getSiblings(route.path))
const parents = computed(() => getParents(route.path))

function getImage(side) {
  if (siblings.value[side]?.cover) {
    return `url(${siblings.value[side].cover})`
  } else if (siblings.value[side]?.icon) {
    return `url(${siblings.value[side].icon})`
  } else {
    return 'transparent'
  }
}

const page = computed(() => routes.find(p => trailing(p.path) == route.path))

const backgroundImage = computed(() => {
  if (frontmatter.value.home) {
    return `url(${frontmatter.value.cover})`
  }
  return page.value?.cover ? `url(${page.value.cover})` : 'none'
})

</script>

<template lang="pug">
.min-h-100vh.flex.flex-col.leading-relaxed
  nav-dark.p-4.mr-4.fixed.top-4.right-0.z-90
  nav-scroll.fixed.bottom-8.right-4.p-4.rounded-full.cursor-pointer.z-90
    la-angle-up
  .flex.flex-wrap.flex-1.bg-cover.bg-fixed.z-10


    header.bg-light-200.bg-opacity-90.z-2.dark_bg-dark-200.dark_bg-opacity-90(
      style="flex: 1 1 320px"
      )
      .sticky.top-0.flex.flex-col.items-center.text-center
        a.no-underline.p-4(href="/")
          img.w-12rem(:src="theme.logo")
        a.link.p-4.w-full(
          v-if="route.path != '/'"
          style="flex: 1 1 auto;"
          href="/") {{ site.title }}
            .flex-1
            la-angle-up
        .flex.flex-wrap.items-stretch.w-full
          a.link.p-4(
            style="flex: 1 1 auto;"
            v-for="parent in parents", :key="parent.title" :href="trailing(parent.path)") {{ parent.title }}
              .flex-1
              la-angle-up
        h1.w-full.text-xl.font-bold.mb-2.p-4.bg-light-600.dark_bg-dark-500.shadow-lg {{ page?.title }}
        .p-4.flex.flex-wrap(v-if="route.path != '/'")
          .p-2(style="flex: 1 1 120px" v-if="page?.icon")
            img.max-h-60vh.rounded-3xl(:src="page.icon")
          .p-4.flex-auto(v-if="page?.subtitle")
            .text-md {{ page?.subtitle }}
          a.p-2.flex-auto.underline.text-xl(v-if="page?.url" :href="page?.url" target="_blank") {{ page?.url.replace(/^https?:\/\//, '') }}


        .flex.flex-col.w-full(v-else)
          a.link.p-4.no-underline.transition-all.duration-300.text-xl.justify-center.w-full(
            v-for="card in pages[route.path]"
            :key="card.path"
            :href="trailing(card.path)"
            :class="{ active: route.path.includes(card.path) }"
          ) {{ card.title }} 


    .flex.flex-wrap.overflow-hidden.z-20.bg-light-500.bg-opacity-95.z-2.dark_bg-dark-500.dark_bg-opacity-95.max-w-3xl(style="flex: 1000 1 420px")

      .flex.flex-col(
        style="flex: 100 1 300px"
      )
        img.w-full.max-w-100vw(v-if="page?.cover" :src="page.cover") 
        content.content
        //- component.content(:is="route.component")
        .flex-auto(
          style="flex: 1000 1"
        )

      .flex.flex-wrap.gap-8.p-8.w-full(style="flex: 1 1 100%" v-if="pages && Object.keys(pages).length > 0")
        item-card(
          v-for="card in pages[route.path]"
          :key="card.path"
          :page="card"
        )

    .flex-auto(style="flex:100")

    .flex.flex-wrap.items-stretch.justify-stretch.w-full
      a.link.px-4.py-8(style="flex:1 1 auto" v-if="siblings.prev" :href="trailing(siblings.prev.path)") 
        la-angle-left.mr-2
        span {{ siblings.prev.title }}
      a.link.justify-end.px-4.py-8(style="flex:1 1 auto" v-if="siblings.next" :href="trailing(siblings.next.path)") 
        span {{ siblings.next.title }}
        la-angle-right.ml-2


  footer.flex.flex-wrap.p-4.justify-center.transition-all.duration-600.bg-light-900.items-center.dark_bg-dark-600
    a.no-underline.p-4(:href="withBase('/')")
      img.w-12rem(:src="theme.logo")

</template>

<style lang="postcss" scoped>
.link {
  @apply flex-auto relative flex items-center text-ьв text-center transition-all duration-500 no-underline bg-light-500/60 dark_(bg-dark-100/10) hover_(bg-light-100 dark_bg-dark-100);
}
</style>