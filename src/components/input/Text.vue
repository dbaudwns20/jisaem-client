<template>
  <div class="field" v-if="!isHorizontal">
    <label class="label" :class="[{ 'required': isRequired }, { 'is-small': isSmall }]" v-if="label">
      {{ label }}
    </label>
    <div class="control has-icons-right" :class="{ 'has-icons-left': hasIconLeft }">
      <input type="text" class="input"
             :class="[checkClass, { 'is-small': isSmall }]"
             :placeholder="placeholder"
             :required="isRequired"
             :disabled="isDisabled"
             :readonly="isReadonly"
             :value="modelValue"
             @invalid="checkIfIsInvalid"
             @keyup="checkValue"
             @input="$emit('update:modelValue', $event.target.value)" />
      <span v-if="hasIconLeft" class="icon is-small is-left"><i :class="iconsLeft"></i></span>
      <span v-if="isRequired" class="icon is-small is-right"><i :class="{ 'fas fa-exclamation-triangle': checkClass === 'is-danger',
                                                                          '': checkClass === ''}"></i></span>
    </div>
    <p class="help" :class="checkClass" :style="{ 'font-size: 10px': isSmall }">
      {{ checkMsg }}
    </p>
  </div>
  <div class="field is-horizontal" v-if="isHorizontal">
    <div class="field-label is-small">
      <label class="detail-label" :class="{ 'required': isRequired }" v-if="label">
        {{ label }}
      </label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control has-icons-right" :class="{ 'has-icons-left': hasIconLeft }">
          <input type="text" class="input is-small"
                 :class="checkClass"
                 :placeholder="placeholder"
                 :required="isRequired"
                 :disabled="isDisabled"
                 :readonly="isReadonly"
                 :value="modelValue"
                 @invalid="checkIfIsInvalid"
                 @keyup="checkValue"
                 @input="$emit('update:modelValue', $event.target.value)"/>
          <span v-if="hasIconLeft" class="icon is-small is-left"><i :class="iconsLeft"></i></span>
          <span v-if="isRequired" class="icon is-small is-right"><i :class="{ 'fas fa-exclamation-triangle': checkClass === 'is-danger',
                                                                              '': checkClass === ''}"></i></span>
        </div>
        <p class="help" :class="checkClass" style="font-size: 10px;">
          {{ checkMsg }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "Text",
  props: {
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    isRequired: { type: Boolean, default: false },
    isReadonly: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isHorizontal: { type: Boolean, default: false },
    isSmall: { type: Boolean, default: false },
    iconsLeft: { type: String, default: "" },
    modelValue: { type: String, default: "" }
  },
  setup(props) {
    const checkClass = ref('')
    const checkMsg = ref('')
    const hasIconLeft = ref(props.iconsLeft.length > 0)

    const checkValue = (): void => {
      if (!props.isRequired) return
      checkMsg.value = ''
      checkClass.value = ''
    }

    const checkIfIsInvalid = (): void => {
      if (!props.isRequired) return
      checkMsg.value = props.placeholder
      checkClass.value = 'is-danger'
    }

    return {
      checkClass,
      checkMsg,
      hasIconLeft,
      checkValue,
      checkIfIsInvalid
    }
  }
})
</script>
