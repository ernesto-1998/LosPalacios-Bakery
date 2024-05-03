<template>
  <h2 :style="{ fontSize: props.fontSize }">{{ props.title }}</h2>
</template>

<script setup lang="ts">
type FontUnitType = `${string}rem` | `${string}px` | `${string}em`

interface IProps {
  title: string
  fontSize: FontUnitType
}

const props = defineProps<IProps>()
</script>

<style scoped>
h2 {
  font-family: var(--text-font-family);
  font-weight: 900;
  color: var(--card-color);
  text-align: center;
}
</style>
