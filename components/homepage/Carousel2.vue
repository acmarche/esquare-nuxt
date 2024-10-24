<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

const [emblaRef, emblaApi] = emblaCarouselVue({loop: true, dragFree: true}, [Autoplay({delay: 4000})])

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
  events.value = getRandomItems(data.value?.pages ?? [], 5)
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
           class="embla__slide flex shrink-0 grow-0 basis-[35%]">
        <img :src="image(page)" class="object-cover aspect-square h-[40rem] " alt="img">
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 w-20 mt-4">
    <button @click="scrollPrev" class="embla__button">
      <svg class="h-4 w-4" viewBox="0 0 532 532">
        <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
    </button>
    <button @click="scrollNext" class="embla__button">
      <svg class="h-4 w-4" viewBox="0 0 532 532">
        <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
    </button>
  </div>
</template>
<style>
/* todo xs 100% */
/*.embla__slide {
  flex: 0 0 65%;
  min-width: 0;
}*/

.embla__button {
  -webkit-tap-highlight-color: rgba(49, 49, 49, 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  z-index: 1;
  border-radius: 50%;
  color: rgb(54, 49, 61);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>