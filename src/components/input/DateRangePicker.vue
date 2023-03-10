<template>
  <div class="field">
    <div class="field is-half">
      <label class="label" :class="{ 'required': isRequired }" v-if="labelFrom">
        {{ labelFrom }}
      </label>
      <div class="control has-icons-right has-icons-left">
        <input type="text" class="input" ref="inputFrom"
               :class="checkClassFrom"
               :placeholder="placeholderFrom"
               :required="isRequired"
               :disabled="isDisabled"
               :value="from"
               @click="showDatepicker(true)"
               @invalid="checkIfIsInvalid($event.target.value, true)"
               @keyup="checkValue($event.target, true)"
               @input="$emit('update:from', $event.target.value)"/>
        <span class="clear-date-button" v-if="from.length > 0" :style="[checkClassFrom === 'is-danger' ? 'right: 8%' : '']">
          <a @click="clearDate(true)"><i class="fa-solid fa-xmark"></i></a>
        </span>
        <span class="icon is-small is-left"><i class="fa-solid fa-calendar-days"></i></span>
        <span class="icon is-small is-right"><i :class="{ 'fas fa-exclamation-triangle': checkClassFrom === 'is-danger',
                                                          '': checkClassFrom === ''}"></i></span>
        <input name="datePickerFrom" ref="datePickerFrom" />
      </div>
      <p class="help" :class="checkClassFrom">
        {{ checkMsgFrom }}
      </p>
    </div>
    <div class="field is-half">
      <label class="label" :class="{ 'required': isRequired }" v-if="labelTo">
        {{ labelTo }}
      </label>
      <div class="control has-icons-right has-icons-left">
        <input type="text" class="input" ref="inputTo"
               :class="checkClassTo"
               :placeholder="placeholderTo"
               :required="isRequired"
               :disabled="isDisabled"
               :value="to"
               @click="showDatepicker(false)"
               @invalid="checkIfIsInvalid($event.target.value, false)"
               @keyup="checkValue($event.target, false)"
               @input="$emit('update:to', $event.target.value)"/>
        <span class="clear-date-button" v-if="to.length > 0" :style="[checkClassTo === 'is-danger' ? 'right: 8%' : '']">
          <a @click="clearDate(false)"><i class="fa-solid fa-xmark"></i></a>
        </span>
        <span class="icon is-small is-left"><i class="fa-solid fa-calendar-days"></i></span>
        <span class="icon is-small is-right"><i :class="{ 'fas fa-exclamation-triangle': checkClassTo === 'is-danger',
                                                          '': checkClassTo === ''}"></i></span>
        <input name="datePickerTo" ref="datePickerTo" />
      </div>
      <p class="help" :class="checkClassTo">
        {{ checkMsgTo }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"

import utils from "@/utils/utils"
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js'
import _ from "lodash"

export default defineComponent({
  name: "DateRangePicker",
  props: {
    labelFrom: { type: String, default: "" },
    labelTo: { type: String, default: "" },
    placeholderFrom: { type: String, default: "????????? ??????????????????" },
    placeholderTo: { type: String, default: "????????? ??????????????????" },
    isRequired: { type: Boolean, default: true },
    isDisabled: { type: Boolean, default: false },
    from: { type: String, default: '' },
    to: { type: String, default: '' },
  },
  setup(props, { emit }) {
    const datePickerFrom = ref()
    const checkClassFrom = ref('')
    const checkMsgFrom = ref('')
    const inputFrom: any = ref('')

    const datePickerTo = ref()
    const checkClassTo = ref('')
    const checkMsgTo = ref('')
    const inputTo: any = ref('')

    let calendarFrom: any = null
    let calendarTo: any = null

    // ????????? ?????? ??? ??? ??????
    const checkValue = (target: HTMLInputElement, isFrom: boolean): void => {
      const value = target.value
      if (_.isEmpty(value)) {
        setCustomValidity('', isFrom)
        // ?????? ??? ?????????
        isFrom ? calendarFrom.clear() : calendarTo.clear()
        return
      } else {
        // ?????????????????? ?????? ?????? ?????????
        isFrom ? calendarFrom.hide() : calendarTo.hide()
      }
      if (!utils.validator.checkDateFormat(value)) {
        setCustomValidity('invalid date format', isFrom, '(yyyy-mm-dd) ???????????? ??????????????????')
      } else {
        setCustomValidity('', isFrom)
        // ????????? ????????? ???????????? ??????
        refreshCalendar(new Date(value), isFrom)
        // calendar ??? ??? ??????
        setValue(isFrom)
      }
    }

    // ?????? ????????? ??? ????????? ??????
    const checkIfIsInvalid = (value: string, isFrom: boolean): void => {
      if (!props.isRequired) return
      isFrom ? checkClassFrom.value = 'is-danger' : checkClassTo.value = 'is-danger'
      if (_.isEmpty(value)) {
        isFrom ? checkMsgFrom.value = '????????? ??????????????????' : checkMsgTo.value = '????????? ??????????????????'
      }
    }

    // ??????????????? ??????
    const setCustomValidity = (invalidMsg: string, isFrom: boolean, msg: string = '') => {
      if (isFrom) {
        if (!_.isEmpty(invalidMsg)) {
          <HTMLInputElement>inputFrom.value.setCustomValidity(invalidMsg)
          checkMsgFrom.value = msg
          checkClassFrom.value = 'is-danger'
        } else {
          <HTMLInputElement>inputFrom.value.setCustomValidity('')
          checkMsgFrom.value = ''
          checkClassFrom.value = ''
        }
      } else {
        if (!_.isEmpty(invalidMsg)) {
          <HTMLInputElement>inputTo.value.setCustomValidity(invalidMsg)
          checkMsgTo.value = msg
          checkClassTo.value = 'is-danger'
        } else {
          <HTMLInputElement>inputTo.value.setCustomValidity('')
          checkMsgTo.value = ''
          checkClassTo.value = ''
        }
      }
    }

    // ??? ??????
    const setValue = (isFrom: boolean): void => {
      // ??? ?????? ??????
      if (_.isEmpty(calendarFrom.value())) {
        if (_.isEmpty(calendarTo.value())) {
          setCustomValidity('', true)
          setCustomValidity('', false)
        } else {
          setCustomValidity('no from date', true, '???????????? ??????????????????')
          setCustomValidity('', false)
        }
      } else {
        if (_.isEmpty(calendarTo.value())) {
          setCustomValidity('', true)
          setCustomValidity('', false)
        } else {
          if (inputFrom.value.validationMessage !== 'from is invalid')
            setCustomValidity('', true)
          if (inputTo.value.validationMessage !== 'to is invalid')
            setCustomValidity('', false)
        }
      }
      // ?????? ?????? ??????
      if (utils.validator.isDate(new Date(calendarFrom.value())) && utils.validator.isDate(new Date(calendarTo.value()))) {
        const from: Date = new Date(calendarFrom.value())
        const to: Date = new Date(calendarTo.value())
        if (from.getTime() > to.getTime()) {
          const msg: string = isFrom ? '???????????? ????????? ?????? ????????? ??? ????????????' : '???????????? ??????????????? ????????? ??? ????????????'
          const invalidMsg: string = isFrom ? 'from is invalid' : 'to is invalid'
          setCustomValidity(invalidMsg, isFrom, msg)
        } else if (from.getTime() <= to.getTime()) {
          setCustomValidity('', true)
          setCustomValidity('', false)
        }
      }

      if (isFrom) emit('update:from', calendarFrom.value())
      else emit('update:to', calendarTo.value())
    }

    // datepicker ?????????
    const showDatepicker = (isFrom: boolean): void => {
      setTimeout(() => {
        isFrom ? calendarFrom.show() : calendarTo.show()
      })
    }

    // ????????? ???????????? ????????? ???????????? ?????? ????????? ???????????? ???????????? refresh
    const refreshCalendar = (newDate: Date | null, isFrom: boolean): void => {
      if (isFrom) {
        calendarFrom.startDate = newDate
        calendarTo.startDate = newDate
        calendarFrom.datePicker._visibleDate = newDate
        calendarFrom.datePicker.refresh()
      } else {
        calendarTo.startDate = newDate
        calendarTo.datePicker._visibleDate = newDate
        calendarTo.datePicker.refresh()
      }
    }

    // bulma calendar ??????
    const attachCalendar = (ref: any, isFrom: boolean) => {
      const options: any = {
        type: 'date',
        lang: 'ko',
        dateFormat: 'yyyy-MM-dd',
        showHeader: false,
        showFooter: false,
        color: 'link'
      }
      if (isFrom) {
        if (!_.isEmpty(props.from)) options.startDate = new Date(props.from)
        calendarFrom = bulmaCalendar.attach(ref, options)[0]
        calendarFrom.on('select', (e: any) => { setValue(isFrom) })
      } else {
        if (!_.isEmpty(props.to)) options.startDate = new Date(props.to)
        calendarTo = bulmaCalendar.attach(ref, options)[0]
        calendarTo.on('select', (e: any) => { setValue(isFrom) })
      }
    }

    // ????????? ??? ?????????
    const clearDate = (isFrom: boolean) => {
      isFrom ? calendarFrom.clear() : calendarTo.clear()
      setValue(isFrom)
    }

    onMounted(() => {
      attachCalendar(datePickerFrom.value, true)
      attachCalendar(datePickerTo.value, false)
    })

    return {
      datePickerFrom,
      datePickerTo,
      checkClassFrom,
      checkMsgFrom,
      checkClassTo,
      checkMsgTo,
      inputFrom,
      inputTo,
      checkValue,
      checkIfIsInvalid,
      showDatepicker,
      clearDate
    }
  }
})
</script>
