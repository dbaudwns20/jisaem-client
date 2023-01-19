<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control has-icons-left has-icons-right">
      <input type="password" name="password" class="input"
             :class="checkClass"
             :required="isRequired"
             :placeholder="placeholder"
             v-model="inputValue"
             @input="$emit('update:modelValue', $event.target.value)"
             @invalid="checkIfIsInvalid($event.target)"
             @keyup="checkOnPasswordRule($event.target.value)">
      <span class="icon is-small is-left"><i class="fa-solid fa-lock"></i></span>
      <span class="icon is-small is-right"><i :class="{ 'fas fa-check': checkClass === 'is-success',
                                                        'fas fa-exclamation-triangle': checkClass === 'is-danger',
                                                        '': checkClass === ''}"></i></span>
      <p class="help" :class="checkClass">
        {{ checkMsg }}
      </p>
    </div>
    <div class="control has-icons-left has-icons-right" v-if="!isLogin">
      <input type="password" name="passwordConfirm" class="input"
             :class="checkConfirmClass"
             placeholder="비밀번호를 확인해주세요"
             :required="isRequired"
             v-model="confirmPassword"
             @invalid="checkIfIsInvalid($event.target)"
             @keyup="doConfirmPassword($event.target.value)">
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
import Validator from "@/utils/validator"

export default defineComponent({
  name: "Password",
  props: {
    label: { type: String, default: "Password" },
    placeholder: { type: String, default: "비밀번호를 입력해 주세요" },
    isRequired: { type: Boolean, default: false },
    isLogin: { type: Boolean, default: true }
  },
  setup(props) {
    const checkClass = ref('')
    const checkMsg = ref('')
    const checkConfirmClass = ref('')
    const checkConfirmMsg = ref('')
    const inputValue = ref('')
    const confirmPassword = ref('')

    /**
     * 입력한 값이 비밀번호 규칙에 충족하는지 체크
     * @param input
     */
    const checkOnPasswordRule = (input: string): void => {
      if (input.length == 0) {
        checkMsg.value = ""
        checkClass.value = ""
        return
      }
      if (Validator.checkPassword(input)) {
        checkMsg.value = props.isLogin ? "" : "사용가능한 비밀번호 입니다"
        checkClass.value = props.isLogin ? "" : 'is-success'
      } else {
        checkMsg.value = "영문자, 숫자, 특수문자를 포함 최소 8~20자로 입력해주세요"
        checkClass.value = 'is-danger'
      }
    }

    /**
     * 비밀번호 확인
     * @param input
     */
    const doConfirmPassword = (input: string): void => {
      if (input.length == 0) {
        checkConfirmMsg.value = ""
        checkConfirmClass.value = ""
        return
      }
      if (input == inputValue.value) {
        checkConfirmMsg.value = "비밀번호가 일치합니다."
        checkConfirmClass.value = 'is-success'
      } else {
        checkConfirmMsg.value = "비밀번호가 일치하지 않습니다"
        checkConfirmClass.value = 'is-danger'
      }
    }

    /**
     * 값이 입력되었는지 체크
     */
    const checkIfIsInvalid = (target: HTMLInputElement) => {
      if (!props.isRequired) return
      if (target.name === 'password') {
        checkMsg.value = "비밀번호를 입력해주세요"
        checkClass.value = 'is-danger'
      } else {
        checkConfirmMsg.value = "비밀번호를 확인해주세요"
        checkConfirmClass.value = 'is-danger'
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
