<script setup>
const props = defineProps({
  room: {
    type: Object,
    required: true,
  }
})
const properties = computed(() => {
  return props.room.properties
})
const slugifyString = computed(() => {
  return slugify(roomName.value)
})
const roomName = computed(() => {
  return properties.value.Nom.title[0].text.content
})
const roomDescription = computed(() => {
  return properties.value.Description.rich_text[0].text.content
})
const image = computed(() => {
  return properties.value.Image.files[0].file.url
})
</script>
<template>
  <div
      class="flex flex-col sm:flex-row items-center sm:even:flex-row-reverse mb-2 even:translate-x-1/3 -translate-x-1/3 intersect:translate-x-0 transition ease-out duration-500">
    <NuxtImg
        class="w-full md:w-1/2 mb-2 sm:mb-0"
        :src="image" alt="room"/>
    <div class="flex flex-col items-center md:pl-3">
      <h3 class="text-4xl text-esquare-yellow font-semibold">
        {{ roomName }}
      </h3>
      <span class="text-esquare-grey-dark text-left prose lg:prose-xl">
        {{ roomDescription }}
      </span>
      <RoomFeatures :properties/>
      <NuxtLink :to="`/services/salles-de-reunion/reserver/${slugifyString}/${room.id}`"
                :key="room.id"
                class="animate-up text-esquare-black text-lg flex flex-row  justify-center items-center h-16 w-full md:w-80 border-4 md:border-8 border-esquare-blue hover:border-esquare-yellow transition-all duration-200 ease-out ">
        Réservation et tarifs
      </NuxtLink>
    </div>
  </div>
</template>