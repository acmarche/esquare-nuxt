<script setup>
const props = defineProps({
  machine: {
    type: Object,
    required: true
  },
})
const properties = computed(() => {
  return props.machine.properties
})
const names = computed(() => {
  return properties.value.Articles
})
const images = computed(() => {
  return properties.value['Image']
})
const icones = computed(() => {
  return properties.value['Icone']
})
const reserver = computed(() => {
  return properties.value['Réserver']
})
const descriptions = computed(() => {
  return properties.value.Description
})
const modalOpenSelected = ref('')
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <div  class="flex flex-col items-center justify-center rounded-lg shadow-xl p-8">
      <div v-for="image in icones['files']" v-if="icones['files'].length > 0">
        <BlockImage :property="image" width="150"/>
      </div>
      <img width="150" src="https://e-square.marche.be/wp-content/uploads/2020/03/cnc_mekanika-1-401x450.png" alt="icon"
           v-else>
      <h3 class="text-2xl mt-2">
        <BlockRichText :property="names"/>
      </h3>
      <span class="my-2">
      <BlockRichText :property="descriptions"/>
    </span>
      <button type="button" @click="modalOpenSelected=machine.id"
                  class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="icon icon-tabler icons-tabler-outline icon-tabler-meeple">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path
                  d="M9 20h-5a1 1 0 0 1 -1 -1c0 -2 3.378 -4.907 4 -6c-1 0 -4 -.5 -4 -2c0 -2 4 -3.5 6 -4c0 -1.5 .5 -4 3 -4s3 2.5 3 4c2 .5 6 2 6 4c0 1.5 -3 2 -4 2c.622 1.093 4 4 4 6a1 1 0 0 1 -1 1h-5c-1 0 -2 -4 -3 -4s-2 4 -3 4z"/>
            </svg>
            Détails de la machine
          </button>

    </div>

    <DatabasesViewsMachineModal :machine v-model:modal-open-selected="modalOpenSelected"
                                :key="machine.id"
                                v-show="modalOpenSelected === machine.id"/>
  </div>
</template>