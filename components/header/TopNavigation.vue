<script setup>
const {childPages} = defineProps({childPages: {type: Array, default: []}})
const mobileMenu = defineModel('mobileMenu', {type: Boolean, default: false})
</script>
<template>
  <div class="relative z-[1000]" aria-labelledby="slide-over-title" role="dialog" aria-modal="true" v-if="mobileMenu">
    <!--
      Background backdrop, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <Transition
        enter-active-class="ease-out duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" v-if="mobileMenu"></div>
    </Transition>
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <!--
            Slide-over panel, show/hide based on slide-over state.

            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
          <Transition
              enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from-class="translate-x-full"
              enter-to-class="translate-x-0"
              leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from-class="translate-x-0"
              leave-to-class="translate-x-full">
            <div class="pointer-events-auto w-screen max-w-md" v-if="mobileMenu">
              <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2 class="text-base font-semibold text-gray-900" id="slide-over-title">Menu</h2>
                    <div class="ml-3 flex h-7 items-center">
                      <button type="button"
                              @click="mobileMenu = false"
                              class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute -inset-2.5"></span>
                        <span class="sr-only">Close panel</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                             aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative mt-6 flex-1 px-4 sm:px-6">
                  <NuxtLink v-for="item in childPages"
                            :key="item.id"
                            :to="item.link"
                            @click="mobileMenu = !mobileMenu"
                            class="animateText flex flex-col items-center justify-center w-full p-4 hover:text-esquare-blue border-t-2 border-esquare-grey-lighter uppercase"
                            aria-current="page">
                    {{ item.name }}
                    <!-- todo Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
                  </NuxtLink>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.animateText {
  @apply relative after:absolute after:bg-esquare-yellow after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300
}
</style>