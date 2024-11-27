<script setup>
defineProps({
  property: {
    type: Object
  }
})
</script>
<template>
  <div class="maxprose prose lg:prose-xl text-just4ify">
    <BlockRichText :property/>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .maxprose {
    max-width: 95ch;
    text-wrap: balance;
  }
}
h2 div.maxprose + div  {
  @apply mr-2
}
</style>