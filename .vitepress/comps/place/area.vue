<template lang="pug">
client-only.p-4
  img.avatar.rounded-full(
    v-if="pic",
    :src="pic",
    :title="pub",
    :width="size",
    :height="size",
  )
</template>

<script setup>
import { gunAvatar } from 'gun-avatar'
import { ref } from 'vue'
const size = 200
const pic = ref()
onMounted(() => {
  pic.value = gunAvatar('YZOBPSkw75Ute2tFhdjDQgzR-GsGhlfSlZxgEZKuquI.2F-j9ItJY44U8vcRAsj-5lxnECG5TDyuPD8gEiuInp8', size);
});

</script>

<style scoped>
</style>