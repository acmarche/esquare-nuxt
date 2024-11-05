<script setup>
defineProps({
  property: {
    type: Object
  }
})
</script>
<template>
  <div class="maxprose prose lg:prose-xl text-justify">
    <BlockRichText :property/>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .maxprose {
    max-width: 85ch;
  }
}
</style>