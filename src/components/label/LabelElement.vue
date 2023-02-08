<template>
  <span class="tag is-medium is-rounded" ref="label">{{ name }}</span>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import utils from "@/utils/utils"

const props = defineProps(['params'])

const label = ref(null)
const name = ref(props.params.data.name)
const color = ref(props.params.data.color)

onMounted(() => {
  // 텍스트 컬러 설정
  label.value.style.backgroundColor = color.value
  label.value.style.color = utils.getTextColor(color.value)
})
</script>
