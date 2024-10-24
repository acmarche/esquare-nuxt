<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
const [emblaRef, emblaApi] = emblaCarouselVue({loop: false}, [Autoplay()])

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
  if (emblaApi.value) {
    console.log(emblaApi.value.slideNodes()) // Access API
  }
})
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error" :error/>
  <div class="embla" ref="emblaRef" v-else>
    <div class="embla__container flex flex-row h-80">
      <div v-for="page in events" :key="page.id"
           class="embla__slide  basis-1/3">
        <img :src="image(page)" class="object-cover" alt="img">
      </div>
    </div>
  </div>
</template>
<style>
.embla {
  overflow: hidden;
}
.embla__slide {
  flex: 0 0 80%;
}
</style>