<script setup>
import {IconBug} from '@tabler/icons-vue';

const {error} = defineProps({
  error: {
    type: Object,
    required: false,
    default: null
  },
})
</script>
<template>
  <div class="flex flex-row items-center text-red-600 p-4 m-4">
    <IconBug class="h-8 w-8 flex-shrink-0 mr-3" aria-hidden="true"/>
    <span>{{ error?.data?.error?.message ?? error?.message }}</span>
    <span v-if="error === null">Erreur inconue</span>
  </div>
</template>