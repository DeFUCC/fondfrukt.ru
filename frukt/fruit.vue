<script setup>
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🫐", "🥝", "🥑"]

const randomFruit = ref()

function randomize() {
	randomFruit.value = fruits[Math.floor(Math.random() * fruits.length)]
}

randomize()

</script>

<template lang='pug'>
.flex.flex-col.items-center.mb-12
	transition(name="fade" mode="out-in")
		.text-20rem.select-none.cursor-pointer(@click="randomize()" :key="randomFruit") {{randomFruit}}
</template>