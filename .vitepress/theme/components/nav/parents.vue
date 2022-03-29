<script setup>
import { useRoute } from 'vitepress'
import routes from '~pages'
import { getParents } from 'vitepress-pages/browser'

const route = useRoute();

const parents = computed(() => getParents(route.path, routes))

function getImage(page) {
  if (page?.cover) {
    return `url(${page?.cover})`
  } else if (page?.icon) {
    return `url(${page?.icon})`
  } else {
    return 'transparent'
  }
}
</script>

<template lang='pug'>  
.flex.flex-wrap.items-stretch.w-full(v-if="parents")
  a.link.p-4.w-full(
    v-if="route.path != '/'"
    style="flex: 1 1 auto"
    href="/"
    ) 
    h4.text-lg 
      slot Начало
    .flex-1
    la-angle-up
  transition-group(name="fade" mode="out-in")
    a.link.p-4.active.relative.flex-auto.shadow-lg(
      style="flex: 1 1 auto" 
      v-for="(page, p) in parents" 
      :key="page.title" 
      :href="page.path"
      :style="{ backgroundImage: getImage(page) }"
      )
      .panel
        h4.text-lg.w-full.-mt-1 {{ page.title }}
        octicon-chevron-up.right-4.text-2xl
</template>


<style lang="postcss" scoped>
</style>