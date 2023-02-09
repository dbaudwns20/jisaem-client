<template>
  <span class="tag is-rounded" :class="size" ref="label">{{ name }}</span>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import utils from "@/utils/utils"
import _ from "lodash";

const props = defineProps({
  params: { type: Object },
  size: { type: String, default: 'is-medium' }
})
const label = ref()
const data = props.params.data
const name = ref(_.isEmpty(data.name) ? '레이블' : data.name)
const color = ref(data.color)
const size = props.size

onMounted(() => {
  // 텍스트 컬러 설정
  label.value.style.backgroundColor = color.value
  label.value.style.color = utils.getTextColor(color.value)
})
</script>
