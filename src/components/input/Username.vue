<template>
  <div class="field" v-if="!isHorizontal">
    <label class="label" :class="{ 'required': isRequired }" v-if="label">
      {{ label }}
    </label>
    <div class="control has-icons-right has-icons-left">
      <input type="text" class="input" ref="verticalInput"
             :class="checkClass"
             :placeholder="placeholder"
             :required="isRequired"
             :disabled="isDisabled"
             :readonly="isReadonly"
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
  <div class="field is-horizontal" v-if="isHorizontal">
    <div class="field-label is-small">
      <label class="detail-label" :class="{ 'required': isRequired }" v-if="label">
        {{ label }}
      </label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control has-icons-right has-icons-left">
          <input type="text" class="input is-small" ref="horizontalInput"
                 :class="checkClass"
                 :placeholder="placeholder"
                 :required="isRequired"
                 :disabled="isDisabled"
                 :readonly="isReadonly"
                 :value="modelValue"
                 @invalid="checkIfIsInvalid($event.target.value)"
                 @keyup="checkValue($event.target)"
                 @input="$emit('update:modelValue', $event.target.value)" />
          <span class="icon is-small is-left"><i class="fa-solid fa-user"></i></span>
          <span v-if="isRequired" class="icon is-small is-right"><i :class="{ 'fas fa-check': checkClass === 'is-success',
                                                                              'fas fa-exclamation-triangle': checkClass === 'is-danger',
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
    isReadonly: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isHorizontal: { type: Boolean, default: false },
    dupCheckTarget: { type: String, default: null },
    isLogin: { type: Boolean, default: false },
    modelValue: { type: String, default: '' }
  },
  setup(props) {
    const checkClass = ref('')
    const checkMsg = ref('')

    const verticalInput = ref()
    const horizontalInput = ref()

    let originUsername: string = ''
    let oldValue = ''

    const checkValue = (target: HTMLInputElement) => {
      const value: string = target.value
      // ????????? ??????????????? class, msg ?????????
      if (_.isEmpty(value)) {
        checkClass.value = ''
        checkMsg.value = ''
        // validity ?????????
        target.setCustomValidity('')
        return
      }
      // ????????? ?????? ??????
      if (props.isLogin) {
        if (!utils.validator.checkUsername(value)) {
          checkClass.value = 'is-danger'
          checkMsg.value = '??????, ????????????, ???????????? 4~15?????? ??????????????????'
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
          checkMsg.value = '??????, ????????????, ???????????? 4~15?????? ??????????????????'
          target.setCustomValidity('username invalid')
          oldValue = value
          return
        }
      }
      // ????????? ????????????
      if (props.dupCheckTarget && value.length >= 4) {
        // ?????? ???????????? ?????? ?????? ??????
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
          checkMsg.value = isExists ? '?????? ?????? ?????? ??????????????????' : '????????? ??? ?????? ??????????????????'
          isExists ? target.setCustomValidity('duplicated username') : target.setCustomValidity('')
        })
      }
    }

    const checkIfIsInvalid = (value: string) => {
      checkClass.value = 'is-danger'
      if (_.isEmpty(value)) {
        checkMsg.value = '???????????? ??????????????????'
      }
    }

    const focusin = () => {
      setTimeout(() => {
        if (props.isHorizontal) horizontalInput.value.focus()
        else verticalInput.value.focus()
      })
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
      verticalInput,
      horizontalInput,
      focusin,
      checkValue,
      checkIfIsInvalid
    }
  }
})
</script>
