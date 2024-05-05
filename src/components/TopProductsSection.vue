<template>
  <section class="top-products_wrapper">
    <BaseSubTitle :title="TITLE.toLocaleUpperCase()" />
    <div class="top-products_body">
      <ul class="cards-list">
        <li v-for="(product, index) in topProducts" :key="index">
          <ProductCard :product="product" />
        </li>
      </ul>
      <div class="button-wrapper">
        <BaseButton :style="'btnAction'" :title="'Productos'" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import BaseSubTitle from '@/components/global/BaseSubTitle.vue'
import ProductCard from './widgets/ProductCard.vue'
import BaseButton from './global/BaseButton.vue'

import products from '@/json/products.json'
import type { IProduct } from '@/interfaces/IProduct'

const TITLE = 'Los más vendidos'

const topProducts = computed<Array<IProduct>>(() => {
  return products.sort((a: IProduct, b: IProduct) => b.score - a.score).slice(0, 3)
})
</script>

<style scoped>
.top-products_wrapper {
  margin-top: var(--mt);
  padding: var(--px-section-lg);
}

.top-products_body {
  margin-top: var(--mt-section-body);
}

.cards-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.2rem;
}

@media (640px > width < 1024px) {
  .top-products_wrapper {
    padding: var(--px-section-md);
  }
}

@media (width <= 640px) {
  .top-products_wrapper {
    padding: var(--px-section-sm);
  }
}
</style>
