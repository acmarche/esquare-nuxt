<script setup>
const config = useRuntimeConfig()
const {cover} = defineProps({
  icon: {
    type: String,
    required: false,
    default: null,
  },
  emoji: {
    type: String,
    required: false,
    default: null,
  },
  cover: {
    type: String,
    required: false,
    default: null,
  },
  pageTitle: {
    type: String,
    required: false,
    default: '',
  },
})
const coverComputed = computed(() => cover ?? config.public.DEFAULT_COVER)
</script>
<template>
  <header class="bg-gray-200 bg-cover bg-center flex flex-col items-center justify-center relative "
          :style="`height: 30vh;background-image: url(${coverComputed});`">
    <div class="flex items-center justify-center mx-auto self-start justify-self-end">
      <h1 class="text-4xl md:text-[6rem] text-esquare-yellow font-Oswald font-semibold uppercase">{{pageTitle}}</h1>
    </div>
    <!-- ICON -->
    <div class="absolute bottom-0 left-4 md:left-64 -mb-4  max-w-32">
      <NuxtImg class="h-8 w-8 md:h-16 md:w-16 animate-bounce-in-top duration-700"
               :src="icon"
               alt=""
               v-if="icon"/>
      <div class="text-4xl md:text-8xl animate-bounce-in-top duration-700"
           v-if="emoji">
        {{ emoji }}
      </div>
    </div>
  </header>
</template>