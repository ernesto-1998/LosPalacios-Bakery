<template>
  <ul class="social-networks">
    <li class="social-networks_link" v-for="(item, index) in props.icons" :key="index">
      <a :href="item.url"
        ><BaseIcon :icon-name="item.name" :size="item.size" :color="item?.color"
      /></a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/global/BaseIcon.vue'
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

.social-networks_link {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
