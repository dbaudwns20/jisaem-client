<template>
  <ag-grid-vue id="myGrid" class="ag-theme-alpine"
               domLayout='autoHeight'
               :grid-options="gridOptions"
               :row-data="rowData"
               :localeText="{ noRowsToShow: '조회 결과가 없습니다.' }">
  </ag-grid-vue>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
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
    // 셀 클릭 시 셀 태두리가 나타나지 않음
    gridOptions.suppressCellFocus = true
    // 셀 클릭 시 편집 기능을 수행하지 않음
    gridOptions.suppressClickEdit = true
    // 행 클릭 시 체크박스가 선택되지 않음
    gridOptions.suppressRowClickSelection = true
    // 그리드 사이즈 변경 시 컬럼 길이 재조정
    gridOptions.onGridSizeChanged = (params: any) => {
      params.api.sizeColumnsToFit()
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

