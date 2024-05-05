<template>
  <section class="mision-vision_wrapper">
    <BaseSubTitle :title="TITLE.toLocaleUpperCase()" />
    <div class="mision-vision_body">
      <div class="icon-button_wrapper">
        <BaseIcon :icon-name="'hand'" :size="250" />
        <BaseButton :style="'btnSecond'" :title="BUTTON_TITLE" />
      </div>
      <TitleParagraph
        :paragraph="VISION_MISION.VISION.paragraph"
        :title="VISION_MISION.VISION.title"
      />
      <TitleParagraph
        :paragraph="VISION_MISION.MISION.paragraph"
        :title="VISION_MISION.MISION.title"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import TitleParagraph from '@/components/widgets/TitleParagraph.vue'
import BaseSubTitle from '@/components/global/BaseSubTitle.vue'
import BaseIcon from '@/components/global/BaseIcon.vue'
import BaseButton from '@/components/global/BaseButton.vue'

const TITLE = 'Nuestros valores'

const BUTTON_TITLE = 'Conocenos'

const VISION_MISION = {
  VISION: {
    title: 'VISIÓN',
    paragraph:
      'Ser reconocidos como la panadería de referencia en calidad y tradición, ofreciendo productos frescos y deliciosos que deleiten a nuestros clientes y fortalezcan los lazos comunitarios.'
  },
  MISION: {
    title: 'MISIÓN',
    paragraph:
      'En Los Palacios, nos dedicamos a elaborar pan y productos de repostería excepcionales, utilizando ingredientes de la más alta calidad y técnicas artesanales acompañando los momentos especiales de nuestros clientes con autenticidad y pasión por el buen pan.'
  }
}
</script>

<style scoped>
.mision-vision_wrapper {
  margin-top: var(--mt);
  padding: var(--px-section-lg);
}

.mision-vision_body {
  display: grid;
  margin-top: var(--mt-section-body);
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
}

.icon-button_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

@media (640px < width < 1024px) {
  .mision-vision_wrapper {
    padding: var(--px-section-md);
  }
}

@media (width <= 640px) {
  .mision-vision_wrapper {
    padding: var(--px-section-sm);
  }
}
</style>
