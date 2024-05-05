<template>
  <header>
    <div class="logo">
      <BaseIcon :icon-name="'logo'" :size="48" />
      <span>Los Palacios</span>
    </div>
    <input type="checkbox" name="" id="check" />
    <label for="check" class="icons">
      <i class="bx bx-menu" id="menu-icon"></i>
      <i class="bx bx-x" id="close-icon"></i>
    </label>

    <nav class="nav-list" id="nav-list">
      <a href="#" class="nav-list_link">Inicio</a>
      <a href="#" class="nav-list_link">Nosotros</a>
      <a href="#" class="nav-list_link">Productos</a>
      <a href="#" class="nav-list_link">Contacto</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/global/BaseIcon.vue'
</script>

<style scoped>
header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
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
  font-family: var(--logo-font-family);
  font-weight: 400;
  font-size: 30px;
}

.logo > span {
  transform: rotate(-4deg);
}

.icons {
  display: none;
  font-size: 2.8rem;
  cursor: pointer;
}

#check {
  display: none;
}

.nav-list {
  display: flex;
  gap: 1.7rem;
  font-family: var(--text-font-family);
  font-size: 1.15rem;
  font-optical-sizing: auto;
  font-weight: 700;
}

.nav-list_link {
  position: relative;
}

@media (width < 1024px) {
  header {
    padding: 1.2rem 3rem;
  }
}

@media (width > 769px) {
  .nav-list_link::after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 0;
    width: 0;
    height: 0.2rem;
    background-color: var(--card-color);
    transition: width 0.3s ease;
  }

  .nav-list_link:hover {
    color: var(--third-color);
  }

  .nav-list_link:hover::after {
    width: 100%;
  }
}

@media (width <= 768px) {
  .icons {
    display: inline-flex;
  }

  #check:checked ~ .icons #menu-icon {
    display: none;
  }

  .icons #close-icon {
    display: none;
  }

  #check:checked ~ .icons #close-icon {
    display: block;
  }

  .nav-list {
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    height: 0;
    background-color: var(--main-color);
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    transition: 0.5s ease;
  }

  #check:checked ~ .nav-list {
    height: 11rem;
  }

  .nav-list_link {
    text-align: center;
  }
}

@media (width < 640px) {
  header {
    padding: 1.2rem 1rem;
  }
}
</style>
