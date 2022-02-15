<script setup>
import { useData } from 'vitepress'

const { site } = useData();
</script>

<template lang="pug">
footer
  a.flex.flex-col.items-center.no-underline(href="/") 
    .font-bold.text-2xl.p-2 {{ site.title }}
    slot
</template>

<style scoped>
</style>