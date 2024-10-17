<script setup>
defineProps({
  property: {
    type: Object
  }
})
</script>
<template>
  <span class="text-red-500"
        v-if="property">
    Le block <span class="italic">{{ property.type }}</span> n'est pas supporté par le site web !
    <span class="w-full block my-3">{{ property }}</span>
  </span>
</template>