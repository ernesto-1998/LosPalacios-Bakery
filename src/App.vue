<template>
  <TopSection />
  <TheHeader />
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </KeepAlive>
  </RouterView>
  <TheFooter />
</template>
<script setup lang="ts">
import TopSection from '@/components/TopSection.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style scoped>
/* Transition */

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-out;
}

.slide-enter-to {
  position: relative;
  right: 0;
}

.slide-enter-from {
  position: relative;
  right: -100%;
}

.slide-leave-to {
  position: relative;
  left: -100%;
}

.slide-leave-from {
  position: relative;
  left: 0;
}
</style>
