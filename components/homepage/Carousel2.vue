<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

const [emblaRef, emblaApi] = emblaCarouselVue({loop: true, dragFree: true}, [Autoplay({delay: 6000})])

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

function scrollPrev() {
  if (!emblaApi.value) return
  emblaApi.value.scrollPrev()
}

function scrollNext() {
  if (!emblaApi.value) return
  emblaApi.value.scrollNext()
}

onMounted(() => {
  events.value = getRandomItems(data.value?.pages ?? [], 3)
  if (emblaApi.value) {
    console.log(emblaApi.value.slideNodes()) // Access API
  }
})
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error" :error/>
  <div class="embla overflow-hidden" ref="emblaRef" v-else>
    <div class="embla__container flex">
      <div v-for="page in events" :key="page.id"
           class="embla__slide">
        <img :src="image(page)" class="object-cover  " alt="img">
      </div>
    </div>
    <button @click="scrollPrev">Avant</button>
    <button @click="scrollNext">Après</button>
  </div>
</template>
<style>
/* todo xs 100% */
.embla__slide {
  flex: 0 0 80%;
  min-width: 0;
}
</style>