<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control has-icons-left has-icons-right">
      <input type="email" class="input"
             :class="checkClass"
             :required="isRequired"
             :readonly="isReadOnly"
             :disabled="isDisabled"
             :placeholder="placeholder"
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
             @invalid="checkIfIsInvalid"
             @keyup="checkEmailRule($event.target.value)">
      <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
      <span class="icon is-small is-right"><i :class="{ 'fas fa-check': checkClass === 'is-success',
                                                        'fas fa-exclamation-triangle': checkClass === 'is-danger',
                                                        '': checkClass === ''}"></i></span>
    </div>
    <p class="help" :class="checkClass">
      {{ checkMsg }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Validator from "@/utils/validator"

export default defineComponent({
  name: "Email",
  props: {
    label: { type: String, default: "Email" },
    placeholder: { type: String, default: "이메일을 입력해주세요" },
    isRequired: { type: Boolean, default: false },
    isReadOnly: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isLogin: { type: Boolean, default: true },
    modelValue: { type: String, default: "" }
  },
  setup(props, context) {
    const inputValue = ref(props.modelValue)
    const checkClass = ref('')
    const checkMsg = ref('')

    /**
     * 입력한 값이 이메일 규칙에 충족하는지 체크
     * @param input
     */
    const checkEmailRule = (input: string): void => {
      if (input.length == 0) {
        checkMsg.value = ""
        checkClass.value = ""
        return
      }
      if (Validator.checkEmail(input)) {
        checkMsg.value = props.isLogin ? "" : "사용가능한 이메일 입니다"
        checkClass.value = props.isLogin ? "" : 'is-success'
      } else {
        checkMsg.value = "유효한 이메일이 아닙니다"
        checkClass.value = 'is-danger'
      }
    }

    /**
     * 값이 입력되었는지 체크
     */
    const checkIfIsInvalid = (): void => {
      if (!props.isRequired) return
      checkMsg.value = props.placeholder
      checkClass.value = 'is-danger'
    }

    return {
      inputValue,
      checkMsg,
      checkClass,
      checkEmailRule,
      checkIfIsInvalid
    }
  }
})
</script>
