<script setup>
import { useRoute } from 'vitepress'
import { data } from '../../../../pages.data.js'
import { useSiblings } from 'vitepress-pages'

const route = useRoute();

const siblings = useSiblings(route, data)


function getImage(side) {
  if (siblings.value[side].frontmatter?.cover) {
    return `url(${siblings.value[side].frontmatter?.cover})`
  } else if (siblings.value[side]?.frontmatter?.icon) {
    return `url(${siblings.value[side].frontmatter?.icon})`
  } else {
    return 'transparent'
  }
}

</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.items-stretch.justify-stretch.w-full(v-if="siblings")
  a.link.px-4.pt-28.pb-4.shadow-lg.flex-1(
    v-if="siblings.prev" 
    :href="siblings.prev.url"
    :style="{ backgroundImage: getImage('prev'), backgroundColor: siblings.prev?.frontmatter?.color || 'transparent' }"
    ) 
    .panel
      octicon-chevron-left.mr-2.text-xl
      h4.text-lg.-mt-1 {{ siblings.prev?.frontmatter.title }}
  a.link.justify-end.px-4.pt-28.pb-4.shadow-lg.flex-1(
    v-if="siblings.next" 
    :href="siblings.next.url"
    :style="{ backgroundImage: getImage('next'), backgroundColor:  siblings.next?.frontmatter?.color || 'transparent' }"
    ) 
    .panel
      h4.text-lg.-mt-1 {{ siblings.next?.frontmatter?.title }}
      octicon-chevron-right.ml-2.text-xl
</template>

<style lang="postcss" scoped></style>