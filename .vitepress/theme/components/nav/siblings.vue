<script setup>
import { useRoute } from 'vitepress'
import routes from '~pages'
import { trailSlash, getSiblings } from 'vitepress-pages/browser'

const route = useRoute();

const siblings = computed(() => getSiblings(route.path, routes))


function getImage(side) {
  if (siblings.value[side]?.cover) {
    return `url(${siblings.value[side].cover})`
  } else if (siblings.value[side]?.icon) {
    return `url(${siblings.value[side].icon})`
  } else {
    return 'transparent'
  }
}

</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.items-stretch.justify-stretch.w-full(v-if="siblings")
  a.link.px-4.pt-28.pb-4.shadow-lg.flex-1(
    v-if="siblings.prev" 
    :href="trailSlash(siblings.prev.path)"
    :style="{ backgroundImage: getImage('prev'), backgroundColor: siblings.prev?.color ? siblings.prev.color : 'transparent' }"
    ) 
    .panel
      octicon-chevron-left.mr-2.text-xl
      h4.text-lg.-mt-1 {{ siblings.prev.title }}
  a.link.justify-end.px-4.pt-28.pb-4.shadow-lg.flex-1(
    v-if="siblings.next" 
    :href="trailSlash(siblings.next.path)"
    :style="{ backgroundImage: getImage('next'), backgroundColor: siblings.next?.color ? siblings.next.color : 'transparent' }"
    ) 
    .panel
      h4.text-lg.-mt-1 {{ siblings.next.title }}
      octicon-chevron-right.ml-2.text-xl
</template>

<style lang="postcss" scoped>
</style>