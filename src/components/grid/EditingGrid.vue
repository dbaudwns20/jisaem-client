<template>
  <ag-grid-vue id="myGrid" class="ag-theme-alpine"
               domLayout='autoHeight'
               :grid-options="gridOptions"
               :row-data="rowData"
               :localeText="{ noRowsToShow: '조회 결과가 없습니다.' }">
  </ag-grid-vue>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import { AgGridVue } from "ag-grid-vue3"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

import _ from 'lodash'

export default defineComponent({
  name: "EditingGrid",
  components: {
    'ag-grid-vue': AgGridVue
  },
  props: {
    gridOptions: { type: Object, required: true },
    gridClass: { type: String, default: "" }
  },
  setup(props) {
    const rowData = ref([])
    const gridOptions = props.gridOptions
    // 체크박스 다중 선택
    gridOptions.rowSelection = 'multiple'
    // 편집 시 행의 전체 편집 모드
    gridOptions.editType = 'fullRow'
    // 셀 텍스트 드레그 셀렉트 가능 옵션
    gridOptions.enableCellTextSelection = true
    // 셀 마우스 오버 시 hover 스타일이 적용되지 않음
    gridOptions.suppressRowHoverHighlight = true
    // 셀 클릭 시 편집 기능을 수행하지 않음
    gridOptions.suppressClickEdit = true
    // 행 클릭 시 체크박스가 선택되지 않음
    gridOptions.suppressRowClickSelection = true
    // 그리드 사이즈 변경 시 컬럼 길이 재조정
    gridOptions.onGridSizeChanged = (params: any) => {
      params.api.sizeColumnsToFit()
    }
    // 행이 선택될 때 클래스 추가 (커스텀)
    gridOptions.rowClassRules = {
      'row-clicked': (params: any) => params.data.selected
    }
    // 키 입력 이벤트
    gridOptions.onCellKeyDown = (params: any) => {
      // 엔터키를 누를 시 편집모드 방지
      if (params.event.code === 'Enter') {
        params.api.stopEditing(false)
      }
    }
    const getRowData = () => {
      return rowData.value
    }
    const updateRowData = (newRowData: []) => {
      rowData.value = newRowData
    }
    return {
      rowData,
      getRowData,
      updateRowData
    }
  }
})
</script>

