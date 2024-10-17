<script setup>
const {property} = defineProps({
  property: {
    type: Object,
    required: true
  }
})
const texts = computed(() => {
  console.log(property)
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
  return color
}

function hasLink(text) {
  return text.href !== null
}

</script>
<template>
  <template v-for="text in texts" :key="text" v-if="texts && texts.length > 0">
    <component :is="hasLink(text) ? 'a' : 'span'"
               :class="[isBold(text) ? 'font-semibold' : '',isItalic(text) ? 'italic' : '', underline(text) ? 'underline':'',strikethrough(text) ? 'line-through':'']"
               :style="[getColor(text) ? 'color:' + color : '']"
               :href="text.text.link?.url">
      {{ text.text.content }}
    </component>
  </template>
</template>