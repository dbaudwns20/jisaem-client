import CellEditingButtons from "@/components/grid/CellEditingButtons.vue"
import LabelColorEditor from "@/components/label/LabelColorEditor.vue"
import LabelElement from "@/components/label/LabelElement.vue"
import { LabelTypeToString } from "@/models/enum/label.type"

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
        headerCheckboxSelection: true,
      },
      {
        maxWidth: 120,
        minWidth: 120,
        cellStyle: {textAlign: 'center'},
        headerName: "레이블유형",
        cellRenderer: (params: any) => {
          return LabelTypeToString(params.data.labelType)
        },
      },
      {
        width: 100,
        headerName: "레이블",
        cellStyle: {display: 'flex', alignItems: 'center'},
        editable: false,
        cellRenderer: LabelElement
      },
      {
        width: 100,
        headerName: "텍스트",
        field: "name",
        editable: true,
      },
      {
        width: 100,
        headerName: "컬러코드",
        field: "color",
        editable: true,
        cellEditor: LabelColorEditor,
      },
      {
        width: 200,
        headerName: "설명",
        field: "description",
        editable: true,
      },
      {
        maxWidth: 150,
        minWidth: 150,
        lockPosition: 'right',
        sortable: false,
        resizable: false,
        cellStyle: {justifyContent: 'center', display: 'flex', alignItems: 'center'},
        cellRenderer: CellEditingButtons
      }
    ]
  }
}
