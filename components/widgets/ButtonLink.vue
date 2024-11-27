<script setup>
const {link} = defineProps({
  link: {
    type: String,
    required: true
  },
})
</script>
<template>
  <NuxtLink
      :to="link"
      role="button"
      class="rounded-md bg-esquare-yellow px-3.5 py-2.5 text-center font-semibold text-white hover:text-white text-lg shadow-sm hover:bg-esquare-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-500">
    <slot></slot>
  </NuxtLink>
</template>