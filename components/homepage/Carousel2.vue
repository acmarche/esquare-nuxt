<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination, Navigation } from 'swiper/modules';
import {register} from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

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

const modules = [Pagination, Navigation]
onMounted(() => {
  events.value = getRandomItems(data.value?.pages ?? [], 3)
  register();
})
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error" :error/>
  <div class="flex flex-row"
       v-else>
    <div class="bg-gray-200 bg-cover bg-center flex flex-col items-center justify-center relative basis-2/3 h-[25rem]"
         style="background-image: url('/images/batimentaerien.png');"></div>
    <div class="overflow-hidden basis-1/3">
      <swiper
          :navigation="true"
          :pagination="true"
          :modules="modules"
          :slides-per-view="1"
          :centered-slides="true"
          :space-between="0">
        <swiper-slide v-for="page in events"
                      :key="page.id">
          <NuxtImg :src="image(page)" class="object-cover aspect-square w-25[rem] md:h-[25rem] " alt="img"/>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>