<template>
  <component :is="iconComponent" :size="props.size" :color="props.color" />
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'

import { store } from './icon.store'

const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'black'
  }
})

const iconComponent = computed<Component | null>(() => {
  return store[props.iconName] || null
})
</script>
