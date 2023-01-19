<template>
    <ag-grid-vue style="width: 100%; height: 600px;"
                 class="ag-theme-alpine"
                 id="myGrid"
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
    columns: Object
  },
  setup(props) {
    let columns = props.columns
    let numColumn = {
      headerName: '순번',
      maxWidth: 60,
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
    const rowData = ref([])
    const defaultColDef = ref({
      resizable: true,
      sortable: true
    })
    const gridApi = ref(null)
    const columnApi = ref(null)
    return {
      columnDefs,
      rowData,
      defaultColDef,
      gridApi,
      columnApi,
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
<style>
</style>
