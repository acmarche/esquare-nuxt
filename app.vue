<script setup lang="ts">
const config = useRuntimeConfig()
const title = ref('')
useHead({
  link: [
    {rel: 'apple-touch-icon', type: 'image/png', href: `${config.public.NUXT_APP_BASE_URL}favicon/apple-touch-icon.png`, sizes: '180x180'},
    {rel: 'icon', type: 'image/png', href: `${config.public.NUXT_APP_BASE_URL}favicon/favicon-48x48.png`, sizes: '48x48'},
    {rel: 'icon', type: 'image/svg+xml', href: `${config.public.NUXT_APP_BASE_URL}favicon/favicon.svg`},
    {rel: 'manifest', type: 'image/png', href: `${config.public.NUXT_APP_BASE_URL}favicon/site.webmanifest`}
  ],
})
useSeoMeta({
  titleTemplate: (title) => `${title} | E-Square - Marche-en-Famenne - Tiers lieu`,
  ogTitle: 'E-Square',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://esquare.marche.be/new/images/batimentaerien.jpg',
  ogUrl: '',
  ogLocale: 'fr_FR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'string',
  twitterDescription: 'string',
  twitterImage: 'string',
  applicationName: 'E-Square',
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>