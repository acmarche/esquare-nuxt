<script setup>
const {property, width, height} = defineProps({
  width: {
    type: String,
    default: 'auto'
  },
  height: {
    type: String,
    default: 'auto'
  },
  property: {
    type: Object
  }
})
const caption = computed(function () {
  if (property[property.type].caption?.length > 0) {
    return property[property.type].caption[0].text.content
  }
  return null
})
const url = computed(function () {
  if (property.type === 'file') {
    return property[property.type]['url']
  }
  if (property.type === 'url') {
    return property[property.type].url
  }
  if (property.type === 'image') {
    return property[property.type]['file'].url
  }
  return property[property.type].external.url
})
</script>
<template>
  <figure>
    <NuxtImg :src="url" alt="" :width="width" :height="height"/>
    <span class="" v-if="caption">{{ caption }}</span>
  </figure>
</template>