<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  file: {
    type: String,
    default: ''
  }
});
</script>

<template lang="pug">
.box.flex.flex-col.items-center.w-full
  .text-xl.pb-4 {{ title }}
  audio.rounded-xl.mx-auto.w-full(
    controls
    :src="file"
  )
  slot
</template>

<style scoped>
.box {
  @apply shadow-xl p-4 rounded-xl bg-light-300 dark-bg-dark-200;
}
</style>