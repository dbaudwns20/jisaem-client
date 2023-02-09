<template>
  <div class="buttons" tabindex="-1">
    <button class="button is-small is-link" v-if="!isEditing" @click="edit">
      <span class="icon"><i class="fa-solid fa-pencil"></i></span>
    </button>
    <button class="button is-small is-danger" v-if="!isEditing" @click="remove">
      <span class="icon"><i class="fa-solid fa-trash"></i></span>
    </button>
    <button class="button is-small has-background-grey-lighter" v-if="isEditing" @click="cancel">
      <span class="icon"><i class="fa-solid fa-xmark"></i></span>
    </button>
    <button class="button is-small is-success" v-if="isEditing" :disabled="isDisabled" @click="save">
      <span class="icon"><i class="fa-solid fa-floppy-disk"></i></span>
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import _ from 'lodash'

const props = defineProps(['params'])
const params = props.params

// 그리드 데이터
const api = params.api
const gridOptions = api.gridOptionsService.gridOptions
const columnDefs = api.columnModel.columnDefs
// 행 데이터
const data = params.data
// 저장버튼 활성화 여부
const isDisabled = ref(data.isDisabled)
// 편집 여부
const isEditing = ref(data.isEditing)
// 레이블 페이지 그리드 컴포넌트
const parentComp = params.context.componentParent

// 편집
function edit() {
  let rowIndex = params.rowIndex
  gridOptions.rowData.forEach((it: any) => {
    // 다른 행에서 편집 중인 경우
    if (it.isEditing && data.uid !== it.uid) {
      // 신규인 경우
      if (!_.has(it, 'uid')) {
        rowIndex--
        const rowData = gridOptions.rowData
        rowData.shift() // return void
        api.setRowData(rowData)
      } else {
        _.merge(it, it.default)
        it.isEditing = false
        it.selected = false
      }
    }
  })
  // 편집여부 활성화
  api.redrawRows()
  let colKey = 'name'
  for (const col of columnDefs) {
    if (col.editable) {
      colKey = col.field
      break
    }
  }
  data.isEditing = true
  api.startEditingCell({rowIndex: rowIndex, colKey: colKey})
}
// 취소
function cancel() {
  api.stopEditing(false)
}
// 저장, 수정
function save() {
  !_.has(data, 'uid') ? parentComp.createRow(data) : parentComp.updateRow(data)
}
// 삭제
function remove() {
  parentComp.deleteRow([data.uid])
}
</script>
