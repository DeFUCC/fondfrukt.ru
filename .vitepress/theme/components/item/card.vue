<script setup>
import { watch, ref, computed, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import { routes, pages, trailing } from '../../composables/pages.js'

const { site, frontmatter, theme } = useData();

const props = defineProps({
  page: Object
})

const children = computed(() => {
  let p = pages[trailing(props.page.path)]
  return p ? p.length : null
})

function getDate(timestamp) {
  let date = new Date(timestamp)
  return date.toLocaleString('default', { month: 'short', year: '2-digit' });
}
</script>

<template lang="pug">
a.card.flex.flex-col.justify-between.items-center.relative.bg-cover.bg-center(
  style="flex: 1 1 280px;"
  :href="trailing(page.path)"
  :style="{ backgroundColor: page?.color ? page.color : 'transparent' }"
) 
  img.absolute.top-0.min-w-full.flex-1(
    :src="page?.cover"
    v-if="page.cover"
    loading="lazy"
    alt="cover"
  )
  .flex-auto
  img.rounded-xl.w-36.z-50(
    style="margin:  1rem 0"
    v-if="page.icon"
    :src="page.icon"
    )
  .flex-auto
  .info.w-full.flex.flex-col.p-4.bg-light-400.bg-opacity-80.dark_bg-opacity-80.dark_bg-dark-200.transition-all.duration-300.backdrop-filter.backdrop-blur-sm.z-100(
    :style="{ marginTop: page.cover ? '120px' : '0' }"
  )
    .flex.w-full
      .flex.flex-col
        item-type(:type="page.data?.type")
        .text-xl.font-bold.md_text-2xl {{ page.title }} 
      .flex-1
    .text-md.mt-2.line-clamp-4(v-if="page.subtitle") {{ page.subtitle }}
  .absolute.right-8px.bottom-4px.opacity-10.text-xs.flex.items-center.transition-all.duration-400.hover_opacity-90
    ic-round-update.mr-1
    .p-0 {{ getDate(page.lastModified) }}
</template>


<style lang="postcss" scoped>
.card {
  @apply overflow-hidden rounded-md shadow-md overflow-hidden bg-light-700 dark_(bg-dark-50) transition-all duration-200  no-underline hover_( shadow-lg );
  &:hover .info {
    @apply bg-light-100 dark_bg-dark-100;
  }
  &:hover .play {
    @apply opacity-90 z-30;
  }
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
  background-color: hsla(0, 0%, 0%, 0.3);
}

.card:hover::before {
  backdrop-filter: blur(0px);
  background-color: hsla(0, 0%, 0%, 0);
}

.card:hover .date,
.card:hover .status {
  @apply opacity-80;
}
</style>