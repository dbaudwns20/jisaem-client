<template>
  <div class="field">
    <label class="label" :class="{ 'required': isRequired }" v-if="label">
      {{ label }}
    </label>
    <div class="control has-icons-right" :class="{ 'has-icons-left': hasIconLeft }">
      <input type="text" class="input" id="username"
             :class="checkClass"
             :placeholder="placeholder"
             :required="isRequired"
             :disabled="isDisabled"
             :readonly="isReadOnly"
             :value="modelValue"
             @invalid="checkIfIsInvalid($event.target.value)"
             @keyup="checkValue($event.target)"
             @input="$emit('update:modelValue', $event.target.value)" />
      <span v-if="hasIconLeft" class="icon is-small is-left"><i :class="iconsLeft"></i></span>
      <span v-if="isRequired" class="icon is-small is-right"><i :class="{ 'fas fa-check': checkClass === 'is-success',
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
import AuthGrpcService from "@/services/auth.grpc.service"
import utils from "@/utils/utils"
import * as _ from 'lodash'

export default defineComponent({
  name: "Username",
  props: {
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    isRequired: { type: Boolean, default: false },
    isReadOnly: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isDupCheck: { type: Boolean, default: false },
    isLogin: { type: Boolean, default: true },
    iconsLeft: { type: String, default: "" },
    modelValue: { type: String, default: "" }
  },
  setup(props) {
    const inputValue = ref(props.modelValue)
    const checkClass = ref('')
    const checkMsg = ref('')
    const hasIconLeft = ref(props.iconsLeft.length > 0)
    let oldValue = ''

    const checkValue = async (target: HTMLInputElement) => {
      const value = target.value
      // validity 초기화
      target.setCustomValidity("")
      // 필드가 비어있으면 class, msg 초기화
      if (_.isEmpty(value)) {
        checkMsg.value = ''
        checkClass.value = ''
        return
      }
      // 한글은 사용불가
      if (utils.validator.checkKorean(value)) {
        checkClass.value = 'is-danger'
        checkMsg.value = '한글은 사용할 수 없습니다'
        target.setCustomValidity('invalid username')
        return
      }
      // 이전값과 동일하면 불가 [트래픽 방지]
      if (value == oldValue) {
        target.setCustomValidity('username already checked')
        return
      }
      // 아이디 중복체크를 할 경우
      // 4자 이상 30자 이하 경우만 체크 [user 테이블 username varchar(30)]
      if (props.isDupCheck && value.length > 3 && value.length < 31) {
        // 이전 값 set
        oldValue = value
        let res = await AuthGrpcService.usernameDuplicationCheck(value)
        checkClass.value = res ? 'is-danger': 'is-success'
        checkMsg.value = res ? '이미 사용 중인 아이디입니다' : '사용할 수 있는 아이디입니다'
        res ? target.setCustomValidity('duplicated username') : target.setCustomValidity("")
      }
    }

    const checkIfIsInvalid = (value: string) => {
      checkClass.value = 'is-danger'
      if (_.isEmpty(value)) {
        checkMsg.value = '아이디를 입력해주세요'
      }
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
