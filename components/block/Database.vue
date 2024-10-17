<script setup>
defineProps({
  property: {
    type: Object
  }
})
</script>
<template>
  <section>
    <DatabasesViewsContact v-if="property.id==='1064c8f5-1876-808e-a63b-d8a4db9c2c97'"/>
    <DatabasesViewsMachines v-else-if="property.id==='541f852e-8f72-4e3f-b1ba-19f34f329099'"/>
    <DatabasesViewsCoworkingMembers v-else-if="property.id==='11f4c8f5-1876-8039-91ce-e32596eddb29'"/>
    <div v-else>Base de données intégrée non trouvée</div>
  </section>
</template>