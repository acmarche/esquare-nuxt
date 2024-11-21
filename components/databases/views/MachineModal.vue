<script setup>
const {machine} = defineProps({
  machine: {
    type: Object,
    required: true
  },
})
const modalOpenSelected = defineModel('modalOpenSelected')
const properties = computed(() => {
  return machine.properties
})
const image = computed(() => {
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
    <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    </transition>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
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
                <NuxtImg class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="image" alt=""/>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 class="text-2xl font-semibold leading-6 text-gray-900" id="modal-title">
                    Nom machine
                  </h3>
                </div>
                <span
                    class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  xxx
                </span>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  xxx
                </p>
              </div>


            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button type="button"
                      @click="modalOpenSelected=''"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Fermer
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>