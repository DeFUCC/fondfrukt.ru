<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import { data } from '../../../../pages.data.js'
import { usePages, usePage, cleanLink } from 'vitepress-pages'
import { computed } from 'vue'
const { site, frontmatter, theme } = useData();

const route = useRoute();



const { pages } = usePages(route, data)
const page = usePage(route, data)

const backgroundImage = computed(() => {
  if (frontmatter.value.home) {
    return `url(${frontmatter.value.cover})`
  }
  return page.value?.frontmatter?.cover ? `url(${page.value?.frontmatter?.cover})` : 'none'
})

</script>

<template lang="pug">
.min-h-100vh.flex.flex-col.leading-relaxed
  nav-toc(v-if="frontmatter?.toc")
  .flex.flex-wrap.flex-1.bg-cover.bg-fixed
    page-header

    transition(name="fade" mode="out-in")
      .flex.flex-wrap.overflow-hidden.z-20.bg-light-500.bg-opacity-95.z-2.dark-bg-dark-500.dark-bg-opacity-95.max-w-3xl(style="flex: 1000 1 300px" :key="route.path")

        .flex.flex-col(
          style="flex: 100 1 300px"
        )
          img.w-full.max-w-100vw(v-if="page?.frontmatter?.cover" :src="page?.frontmatter.cover")
          content.content.markdown-body

        .flex.flex-wrap.gap-8.p-8.w-full(style="flex: 1 1 100%" v-if="pages && Object.keys(pages).length > 0")
          transition-group(name="fade" )
            item-card(
              v-for="card in pages[cleanLink(route.path)]"
              :key="card.url"
              :page="card"
            )

        nav-siblings.p-6(:key="route.path")
        nav-parents.p-6(:key="route.path" :reverse="true")

  footer.flex.flex-wrap.p-4.justify-center.transition-all.duration-600.bg-light-900.items-center.dark-bg-dark-600
    a.no-underline.p-4(:href="withBase('/')")
      img.w-12rem(:src="theme.logo")

</template>

<style lang="postcss" >
.link {
  @apply bg-cover text-lg bg-center flex-auto relative flex items-center transition-all duration-500 no-underline bg-light-500/60 dark-(bg-dark-100/10) hover-(bg-light-100 dark-bg-dark-100);
}

.link .active {
  @apply bg-light-100 bg-opacity-70 z-2 dark-bg-dark-200 dark-bg-opacity-70;
}

.link .active:hover {
  @apply bg-opacity-100 dark-bg-opacity-100;
}

.link .panel {
  @apply text-lg z-10 p-4 m-2 shadow-md bg-light-200 bg-opacity-90 dark-bg-dark-200 dark-bg-opacity-90 rounded flex items-center;
}

.link::before {
  z-index: 1;
  transition: all 200ms ease-in-out;
  /* backdrop-filter: blur(6px); */
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: hsla(0, 0%, 100%, 0.6);
}

.dark .link::before {
  background-color: hsla(0, 0%, 0%, 0.3);
}

.link:hover::before {
  backdrop-filter: blur(0px);
  background-color: hsla(0, 0%, 0%, 0);
}
</style>