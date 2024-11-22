<script setup>
const {property} = defineProps({
  property: {
    type: Object,
    required: true
  }
})
</script>
<template>
{{ property }}
  { "plain_text": "mailto:pcs@marche.be", "href": "mailto:pcs@marche.be", "annotations": { "bold": false, "italic":
  false, "strikethrough": false, "underline": false, "code": false, "color": "default" }, "type": "mention", "mention":
  { "type": "link_mention" } }

</template>