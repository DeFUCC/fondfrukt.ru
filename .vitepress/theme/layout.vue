<script setup>

</script>

<template lang="pug">
.m-0
  nav-search
  nav-dark.p-4.mr-4.fixed.bottom-4.left-4.z-90
  nav-scroll.fixed.bottom-4.right-4.p-4.rounded-full.cursor-pointer.z-90
    la-angle-up
  transition(name="fade" mode="out-in")
    page-main(v-if="!$frontmatter.home")
    page-home(v-else)
</template>

<style lang="postcss" scoped></style>