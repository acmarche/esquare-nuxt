<script setup>
const {property} = defineProps({
  property: {
    type: Object
  }
})
const color = computed(() => {
  return property.callout.color
})
</script>
<template>
  <div class="min-h-20 prose lg:prose-xl flex flex-row items-center"
       :class="`${color}`">
    <BlockIconOrEmoji :property/>
    <BlockRichText :property/>
  </div>
</template>
<style>
.gray_background {
  /*background-color: #f3c30c;  */
  background-color: v-bind(color);
}
</style>