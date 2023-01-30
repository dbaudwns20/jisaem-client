<template>
  <div class="field">
    <label class="label" :class="{ 'required': isRequired }" v-if="label">
      {{ label }}
    </label>
    <div class="control has-icons-left has-icons-right">
      <input type="email" class="input"
             :class="checkClass"
             :required="isRequired"
             :readonly="isReadOnly"
             :disabled="isDisabled"
             :placeholder="placeholder"
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
             @invalid="checkIfIsInvalid($event.target.value)"
             @keyup="checkEmailRule($event.target)">
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
import utils from "@/utils/utils"
import * as _ from 'lodash'

export default defineComponent({
  name: "Email",
  props: {
    label: { type: String, default: "" },
    placeholder: { type: String, default: "이메일을 입력해주세요" },
    isRequired: { type: Boolean, default: false },
    isReadOnly: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    modelValue: { type: String, default: "" }
  },
  setup(props, context) {
    const inputValue = ref(props.modelValue)
    const checkClass = ref('')
    const checkMsg = ref('')

    /**
     * 입력한 값이 이메일 규칙에 충족하는지 체크
     * @param target
     */
    const checkEmailRule = (target: HTMLInputElement): void => {
      const value = target.value
      // 필드가 비어있으면 class, msg 초기화
      if (_.isEmpty(value)) {
        checkMsg.value = ''
        checkClass.value = ''
        return
      }
      if (!utils.validator.checkEmail(value)) {
        checkMsg.value = "유효한 이메일이 아닙니다"
        checkClass.value = 'is-danger'
        target.setCustomValidity('invalid email')
      } else {
        checkMsg.value = "사용가능한 이메일 입니다"
        checkClass.value = 'is-success'
        target.setCustomValidity('')
      }
    }

    /**
     * 값이 입력되었는지 체크
     */
    const checkIfIsInvalid = (value: string): void => {
      checkClass.value = 'is-danger'
      if (_.isEmpty(value)) {
        checkMsg.value = '이메일을 입력해주세요'
      }
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
