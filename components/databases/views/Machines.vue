<script setup>
const config = useRuntimeConfig()
const {
  status,
  data,
  error
} = databaseComposeGet(config.public.NOTION_MACHINES_DATABASE_ID)
</script>
<template>
  <section>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <WidgetsTitle>Les machines du FabLab</WidgetsTitle>
      <div class="grid grid-cols-2 gap-2">
        <DatabasesViewsMachineItem v-for="machine in data?.pages ?? []" :key="machine.id" :machine/>
      </div>
    </div>
  </section>
</template>