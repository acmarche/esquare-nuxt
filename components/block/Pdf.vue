<script setup>
const {property} = defineProps({
  property: {
    type: Object
  }
})
const url = computed(() => {
  return property.pdf.file.url
})
</script>
<template>
  <section class="relative w-full md:w-[75rem] h-[20rem] md:h-[45rem]">
    <embed :src="url" type="application/pdf" width="100%" height="600px" />
  </section>
</template>