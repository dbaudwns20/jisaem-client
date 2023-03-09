<template>
  <div :class="params.labelClass">
    <span v-for="(label, idx) in params.data[params.target]" :key="idx">
      <LabelElement :params="{data: {name: label.labelInfo.name,
                                     color: label.labelInfo.color,
                                     id: label.labelInfo.id}}" :size="params.size" />
    </span>
  </div>
</template>

<script setup lang="ts">
import LabelElement from "@/components/label/LabelElement.vue"
const props = defineProps(['params', 'size', 'labelClass', 'target'])
</script>
