<script setup>
import {IconUsers, IconCoinEuro} from '@tabler/icons-vue'
defineProps({
  properties: {
    type: Object,
    required: true,
  }
})
</script>
<template>
  <section class="grid grid-cols-1 items-center md:grid-cols-[auto_18rem_1fr] my-4">
    <IconUsers class="hidden md:block mr-2"/>
    <span class="font-semibold text-esquare-green-light prose md:prose-xl">Nombre de personnes</span>
    <span class="font-semibold">{{ properties.NbrPersonnes.rich_text[0].text.content }}</span>
    <IconCoinEuro class="hidden md:block mr-2"/>
    <span class="font-semibold text-esquare-green-light prose md:prose-xl">Prix la journée (HTVA)</span>
    <span class="font-semibold">{{ properties.TarifFullDay.number }} €</span>
    <IconCoinEuro class="hidden md:block mr-2"/>
    <span class="font-semibold text-esquare-green-light prose md:prose-xl">Prix la demi journée (HTVA)</span>
    <span class="font-semibold">{{ properties.TarifHalfDay.number }} €</span>
  </section>
</template>