<script setup lang="ts">
import router from '@/router'
import { ref, watchEffect } from 'vue'

type BreadCrumbType = { title: string; disabled?: boolean; href: string }
const breadcrumbs = ref<BreadCrumbType[]>([])

watchEffect(() => {
  breadcrumbs.value = []
  const routes = router.currentRoute.value.matched
  routes.forEach((route) => {
    const breadcrumb: BreadCrumbType = {
      title: route.meta.title!.toString() || route.name!.toString() || '',
      disabled: route.name?.toString() === router.currentRoute.value.name?.toString(),
      href: route.path
    }
    breadcrumbs.value.push(breadcrumb)
  })
})
</script>
<template>
  <v-breadcrumbs :items="breadcrumbs" class="text-sm"></v-breadcrumbs>
</template>
