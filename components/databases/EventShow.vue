<script setup lang="ts">
const {page} = defineProps({
  page: {
    type: Object,
    required: true
  }
})
const properties = computed(() => page.properties)
const images = computed(() => properties.value['ImageCouvertureCarre']?.files ?? [])
const rooms = computed(() => {
  if (page.metas['Salles']) {
    return page.metas['Salles'].map((item) => {
      return item['properties']['Nom']['title'][0]['plain_text']
    })
  }
  return []
})
const organisateurs = computed(() => page.metas['Listing organisateurs'] ?? [])
const inscription = computed(() => properties.value['Lien inscription'])
const dates = computed(() => {
  const dateObject = properties.value['Date']['date']
  const startDate = new Date(dateObject.start)
  let endDate = null
  if (dateObject.end) {
    endDate = new Date(dateObject.end)
  }
  return eventDate(startDate, endDate, true)
})

</script>
<template>
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
      <div class="prose lg:prose-lg">
        <div class="flex flex-col justify-center gap-2">
          <h3 class="text-xl font-bold">Quand ?</h3>
          <span class="">
            {{ dates }}
          </span>
        </div>
        <div class="flex flex-col justify-center gap-2">
          <h3 class="text-xl font-bold">Ou ?</h3>
          <span class="">
            A l'E-Square<br/>
            Rue Victor Libert 36J<br/>
            6900 Marche-en-Famenne
          </span>
        </div>

        <div class="flex flex-col justify-center gap-2" v-if="inscription.url">
          <h3 class="text-2xl font-bold">Inscription</h3>
          <NuxtLink :to="inscription.url" target="_blank" class="">Je m'inscris en ligne</NuxtLink>
        </div>

        <div class="flex flex-col justify-center gap-2" v-if="rooms.length > 0">
          <h3 class="text-2xl font-bold">Dans quelle(s) salle(s) ?</h3>
          <div class="flex flex-row gap-2">
            <span class="text-esquare-blue text-lg mr-2" v-for="room in rooms" :key="room">
              {{ room }}
            </span>
          </div>
        </div>

        <div v-if="organisateurs.length > 0">
          <h3 class="text-2xl font-bold">Organisé par</h3>
          <div class="flex flex-col">
            <div class="flex flex-col items-start mb-3 border-b-esquare-yellow border-b-2"
                 v-for="organisateur in organisateurs" :key="organisateur.id">
              <div class="text-2xl text-esquare-brown">
                <ArticleRenderBlock :property="organisateur['properties']['Nom']"/>
              </div>
              <div class="">
                <ArticleRenderBlock :property="organisateur['properties']['Responsable']"/>
                <div class="grid grid-cols-2">
                  <span>Téléphone</span>
                  <ArticleRenderBlock :property="organisateur['properties']['Téléphone']"/>
                </div>
                <div class="grid grid-cols-2">
                  <span>E-mail</span>
                  <ArticleRenderBlock :property="organisateur['properties']['E-mail']"/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div v-if="images.length > 0">
        <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
          <img :src="images[0].file.url" alt="affiche" class="h-full w-full object-cover object-center"/>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8" v-if="images.length > 1">
          <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100" v-for="(image,index) in images"
               :key="index">
            <img :src="image.file.url" alt="img" class="h-full w-full object-cover object-center"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>