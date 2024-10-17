<script setup>
const {file} = defineProps({
  file: {
    type: Object
  }
})
const url = computed(() => file.file.url)
const name = computed(() => file.name)
</script>
<template>
  <a :href="url" :download="name">
    {{ name }}
  </a>
</template>