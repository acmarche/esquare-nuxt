<script setup>
const config = useRuntimeConfig()
</script>
<template>
  <div>
    Cette page est vide
    {{config.public.NOTION_ROOMS_PAGE_ID}}
    <br>
    {{config.public.API_URL}}

  </div>
</template>