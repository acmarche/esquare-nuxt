<script setup>
defineProps({
  property: {
    type: Object
  }
})
</script>
<template>
  <NuxtLink :to="`tel:${property.phone_number}`">{{ property.phone_number }}</NuxtLink>
</template>