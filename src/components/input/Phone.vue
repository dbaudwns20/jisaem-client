<template>
  <div class="field" v-if="!isHorizontal">
    <label class="label" :class="{ 'required': isRequired }" v-if="label">
      {{ label }}
    </label>
    <div class="control has-icons-left has-icons-right">
      <input type="text" class="input"
             :class="checkClass"
             :required="isRequired"
             :readonly="isReadonly"
             :disabled="isDisabled"
             :placeholder="placeholder"
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
             @invalid="checkIfIsInvalid($event.target.value)"
             @keyup="checkPhoneRule($event.target)">
      <span class="icon is-small is-left"><i class="fa-solid fa-mobile"></i></span>
      <span class="icon is-small is-right"><i :class="{ 'fas fa-check': checkClass === 'is-success',
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
        <div class="control has-icons-left has-icons-right">
          <input type="text" class="input input is-small"
                 :class="checkClass"
                 :required="isRequired"
                 :readonly="isReadonly"
                 :disabled="isDisabled"
                 :placeholder="placeholder"
                 :value="modelValue"
                 @input="$emit('update:modelValue', $event.target.value)"
                 @invalid="checkIfIsInvalid($event.target.value)"
                 @keyup="checkPhoneRule($event.target)">
          <span class="icon is-small is-left"><i class="fa-solid fa-mobile"></i></span>
          <span class="icon is-small is-right"><i :class="{ 'fas fa-check': checkClass === 'is-success',
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
import { defineComponent, ref } from 'vue'
import utils from "@/utils/utils"
import * as _ from 'lodash'

export default defineComponent({
  name: "Phone",
  props: {
    label: { type: String, default: "" },
    placeholder: { type: String, default: "(-) ?????? ???????????? ??????????????????" },
    isRequired: { type: Boolean, default: false },
    isReadonly: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isHorizontal: { type: Boolean, default: false },
    modelValue: { type: String, default: "" }
  },
  setup(props) {
    const inputValue = ref(props.modelValue)
    const checkClass = ref('')
    const checkMsg = ref('')

    /**
     * ????????? ?????? ???????????? ????????? ??????????????? ??????
     * @param target
     */
    const checkPhoneRule = (target: HTMLInputElement): void => {
      const value = target.value
      // ????????? ??????????????? class, msg ?????????
      if (_.isEmpty(value)) {
        checkMsg.value = ''
        checkClass.value = ''
        // validity ?????????
        target.setCustomValidity('')
        return
      }
      if (!utils.validator.checkPhoneNumber(value)) {
        checkMsg.value = "(-) ?????? ???????????? ??????????????????"
        checkClass.value = 'is-danger'
        target.setCustomValidity('invalid phone number')
      } else {
        checkMsg.value = "??????????????? ???????????? ?????????"
        checkClass.value = 'is-success'
        target.setCustomValidity('')
      }
    }

    /**
     * ?????? ?????????????????? ??????
     */
    const checkIfIsInvalid = (value: string): void => {
      checkClass.value = 'is-danger'
      if (_.isEmpty(value)) {
        checkMsg.value = '??????????????? ??????????????????'
      }
    }

    return {
      inputValue,
      checkMsg,
      checkClass,
      checkPhoneRule,
      checkIfIsInvalid
    }
  }
})
</script>
