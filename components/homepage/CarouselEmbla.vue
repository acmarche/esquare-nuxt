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
    <div class="flex items-center justify-center relative h-[35rem]">
       <NuxtImg class="object-cover aspect-square w-25[rem] md:h-[35rem]" src="https://prod-files-secure.s3.us-west-2.amazonaws.com/342f974b-11f0-497c-a847-4ef08f933cb7/19b3a04b-1c5c-49eb-bcb5-65a577a3be00/Pitch_x_Network_%282%29.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241127T090052Z&X-Amz-Expires=3600&X-Amz-Signature=02f7c92b243f7460facb38f5d1f6fd66888622a2fa05c98d72cfa188029035e5&X-Amz-SignedHeaders=host&x-id=GetObject" alt="img"/>
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