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
  <div class="relative bg-gray-200 flex flex-row justify-end w-full"
       style="background-image: url('/images/batimentaerien.jpg'); background-position: left -25% center; background-repeat: no-repeat;"
       v-else>
    <div class="embla" ref="emblaRef">
      <div class="embla__container">
        <div class="embla__slide"
             v-for="page in events"
             :key="page.id">
          <NuxtImg :src="image(page)" class="object-cover aspect-square w-35[rem] md:h-[35rem] " alt="img"/>
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
  width: 35rem;
}

.embla__slide {
  flex: 0 0 35rem;
  min-width: 0;
}
</style>