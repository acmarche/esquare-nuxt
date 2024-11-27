<script setup>
import Glide from '@glidejs/glide'
// Required Core Stylesheet
import "@glidejs/glide/dist/css/glide.core.css"
// Optional Theme Stylesheet
import "@glidejs/glide/dist/css/glide.theme.css";

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

onMounted(() => {
  events.value = getRandomItems(data.value?.pages ?? [], 3)
  new Glide('.glide', {
    type: 'carousel',
    startAt: 1,
    perView: 1
  }).mount()
})
</script>
<style>
</style>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error" :error/>
  <div class="flex flex-row"
       v-else>
    <div class="bg-gray-200 bg-cover bg-center flex flex-col items-center justify-center relative basis-2/3 h-[25rem]"
         style="background-image: url('/images/batimentaerien.png');"></div>
    <div class="ove4rflow-hidden basis-1/3">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides w-25[rem] md:h-[25rem]" style="width: 600px;height: 25rem;">
            <li class="glide__slide" v-for="page in events"
                :key="page.id">
              <NuxtImg :src="image(page)" class="object-cover aspect-square w-25[rem] md:h-[25rem] " alt="img"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>