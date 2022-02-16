<script setup>
const props = defineProps({
  page: Object
})

function getDate(timestamp) {
  let date = new Date(timestamp)
  return date.toLocaleString('default', { month: 'short', year: '2-digit' });
}
</script>

<template lang="pug">
a.card.flex.flex-col.justify-between.items-center.relative.bg-cover(
  style="flex: 1 1 240px;"
  :href="page.link"
  :style="{ backgroundImage: page.cover ? `url(${page.cover})` : '' }"
) 
  .flex-auto
  img.rounded-xl.w-36(
    style="margin:  1rem 0"
    v-if="page.icon"
    :src="page.icon"
    )
  .flex-auto
  .info.p-4.bg-light-400.dark_bg-dark-200.bg-opacity-95.transition-all.duration-300(
    :style="{ marginTop: page.cover ? '120px' : '0' }"
  )
    .text-xl.font-bold.md_text-2xl {{ page.title }}
    .text-md.mt-2.line-clamp-4(v-if="page.subtitle") {{ page.subtitle }}
  .absolute.right-8px.bottom-4px.opacity-10.text-xs.flex.items-center.transition-all.duration-400.hover_opacity-90
    ic-round-update.mr-1
    .p-0 {{ getDate(page.lastModified) }}
</template>


<style lang="postcss" scoped>
.card {
  @apply rounded-md overflow-hidden bg-light-700 dark_(bg-dark-100) transition-all duration-200  no-underline hover_(bg-light-900 shadow-lg dark_(bg-dark-400));
  &:hover .info {
    @apply bg-light-100;
  }
}
</style>