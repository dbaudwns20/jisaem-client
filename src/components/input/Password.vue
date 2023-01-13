<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="password"
             :class="{ 'is-success': checkClass === 'success',
                       'is-danger': checkClass === 'danger',
                       '': checkClass === ''}"
             :required="isRequired"
             :placeholder="placeholder"
             v-model="inputValue"
             @input="$emit('update:modelValue', $event.target.value)"
             @invalid="checkIfIsInvalid"
             @keyup="checkOnPasswordRule($event.target.value)">
      <span class="icon is-small is-left"><i class="fa-solid fa-lock"></i></span>
      <span class="icon is-small is-right"><i :class="{ 'fas fa-check': checkClass === 'success',
                                                        'fas fa-exclamation-triangle': checkClass === 'danger',
                                                        '': checkClass === ''}"></i></span>
      <p class="help" :class="{ 'is-success': checkClass === 'success',
                                'is-danger': checkClass === 'danger',
                                '': checkClass === ''}">
        {{ checkMsg }}
      </p>
    </div>
    <div class="control has-icons-left has-icons-right" v-if="!isLogin">
      <input class="input" type="password"
             :class="{ 'is-success': checkConfirmClass === 'success',
                       'is-danger': checkConfirmClass === 'danger',
                       '': checkConfirmClass === ''}"
             placeholder="비밀번호를 확인해주세요"
             :required="isRequired"
             v-model="confirmPassword"
             @invalid="checkIfIsInvalid"
             @keyup="doConfirmPassword($event.target.value)">
      <span class="icon is-small is-left"><i class="fa-solid fa-lock"></i></span>
      <span class="icon is-small is-right"><i :class="{ 'fas fa-check': checkConfirmClass === 'success',
                                                        'fas fa-exclamation-triangle': checkConfirmClass === 'danger',
                                                        '': checkConfirmClass === ''}"></i></span>
      <p class="help" :class="{ 'is-success': checkConfirmClass === 'success',
                                'is-danger': checkConfirmClass === 'danger',
                                '': checkConfirmClass === ''}">
        {{ checkConfirmMsg }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const PASSWORD_RULE = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/)

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
      if (PASSWORD_RULE.test(input)) {
        checkMsg.value = props.isLogin ? "" : "사용가능한 비밀번호 입니다"
        checkClass.value = props.isLogin ? "" : 'success'
      } else {
        checkMsg.value = "영문자, 숫자, 특수문자를 포함 최소 8~20자로 입력해주세요"
        checkClass.value = 'danger'
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
        checkConfirmClass.value = 'success'
      } else {
        checkConfirmMsg.value = "비밀번호가 일치하지 않습니다"
        checkConfirmClass.value = 'danger'
      }
    }

    const checkIfIsInvalid = () => {
      checkMsg.value = "비밀번호를 입력해주세요"
      checkClass.value = 'danger'
      checkConfirmMsg.value = "비밀번호를 확인해주세요"
      checkConfirmClass.value = 'danger'
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
