<template>
  <h1 :style="{ fontSize: props.fontSize }">{{ props.title }}</h1>
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
h1 {
  font-family: var(--title-font-family);
  font-weight: 900;
}
</style>
