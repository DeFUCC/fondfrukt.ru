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
.min-h-100vh.flex.flex-col
  nav.sticky.top-0.left-0.flex.flex-wrap
    a.no-underline.p-4(href="/")
      img.w-12rem(:src="theme.logo")
    //- .flex.flex-col
    //-   nav-links.my-4
    //-   .flex.p-2

    .flex-auto
    nav-dark.p-4.mr-4
  .flex.flex-wrap.flex-1
    header.bg-cover.bg-fixed(
      style="flex: 1 1 220px"
      :style="{ backgroundImage: `url(${getMediaPath(route.path, frontmatter.cover)})` }"
      )
      .sticky.top-0.bg-light-200.bg-opacity-90.z-2.dark_bg-dark-200.dark_bg-opacity-90
        page-parents
        .p-4.flex.flex-wrap
          .p-2(style="flex: 1 1 100px" v-if="frontmatter.icon")
            img.max-h-60vh.rounded-3xl(:src="getMediaPath(route.path, frontmatter.icon)")
          .p-4.flex-auto
            h1.text-4xl.font-bold.mb-8 {{ frontmatter.title }}
            .text-xl {{ frontmatter.subtitle }}
        page-siblings
    .flex.flex-wrap.z-20.bg-light-500.bg-opacity-95.z-2.dark_bg-dark-500.dark_bg-opacity-95(style="flex: 10 1 420px")
      #content.flex.flex-col(
        style="flex: 1 1 300px"
      )
        content

      page-list.bg-light-700.dark_bg-dark-700(
        style="flex: 1000 1 400px"
        :key="route.path"
        v-if="frontmatter.list"
        )

  footer.flex.flex-wrap.p-4.sticky.bottom-0
    a.flex.flex-col.items-center.no-underline(href="/") 
      .font-bold.text-2xl.p-2 {{ site.title }}
    .flex-auto
    .p-4.rounded-full.shadow-lg.bg-light-200.dark_bg-dark-200.cursor-pointer(@click="scrollTop()")
      la-angle-up
</template>

<style lang="postcss" scoped>
footer {
  @apply transition-all duration-600 bg-dark-100 text-light-300/80  items-center dark_(bg-dark-900);
}
</style>