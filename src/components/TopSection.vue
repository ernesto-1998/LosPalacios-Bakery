<template>
  <div class="top-container">
    <list-social-icons :icons="iconsObject" />
  </div>
</template>

<script setup lang="ts">
import ListSocialIcons from './ListSocialIcons.vue'

import type { IIcon } from '@/interfaces/IIcon'

const ICON_SIZE = 24
const ICON_COLOR = 'white'

const iconsObject: Array<IIcon> = [
  {
    name: 'instagram',
    size: ICON_SIZE,
    color: ICON_COLOR,
    url: '#'
  },
  {
    name: 'facebook',
    size: ICON_SIZE,
    color: ICON_COLOR,
    url: '#'
  },
  {
    name: 'twitter',
    size: ICON_SIZE,
    color: ICON_COLOR,
    url: '#'
  }
]
</script>

<style scoped>
.top-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--third-color);
  padding: 0.3rem 1.5rem;
}
</style>
