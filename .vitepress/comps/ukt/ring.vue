<script setup>
const props = defineProps({
  size: { type: Number, default: 1000 },
  pad: { type: Number, default: 50 },
  modelValue: { type: Object, default: { u: 5, k: 5, t: 5 } }
})

const emit = defineEmits(['update:modelValue'])

const letters = {
  y: 'У',
  k: 'К',
  t: 'Т'
}

const params = {
  k: [0, 1, 3, 4],
  y: [1, 5, 7],
  t: [2, 4, 6]
}

const colors = {
  k: '#ed1c27',
  y: '#f7941d',
  t: '#00a651'
}

const stroke = 60

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

const rank = computed(() => `У${Math.floor(props.modelValue.y)} К${Math.floor(props.modelValue.k)} T${Math.floor(props.modelValue.t)}`)
const average = computed(() => (Math.floor(props.modelValue.y) + Math.floor(props.modelValue.k) + Math.floor(props.modelValue.t)) / 3)

</script>

<template lang='pug'>
svg.max-w-150.mx-auto(
  version="1.1",
  baseProfile="full",
  :viewBox="`${-pad - size / 2} ${-pad - size / 2} ${size + 2 * pad} ${size + 4 * pad} `",
  xmlns="http://www.w3.org/2000/svg",
  text-anchor="middle" 
  dominant-baseline="middle" 
  )
  circle(r="500" fill="#0001" stroke-width="2" stroke="#5553") 
  circle(r="50" fill="#5553")
  text.text-90px.select-none.font-bold 
    tspan(y="10" text-anchor="middle"   dominant-baseline="middle" ) {{ average.toFixed() }}
  g.text-120px.select-none.font-bold(:transform="`translate(0, ${size / 2 + pad + 20})`")
    rect(:width="size - 2 * pad" :height="2 * pad + 30" :x="-size / 2 + pad" :y="-pad - 20" rx="30" fill="#8882")
    g(v-for="(color, c, i) in colors" :key="color" :transform="`translate(${-250 + i * 250},8)`" )
      text {{ letters[c] }}{{ Math.floor(modelValue[c]) }}
  g(v-for="(sectors, p) in params" :key="p")
    g(v-for="sector in sectors" :key="sector" :transform="`rotate(${sector * 45 - 90})`")
      g(v-for="layer in 5" :key="layer" stroke-linecap="round" :stroke="colors[p]" :stroke-width="stroke" )
        transition(name="fade")
          path(
            fill="none" 
            v-if="modelValue[p] >= layer"
            :d="segmentPath(layer * 80 + 30, -22.5 + (7 - layer) * 3, 22.5 - (7 - layer) * 3)"
            )
</template>