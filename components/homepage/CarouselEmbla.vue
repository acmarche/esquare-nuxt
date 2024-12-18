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
  <section class=" grid bannerSection h-[40rem] w-full"
           style="background-image: url('/images/batimentaerien-cut.jpg'); background-position: left -45% center; background-repeat: no-repeat;"
  >
    <div class="relative flex items-center">
      <div
          class="absolute inset-0 bg-gradient-to-r from-transparent  to-black/90  transition group-hover:opacity-100"></div>
      <div class=" text-white text-3xl font-bold mt-6 prose z-10 font-Oswald px-2">
        "C’est par la rencontre et l’échange de points de vue que les idées fleurissent ;
        et c’est par l’échange de capacités et de compétences qu’elles se réalisent.
        Si vous avez envie d’entreprendre, de créer ou de co-créer, vous êtes au bon endroit."
      </div>
    </div>
    <div>
      <WidgetsLoader v-if="status === 'pending'"/>
      <WidgetsError v-else-if="error" :error/>
      <div class="embla" ref="emblaRef" v-else>
        <div class="embla__container">
          <div class="embla__slide"
               v-for="page in events"
               :key="page.id">
            <NuxtImg :src="image(page)" class="object-cover aspect-square w-40[rem] md:h-[40rem] " alt="img"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
@media (min-width: 768px) {
  .bannerSection {
    grid-template-columns: 1fr 40rem;
  }
}

.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
  width: 40rem;
}

.embla__slide {
  flex: 0 0 40rem;
  min-width: 0;
}
</style>