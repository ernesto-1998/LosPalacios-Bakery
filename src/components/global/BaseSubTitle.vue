<template>
  <h2 class="subtitle">{{ props.title }}</h2>
</template>

<script setup lang="ts">
interface IProps {
  title: string
}

const props = defineProps<IProps>()
</script>

<style scoped>
.subtitle {
  position: relative;
  font-family: var(--text-font-family);
  font-weight: 800;
  font-size: var(--base-subtitle-size-lg);
  color: var(--main-color);
  text-align: center;
}

@media (width <= 640px) {
  .subtitle {
    font-size: var(--base-subtitle-size-sm);
  }
}
</style>
