<script setup>
defineProps({
  property: {
    type: Object,
  }
})
</script>
<template>
  <NuxtLink :to="`mailto:${property.email}`">{{ property.email }}</NuxtLink>
</template>