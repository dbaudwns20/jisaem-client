import utils from "@/utils/utils";
import LabelElement from "@/components/label/LabelElement.vue"

export default {
  setColumns() {
    return [
      {
        maxWidth: 52,
        minWidth: 52,
        lockPosition: 'left',
        sortable: false,
        resizable: false,
        cellStyle: {display: 'flex', alignItems: 'center'},
        checkboxSelection: true,
        headerCheckboxSelection: true
      },
      {
        headerName: '순번',
        maxWidth: 65,
        minWidth: 65,
        sortable: false,
        resizable: false,
        cellStyle: { textAlign: 'center' },
        cellRenderer: (params: any) => {
          return parseInt(params.node.id) + 1
        }
      },
      {
        minWidth: 100,
        headerName: "레이블",
        cellStyle: {display: 'flex', alignItems: 'center'},
        cellRenderer: LabelElement
      },
      {
        headerName: "아이디",
        field: "username",
        minWidth: 100
      },
      {
        headerName: "이름",
        field: "name",
        minWidth: 100
      },
      {
        headerName: "전화번호",
        field: "phone",
        minWidth: 100
      },
      {
        headerName: "email",
        field: "email",
        minWidth: 120
      },
      {
        headerName: "생성일",
        field: "createdAt",
        cellStyle: { textAlign: 'center' },
        minWidth: 100,
        cellRenderer: (params: any) => {
          return utils.convertDateToString(params.data.createdAt)
        }
      }
    ]
  }
}
