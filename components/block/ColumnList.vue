<script setup>
defineProps({
  property: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <section class="flex flex-col md:flex-row items-center gap-1 md:gap-3 justify-between w-full">
    <div v-for="column in property.columns" :key="column.id">
        <BlockColumn :column="column"/>
    </div>
  </section>
</template>