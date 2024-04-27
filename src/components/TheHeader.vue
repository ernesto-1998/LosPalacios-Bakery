<template>
  <header>
    <div class="logo">
      <base-icon :icon-name="'logo'" :size="48" />
      <span>Los Palacios</span>
    </div>
    <nav>
      <ul class="nav-list">
        <li><a href="#" class="nav-list_link">Nosotros</a></li>
        <li><a href="#" class="nav-list_link">Productos</a></li>
        <li><a href="#" class="nav-list_link">Contacto</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue'
</script>

<style scoped>
header {
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-color);
  padding: 1.2rem 5.5rem;
}

.logo {
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.8rem;
  background-color: var(--card-color);
  border-bottom-left-radius: var(--main-border-radius);
  border-bottom-right-radius: var(--main-border-radius);
  font-family: var(--logo-font-family);
  font-weight: 400;
  font-size: 30px;
}

.logo > span {
  transform: rotate(-4deg);
}

.nav-list {
  display: flex;
  gap: 1.7rem;
  font-family: var(--nav-font-family);
  font-optical-sizing: auto;
  font-weight: 700;
}

.nav-list_link {
  position: relative;
}

.nav-list_link::after {
  content: '';
  position: absolute;
  bottom: -0.8rem;
  left: 0;
  width: 0;
  height: 0.2rem;
  background-color: var(--extra-color);
  transition: width 0.3s ease;
}

.nav-list_link:hover {
  color: var(--third-color);
}

.nav-list_link:hover::after {
  width: 100%;
}
</style>
