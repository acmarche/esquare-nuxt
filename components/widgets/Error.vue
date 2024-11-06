<script setup>
import {IconBug} from '@tabler/icons-vue';

const {error} = defineProps({
  error: {
    type: Object,
    required: false,
    default: null
  },
})
console.log(JSON.stringify(error))
</script>
<template>
  <div class="flex flex-row items-center text-red-600 p-4 m-4" v-if="error">
    <IconBug class="h-8 w-8 flex-shrink-0 mr-3" aria-hidden="true"/>
    <span v-if="error.data.data">{{ error.data.data.message }}</span>
    <span v-else-if="error.data.message">{{ error?.data?.message }}</span>
    <span v-else>{{ error.statusMessage }}</span>
  </div>
</template>