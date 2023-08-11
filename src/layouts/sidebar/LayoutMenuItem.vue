<script setup lang="ts">
import { computed, ref } from 'vue'

import type { RouteType } from '@/router/routes'

import LayoutMenuWithoutChildren from './LayoutMenuWithoutChildren.vue'
import LayoutMenuWithChildren from './LayoutMenuWithChildren.vue'

const props = defineProps<{ menu: RouteType }>()
const hasChildren = computed(() => props.menu.children?.find((it) => it.meta?.affix === true))
</script>

<template>
  <li class="w-full h-full flex flex-col mt-1">
    <layout-menu-with-children :menu="props.menu" v-if="hasChildren"></layout-menu-with-children>
    <layout-menu-without-children :menu="props.menu" v-else></layout-menu-without-children>
  </li>
</template>


