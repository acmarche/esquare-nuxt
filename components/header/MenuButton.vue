<script setup>
const mobileMenu = defineModel('mobileMenu', {type: Boolean, default: false})
</script>
<template>
      <button type="button"
              @click.prevent="mobileMenu = !mobileMenu"
              class="relative inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-esquare-yellow"
              aria-controls="mobile-menu" aria-expanded="false">
        <span class="absolute -inset-0.5"></span>
        <span class="sr-only">Open menu</span>
        <!--
          Icon when menu is closed.
          Menu open: "hidden", Menu closed: "block"
        -->
        <svg class="h-11 w-11"
             :class="mobileMenu ? 'hidden':'block'"
             fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
        <!--
          Icon when menu is open.
          Menu open: "block", Menu closed: "hidden"
        -->
        <svg class="h-11 w-11"
             :class="mobileMenu ? 'block':'hidden'"
             fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
</template>