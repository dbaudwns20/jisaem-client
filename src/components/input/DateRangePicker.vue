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
    placeholderFrom: { type: String, default: "날짜를 선택해주세요" },
    placeholderTo: { type: String, default: "날짜를 선택해주세요" },
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

    // 키보드 입력 시 값 체크
    const checkValue = (target: HTMLInputElement, isFrom: boolean): void => {
      const value = target.value
      if (_.isEmpty(value)) {
        setCustomValidity('', isFrom)
        // 달력 값 초기화
        isFrom ? calendarFrom.clear() : calendarTo.clear()
        return
      } else {
        // 키보드입력이 되면 달력 숨기기
        isFrom ? calendarFrom.hide() : calendarTo.hide()
      }
      if (!utils.validator.checkDateFormat(value)) {
        setCustomValidity('invalid date format', isFrom, '(yyyy-mm-dd) 형식으로 입력해주세요')
      } else {
        setCustomValidity('', isFrom)
        // 입력한 날짜의 달력으로 이동
        refreshCalendar(new Date(value), isFrom)
        // calendar 에 값 설정
        setValue(isFrom)
      }
    }

    // 필수 속성일 때 메시지 표시
    const checkIfIsInvalid = (value: string, isFrom: boolean): void => {
      if (!props.isRequired) return
      isFrom ? checkClassFrom.value = 'is-danger' : checkClassTo.value = 'is-danger'
      if (_.isEmpty(value)) {
        isFrom ? checkMsgFrom.value = '날짜를 선택해주세요' : checkMsgTo.value = '날짜를 선택해주세요'
      }
    }

    // 커스텀규칙 정의
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

    // 값 설정
    const setValue = (isFrom: boolean): void => {
      // 값 여부 체크
      if (_.isEmpty(calendarFrom.value())) {
        if (_.isEmpty(calendarTo.value())) {
          setCustomValidity('', true)
          setCustomValidity('', false)
        } else {
          setCustomValidity('no from date', true, '시작일을 선택해주세요')
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
      // 날짜 범위 비교
      if (utils.validator.isDate(new Date(calendarFrom.value())) && utils.validator.isDate(new Date(calendarTo.value()))) {
        const from: Date = new Date(calendarFrom.value())
        const to: Date = new Date(calendarTo.value())
        if (from.getTime() > to.getTime()) {
          const msg: string = isFrom ? '시작일이 종료일 보다 이후일 수 없습니다' : '종료일이 시작일보다 이전일 수 없습니다'
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

    // datepicker 보이기
    const showDatepicker = (isFrom: boolean): void => {
      setTimeout(() => {
        isFrom ? calendarFrom.show() : calendarTo.show()
      })
    }

    // 키보드 입력으로 날짜가 선택되면 해당 날짜의 달력으로 보이도록 refresh
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

    // bulma calendar 연결
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

    // 입력된 값 지우기
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
