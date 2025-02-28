<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <RouterView />
  <VueQueryDevtools />
</template>

<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
</script>
