<script setup>
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = databaseComposeGet('239a0ed3-9f2c-4527-b013-c519cbc3d906')

function nom(page) {
  if (page['properties']['Nom']['title'].length > 0) {
    return page['properties']['Nom']['title'][0]['plain_text']
  }
  return 'Pas de nom'
}
</script>
<template>
  <section class="">
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div class="flex flex-col gap-3" v-else>
      <div v-for="page in data?.pages ?? []" :key="page.id" class="">
        <div class="flex flex-col items-center gap-2">
          <WidgetsTitle>{{ nom(page) }}</WidgetsTitle>
          <div v-for="block in page['content']['blocks']" class="flex flex-col gap-2">
            <ArticleRenderBlock :property="block"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>