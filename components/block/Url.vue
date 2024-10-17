<script setup>
defineProps({
  property: {
    type: Object,
  },
  name: {
    type: String,
  }
})
</script>
<template>
  <NuxtLink :to="`${property.url}`" target="_blank">{{ name }}</NuxtLink>
</template>