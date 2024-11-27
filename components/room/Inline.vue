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
  <article class="flex flex-col ">
    <WidgetsTitleRoom>
      {{ roomName }}
    </WidgetsTitleRoom>
    <div
        class="flex flex-col md:flex-row">
      <NuxtImg
          class="w-full md:w-1/2 mb-2 sm:mb-0"
          :src="image" alt="room"/>
      <div class="flex flex-col justify-between md:pl-3 w-full md:w-1/2 ">
        <span class="text-esquare-grey-dark text-left prose lg:prose-xl">
          {{ roomDescription }}
        </span>
        <RoomFeatures :properties/>
        <div class="flex self-start">
          <WidgetsButtonLink :link="`/services/salles-de-reunion/reserver/${slugifyString}/${room.id}`">
            Réservation et tarifs
          </WidgetsButtonLink>
        </div>
      </div>
    </div>
  </article>

  <div
      class="flex flex-col sm:flex-row items-center sm:even:flex-row-reverse mb-2 even:translate-x-1/3 -translate-x-1/3 intersect:translate-x-0 transition ease-out duration-500">

    <div class="flex flex-col items-center md:pl-3">

    </div>
  </div>
</template>