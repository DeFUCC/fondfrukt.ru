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
.flex.flex-wrap.gap-4.p-4.bg-dark-50.bg-opacity-30.dark_bg-dark-700(v-if="pages && Object.keys(pages).length > 0")
  a.card.flex.flex-col.p-1.justify-between.items-center.relative.bg-cover.rounded-3xl(
    style="flex: 1 1 300px;"
    v-for="page in pages"
    :key= "page.link"
    :href="page.link"
    :style="{ backgroundImage: page.cover ? `url(${page.cover})` : '' }"
  ) 
    img.rounded-xl.w-36(
      style="margin:  1rem 0"
      v-if="page.icon"
      :src="page.icon"
      )
    .bg-light-700.dark_bg-dark-200.rounded-2xl.px-2.py-4.bg-opacity-95(
      :style="{ marginTop: page.cover ? '120px' : '0' }"
    )

      .p-2
        .text-xl.font-bold.md_text-2xl {{ page.title }}
        .text-md.mt-2.line-clamp-4(v-if="page.subtitle") {{ page.subtitle }}
    .absolute.right-8px.bottom-4px.opacity-10.text-xs.flex.items-center.transition-all.duration-400.hover_opacity-90
      ic-round-update.mr-1
      .p-0 {{ getDate(page.lastModified) }}
</template>


<style lang="postcss" scoped>
.card {
  @apply bg-light-900 dark_(bg-dark-100) shadow-lg transition-all duration-200  no-underline hover_(bg-light-100 shadow-lg dark_(bg-dark-400));
}
</style>