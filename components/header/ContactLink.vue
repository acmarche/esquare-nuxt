<script setup>
const mobileMenu = defineModel('mobileMenu', {type: Boolean, default: false})
</script>
<template>
    <div class="flex flex-row rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400">
      <div class="flex items-center pl-1">
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
             aria-hidden="true">
          <defs fill="#0067a1"/>
          <path d="m56,12v10l-24,12-24-12v-10h48ZM8,26.47v25.53h48v-25.53l-24,12-24-12Z" fill="#0067a1"/>
        </svg>
      </div>
      <NuxtLink to="/contact"
                id="search"
                @click.prevent="mobileMenu = false"
                class="text-lg block py-1.5 px-2 text-gray-900 font-Oswald">
        Contactez-nous
      </NuxtLink>
    </div>
</template>