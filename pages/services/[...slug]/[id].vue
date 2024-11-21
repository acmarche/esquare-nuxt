<script setup>
const id = useRoute().params.id
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = pageComposeGet(id)
const name = computed(() => data.value?.title ?? '')
const cover = computed(() => data.value?.cover?.file?.url ?? null)
const emoji = computed(() => null)
const icon = computed(() => data.value?.icon?.file?.url ?? null)
const breadcrumb = computed(() => data.value?.breadcrumb ?? [])
useHead({
  title: () => name.value ?? ''
})
</script>
<template>
  <BaseLayout :page-title="name ?? ''" :breadcrumb :cover :emoji :icon>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <ArticleChildPages :childPages="data.child_pages" v-if="data.child_pages.length > 0"/>
      <HomepageEvents :tag-filter="data.title"/>
      <div v-for="property in data.blocks" :key="property.id">
        <ArticleRenderBlock :property/>
      </div>
    </div>
  </BaseLayout>
</template>