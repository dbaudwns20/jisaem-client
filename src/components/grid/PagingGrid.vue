<template>
    <ag-grid-vue class="ag-theme-alpine"
                 id="myGrid"
                 :class="gridClass"
                 :defaultColDef="defaultColDef"
                 :columnDefs="columnDefs"
                 :rowData="rowData"
                 :pagination="true"
                 :localeText="{noRowsToShow: '조회 결과가 없습니다.'}"
                 @grid-ready="onGridReady">
    </ag-grid-vue>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { AgGridVue } from "ag-grid-vue3"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

export default defineComponent({
  name: "PagingGrid",
  components: {
    'ag-grid-vue': AgGridVue,
  },
  props: {
    columns: Object,
    gridClass: { type: String, default: "" }
  },
  setup(props) {
    let columns = props.columns
    let numColumn = {
      headerName: '순번',
      maxWidth: 65,
      sortable: false,
      resizable: false,
      cellStyle: { textAlign: 'center' },
      cellRenderer: (params) => { return parseInt(params.node.id) + 1 }
    }
    const chkColumn = {
      maxWidth: 50,
      sortable: false,
      resizable: false,
      cellStyle: { textAlign: 'center' },
      checkboxSelection: true,
      headerCheckboxSelection: true
    }
    columns.unshift(numColumn)
    columns.unshift(chkColumn)
    const columnDefs = ref(columns)
    const rowData = ref([
      {
        "name": "2023 예비고1연합 겨울 토모 수상하",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1A2 겨울 정규 수상하 PFL + 미적분 기본",
        "rate": "전체 등수 공개",
        "startDate": "2022-12-17",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1A3 겨울 정규 수상하 심화 + 수1수2 기본",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고2 겨울 정규 수1/확통/기하",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고2 겨울 토모 수1수2",
        "rate": "미공개",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1 겨울 특강 수상 기출",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고2 겨울 특강 수2",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1A1 겨울 정규 도방/수하/확률",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1연합 겨울 토모 수상하",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1A2 겨울 정규 수상하 PFL + 미적분 기본",
        "rate": "전체 등수 공개",
        "startDate": "2022-12-17",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1A3 겨울 정규 수상하 심화 + 수1수2 기본",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고2 겨울 정규 수1/확통/기하",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고2 겨울 토모 수1수2",
        "rate": "미공개",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1 겨울 특강 수상 기출",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고2 겨울 특강 수2",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1A1 겨울 정규 도방/수하/확률",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고2 겨울 특강 수2",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1A1 겨울 정규 도방/수하/확률",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고2 겨울 특강 수2",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1A1 겨울 정규 도방/수하/확률",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고2 겨울 특강 수2",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      },
      {
        "name": "2023 예비고1A1 겨울 정규 도방/수하/확률",
        "rate": "3",
        "startDate": "2022-11-19",
        "endDate": "2023-03-04",
        "description": ""
      }
    ])
    const defaultColDef = ref({
      resizable: true,
      sortable: true,
    })
    const gridApi = ref(null)
    const columnApi = ref(null)
    return {
      columnDefs,
      rowData,
      defaultColDef,
      gridApi,
      columnApi
    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api
      this.gridColumnApi = params.columnApi
      this.gridApi.sizeColumnsToFit()
      const updateData = (data) => {
        this.rowData = data
      }
    }
  }
})

</script>
