<script setup>
const {pageTitle, breadcrumb, cover, emoji, icon, status, error} = defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
  breadcrumb: {
    type: Array,
    required: false,
    default: []
  },
  cover: {
    type: String,
    required: false,
    default: null,
  },
  emoji: {
    type: String,
    default: null,
    required: false,
  },
  icon: {
    type: String,
    default: null,
    required: false,
  },
  status: {
    type: String,
    required: false,
    default: null
  },
  error: {
    type: Object,
    required: false,
    default: null
  }
})
</script>
<template>
  <article class="flex flex-col relative">
    <slot name="header">
      <ArticleHeader :icon
                     :emoji
                     :cover
                     :pageTitle/>
    </slot>
    <section class="container flex flex-col gap-2 mx-auto p-2 md:px-24 min-h-80">
      <slot name="breadcrumb">
        <ArticleBreadcrumb :breadcrumb/>
      </slot>
      <slot name="title">
        <div class="flex flex-col md:flex-row space-between">
          <ArticleTitle>{{ pageTitle }}</ArticleTitle>
          <ArticleShareBox/>
        </div>
      </slot>
      <WidgetsError :error v-if="error"/>
      <WidgetsLoader v-if="status === 'pending'"/>
      <div class="mt-3 min-h-svh md:p-4" v-else>
        <slot></slot>
      </div>
    </section>
  </article>
</template>