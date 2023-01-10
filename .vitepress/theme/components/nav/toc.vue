<script setup>
import { useData, useRoute } from 'vitepress'
import { onClickOutside } from '@vueuse/core'

const route = useRoute();
const target = ref()

const open = ref()

onClickOutside(target, (event) => open.value = false)

</script>

<template lang='pug'>
.fixed.top-4.left-2.z-200(ref="target")
  button.screen-button.absolute.text-2xl.self-start.z-30.left-4.top-4.z-400.md-hidden(@click="open = !open")
    ph-list-bullets
  transition(name="fade")
    .rounded-lg.shadow-lg.absolute.top-18.left-4.z-20.gap-2.flex.flex-col.py-6.px-4.text-left.gap-1.bg-light-500.dark-bg-dark-100.min-w-xs.max-h-90vh.overflow-y-scroll.leading-relaxed.text-md(
      v-if="open"
      )
      a.flex.font-bold.pl-2(
        href="#start"
        @click="open = false"
      ) {{ route.data.title }}
      a.flex.items-center(
        @click="open = false"
        v-for="header in route.data.headers"
        :href="`#${header.slug}`"
        ) 
        .px-2(v-for="level in header.level - 1") 
        .ml-1 {{ header.title }}


</template>