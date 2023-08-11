<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'
import { computed } from 'vue'
import avatar from '@/assets/avatar.gif'
import { removeAccessToken } from '@/utils/token'
import router from '@/router'
import BreadCrumb from './BreadCrumb.vue'

const store = useLayoutStore()
const handleCollapse = () => store.toggleCollapse()
const icon = computed(() => {
  return store.collapse ? 'mdi-format-align-left' : 'mdi-format-align-right'
})
const logout = () => {
  removeAccessToken()
  router.replace({ name: 'Login' })
}


</script>
<template>
  <header class="flex items-center border-b pl-2 h-16">
    <div class="grow flex items-center">
      <v-icon @click="handleCollapse" start :icon="icon"></v-icon>
      <div>
        <bread-crumb></bread-crumb>
      </div>
    </div>
    <div class="mr-10 space-x-5">
      <v-icon icon="mdi-logout" class="text-xs" @click="logout"></v-icon>
      <v-avatar :image="avatar"></v-avatar>
    </div>
  </header>
</template>
<style scoped></style>
