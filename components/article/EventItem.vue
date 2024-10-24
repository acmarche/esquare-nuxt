<script setup>
//https://uicolors.app/create?s=03
const {page} = defineProps({
  page: {
    type: Object,
    required: true
  }
})
const nom = computed(() => page['properties']['Nom'])
const dates = computed(() => {
  const dateObject = page['properties']['Date']
  const startDate = new Date(dateObject.date.start)
  let endDate = null
  if (dateObject.date.end) {
    endDate = new Date(dateObject.date.end)
  }
  return eventDate(startDate, endDate, false, false)
})
const image = computed(() => {
  if (page['properties']['ImageCouvertureCarre']) {
    const files = page['properties']['ImageCouvertureCarre']['files']
    return files.length > 0 ? files[0]['file']['url'] : '/images/news/book.jpg'
  }
  return '/images/news/book.jpg'
})
</script>
<template>
  <NuxtLink :to="`nos-evenements/details/${page.id}`"
            class="group relative mx-auto block w-full overflow-hidden rounded-lg ring-8 ring-white/50 transition ease-in active:opacity-75">
    <div class="aspect-h-4 aspect-w-3 scale-125 transition duration-300 ease-in group-hover:scale-100">
      <NuxtImg
          class="rounded-lg object-cover"
          :src="image"
          :alt="nom['title'][0]['plain_text']"
          width="1200"
          densities="x1 x2"
          :modifiers="{ grayscale: true}"
      />
    </div>
    <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 opacity-50 transition group-hover:opacity-100"></div>
    <div
        class="absolute inset-0 flex flex-col justify-end  transition duration-200 ease-in ">
      <div class="text-white uppercase bg-black/50 h-20 p-3">
        <span class="block text-2xl font-bold">{{ dates }}</span>
        <h3 class="block text-2xl font-bold">
          <BlockRichText :property="nom"/>
        </h3>
      </div>
    </div>

  </NuxtLink>
</template>