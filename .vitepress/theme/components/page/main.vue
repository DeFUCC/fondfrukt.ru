<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import routes from '~pages'
import { getPage, getPages } from 'vitepress-pages/browser'

const { site, frontmatter, theme } = useData();

const route = useRoute();

const page = computed(() => getPage(route.path, routes))
const pages = getPages(routes)

const backgroundImage = computed(() => {
  if (frontmatter.value.home) {
    return `url(${frontmatter.value.cover})`
  }
  return page.value?.cover ? `url(${page.value.cover})` : 'none'
})

</script>

<template lang="pug">
.min-h-100vh.flex.flex-col.leading-relaxed
  nav-toc(v-if="page?.toc")
  .flex.flex-wrap.flex-1.bg-cover.bg-fixed.z-10
    header.bg-light-200.bg-opacity-90.z-2.dark_bg-dark-200.dark_bg-opacity-90.max-w-md(
      style="flex: 0 1 320px"
      )
      .sticky.top-0.flex.flex-col.items-start.max-h-100vh.mb-4
        a.no-underline.p-4(href="/")
          img.w-12rem(:src="theme.logo")
        nav-parents(:key="route.path")
        transition(name="fade" mode="out-in")
          .p-4.flex.flex-wrap
            h1.w-full.text-xl.font-bold.mb-2.p-4.bg-light-600.dark_bg-dark-500.shadow-lg {{ page?.title }}
            .p-2.flex.justify-center(style="flex: 1 1 120px" v-if="page?.icon")
              img.max-h-60vh.rounded-3xl(:src="page.icon")
            .p-4.flex-auto.font-bold(v-if="page?.subtitle")
              .text-md {{ page?.subtitle }}
            a.p-2.flex-auto.underline.text-xl(v-if="page?.url" :href="page?.url" target="_blank") {{ page?.url.replace(/^https?:\/\//, '') }}
        .flex.flex-col.px-8.gap-2.w-full.overflow-scroll
          a.font-bold(
            v-for="card in pages[route.path]"
            :key="card.path"
            :href="card.path"
          ) {{ card?.title }}


    transition(name="fade" mode="out-in")
      .flex.flex-wrap.overflow-hidden.z-20.bg-light-500.bg-opacity-95.z-2.dark_bg-dark-500.dark_bg-opacity-95.max-w-3xl(style="flex: 1000 1" :key="route.path")

        .flex.flex-col(
          style="flex: 100 1 300px"
        )
          img.w-full.max-w-100vw(v-if="page?.cover" :src="page.cover")
          content.content

        .flex.flex-wrap.gap-8.p-8.w-full(style="flex: 1 1 100%" v-if="pages && Object.keys(pages).length > 0")
          transition-group(name="fade" mode="out-in")
            item-card(
              v-for="card in pages[route.path]"
              :key="card.path"
              :page="card"
            )

        nav-siblings.p-6(:key="route.path")
        nav-parents.p-6(:key="route.path" :reverse="true")

  footer.flex.flex-wrap.p-4.justify-center.transition-all.duration-600.bg-light-900.items-center.dark_bg-dark-600
    a.no-underline.p-4(:href="withBase('/')")
      img.w-12rem(:src="theme.logo")

</template>

<style lang="postcss" >
.link {
  @apply bg-cover text-lg bg-center flex-auto relative flex items-center transition-all duration-500 no-underline bg-light-500/60 dark_(bg-dark-100/10) hover_(bg-light-100 dark_bg-dark-100);

  &.active {
    @apply bg-light-100 bg-opacity-70 z-2 dark_bg-dark-200 dark_bg-opacity-70;

    &:hover {
      @apply bg-opacity-100 dark_bg-opacity-100;
    }
  }
}

.link .panel {
  @apply text-lg z-10 p-4 m-2 shadow-md bg-light-200 bg-opacity-90 dark_bg-dark-200 dark_bg-opacity-90 rounded flex items-center;
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