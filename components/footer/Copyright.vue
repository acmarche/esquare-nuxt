<script setup>
const {config} = defineProps({
  config: {
    type: Object
  }
})
const year = 2024
</script>
<template>
  <NuxtLink :to="`rgpd/${config.public.NOTION_RGPD_PAGE_ID}`" class="block mx-auto text-center text-xs leading-5 text-gray-500">&copy;
    {{ year }}
    E-square, Inc. Tous droits réservés.
  </NuxtLink>
</template>