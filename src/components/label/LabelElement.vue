<template>
  <span class="tag is-rounded" :class="size" ref="label">
    {{ name }}
    <button v-if="isDeletable" @click.prevent="removeLabel" class="delete-label" tabindex="-1"></button>
  </span>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import utils from "@/utils/utils"
import _ from "lodash"

const emits = defineEmits(['remove-label'])

const props = defineProps({
  params: { type: Object, required: true },
  isDeletable: { type: Boolean, default: false },
  size: { type: String, default: 'is-medium' }
})

const label = ref()
const data = props.params.data
const name = ref(_.isEmpty(data.name) ? '레이블' : data.name)
const color = ref(data.color)

// 레이블 제거
const removeLabel = (event: any) => {
  emits('remove-label', data.id)
}

onMounted(() => {
  // 텍스트 컬러 설정
  label.value.style.backgroundColor = color.value
  label.value.style.color = utils.getTextColor(color.value)
})
</script>
