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
  font-family: var(--text-font-family);
  font-weight: 900;
  font-size: var(--base-subtitle-size-lg);
  color: var(--card-color);
  text-align: center;
}

@media (width <= 640px) {
  .subtitle {
    font-size: var(--base-subtitle-size-sm);
  }
}
</style>
