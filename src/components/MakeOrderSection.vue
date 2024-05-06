<template>
  <section class="make-order_wrapper">
    <BaseSubTitle :title="TITLE.toLocaleUpperCase()" />
    <div class="maker-order_body">
      <div class="icon-wrapper">
        <BaseIcon :icon-name="'hand'" :size="270" />
      </div>
      <div class="make-order_text">
        <span class="make-order_title">Deseas hacer un pedido!? Con mucho gusto!</span>
        <div class="button-wrapper">
          <BaseButton :style="'btnAction'" :title="'Hacer pedido'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseSubTitle from '@/components/global/BaseSubTitle.vue'
import BaseIcon from '@/components/global/BaseIcon.vue'
import BaseButton from './global/BaseButton.vue'

const TITLE = 'Haz tu pedido'
</script>

<style scoped>
.make-order_wrapper {
  margin-top: var(--mt);
  padding: var(--px-section-lg);
}

.maker-order_body {
  margin-top: var(--mt-section-body);
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.make-order_text {
  border-radius: var(--main-border-radius);
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
}

.make-order_title {
  font-family: var(--title-font-family);
  font-weight: 700;
  font-size: 2.7rem;
  text-align: center;
}

@media (640px < width < 1024px) {
  .make-order_wrapper {
    padding: var(--px-section-md);
  }

  .make-order_title {
    font-size: 2rem;
  }
}

@media (width <= 640px) {
  .make-order_wrapper {
    padding: var(--px-section-sm);
  }
  .maker-order_body {
    grid-template-columns: 1fr;
  }

  .make-order_title {
    font-size: 1.7rem;
  }
}
</style>
