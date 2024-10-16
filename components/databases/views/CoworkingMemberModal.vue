<script setup>
const {member} = defineProps({
  member: {
    type: Object,
    required: true
  },
})
const modalOpenSelected = defineModel('modalOpenSelected')
const properties = computed(() => {
  return member.properties
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
  if (properties.value['Description activité']['rich_text'].length > 0) {
    return properties.value['Description activité']['rich_text'][0]['plain_text']
  }
  return null
})
const coworking = computed(() => {
  if (properties.value['Avantages coworking']['rich_text'].length > 0) {
    return properties.value['Avantages coworking']['rich_text'][0]['plain_text']
  }
  return null
})
const website = computed(() => {
  if (properties.value['Site web']['url']) {
    return properties.value['Site web']['url']
  }
  return null
})
const linkedin = computed(() => {
  if (properties.value['Linkedin']['url']) {
    return properties.value['Linkedin']['url']
  }
  return null
})
const instagram = computed(() => {
  if (properties.value['Instagram']['url']) {
    return properties.value['Instagram']['url']
  }
  return null
})
const facebook = computed(() => {
  if (properties.value['Facebook']['url']) {
    return properties.value['Facebook']['url']
  }
  return null
})
const X = computed(() => {
  return null
})
const image = computed(() => {
  if (properties.value['Photo']['files'].length > 0) {
    return properties.value['Photo']['files'][0]['file']['url']
  }

  return 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
})
</script>
<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
      Background backdrop, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div
            class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div class="flex flex-col sm:items-start">
            <div class="flex flex-col items-center mx-auto mb-3">
              <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="image" alt=""/>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-2xl font-semibold leading-6 text-gray-900" id="modal-title">
                  {{ firstName }} {{ lastName }}
                </h3>
              </div>
              <span
                    class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {{ activity }}
                </span>
            </div>
            <div class="mt-2">
              <p class="text-sm text-gray-500" v-if="description">
                {{ description }}
              </p>
            </div>
            <div class="mt-2" v-if="coworking">
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Quel est l'avantage du
                Coworking ?</h3>
              <p class="text-sm text-gray-500">
                {{ coworking }}
              </p>
            </div>
            <ul role="list" class="mt-6 flex gap-x-6">
              <li v-if="website">
                <a :href="website" class="text-gray-400 hover:text-gray-500" target="_blank">
                  <span class="sr-only">Site web</span>
                  <svg class="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
                    <path d="M3.6 9h16.8"/>
                    <path d="M3.6 15h16.8"/>
                    <path d="M11.5 3a17 17 0 0 0 0 18"/>
                    <path d="M12.5 3a17 17 0 0 1 0 18"/>
                  </svg>
                </a>
              </li>
              <li v-if="facebook">
                <a :href="facebook" class="text-gray-400 hover:text-gray-500" target="_blank">
                  <span class="sr-only">Facebook</span>
                  <svg class="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/>
                  </svg>
                </a>
              </li>
              <li v-if="X">
                <a :href="X" class="text-gray-400 hover:text-gray-500" target="_blank">
                  <span class="sr-only">X</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                        d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"/>
                  </svg>
                </a>
              </li>
              <li v-if="linkedin">
                <a :href="linkedin" class="text-gray-400 hover:text-gray-500" target="_blank">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clip-rule="evenodd"/>
                  </svg>
                </a>
              </li>
              <li v-if="instagram">
                <a :href="instagram" class="text-gray-400 hover:text-gray-500" target="_blank">
                  <span class="sr-only">Instagram</span>
                  <svg class="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z"/>
                    <path
                        d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button type="button"
                    @click="modalOpenSelected=''"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>