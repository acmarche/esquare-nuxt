<script setup>
defineProps({
  property: {
    type: Object
  }
})
</script>
<template>
  <div class="prose lg:prose-xl">
    <BlockRichText :property />
  </div>
</template>