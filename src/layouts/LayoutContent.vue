<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'
import LayoutHeader from './LayoutHeader.vue'
import { computed } from 'vue'
const store = useLayoutStore()
const collapseMargin = computed(() =>
  store.collapse ? 'ml-20 w-[calc(100% - 5rem)]' : 'ml-64 w-[calc(100% - 16rem)]'
)
</script>

<template>
  <div class="flex flex-col h-screen transition-all duration-300 ease-in" :class="collapseMargin">
    <layout-header></layout-header>
    <div class="w-full overflow-x-auto p-3 m-auto ">
      <router-view v-slot="{ Component, route }">
        <transition mode="out-in" name="fade" appear>
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
