<template>
  <section class="banner-wrapper">
    <div class="banner-card_wrapper">
      <BaseTitle :title="TITLE_KEYS.TITLE" :font-size="'3.5rem'" />
      <BaseButton :title="BUTTON_KEYS.TITLE" :style="'btnAction'" />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseTitle from '@/components/global/BaseTitle.vue'
import BaseButton from '@/components/global/BaseButton.vue'

const TITLE_KEYS = {
  TITLE: 'Los mejores productos del mercado!',
  FONT_SIZE: '3.5rem'
}
const BUTTON_KEYS: Record<string, string> = {
  TITLE: 'Productos',
  STYLE: 'btnAction'
}
</script>

<style scoped>
.banner-wrapper {
  background-image: url(/home/doughnuts1920.jpg);
  background-position: center;
  display: grid;
  grid-template-columns: 700px 1fr;
  height: 480px;
  padding: 1rem 2rem;
  overflow-y: auto;
}

.banner-card_wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (width < 1024px) {
  .banner-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
