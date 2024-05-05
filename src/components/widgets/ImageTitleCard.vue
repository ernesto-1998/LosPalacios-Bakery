<template>
  <div class="card-container">
    <img :src="props.category.image" alt="Food categories" />
    <div class="title-wrapper">
      <span>{{ props.category.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
declare interface IProps {
  image: string
  title: string
}

const props = defineProps<{ category: IProps }>()
</script>

<style scoped>
.card-container {
  height: 100%;
  position: relative;
  border-radius: var(--main-border-radius);
  background-position: center;
  overflow: hidden;
  transition: 0.4s ease-in-out;
}

.card-container:hover {
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
  transition: 0.4s ease-in-out;
}

.card-container:hover img {
  transform: scale(1.3) rotate(-4deg);
}

.title-wrapper {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.3rem 0;
  text-align: center;
  background-color: var(--third-color);
  /* backdrop-filter: blur(10px); */
}

.title-wrapper > span {
  font-family: var(--title-font-family);
  font-size: 2rem;
  margin: auto;
}
</style>
