<template lang="pug">
.flex.flex-col
  .text-xl GUN
  img.gun-avatar(
    width="300"
    height="300"
    data-size="300", data-pub="YZOBPSkw75Ute2tFhdjDQgzR-GsGhlfSlZxgEZKuquI.2F-j9ItJY44U8vcRAsj-5lxnECG5TDyuPD8gEiuInp8"
    )
</template>

<script setup>
import { sea, gun } from '../use/db'

gun.get('time').get('now').set(Date.now())

gun.get('time').get('now').map().on((t, d) => {
  console.log(t, d)
})
</script>

<style scoped>
</style>