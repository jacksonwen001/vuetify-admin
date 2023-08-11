<script setup lang="ts">
import { computed, ref } from 'vue'

import type { RouteType } from '@/router/routes'
import LayoutSubMenuItem from './LayoutSubMenuItem.vue'
import { useLayoutStore } from '@/stores/layout'
import router from '@/router'
import { watchEffect } from 'vue'

const props = defineProps<{ menu: RouteType }>()

const store = useLayoutStore()
const sidebarCollapse = computed(() => store.collapse && 'opacity-0')
const menuCollapse = ref(true)
const iconStyle = computed(() =>
  menuCollapse.value ? 'transform  rotate-0' : 'transform  rotate-180'
)
const handleSubMenuCollapse = () => {
  menuCollapse.value = !menuCollapse.value
}

const active = ref('')
watchEffect(async () => {
  if (router.currentRoute.value.matched.find((it) => it.name === props.menu.name))
    active.value = 'bg-gray-500 text-gray-50'
  else active.value = ''
})
</script>
<template>
  <div
    class="cursor-pointer flex gap-3 items-center p-3 rounded-lg hover:bg-gray-300 hover:text-gray-800"
    :class="active"
    @click="handleSubMenuCollapse"
  >
    <span><v-icon :icon="menu.meta.icon"></v-icon></span>
    <div class="flex items-center grow">
      <span class="grow" :class="sidebarCollapse">{{ menu.meta.title }}</span>
      <span class="transition-all duration-300 ease-linear" :class="iconStyle">
        <v-icon icon="mdi-chevron-down"></v-icon>
      </span>
    </div>
  </div>

  <transition-group>
    <div
      v-for="sub in menu.children"
      v-if="!store.collapse && !menuCollapse"
      class="ml-5 text-sm p-1"
    >
      <layout-sub-menu-item
        v-if="sub.meta.affix"
        :key="sub.path"
        :menu="sub"
      ></layout-sub-menu-item>
    </div>
  </transition-group>

  <v-menu open-on-hover location="end" activator="parent" v-if="store.collapse">
    <div class="bg-gray-600 text-gray-50 ml-3 rounded-lg text-xs">
      <div v-for="sub in menu.children">
        <layout-sub-menu-item
          v-if="sub.meta.affix"
          :key="sub.path"
          :menu="sub"
        ></layout-sub-menu-item>
      </div>
    </div>
  </v-menu>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
