<script setup>
const {property} = defineProps({
  property: {
    type: Array,
    required: true
  }
})
const texts = computed(() => {
  return property
})
const color = ref(null)

function getColor(text) {
  color.value = extractColor(text)
  if (color.value != 'false')
    return color
  else return false
}

function hasLink(text) {
  return text.href !== null
}
</script>
<template>
  <template v-for="text in texts" :key="text" v-if="texts && texts.length > 0">
    <component :is="hasLink(text['text'][0]) ? 'a' : 'span'"
               :class="[isBold(text['text'][0]) ? 'font-semibold' : '',isItalic(text['text'][0]) ? 'italic' : '', underline(text['text'][0]) ? 'underline':'',strikethrough(text['text'][0]) ? 'line-through':'']"
               :style="[getColor(text['text'][0]) ? 'color:' + color : '']"
               :href="text.text.link?.url">
      {{ text.text[0]['text']['content'] }}
    </component>
  </template>
</template>