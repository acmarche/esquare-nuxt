<script setup>
//https://play.tailwindcss.com/0MGqLZKhTK
const tagSelected = ref('Tout')
const events = ref([])
const {tagFilter} = defineProps({
  tagFilter: {
    type: String,
    required: false,
    default: null,
  }
})
const {
  status,
  data,
  error
} = databaseActivitiesComposeGet()
watch(tagSelected, (newTag) => {
  if (newTag === 'Tout') {
    events.value = data.value.pages
  } else if (newTag) {
    events.value = filterEvents(data.value.pages, newTag)
  }
})
onMounted(() => {
  events.value = data.value?.pages ?? []
  if (tagFilter) {
    events.value = filterEvents(events.value, tagFilter)
  }
})
//https://play.tailwindcss.com/KlveA5ADug todo 
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error" :error/>
  <section class="flex flex-col" v-else>
    <WidgetsTitle v-if="events.length > 0 && tagFilter">Nos évènements</WidgetsTitle>
    <div class="flex flex-row flex-wrap items-center justify-center" v-if="!tagFilter">
      <HomepageTags :data v-model:tag-selected="tagSelected" :add-all="false"/>
    </div>
    <div class="mx-auto px-1 grid w-full max-w-fit grid-cols-1 gap-2 md:grid-cols-3">
      <ArticleEventItem v-for="page in events" :key="page.id" :page/>
    </div>
  </section>
</template>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>