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
  <!-- https://flowbite.com/docs/components/buttons/ -->
  <NuxtLink :to="`${property.url}`" target="_blank">{{ name }}</NuxtLink>
</template>