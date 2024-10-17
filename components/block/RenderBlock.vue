<script setup>
defineProps({
  property: {
    type: Object,
    required: true,
    default: null
  }
})
</script>
<template>
  <div v-if="property">
    <BlockMultiSelect :property="property" v-if="property.type === 'multi_select'"/>
    <BlockPhoneNumber :property="property" v-else-if="property.type === 'phone_number'"/>
    <BlockEmail :property="property" v-else-if="property.type === 'email'"/>
    <BlockTitle :property v-else-if="property.type === 'title'"/>
    <BlockUnsupported :property v-else/>
  </div>
</template>