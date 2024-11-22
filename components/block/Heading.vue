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
             class="heading font-Oswald text-esquare-yellow font-bold my-2 md:my-4 uppercase flex items-center">
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

h2.heading span.leftArrow, h3.heading span.leftArrow {
  @apply hidden;
}

h2.heading span.leftArrow + span, h3.heading span.leftArrow + span {
  @apply mx-0;
}

h2.heading ~ div, h2.heading ~ li, h3.heading + div {
  @apply mx-2;
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