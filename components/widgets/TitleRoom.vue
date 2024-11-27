<script setup>

</script>
<template>
  <h3 class="w-full max-w-full mb-2 line-after flex flex-wrap items-center font-bold prose lg:prose-xl text-2xl md:text-4xl text-esquare-yellow break-words whitespace-pre-wrap pt-1 pr-1 pl-1 m-0">
    <slot></slot>
  </h3>
</template>
<style>
h3.line-after:after {
  content: "";
  flex: 1;
  border: 1px solid #2362af;
  margin-inline-start: 0.5rem;
}
</style>