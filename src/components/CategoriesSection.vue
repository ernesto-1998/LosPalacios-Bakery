<template>
  <section class="categories-wrapper">
    <BaseSubTitle :title="TITLE.toLocaleUpperCase()" />
    <ul class="categories-list">
      <li class="categories-item" v-for="(category, index) in categories" :key="index">
        <a><ImageTitleCard :category="category" /></a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import BaseSubTitle from '@/components/global/BaseSubTitle.vue'
import ImageTitleCard from '@/components/widgets/ImageTitleCard.vue'

import categories from '@/json/categories.json'

const TITLE = 'Nuestras Especialidades'
</script>

<style scoped>
.categories-wrapper {
  margin-top: var(--mt);
  padding: var(--px-section-lg);
}

.categories-list {
  margin-top: var(--mt-section-body);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

@media (width >= 768px) {
  .categories-list {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 250px);
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
  }

  .categories-item:nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
  }
  .categories-item:nth-child(2) {
    grid-area: 1 / 3 / 3 / 6;
  }
  .categories-item:nth-child(3) {
    grid-area: 2 / 1 / 4 / 3;
  }
  .categories-item:nth-child(4) {
    grid-area: 4 / 1 / 5 / 3;
  }
  .categories-item:nth-child(5) {
    grid-area: 3 / 3 / 5 / 6;
  }
}

@media (640px < width <= 1024px) {
  .categories-wrapper {
    padding: var(--px-section-md);
  }
}

@media (width <= 640px) {
  .categories-wrapper {
    padding: var(--px-section-sm);
  }

  .categories-item {
    height: 350px;
  }
}
</style>
