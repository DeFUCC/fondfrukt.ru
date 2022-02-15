<script setup>
import { useParents } from '../../composables/links.js'

const parents = useParents();

const props = defineProps({
  root: String,
  current: String
})

</script>

<template lang="pug">
.flex.flex-wrap.items-stretch
  a.link.font-bold(href="/" v-if="root")
    span {{ root }}
  a.link(v-for="page in parents", :key="page.title" :href="page.link") 
    carbon-chevron-right.mr-1
    span {{ page.title }}
  .link(v-if="current")
    carbon-chevron-right.mr-1
    span.font-bold {{ current }}
</template>

<style  scoped>
.link {
  @apply transition-all duration-500 no-underline  flex items-center p-4 bg-light-800/60 dark_(bg-dark-100/10) hover_(bg-light-100 dark_bg-dark-100);
  flex: 1 1 auto;
}
.link:last-child {
  flex: 100;
}
</style>