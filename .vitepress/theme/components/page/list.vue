<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { theme, frontmatter } = useData();

const pages = computed(() => theme.value.pages[frontmatter.value.list])

function getDate(timestamp) {
  let date = new Date(timestamp)
  return date.toLocaleString('default', { month: 'short', year: '2-digit' });
}
</script>

<template lang="pug">
.flex.flex-wrap.gap-2.p-2
  a.card(
    v-for="page in pages"
    :key= "page.link"
    :href="page.link"
  ) 
    img.rounded.w-40.h-40(
      style="margin:  1rem 0"
      v-if="page.cover"
      :src="page.cover"
    )
    img.rounded.w-20.h-20(
      style="margin:  1rem 0"
      v-if="page.icon"
      :src="page.icon"
    )
    .p-2
      .text-xl.font-bold.md_text-2xl {{ page.title }}
      .text-md.mt-2(v-if="page.subtitle") {{ page.subtitle }}
    .absolute.right-8px.bottom-4px.opacity-10.text-xs.flex.items-center.transition-all.duration-400.hover_opacity-90
      ic-round-update.mr-1
      .p-0 {{ getDate(page.lastModified) }}
</template>


<style lang="postcss" scoped>
.card {
  scroll-snap-align: start;
  @apply bg-light-400 dark_(bg-dark-100) shadow-md transition-all duration-200 p-4 no-underline hover_(bg-light-100 shadow-lg dark_(bg-dark-400));
  flex: 1 1 200px;
}
</style>