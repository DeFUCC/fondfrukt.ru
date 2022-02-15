<template lang="pug">
button(@click="toggleDark()" aria-label="Toggle dark mode")
  carbon-moon(v-show="isDark")
  ion-ios-sunny(v-show="!isDark")
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'




</script>
