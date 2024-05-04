<template>
  <button :class="buttonStyle">
    {{ props.title }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonStyleType = 'btnAction' | 'btnSecond'

interface IProps {
  title: string
  style: ButtonStyleType
}
const props = defineProps<IProps>()

const buttonStyle = computed(() => {
  return props.style
})
</script>

<style scoped>
button {
  padding: 0.4rem 3.2rem;
  font-family: var(--text-font-family);
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--text-color);
  max-width: fit-content;
}

button:hover {
  cursor: pointer;
}

.btnAction {
  background-color: var(--card-color);
  border-radius: var(--main-border-radius);
  border: none;
}

.btnSecond {
  background-color: var(--third-color);
  border: none;
}
</style>
@/const/button-styles
