<template>
  <div class="field">
    <label class="label" :class="{ 'required': isRequired }" v-if="label">
      {{ label }}
    </label>
    <div class="control has-icons-right has-icons-left">
      <input type="text" class="input"
             :class="checkClass"
             :placeholder="placeholder"
             :required="isRequired"
             :disabled="isDisabled"
             :readonly="isReadOnly"
             :value="modelValue"
             @invalid="checkIfIsInvalid($event.target.value)"
             @keyup="checkValue($event.target)"
             @input="$emit('update:modelValue', $event.target.value)" />
      <span class="icon is-small is-left"><i class="fa-solid fa-user"></i></span>
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
import { defineComponent, ref, watch } from 'vue'
import authGrpcService from '@/services/auth.grpc.service'
import utils from '@/utils/utils'
import * as _ from 'lodash'

export default defineComponent({
  name: 'Username',
  props: {
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    isRequired: { type: Boolean, default: false },
    isReadOnly: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    dupCheckTarget: { type: String, default: null },
    isLogin: { type: Boolean, default: false },
    modelValue: { type: String, default: '' }
  },
  setup(props) {
    const checkClass = ref('')
    const checkMsg = ref('')
    let originUsername: string = ''
    let oldValue = ''

    const checkValue = (target: HTMLInputElement) => {
      const value: string = target.value
      // 필드가 비어있으면 class, msg 초기화
      if (_.isEmpty(value)) {
        checkClass.value = ''
        checkMsg.value = ''
        // validity 초기화
        target.setCustomValidity('')
        return
      }
      // 아이디 규직 체크
      if (props.isLogin) {
        if (!utils.validator.checkUsername(value)) {
          checkClass.value = 'is-danger'
          checkMsg.value = '한글, 특수문자, 공백없이 4~15자로 입력해주세요'
          target.setCustomValidity('username invalid')
          return
        } else {
          checkClass.value = ''
          checkMsg.value = ''
          target.setCustomValidity('')
        }
      } else {
        if (!utils.validator.checkUsername(value)) {
          checkClass.value = 'is-danger'
          checkMsg.value = '한글, 특수문자, 공백없이 4~15자로 입력해주세요'
          target.setCustomValidity('username invalid')
          oldValue = value
          return
        }
      }
      // 아이디 중복체크
      if (props.dupCheckTarget && value.length >= 4) {
        // 기존 아이디와 같은 값인 경우
        if (originUsername === value) {
          checkClass.value = ''
          checkMsg.value = ''
          target.setCustomValidity('username invalid')
          oldValue = value
          return
        } else if (oldValue === value) return
        const func = props.dupCheckTarget === 'user' ? authGrpcService.usernameDuplicationCheck(value) : authGrpcService.parentUsernameDuplicationCheck(value)
        func.then((isExists) => {
          oldValue = value
          checkClass.value = isExists ? 'is-danger': 'is-success'
          checkMsg.value = isExists ? '이미 사용 중인 아이디입니다' : '사용할 수 있는 아이디입니다'
          isExists ? target.setCustomValidity('duplicated username') : target.setCustomValidity('')
        })
      }
    }

    const checkIfIsInvalid = (value: string) => {
      checkClass.value = 'is-danger'
      if (_.isEmpty(value)) {
        checkMsg.value = '아이디를 입력해주세요'
      }
    }

    watch(() => props.modelValue, (newVal: string, preVal: string) => {
        if (_.isEmpty(originUsername) && _.isEmpty(preVal) && !_.isEmpty(newVal)) {
          originUsername = newVal
        }
      }
    )

    return {
      checkClass,
      checkMsg,
      checkValue,
      checkIfIsInvalid
    }
  }
})
</script>
