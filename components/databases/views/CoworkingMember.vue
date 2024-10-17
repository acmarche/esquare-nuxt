<script setup>

const props = defineProps({
  member: {type: Object, required: true},
})
const properties = computed(() => {
  return props.member.properties
})
const firstName = computed(() => {
  if (properties.value['Nom']['title'].length > 0)
    return properties.value['Nom']['title'][0]['plain_text']
})
const lastName = computed(() => {
  if (properties.value['Prénom']) {
    if (properties.value['Prénom']['rich_text'].length > 0)
      return properties.value['Prénom']['rich_text'][0]['plain_text']
  }
  return ''
})
const activity = computed(() => {
  if (properties.value['Nom activité/entreprise/organisme']) {
    if (properties.value['Nom activité/entreprise/organisme']['rich_text'].length > 0)
      return properties.value['Nom activité/entreprise/organisme']['rich_text'][0]['plain_text']
  }
  return ''
})
const description = computed(() => {
  if (properties.value['Description activité']) {
    return properties.value['Description activité']
  }
  return null
})
const image = computed(() => {
  if (properties.value['Photo']['files'].length > 0) {
    return properties.value['Photo']['files'][0]['file']['url']
  }

  return 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
})
const modalOpenSelected = ref('')
</script>
<template>
  <li
      class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
    <div class="flex flex-1 flex-col p-8">
      <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="image" alt=""/>
      <h3 class="mt-6 text-sm font-medium text-gray-900">{{ lastName }}</h3>
      <dl class="mt-1 flex flex-grow flex-col justify-between">
        <dt class="sr-only">Prénom</dt>
        <dd class="text-sm text-gray-500">{{ firstName }}</dd>
        <dt class="sr-only">Société</dt>
        <dd class="mt-3">
                <span
                    class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {{ activity }}
                </span>
        </dd>
      </dl>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="-ml-px flex w-0 flex-1">
          <button type="button" @click="modalOpenSelected=firstName"
                  class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="icon icon-tabler icons-tabler-outline icon-tabler-meeple">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path
                  d="M9 20h-5a1 1 0 0 1 -1 -1c0 -2 3.378 -4.907 4 -6c-1 0 -4 -.5 -4 -2c0 -2 4 -3.5 6 -4c0 -1.5 .5 -4 3 -4s3 2.5 3 4c2 .5 6 2 6 4c0 1.5 -3 2 -4 2c.622 1.093 4 4 4 6a1 1 0 0 1 -1 1h-5c-1 0 -2 -4 -3 -4s-2 4 -3 4z"/>
            </svg>
            En savoir plus
          </button>
        </div>
      </div>
      <DatabasesViewsCoworkingMemberModal :member v-model:modal-open-selected="modalOpenSelected"
                                          :key="firstName"
                                          v-show="modalOpenSelected === firstName"/>
    </div>
  </li>
</template>