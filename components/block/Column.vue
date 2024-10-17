<script setup>
defineProps({
  column: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="min-h-20 prose lg:prose-xl flex flex-row items-center">
    <div v-for="property in column.blocks" :key="property.id">
      <ArticleRenderBlock :property/>
    </div>
  </div>
</template>