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
    <BlockParagraph :property v-if="property.type === 'paragraph'"/>
    <BlockMultiSelect :property="property" v-else-if="property.type === 'multi_select'"/>
    <BlockPhoneNumber :property="property" v-else-if="property.type === 'phone_number'"/>
    <BlockEmail :property="property" v-else-if="property.type === 'email'"/>
    <BlockFiles :property="property.files" v-else-if="property.type === 'files'"/>
    <BlockRichText :property v-else-if="property.type === 'title' || property.type === 'rich_text'"/>    
    <BlockImage :property v-else-if="property.type === 'image'"/>
    <BlockHeading :property v-else-if="property.type?.includes('heading')"/>
    <BlockFile :property v-else-if="property.type === 'file'"/>
    <BlockVideo :property v-else-if="property.type === 'video'"/>
    <BlockBulletedListItem :property v-else-if="property.type === 'bulleted_list_item'"/>
    <BlockNumberedListItem :property v-else-if="property.type === 'numbered_list_item'"/>
    <BlockQuote :property v-else-if="property.type === 'quote'"/>
    <BlockDivider :property v-else-if="property.type === 'divider'"/>
    <BlockColumnList :property v-else-if="property.type === 'column_list'"/>
    <BlockCallout :property v-else-if="property.type === 'callout'"/>
    <BlockEmbed :property v-else-if="property.type === 'embed'"/>
    <BlockPdf :property v-else-if="property.type === 'pdf'"/>
    <BlockDatabase :property v-else-if="property.type === 'child_database'"/>
    <BlockChildPage :property v-else-if="property.type === 'child_page'"/>
    <BlockUnsupported :property v-else/>
  </div>
</template>