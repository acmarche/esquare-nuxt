<script setup>
const {property} = defineProps({
  property: {
    type: Object
  }
})
const h = computed(() => {
  const match = property.type.match(/heading_(\d+)/)
  return match ? `h${match[1]}` : 'h2'
})
</script>
<template>
  <component :is="h"
             v-if="h"
             class="heading text-esquare-yellow font-roboto font-bold my-2 md:my-4 uppercase flex items-center">
  <span
      aria-hidden="true"
      class="h-0.5 grow rounded bg-gray-200 leftArrow"></span>
    <span class="mx-3 font-semibold">
      <BlockRichText :property/>
    </span>
    <span
        aria-hidden="true"
        class="h-0.5 grow rounded bg-gray-200"></span>
  </component>
</template>
<style>
h1.heading {
  @apply text-xl;
  @media (min-width: 768px) {
    @apply text-3xl;
  }
}

h2 span.leftArrow, h3 span.leftArrow {
  @apply hidden;
}

h2.heading {
  @apply text-xl;
  @media (min-width: 768px) {
    @apply text-3xl;
  }
}

h3.heading {
  @apply text-xl;
  @media (min-width: 768px) {
    @apply text-3xl;
  }
}
</style>