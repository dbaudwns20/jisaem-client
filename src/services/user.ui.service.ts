import LabelElementList from "@/components/label/LabelElementList.vue"
import utils from "@/utils/utils"

export default {
  setColumns() {
    return [
      {
        maxWidth: 45,
        minWidth: 45,
        lockPosition: 'left',
        sortable: false,
        resizable: false,
        cellStyle: {justifyContent: 'center', display: 'flex', alignItems: 'center'},
        cellRenderer: (params: any) => {
          if (!params.data.isExpanded)
            return `<a><i class="fa-solid fa-angle-right"></i></a>`
          else
            return `<a><i class="fa-solid fa-angle-down"></i></a>`
        }
      },
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
        minWidth: 180,
        headerName: "레이블",
        cellStyle: {display: 'flex', alignItems: 'center'},
        cellRenderer: LabelElementList,
        cellRendererParams: {
          labelClass: 'cell-label-list',
        },
        autoHeight: true
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
        headerName: "이메일",
        field: "email",
        minWidth: 200
      },
      {
        headerName: "생성일",
        field: "createdAt",
        cellStyle: {textAlign: 'center'},
        minWidth: 80,
        cellRenderer: (params: any) => {
          return utils.convertDateToString(params.data.createdAt)
        }
      },
      {
        headerName: "부모님정보",
        field: "isParentInfo",
        cellStyle: {textAlign: 'center'},
        minWidth: 80,
        hide: true,
        cellRenderer: (params: any) => {
          if (!params.data.parentInfo?.active)
            return ''
          else
            return `<i class="fa-solid fa-user-group"></i>`
        }
      }
    ]
  }
}
