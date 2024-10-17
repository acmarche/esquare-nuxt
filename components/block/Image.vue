<script setup>
const {property} = defineProps({
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
  return property[property.type].external.url
})
</script>
<template>
  <figure>
     <img :src="url" alt=""/>
    <span class="" v-if="caption">{{ caption }}</span>
  </figure>
</template>