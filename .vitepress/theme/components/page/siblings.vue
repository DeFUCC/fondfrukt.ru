

<script setup>
import { useSiblings } from '../../composables/links.js'

const siblings = useSiblings();

</script>

<template lang="pug">
.flex.flex-wrap.items-stretch
  a.link(v-if="siblings.prev" :href="siblings.prev.link") 
    carbon-arrow-left.mr-1
    span {{ siblings.prev.title }}
  a.link(v-if="siblings.next" :href="siblings.next.link") 
    carbon-arrow-right.mr-1
    span {{ siblings.next.title }}
</template>

<style  scoped>
.link {
  @apply transition-all duration-500 no-underline  flex-1 flex flex-col justify-center items-center p-4 bg-light-100/10 mx-auto hover_(bg-light-100 text-dark-600);
  flex: 1 1 200px;
}
</style>