<script setup>
const config = useRuntimeConfig()
const {
  status: roomStatus,
  data: rooms,
  error: roomError,
} = databaseComposeGet(config.public.NOTION_ROOMS_DATABASE_ID)
const {
  status,
  data,
  error
} = pageComposeGet(config.public.NOTION_ROOMS_PAGE_ID)
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const breadcrumb = [{name: "Services", link: "/services"}]
const name = 'Salles de réunion'
const cover = computed(() => data.value ? getCoverPage(data.value) : null)
const emoji = computed(() => data.value ? getEmojiPage(data.value) : null)
const icon = computed(() => data.value ? getIconPage(data.value) : null)

const roomName = (room) => room.properties.Nom.title[0].text.content

useSeoMeta({
  title: name,
})
</script>
<template>
  <BaseLayout :page-title="name" :breadcrumb :cover :icon :emoji :status :error>
    <RoomEquipment/>
    <WidgetsLoader v-if="roomStatus === 'pending'"/>
    <WidgetsError v-else-if="roomError" :error="roomError"/>
    <WidgetsError v-else-if="error" :error="error"/>
    <div v-else class="overflow-hidden">
      <article class="flex flex-col gap-2" v-for="(room, index) in rooms.pages" :key="room.id">
        <WidgetsTitleRoom>
          {{ roomName(room)}}
        </WidgetsTitleRoom>
        <RoomInline :room :index/>
      </article>
    </div>
  </BaseLayout>
</template>