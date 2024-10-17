<script setup>
defineProps({
  property: {
    type: Object,
  }
})
let color = null

function getColor(text) {
  color = extractColor(text)
  return color
}
</script>
<template>
  <span v-for="value in property[property.type]" :key="value.id" :style="value?.color ? `color:${value.color}` : ''">
    {{ value.name }}
  </span>
</template>