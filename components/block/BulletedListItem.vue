<script setup>
defineProps({
  property: {
    type: Object
  }
})
</script>
<template>
  <li
      class="prose lg:prose-xl"
      v-if="property">
    <BlockRichText :property />
  </li>
</template>