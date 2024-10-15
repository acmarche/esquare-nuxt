<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import {AutoPlay, Arrow,  Pagination} from "@egjs/flicking-plugins";
import {getRandomItems} from "~/composables/cacheUtil.js";

const events = ref([])
const {
  status,
  data,
  error
} = databaseActivitiesComposeGet()
const plugins = [
  new AutoPlay(4000, "NEXT"),
  new Arrow(),
  new Pagination(),
];

function image(page) {
  const files = page['properties']['ImageCouvertureCarre']['files']
  return files.length > 0 ? files[0]['file']['url'] : '/images/news/book.jpg'
}

function texts(page) {
  return page['properties']['Nom']['title']
}

onMounted(() => {
  events.value = getRandomItems(data.value?.pages ?? [],5)
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
      v-else>
    <NuxtLink :to="`nos-evenements/details/${page.id}`"
              v-for="page in events"
              :key="page.id"
         :style="`background-image: url('${image(page)}')`"
         class="w-1/2 h-96 flex flex-col items-start justify-end bg-cover">
      <span class="text-4xl text-white uppercase font-bold p-3 mb-4">
        <BlockRichText :texts="texts(page)"/>
      </span>
    </NuxtLink>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
      <div class="flicking-pagination"></div>
    </template>
  </flicking>
</template>
<style>
@import url("@egjs/vue3-flicking/dist/flicking.css");
@import url("@egjs/flicking-plugins/dist/flicking-plugins.css");
</style>