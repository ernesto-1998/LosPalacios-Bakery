<template>
  <h2 class="subtitle">{{ props.title }}</h2>
  <!-- :style="{ fontSize: props.fontSize }" -->
</template>

<script setup lang="ts">
// type FontUnitType = `${string}rem` | `${string}px` | `${string}em`

interface IProps {
  title: string
  // fontSize: FontUnitType
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
