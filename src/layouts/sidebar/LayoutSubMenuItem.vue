<script setup lang="ts">
import type { RouteType } from '@/router/routes'
import { useLayoutStore } from '@/stores/layout'
import { computed } from 'vue'
defineProps<{ menu: RouteType }>()
const store = useLayoutStore()
const isCollapse = computed(() => store.collapse && 'opacity-0')
</script>
<template>
  <router-link
    :to="{ name: menu.name }"
    class="flex items-center gap-1 min-w-[60px] rounded p-3 hover:bg-gray-300 hover:text-gray-800"
    active-class="font-bold"
  >
    <v-icon :icon="menu.meta?.icon"></v-icon>{{ menu.meta.title }}</router-link
  >
</template>
<style scoped></style>
