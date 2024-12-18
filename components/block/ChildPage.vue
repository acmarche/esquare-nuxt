<script setup>
const {property} = defineProps({
  property: {
    type: Object
  }
})
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = pageComposeGet(property.id)
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error" :error/>
  <div v-else>
    <NuxtLink :to="data.link">
      {{ data.title }}
    </NuxtLink>
  </div>
</template>