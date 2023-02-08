<template>
  <div class="field has-addons" tabindex="-1">
    <div class="control">
      <button ref="colorRandomButton" class="button" @click="setRandomCode">
        <span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>
      </button>
    </div>
    <div class="control is-fullwidth">
      <input class="input" ref="input" type="text" v-model="color" />
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from "vue"
import utils from "@/utils/utils"

import _ from 'lodash'

export default defineComponent({
  name: "LabelColor",
  props: {
    params: {type: Object , required: true}
  },
  setup(props) {
    const input = ref()
    const colorRandomButton = ref()
    const color = ref(props.params.data.color)
    const data = props.params.data
    // **AG-Grid 셀 편집 컴포넌트에 값을 리턴할 함수**
    const getValue = () => {
      return color.value
    }
    // **AG-Grid 셀 편집 focusIn 함수**
    const focusIn = () => {
      input.value.focus()
      input.value.select()
    }
    function setRandomCode() {
      color.value = utils.generateRandomColorCode()
      data.color = color.value
      data.isDisabled = _.isEmpty(color.value)
      props.params.api.refreshCells(props.params)
      setColor()
    }
    function setColor() {
      colorRandomButton.value.style.backgroundColor = color.value
      colorRandomButton.value.style.color = utils.getTextColor(color.value)
    }
    onMounted(() => {
      setColor()
    })
    return {
      input,
      colorRandomButton,
      color,
      getValue,
      focusIn,
      setRandomCode
    }
  }
})
</script>
