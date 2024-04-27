<template>
  <ul class="social-networks">
    <li v-for="(item, index) in props.icons" :key="index">
      <a :href="item.url"
        ><base-icon :icon-name="item.name" :size="item.size" :color="item?.color"
      /></a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue'
import type { IIcon } from '@/interfaces/IIcon'

const props = defineProps({
  icons: Array<IIcon>
})
</script>

<style scoped>
.social-networks {
  list-style: none;
  display: flex;
  gap: 1rem;
}
</style>
