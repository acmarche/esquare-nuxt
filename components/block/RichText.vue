<script setup>
const {property} = defineProps({
  property: {
    type: Object,
    required: true
  }
})
const texts = computed(() => {
  if (property.type === 'title') {
    if (property[property.type]['rich_text']) {
      return property[property.type]['rich_text']
    }
    return property[property.type]
  }
  if (property.type === 'rich_text') {
    return property['rich_text']
  }
  return property[property.type]['rich_text']
})
const color = ref(null)

function getColor(text) {
  color.value = extractColor(text)
  if (color.value != 'false'){
    return color
  }
  else {
    return null
  }
}

function hasLink(text) {
  return text.href !== null
}

function isFillOut(text) {
  return text.href?.includes('forms.fillout.com')
}
</script>
<template>
  <template v-for="text in texts" :key="text" v-if="texts && texts.length > 0">
    <component :is="hasLink(text) ? 'a' : 'span'"
               :class="[isFillOut(text) ? 'buttonFillOut':'',isBold(text) ? 'font-semibold' : '',isItalic(text) ? 'italic' : '', underline(text) ? 'underline':'',strikethrough(text) ? 'line-through':'']"
               :style="[getColor(text) ? 'color:' + color : '']"
               :target="hasLink(text) ? '_blank' : '_self'"
               :href="text.text.link?.url">
      {{ text.text.content }}
    </component>
  </template>
</template>
<style>
.buttonFillOut {
  @media (min-width: 768px) {
    @apply block text-left border border-esquare-yellow font-medium rounded-lg m-2 px-6 py-2 shadow-md hover:border-esquare-blue hover:text-esquare-black hover:shadow-lg transition duration-200
  }
}
</style>