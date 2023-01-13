<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="email"
             :class="{ 'is-success': checkClass === 'success',
                       'is-danger': checkClass === 'danger',
                       '': checkClass === ''}"
             :required="isRequired"
             :placeholder="placeholder"
             v-model="inputValue"
             @input="$emit('update:modelValue', $event.target.value)"
             @invalid="checkIfIsInvalid"
             @keyup="checkEmailRule($event.target.value)">
      <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
      <span class="icon is-small is-right"><i :class="{ 'fas fa-check': checkClass === 'success',
                                                        'fas fa-exclamation-triangle': checkClass === 'danger',
                                                        '': checkClass === ''}"></i></span>
    </div>
    <p class="help" :class="{ 'is-success': checkClass === 'success',
                              'is-danger': checkClass === 'danger',
                              '': checkClass === ''}">
      {{ checkMsg }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

const EMAIL_RULE = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

export default defineComponent({
  name: "Email",
  props: {
    label: { type: String, default: "Email" },
    placeholder: { type: String, default: "이메일을 입력해주세요" },
    isRequired: { type: Boolean, default: false },
    isLogin: { type: Boolean, default: true }
  },
  setup(props, context) {
    const checkClass = ref('')
    const checkMsg = ref('')
    const inputValue = ref('')

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
      if (EMAIL_RULE.test(input)) {
        checkMsg.value = props.isLogin ? "" : "사용가능한 이메일 입니다"
        checkClass.value = props.isLogin ? "" : 'success'
      } else {
        checkMsg.value = "유효한 이메일이 아닙니다"
        checkClass.value = 'danger'
      }
    }

    const checkIfIsInvalid = ()=> {
      if (!props.isRequired) return
      checkMsg.value = "이메일을 입력해주세요"
      checkClass.value = 'danger'
    }

    return {
      checkMsg,
      checkClass,
      inputValue,
      checkEmailRule,
      checkIfIsInvalid
    }
  }
})
</script>
