<script setup lang="ts">
import { computed, ref } from 'vue'

import type { RouteType } from '@/router/routes'
import { useLayoutStore } from '@/stores/layout'

defineProps<{ menu: RouteType }>()
const store = useLayoutStore()
const sidebarCollapse = computed(() => store.collapse && 'opacity-0')

</script>
<template>
  <router-link
    :to="{ name: menu.name }"
    class="flex gap-3 items-center p-3 rounded-lg hover:bg-gray-300 hover:text-gray-800"
    active-class="bg-gray-500 text-gray-50"
  >
    <span>
      <v-icon :icon="menu.meta.icon"></v-icon>
    </span>
    <span :class="sidebarCollapse">
      {{ menu.meta.title }}
    </span>
  </router-link>
  <v-menu open-on-hover v-if="store.collapse" activator="parent" location="end">
    <div class="bg-gray-600 text-gray-50 ml-3 rounded-lg p-4 text-xs">
      {{ menu.meta.title }}
    </div>
  </v-menu>
</template>
