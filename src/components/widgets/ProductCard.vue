<template>
  <div class="card-container">
    <div class="img-wrapper">
      <img class="image" :src="props.product.image" alt="" />
    </div>
    <div class="card-body">
      <span>{{ props.product.name }}</span>
      <div class="score-price_wrapper">
        <ul class="score-list">
          <li
            class="score-item"
            v-for="(intem, index) in Array.from({ length: props.product.score })"
            :key="index"
          >
            <BaseIcon :size="'24'" :icon-name="'star'" />
          </li>
        </ul>
        <span>${{ props.product.price }}</span>
      </div>
    </div>
    <div class="tag-wrapper">
      {{ props.product.category }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '@/interfaces/IProduct'

import BaseIcon from '@/components/global/BaseIcon.vue'

const props = defineProps<{ product: IProduct }>()
</script>

<style scoped>
.card-container {
  position: relative;
  font-family: var(--text-font-family);
  background-color: var(--third-color);
  transition: 0.3s ease-in-out;
}

.card-container:hover {
  cursor: pointer;
  transform: translateY(-0.6rem);
}

.img-wrapper {
  height: 250px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
}

.card-body {
  background-color: var(--third-color);
  padding: 0.3rem 0.7rem;
}

span {
  font-family: var(--title-font-family);
  font-size: 1.7rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.score-price_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.score-price_wrapper > span {
  font-family: var(--text-font-family);
  font-size: 2rem;
}

.score-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag-wrapper {
  padding: 0.3rem 0.7rem;
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--logo-font-family);
  font-size: 1.4rem;
  background-color: var(--main-color);
  transform: translateX(-0.7rem) rotate(-7grad);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}
</style>
