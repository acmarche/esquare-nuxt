<script setup>
//https://play.tailwindcss.com/0MGqLZKhTK
const {data, addAll} = defineProps({
  data: {
    type: Object,
    default: []
  },
  addAll: {
    type: Boolean,
    default: true
  }
})
const tagSelected = defineModel('tagSelected')

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const tags = computed(() => {
  const items = []
  data ? data.pages.forEach((page) => {
    if (addAll.value) {
      items.push('Tout')
    }
    page['properties']['Organisateur']['multi_select'].forEach((property) => {
      if (property['name']) items.push(property.name)
    })
  }) : []
  return items.filter(onlyUnique)
})

function isTagSelected(tag) {
  return tag === tagSelected.value
}
</script>
<template>
  <button
      type="button"
      aria-label="select tag"
      v-for="tag in tags"
      @click="tagSelected = tag"
      class="uppercase text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 mb-2 rounded border border-blue-400"
      :class="isTagSelected(tag) ? 'bg-esquare-yellow':'bg-blue-100 ' ">
    {{ tag }}
  </button>
</template>