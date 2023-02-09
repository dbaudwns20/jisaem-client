<template>
  <input class="input is-fullwidth" ref="input" type="text"
         v-model="text"
         :class="checkClass"
         @keyup="keyupEvent($event)"
         @keydown="keydownEvent($event)" />
</template>
<script lang="ts">
import { ref, defineComponent } from "vue"

import _ from 'lodash'

export default defineComponent({
  name: "CellTextEditor",
  props: {
    params: {type: Object , required: true}
  },
  setup(props) {
    // input ref element
    const input = ref()
    // input 값
    const text = ref(props.params.value)
    // rowData
    const data = props.params.data
    // cell field
    const field = props.params.colDef.field
    // invalid class
    const checkClass = ref('')
    // 레이블 페이지 그리드 컴포넌트
    const parentComp = props.params.context.componentParent
    // **AG-Grid 셀 편집 컴포넌트에 값을 리턴할 함수**
    const getValue = () => {
      return text.value
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
      _.forEach(props.params.columnApi.getAllDisplayedColumns(), column => {
        if (column.colDef.editable) {
          _list.push(column.instanceId)
        }
      })
      if (props.params.column.instanceId === _list[0]) {
        focusIn()
      }
    }
    // 저장버튼 활성화 여부 및 클래스 invalid 표시
    const checkValid = () => {
      if (!props.params.required) return
      const _list = []
      for (const colDef of props.params.api.getColumnDefs()) {
        if (colDef.editable && _.has(colDef, 'cellEditorParams.required') && colDef.cellEditorParams.required) {
          _list.push(colDef.field)
        }
      }
      let isValid = false
      _.forEach(_list, _field => {
        if (_.isEmpty(data[_field])) isValid = true
      })
      data.isDisabled = isValid
      checkClass.value = _.isEmpty(text.value) ? 'is-danger' : ''
    }
    // keyup 이벤트 처리
    function keyupEvent (event: any) {
      const value = event.target.value
      text.value = _.trim(value)
      data[field] = text.value
      checkValid()
      // 셀 refresh => 변경된 data 반영
      props.params.api.refreshCells(props.params)
    }
    // keydown 이벤트 처리
    function keydownEvent (event: any) {
      if (event.code === 'Enter') {
        event.stopPropagation()
        // isDisabled 가 true 라면 불가
        if (data.isDisabled) return
        // 부모 컴포넌트 'createRow' or 'updateRow' 호출
        !_.has(data, 'uid') ? parentComp.createRow(data) : parentComp.updateRow(data)
      } else if (event.code === 'Escape') {
        event.stopPropagation()
        props.params.api.stopEditing(false)
        if (!_.has(data, 'uid')) {
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
      text,
      checkClass,
      getValue,
      focusIn,
      afterGuiAttached,
      keyupEvent,
      keydownEvent
    }
  }
})
</script>
