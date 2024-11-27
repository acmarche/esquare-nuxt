<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

const [emblaRef] = emblaCarouselVue({loop: true}, [Autoplay()])
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

})
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error" :error/>
  <div class="flex flex-row w-full"
       v-else>
    <div class="bg-gray-200 bg-cover bg-center flex flex-col items-center justify-center relative basis-2/3 h-[25rem]"
         style="background-image: url('/images/batimentaerien.png'); background-position: center 50%;"></div>
    <div class="overflow-hid4den basis-1/3">
      <div class="embla" ref="emblaRef">
        <div class="embla__container">
          <div class="embla__slide"
               v-for="page in events"
               :key="page.id">
            <NuxtImg :src="image(page)" class="object-cover aspect-square w-25[rem] md:h-[25rem] " alt="img"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
</style>