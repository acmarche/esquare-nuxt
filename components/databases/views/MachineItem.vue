<script setup>
const props = defineProps({
  machine: {
    type: Object,
    required: true
  },
})
const properties = computed(() => {
  return props.machine.properties
})
const names = computed(() => {
  return properties.value.Articles
})
const images = computed(() => {
  return properties.value['Image']
})
const reserver = computed(() => {
  return properties.value['Réserver']
})
const descriptions = computed(() => {
  return properties.value.Description
})
</script>
<template>
  <div>
    <div class="flex flex-col gap-3">
    <span class="text-2xl">
      <BlockRichText :property="names"/>
    </span>
      <span>
      <BlockRichText :property="descriptions"/>
    </span>
    </div>
    <div v-for="image in images['files']">
      <BlockImage :property="image"/>
    </div>
    <div v-if="reserver.url" class="">
      <BlockUrl :property="reserver" name="Réserver"/>
    </div>
  </div>
</template>