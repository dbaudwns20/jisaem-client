<template>
  <div class="field">
    <label class="label" :class="{ 'required': isRequired }" v-if="label">
      {{ label }}
    </label>
    <div class="control has-icons-left has-icons-right">
      <input type="password" name="password" class="input"
             :class="checkClass"
             :required="isRequired"
             :disabled="isDisabled"
             :placeholder="placeholder"
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
             @invalid="checkIfIsInvalid($event.target)"
             @keyup="checkOnPasswordRule($event.target)">
      <span class="icon is-small is-left"><i class="fa-solid fa-lock"></i></span>
      <span class="icon is-small is-right"><i :class="{ 'fas fa-check': checkClass === 'is-success',
                                                        'fas fa-exclamation-triangle': checkClass === 'is-danger',
                                                        '': checkClass === ''}"></i></span>
      <p class="help" :class="checkClass">
        {{ checkMsg }}
      </p>
    </div>
  </div>
  <div class="field">
    <div class="control has-icons-left has-icons-right" v-if="!isLogin">
      <input type="password" name="passwordConfirm" class="input"
             :class="checkConfirmClass"
             placeholder="비밀번호를 확인해주세요"
             :required="isRequired"
             v-model="confirmPassword"
             @invalid="checkIfIsInvalid($event.target)"
             @keyup="doConfirmPassword($event.target)">
      <span class="icon is-small is-left"><i class="fa-solid fa-lock"></i></span>
      <span class="icon is-small is-right"><i :class="{ 'fas fa-check': checkConfirmClass === 'is-success',
                                                        'fas fa-exclamation-triangle': checkConfirmClass === 'is-danger',
                                                        '': checkConfirmClass === ''}"></i></span>
      <p class="help" :class="checkConfirmClass">
        {{ checkConfirmMsg }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import utils from "@/utils/utils"
import _ from 'lodash'

export default defineComponent({
  name: "Password",
  props: {
    label: { type: String, default: "" },
    placeholder: { type: String, default: "비밀번호를 입력해 주세요" },
    isRequired: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isLogin: { type: Boolean, default: true },
    modelValue: { type: String, default: "" }
  },
  setup(props) {
    const checkClass = ref('')
    const checkMsg = ref('')
    const checkConfirmClass = ref('')
    const checkConfirmMsg = ref('')
    const inputValue = ref(props.modelValue)
    const confirmPassword = ref('')

    /**
     * 입력한 값이 비밀번호 규칙에 충족하는지 체크
     * @param target
     */
    const checkOnPasswordRule = (target: HTMLInputElement) => {
      const value = target.value
      if (_.isEmpty(value)) {
        checkMsg.value = ""
        checkClass.value = ""
        return
      }
      if (!utils.validator.checkPassword(value)) {
        checkMsg.value = "영문자, 숫자, 특수문자를 포함 최소 8~20자로 입력해주세요"
        checkClass.value = 'is-danger'
        target.setCustomValidity("invalid password")
      } else {
        checkMsg.value = props.isLogin ? "" : "사용가능한 비밀번호 입니다"
        checkClass.value = props.isLogin ? "" : 'is-success'
        inputValue.value = value
        target.setCustomValidity("")
      }
    }

    /**
     * 비밀번호 확인
     * @param target
     */
    const doConfirmPassword = (target: HTMLInputElement): void => {
      const value = target.value
      if (_.isEmpty(value)) {
        checkConfirmMsg.value = ""
        checkConfirmClass.value = ""
        return
      }
      if (value === inputValue.value) {
        checkConfirmMsg.value = "비밀번호가 일치합니다"
        checkConfirmClass.value = 'is-success'
        target.setCustomValidity("")
      } else {
        checkConfirmMsg.value = "비밀번호가 일치하지 않습니다"
        checkConfirmClass.value = 'is-danger'
        target.setCustomValidity("invalid confirm password")
      }
    }

    /**
     * 값이 입력되었는지 체크
     */
    const checkIfIsInvalid = (target: HTMLInputElement) => {
      if (target.name === 'password') {
        checkClass.value = 'is-danger'
        if (_.isEmpty(target.value)) {
          checkMsg.value = '비밀번호를 입력해주세요'
        }
      } else {
        checkConfirmClass.value = 'is-danger'
        if (_.isEmpty(target.value)) {
          checkConfirmMsg.value = "비밀번호를 확인해주세요"
        }
      }
    }

    return {
      checkClass,
      checkMsg,
      inputValue,
      checkConfirmClass,
      checkConfirmMsg,
      confirmPassword,
      checkOnPasswordRule,
      doConfirmPassword,
      checkIfIsInvalid
    }
  }
})
</script>
