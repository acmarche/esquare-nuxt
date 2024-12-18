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
  if (property.type === 'mention') {
      return property[property.type]['plain_text']
  }
  return property[property.type]['rich_text']
})
const color = ref(null)

function getColor(text) {
  color.value = extractColor(text)
  if (color.value != false) {
    return color
  } else {
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
               :class="['inline-block',isFillOut(text) ? 'buttonFillOut':'',isBold(text) ? 'font-semibold' : '',isItalic(text) ? 'italic' : '', underline(text) ? 'underline':'',strikethrough(text) ? 'line-through':'']"
               :style="[getColor(text) ? 'color:' + color : '']"
               :target="hasLink(text) ? '_blank' : '_self'"
               :href="text.text?.link?.url"
               v-if="text != null">
      {{ text.text?.content ?? '' }}
    </component>
  </template>
</template>
<style>
.buttonFillOut {
  @media (min-width: 768px) {
    @apply mx-1 rounded-md bg-esquare-yellow px-3.5 py-2.5 text-center font-semibold text-white hover:text-white text-lg shadow-sm hover:bg-esquare-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-500
   }
}
</style>