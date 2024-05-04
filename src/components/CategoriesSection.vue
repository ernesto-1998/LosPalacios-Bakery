<template>
  <section class="categories-wrapper">
    <BaseSubTitle :title="TITLE.toLocaleUpperCase()" :font-size="'3.5rem'" />
    <div class="categories-body"></div>
  </section>
</template>

<script setup lang="ts">
import BaseSubTitle from '@/components/global/BaseSubTitle.vue'

import categories from '@/json/categories.json'

const TITLE = 'Nuestras Especialidades'
</script>

<style scoped>
.categories-wrapper {
  margin-top: var(--mt);
}
</style>
