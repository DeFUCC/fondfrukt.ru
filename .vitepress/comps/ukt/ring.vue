<script setup>


const props = defineProps({
  size: { type: Number, default: 1000 },
  pad: { type: Number, default: 50 },
  modelValue: { type: Object, default: { u: 5, k: 5, t: 5 } }
})

const emit = defineEmits(['update:modelValue'])

function getCircleCoord(n = 0, total = 12, radius = 35, width = props.size) {
  let angle = ((n - total / 4) / (total / 2)) * Math.PI // Calculate the angle at which the element will be placed.
  // For a semicircle, we would use (i / numNodes) * Math.PI.
  let x = radius * Math.cos(angle) + width / 2 // Calculate the x position of the element.
  let y = radius * Math.sin(angle) + width / 2 // Calculate the y position of the element.
  return { x, y }
}

const params = {
  k: [0, 1, 3, 4],
  u: [1, 5, 7],
  t: [2, 4, 6]
}

const colors = {
  k: '#ed1c27',
  u: '#f7941d',
  t: '#00a651'
}

const stroke = 50

function polarToCartesian(r, degrees) {
  const radians = degrees * Math.PI / 180.0;
  return [(r * Math.cos(radians)),
  (r * Math.sin(radians))]
}

function point(radius, degree) {
  return polarToCartesian(radius, degree)
    .map(n => n.toPrecision(5))
    .join(',')
}

function segmentPath(r, d0, d1) {
  // https://svgwg.org/specs/paths/#PathDataEllipticalArcCommands
  const arc = Math.abs(d0 - d1) > 180 ? 1 : 0
  return [
    `M${point(r, d0)}`,
    `A${r},${r},0,${arc},1,${point(r, d1)}`,
  ].join('')
}

</script>

<template lang='pug'>
svg.max-w-150.mx-auto(
  version="1.1",
  baseProfile="full",
  :viewBox="`${-pad - size / 2} ${-pad - size / 2} ${size + 2 * pad} ${size + 2 * pad} `",
  xmlns="http://www.w3.org/2000/svg",
  text-anchor="middle" 
  dominant-baseline="middle" 

  )
  circle(r="50" fill="#5553")
  circle(r="500" fill="none" stroke-width="2" stroke="#5553") 
  //- text {{ modelValue }}
  g(v-for="(sectors, p) in params" :key="p")
    g(v-for="sector in sectors" :key="sector" :transform="`rotate(${sector * 45 - 90})`")
      g(v-for="layer in 5" :key="layer" stroke-linecap="round" :stroke="colors[p]" :stroke-width="stroke" )
        path(
          fill="none" 
          v-if="modelValue[p] >= layer"
          :d="segmentPath(layer * 80 + 50, -22.5 + (8 - layer) * 2, 22.5 - (8 - layer) * 2)"
          )
</template>