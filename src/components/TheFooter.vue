<template>
  <footer>
    <div class="footer-body">
      <TitleList :object="objetList.list1" />
      <TitleList :object="objetList.list2" />
      <TitleList :object="objetList.list3" />
      <TitleList :object="objetList.list4" />
    </div>
    <div class="bottom-section">
      <p class="bottom-section_text">
        Copyright Los Palacios 2024. Designed by <span>Ernesto Magaña</span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import TitleList from '@/components/widgets/TitleList.vue'

const objetList = {
  list1: {
    title: 'Nosotros',
    items: ['Misión y Visión', 'Nuestros valores', 'Nuestra historia']
  },
  list2: {
    title: 'Contacto',
    items: ['Información de contacto', 'Redes sociales']
  },
  list3: {
    title: 'Pedidos',
    items: ['Politicas de pedidos', 'Productos disponibles']
  },
  list4: {
    title: 'Productos',
    items: ['Pastelería', 'Panadería', 'Repostería', 'Cafetería', 'Boquitas']
  }
}
</script>

<style scoped>
footer {
  min-height: fit-content;
  background-color: var(--second-color);
  position: relative;
  margin-top: var(--mt);
}

.footer-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem;
  gap: 1.5rem;
}

.bottom-section {
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  padding: 0.2rem 0;
  font-family: var(--text-font-family);
}

.bottom-section_text {
  text-align: center;
}

.bottom-section_text > span {
  font-weight: 800;
}
</style>
