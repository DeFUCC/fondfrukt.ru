<script setup>
import { useData, useRoute } from 'vitepress'
const { theme, frontmatter } = useData();

const route = useRoute();
</script>

<template lang="pug">
.flex.flex-col.gap-2
  a.px-2.py-1.no-underline.transition-all.duration-300.text-xl(
    v-for="page in theme.pages.main"
    :key= "page.link"
    :href="page.link"
    :class="{ active: route.path.includes(page.link) }"
  ) {{ page.title }} 
</template>
  
<style scoped>
.active {
  @apply bg-light-900/50 dark_(bg-dark-800/50) rounded font-bold;
}
</style>