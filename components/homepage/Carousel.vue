<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import {AutoPlay, Arrow, Pagination} from "@egjs/flicking-plugins";

const events = ref([])
const {
  status,
  data,
  error
} = databaseActivitiesComposeGet()

function image(page) {
  const files = page['properties']['ImageCouvertureCarre']['files']
  return files.length > 0 ? files[0]['file']['url'] : '/images/news/book.jpg'
}

function property(page) {
  return page['properties']['Nom']
}

const plugins = [new AutoPlay(4000, "NEXT"),
  new Arrow(),
  new Pagination()
]
onMounted(() => {
  events.value = getRandomItems(data.value?.pages ?? [], 5)
})
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error" :error/>
  <flicking
      :options="{ circular: true, moveType: 'freeScroll' }"
      :viewportTag="'div'"
      :cameraTag="'div'"
      :cameraClass="''"
      :plugins="plugins"
      @need-panel="e => {
      // ADD PANELS
    }"
      v-if="events.length > 0">
    <div v-for="page in events"
         :key="page.id"
         class="flex shrink-0 grow-0 basis-full md:basis-[34%]">
      <NuxtLink :to="`nos-evenements/details/${page.id}`">
        <NuxtImg :src="image(page)" class="object-cover aspect-square md:h-[40rem] " alt="img"/>
      </NuxtLink>
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
      <div class="flicking-pagination"></div>
    </template>
  </flicking>
  <div v-else>Vide</div>
</template>
<style>
@import url("@egjs/vue3-flicking/dist/flicking.css");
@import url("@egjs/flicking-plugins/dist/flicking-plugins.css");
</style>