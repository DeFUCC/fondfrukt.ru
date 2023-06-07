<script setup>
import { data } from '../../../../pages.data.js'
import { usePages, usePage } from 'vitepress-pages'
import { useRoute } from 'vitepress'

const { pages, children } = usePages(useRoute(), data)

const props = defineProps({
  page: Object
})


function getDate(timestamp) {
  let date = new Date(timestamp)
  return date.toLocaleString('default', { month: 'short', year: '2-digit' });
}
</script>

<template lang="pug">
a.card.flex.flex-col.justify-between.items-center.relative.bg-cover.bg-center.min-h-60(
  style="flex: 1 1 280px;"
  :href="page.url"
  :style="{ backgroundColor: page?.frontmatter?.color || 'transparent' }"
) 
  img.min-w-full.flex-1.absolute(
    :src="page?.frontmatter?.cover"
    v-if="page?.frontmatter.cover"
    loading="lazy"
    alt="cover"
  )
  img.rounded-xl.w-50.z-50(
    style="margin:  1rem 0"
    v-if="page?.frontmatter?.icon"
    :src="page?.frontmatter.icon"
    )
  .flex-auto
  .info.w-full.flex.flex-col.p-4.bg-light-400.bg-opacity-80.dark-bg-opacity-80.dark-bg-dark-200.transition-all.duration-300.backdrop-filter.backdrop-blur-sm.z-100.bottom-0(
    :style="{ marginTop: page?.frontmatter?.cover && !page?.frontmatter?.icon ? '16em' : '' }"
  )
    .flex.w-full
      .flex.flex-col.w-full
        item-type(:type="page?.frontmatter.data?.type")
        .flex.items-center.w-full
          .text-xl.md-text-2xl.font-bold.flex-auto {{ page?.frontmatter.title }} 
          //- .font-bold.py-1.px-2.bg-light-800.rounded-xl.dark-bg-dark-200(v-if="children") {{ children }}
      .flex-1
    .text-md.mt-2.line-clamp-4(v-if="page?.frontmatter.description") {{ page.description }}
  .absolute.right-8px.bottom-4px.opacity-10.text-xs.flex.items-center.transition-all.duration-400.hover-opacity-90
    ic-round-update.mr-1
    .p-0 {{ getDate(page?.lastModified) }}
</template>


<style lang="postcss" scoped>
.card {
  @apply overflow-hidden rounded-md shadow-md overflow-hidden bg-light-700 dark-(bg-dark-50) transition-all duration-200 no-underline hover-(shadow-lg);
}

.card:hover .info {
  @apply bg-light-100 dark-bg-dark-100;
}

.card:hover .play {
  @apply opacity-90 z-30;
}

.card::before {
  z-index: 1;
  transition: all 200ms ease-in-out;
  /* backdrop-filter: blur(3px); */
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: hsla(0, 0%, 100%, 0.5);
}

.dark .card::before {
  background-color: hsla(0, 0%, 50%, 0.3);
}

.card:hover::before {
  backdrop-filter: blur(0px);
  background-color: hsla(0, 0%, 30%, 0.2);
}

.card:hover .date,
.card:hover .status {
  @apply opacity-80;
}
</style>