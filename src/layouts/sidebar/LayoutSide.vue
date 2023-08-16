<script setup lang="ts">
import LayoutMenuItem from './LayoutMenuItem.vue'
import { useLayoutStore } from '@/stores/layout'
import { computed } from 'vue'

const store = useLayoutStore()
const collapseWidth = computed(() => (store.collapse ? ' w-20' : 'w-64'))
</script>

<template>
  <nav
    class="fixed top-0 left-0 h-screen py-3 px-4 transition-all duration-300 ease-in border-r overflow-y-auto"
    :class="collapseWidth"
  >
    <div class="mt-16">
      <ul class="">
        <layout-menu-item v-for="route in store.asyncRoutes" :menu="route"></layout-menu-item>
      </ul>
    </div>
  </nav>
</template>
<style scoped></style>
