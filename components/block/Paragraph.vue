<script setup>
defineProps({
  property: {
    type: Object
  }
})
</script>
<template>
  <div class="prose lg:prose-xl text-justify">
    <BlockRichText :property />
  </div>
</template>