<template>
  <section class="top-products_wrapper">
    <BaseSubTitle :title="TITLE.toLocaleUpperCase()" :font-size="'3.5rem'" />
    <ul class="cards-wrapper">
      <li v-for="(product, index) in topProducts" :key="index">
        <ProductCard :product="product" />
      </li>
    </ul>
    <div class="button-wrapper">
      <BaseButton :style="'btnAction'" :title="'Productos'" />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--mt);
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 2rem;
  gap: 3rem;
}
</style>
