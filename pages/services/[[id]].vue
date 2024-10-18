<script setup>
useSeoMeta({
  title: 'Nos services',
})
const breadcrumb = [{name: "Accueil", link: "/"}]
const name = 'Nos services'
const cover = computed(() => null)
const emoji = computed(() => null)
const icon = computed(() => null)
useSeoMeta({
  title: () => `${name.value ?? ''}`,
})
</script>
<template>
  <BaseLayout :page-title="name ?? ''" :breadcrumb :cover :icon :status :error>
    <HomepageServices v-else/>
  </BaseLayout>
</template>