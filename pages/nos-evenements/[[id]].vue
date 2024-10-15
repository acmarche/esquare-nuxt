<script setup>
const name = "Nos évènements"
const config = useRuntimeConfig()
useSeoMeta({
  title: name,
})
const breadcrumb = [{name: name, link: "/nos-evenements"}]
const cover = computed(() => config.public.DEFAULT_COVER)
const icon = computed(() => config.public.DEFAULT_ICON)
const emoji = null
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :emoji :icon>
    <HomepageEvents/>
  </BaseLayout>
</template>