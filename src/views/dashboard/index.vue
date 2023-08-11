<script setup lang="ts">
import { getChartData, message } from '@/apis/login'
import * as echarts from 'echarts'
import { watchEffect } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
const chartContainer = ref(null)
onMounted(() => {
  const charts = echarts.init(chartContainer.value)
  // Draw the chart
  getChartData().then((res) => charts.setOption(res))
})

const hello_message = ref<string>()
watchEffect(async () => {
  message().then((res) => (hello_message.value = res.message))
})
</script>
<template>
  <div class="">
    <div>message from server: {{ hello_message }}</div>
    <div ref="chartContainer" style="width: 100%; height: 400px"></div>
  </div>
</template>
<style scoped></style>
