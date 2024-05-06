<template>
  <div class="title-list_wrapper">
    <h3>{{ props.object.title }}</h3>
    <div class="separator"></div>
    <ul class="list-wrapper">
      <li v-for="(item, index) in props.object.items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
declare interface IProps {
  title: string
  items: Array<string>
}

const props = defineProps<{ object: IProps }>()
</script>
<style scoped>
.title-list_wrapper {
  max-width: 250px;
  padding: 10px 12px;
  font-family: var(--text-font-family);
  color: var(--layout-color);
}

.title-list_wrapper > h3 {
  font-family: var(--title-font-family);
}

.separator {
  width: 100%;
  height: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: var(--text-color);
}

.list-wrapper {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
}
</style>
