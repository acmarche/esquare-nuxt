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
})
const coverComputed = computed(() => cover ?? config.public.DEFAULT_COVER)
</script>
<template>
  <header class="bg-gray-200" style="height: 30vh">
    <NuxtImg class="w-full object-center-50 block"
             style="height: 30vh;"
             :src="coverComputed"
             height="30vh"
             alt="cover"/>
    <!-- ICON -->
    <div class="max-w-32 ms-2 md:ms-24 -mt-12">
      <NuxtImg class="h-16 w-16 md:h-16 md:w-16 animate-bounce-in-top duration-700"
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