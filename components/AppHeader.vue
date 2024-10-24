<script setup>
const {
  status,
  data,
  error
} = menuComposeGet()
const mobileMenu = ref(false)
</script>
<template>
  <header
      class="grid gap-2 items-center gridArea bg-white/5 shadow my-2 mx-2 mb-2 top-0 backdrop-blur-md z-30">
    <NuxtLink to="/" @click.prevent="mobileMenu = false" class="flex items-center logoEsquare">
      <NuxtImg src="https://e-square.marche.be/new/images/EsquareLogoBlackWhite.png" alt="logo" id="logoEsquare"
               class="h-8 transition-all duration-500 tease-in-out animate-bouncejf md:h-16 w-auto"/>
    </NuxtLink>
    <div class="HeaderContact flex items-center justify-self-center">
      <HeaderContactLink v-model:mobile-menu="mobileMenu"/>
    </div>
    <div class="buttonMenu z-30 flex items-center justify-self-end">
      <HeaderMenuButton v-model:mobile-menu="mobileMenu"/>
    </div>
    <div class="social mx-auto flex flex-col items-end justify-around space-y-4">
      <HeaderSocialIconsLight svg-fill/>
    </div>
  </header>
</template>
<style>
.gridArea {
  grid-template-areas:
              "logo menu"
              "contact social";
}

/* md */
@media (min-width: 768px) {
  .gridArea {
    grid-template-columns: auto 1fr auto auto;
    grid-template-areas: "logo contact menu social";
  }
}

.logoEsquare {
  grid-area: logo;
}

.buttonMenu {
  grid-area: menu;
}

.HeaderContact {
  grid-area: contact;
}

.social {
  grid-area: social;
}
</style>