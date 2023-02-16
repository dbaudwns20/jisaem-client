<template>
  <div class="field has-addons" style="width: 100%;">
    <div class="control">
      <button ref="colorRandomButton" class="button" @click="setRandomCode" tabindex="-1" @keydown="keydownEvent($event)">
        <span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>
      </button>
    </div>
    <div class="control" style="width: 100%;">
      <input class="input" ref="input" type="text" v-model="color"
             :class="checkClass"
             @keyup="keyupEvent($event)"
             @keydown="keydownEvent($event)" />
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue"
import utils from "@/utils/utils"

import _ from 'lodash'

export default defineComponent({
  name: "LabelColor",
  props: {
    params: {type: Object , required: true}
  },
  setup(props) {
    // input ref element
    const input = ref()
    // input 값
    const color = ref(props.params.data.color)
    // rowData
    const data = props.params.data
    // 컬러 생성 버튼 ref element
    const colorRandomButton = ref()
    // invalid class
    const checkClass = ref('')
    // 레이블 페이지 그리드 컴포넌트
    const parentComp = props.params.context.componentParent
    // **AG-Grid 셀 편집 컴포넌트에 값을 리턴할 함수**
    const getValue = () => {
      return color.value
    }
    // **AG-Grid 셀 편집 focusIn 함수**
    const focusIn = () => {
      input.value.focus()
      input.value.select()
    }
    // **AG-Grid 셀 편집, 컴포넌트가 화면에 렌더링 후 Callback 함수**
    // 커스텀 컴포넌트는 자동 포커싱이 되지 않는다. 별도로 지정
    // 편집가능한 컬럼의 첫번째 위치에 focus, select 하기 위해 실행
    const afterGuiAttached = () => {
      let _list: number[] = []
      _.forEach(props.params.columnApi.getAllDisplayedColumns(), (column, idx) => {
        if (column.colDef.editable) {
          _list.push(column.instanceId)
        }
      })
      if (props.params.column.instanceId === _list[0]) {
        focusIn()
      }
      setColor()
    }
    // 랜덤 HEX code 생성
    function setRandomCode() {
      color.value = utils.generateRandomColorCode()
      data.color = color.value
      checkValid()
      setColor()
    }
    // 생성 버튼 스타일 적용
    function setColor() {
      // 값이 정의되어 있지 않다면 기본값 set
      colorRandomButton.value.style.backgroundColor = _.isEmpty(color.value) ? '#f5f5f5' : color.value
      colorRandomButton.value.style.color = _.isEmpty(color.value) ? 'black' : utils.getTextColor(color.value)
      props.params.api.refreshCells(props.params)
    }
    // 저장버튼 활성화 여부 및 클래스 invalid 표시
    const checkValid = () => {
      if (!props.params.required) return
      const _list = []
      for (const colDef of props.params.api.getColumnDefs()) {
        if (colDef.editable && _.has(colDef, 'cellEditorParams.required')) {
          if (colDef.cellEditorParams.required) {
            _list.push(colDef.field)
          }
        }
      }
      let isValid = false
      _.forEach(_list, _field => {
        if (_.isEmpty(data[_field])) isValid = true
      })
      data.isDisabled = isValid
      // 현재 필드가 비어있을 경우
      checkClass.value = _.isEmpty(color.value) ? 'is-danger' : ''
    }
    // keyup 이벤트 처리
    function keyupEvent (event: any) {
      // 스페이스 키 입력 시 컬러 생성
      if (event.code === 'Space') {
        setRandomCode()
      } else {
        const value = event.target.value
        color.value = _.trim(value)
        data.color = color.value
        checkValid()
        setColor()
      }
    }
    // keydown 이벤트 처리
    function keydownEvent (event: any) {
      if (event.code === 'Enter') {
        event.stopPropagation()
        // isDisabled 가 true 라면 불가
        if (data.isDisabled) return
        // 부모 컴포넌트 생성, 편집 호출
        !_.has(data, 'id') ? parentComp.createRow(data) : parentComp.updateRow(data)
      } else if (event.code === 'Escape') {
        event.stopPropagation()
        props.params.api.stopEditing(false)
        if (!_.has(data, 'id')) {
          const rowData = parentComp.gridOptions.rowData
          rowData.shift()
          props.params.api.setRowData(rowData)
        } else {
          _.merge(data, data.default)
          data.isEditing = false
        }
        props.params.api.redrawRows()
      }
    }
    return {
      input,
      checkClass,
      colorRandomButton,
      color,
      getValue,
      focusIn,
      afterGuiAttached,
      setRandomCode,
      keyupEvent,
      keydownEvent
    }
  }
})
</script>
