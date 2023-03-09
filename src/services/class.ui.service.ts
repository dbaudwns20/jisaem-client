import LabelElementList from "@/components/label/LabelElementList.vue";
import utils from "@/utils/utils";

export default {
  setColumns() {
    return [
      {
        maxWidth: 45,
        minWidth: 45,
        lockPosition: 'left',
        sortable: false,
        resizable: false,
        cellStyle: {display: 'flex', alignItems: 'center'},
        checkboxSelection: true,
        headerCheckboxSelection: true
      },
      {
        headerName: '순번',
        field: 'cellNo',
        maxWidth: 65,
        minWidth: 65,
        lockPosition: 'left',
        sortable: false,
        resizable: false,
        cellStyle: {justifyContent: 'center', display: 'flex', alignItems: 'center'},
      },
      {
        minWidth: 180,
        headerName: "레이블",
        cellStyle: {display: 'flex', alignItems: 'center'},
        cellRenderer: LabelElementList,
        cellRendererParams: {
          labelClass: 'cell-label-list',
          target: 'classLabelList'
        },
        autoHeight: true
      },
      {
        headerName: "클래스명",
        field: "name",
        width: 300
      },
      {
        headerName: "시작일",
        field: "startDate",
        cellStyle: {textAlign: 'center'},
        minWidth: 80,
        cellRenderer: (params: any) => {
          return utils.convertDateToString(params.data.startDate)
        }
      },
      {
        headerName: "종료일",
        field: "endDate",
        cellStyle: {textAlign: 'center'},
        minWidth: 80,
        cellRenderer: (params: any) => {
          return utils.convertDateToString(params.data.endDate)
        }
      }
    ]
  }
}
