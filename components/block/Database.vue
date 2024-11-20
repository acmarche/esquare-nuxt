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
    <DatabasesViewsMachines v-else-if="property.id==='1444c8f5-1876-80d5-8946-c12002c03c1c'"/>
    <DatabasesViewsCoworkingMembers v-else-if="property.id==='11f4c8f5-1876-8039-91ce-e32596eddb29'"/>
    <DatabasesViewsECube v-else-if="property.id='239a0ed3-9f2c-4527-b013-c519cbc3d906'" />
    <div v-else>Base de données intégrée non trouvée</div>
  </section>
</template>