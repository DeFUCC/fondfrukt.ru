<script setup>
const props = defineProps({
  param: { type: String, default: 'u' }
})

const rate = computed(() => {
  let r = { u: props.param == 'u' ? 5 : 0, k: 2, t: 4 }
  return r
})

</script>

<template lang='pug'>
.flex.flex-wrap
  ukt-ring.w-30(v-for="n in 5" :key="n" v-model="rate")
</template>