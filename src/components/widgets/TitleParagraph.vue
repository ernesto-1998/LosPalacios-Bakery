<template>
  <div class="title-paragraph_wrapper">
    <h3>{{ props.title }}</h3>
    <p>{{ props.paragraph }}</p>
  </div>
</template>

<script setup lang="ts">
declare interface IProps {
  title: string
  paragraph: string
}

const props = defineProps<IProps>()
</script>

<style scoped>
.title-paragraph_wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--card-color);
  clip-path: polygon(50% 0%, 100% 9%, 100% 100%, 0 100%, 0 9%);
}

h3 {
  position: relative;
  font-family: var(--title-font-family);
  font-size: 2rem;
  text-align: center;
  padding-bottom: 0.5rem;
}

h3::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 0.2rem;
  top: 100%;
  left: 0;
  background-color: var(--text-color);
}

p {
  font-family: var(--text-font-family);
  font-weight: 700;
  font-size: 1rem;
}
</style>
