import LabelElementList from "@/components/label/LabelElementList.vue"
import utils from "@/utils/utils"

export default {
  setColumns() {
    return [
      {
        maxWidth: 40,
        minWidth: 40,
        lockPosition: 'left',
        sortable: false,
        resizable: false,
        cellStyle: {
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          cursor: 'Pointer'
        },
        cellRenderer: (params: any) => {
          if (!params.data.isExpanded)
            return `<a><i class="fa-solid fa-angle-right"></i></a>`
          else
            return `<a><i class="fa-solid fa-angle-down"></i></a>`
        }
      },
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
        minWidth: 250,
        headerName: "레이블",
        cellStyle: {display: 'flex', alignItems: 'center'},
        cellRenderer: LabelElementList,
        cellRendererParams: {
          labelClass: 'cell-label-list',
          target: 'userLabelList'
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
        minWidth: 140,
        maxWidth: 140,
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
