<script setup>
const {property} = defineProps({
  property: {
    type: Object
  }
})
const url = computed(() => {
  if (property.video.type === 'external') {
    return property.video.external?.url
  }
  return property.video.file?.url
})
const code = computed(() => {
  const urlObj = new URL(url.value);
  if (url.value.includes('?v'))
    return urlObj.searchParams.get("v")
  return url.value.substring(url.value.lastIndexOf("/") + 1).split("?")[0];
})
const caption = computed(() => '')
const isYouTube = computed(() => {
  return url.value.includes('youtu')
})
</script>
<template>
  <iframe
      v-if="isYouTube"
      class="aspect-video"
      width="708" height="598" :src="`https://www.youtube.com/embed/${code}`"
      title="Stop the Flexbox for 1D, Grid for 2D layout nonsense" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</template>