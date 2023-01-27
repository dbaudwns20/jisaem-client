<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control has-icons-right" :class="{ 'has-icons-left': hasIconLeft }">
      <input type="text" class="input"
             :class="checkClass"
             :placeholder="placeholder"
             :required="isRequired"
             :disabled="isDisabled"
             :readonly="isReadOnly"
             :value="modelValue"
             @invalid="checkIfIsInvalid"
             @keyup="checkValue"
             @input="$emit('update:modelValue', $event.target.value)" />
      <span v-if="hasIconLeft" class="icon is-small is-left"><i :class="iconsLeft"></i></span>
      <span v-if="isRequired" class="icon is-small is-right"><i :class="{ 'fas fa-exclamation-triangle': checkClass === 'is-danger',
                                                                          '': checkClass === ''}"></i></span>
    </div>
    <p class="help" :class="checkClass">
      {{ checkMsg }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "Text",
  props: {
    label: { type: String, default: "Text" },
    placeholder: { type: String, default: "" },
    isRequired: { type: Boolean, default: false },
    isReadOnly: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    iconsLeft: { type: String, default: "" },
    modelValue: { type: String, default: "" }
  },
  setup(props) {
    const inputValue = ref(props.modelValue)
    const checkClass = ref('')
    const checkMsg = ref('')
    const hasIconLeft = ref(props.iconsLeft.length > 0)

    const checkValue = (): void => {
      if (!props.isRequired) return
      checkMsg.value = ''
      checkClass.value = ''
    }

    const checkIfIsInvalid = () => {
      if (!props.isRequired) return
      checkMsg.value = props.placeholder
      checkClass.value = 'is-danger'
    }

    return {
      inputValue,
      checkClass,
      checkMsg,
      hasIconLeft,
      checkValue,
      checkIfIsInvalid
    }
  }
})
</script>
