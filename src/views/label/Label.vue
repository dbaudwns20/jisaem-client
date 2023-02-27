<template>
  <AppNavbar />
  <div class="container">
    <section class="hero is-link is-small">
      <div class="hero-body">
        <p class="title">
          레이블
        </p>
      </div>
    </section>
    <div class="container">
      <div class="tabs is-boxed is-fullwidth is-marginless">
        <ul>
          <li :class="{ 'is-active': currentLabelType === LabelType.LABEL_TYPE_UNSPECIFIED }" @click="setCurrentLabelType(LabelType.LABEL_TYPE_UNSPECIFIED)"><a><strong>전체</strong></a></li>
          <li :class="{ 'is-active': currentLabelType === LabelType.LABEL_TYPE_USER }" @click="setCurrentLabelType(LabelType.LABEL_TYPE_USER)"><a><strong>사용자</strong></a></li>
          <li :class="{ 'is-active': currentLabelType === LabelType.LABEL_TYPE_CLASS }" @click="setCurrentLabelType(LabelType.LABEL_TYPE_CLASS)"><a><strong>클래스</strong></a></li>
          <li :class="{ 'is-active': currentLabelType === LabelType.LABEL_TYPE_TEST }" @click="setCurrentLabelType(LabelType.LABEL_TYPE_TEST)"><a><strong>시험</strong></a></li>
          <li :class="{ 'is-active': currentLabelType === LabelType.LABEL_TYPE_HOMEWORK }" @click="setCurrentLabelType(LabelType.LABEL_TYPE_HOMEWORK)"><a><strong>과제</strong></a></li>
        </ul>
      </div>
      <div class="grid-header">
        <div class="grid-header-buttons">
          <div class="grid-header-left">
            <div class="buttons">
              <button class="button is-small is-success" v-if="currentLabelType !== LabelType.LABEL_TYPE_UNSPECIFIED" @click="addRow">
                <span class="icon"><i class="fa-solid fa-plus"></i></span>
                <span><strong>추가</strong></span>
              </button>
              <button class="button is-small is-danger" v-if="selectedItemList.length > 0" @click="deleteRow([])">
                <span class="icon"><i class="fa-solid fa-trash"></i></span>
                <span><strong>삭제</strong></span>
              </button>
            </div>
          </div>
          <div class="grid-header-right">
            <div class="buttons">
              <button class="button is-small has-background-grey-lighter" @click="reloadRow">
                <span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>
                <span><strong>새로고침</strong></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <EditingGrid ref="labelGrid" :grid-options="gridOptions" />
    </div>
  </div>
  <AppFooter />
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, watch } from "vue"
import { LabelType } from "@/models/label/label.type"
import { bindLabelInstance, Label } from "@/models/label/label"
import { bindUpdateLabel, UpdateLabel } from "@/models/label/update.label"

import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import EditingGrid from "@/components/grid/EditingGrid.vue"

import labelGrpcService from "@/services/label.grpc.service"
import labelUiService from "@/services/label.ui.service"

import utils from "@/utils/utils"
import _ from 'lodash'

export default defineComponent({
  name: "Label",
  components: {
    AppNavbar, AppFooter, EditingGrid
  },
  setup() {
    const currentLabelType = ref(LabelType.LABEL_TYPE_UNSPECIFIED)
    const labelGrid = ref()
    const selectedItemList = ref([] as object[])

    const gridApi = ref()
    const gridColumnApi = ref()
    const gridOptions = reactive({
      columnDefs: labelUiService.setColumns(),
      defaultColDef: {
        resizable: true,
        sortable: false
      },
      // 레이블 인스턴스 Set (기능 호출을 위해)
      context: {
        componentParent: getCurrentInstance()!.proxy
      },
      // 체크박스 선택 이벤트
      onRowSelected: (params: any) => {
        selectedItemList.value = []
        _.forEach(params.api.getSelectedNodes(), (it: any) => {
          selectedItemList.value.push(it.data)
        })
      },
      onGridReady: (params: any) => {
        gridApi.value = params.api
        gridColumnApi.value = params.columnApi
      }
    })
    // 선택한 행 지정
    const selectRow = (params: any) => {
      _.forEach(labelGrid.value.getRowData(), row => { row.selected = false })
      params.data.selected = true
    }
    // 데이터 롤백용 데이터 추가
    const setDefault = (res: any, rowData: []) => {
      rowData.forEach((it: any) => {
        for (const label of res) {
          if (it.id === label.id) {
            it.isEditing = false
            it.selected = false
            it.default = label
            break
          }
        }
      })
    }
    // 조회
    const read = async () => {
      const res = await labelGrpcService.getLabels(currentLabelType.value)
      // rowData Set
      await labelGrid.value.updateRowData(res)
      // rollback 용 데이터 Set
      await setDefault(_.cloneDeep(res), labelGrid.value.getRowData())
    }
    // mount 사이클에서 레이블 조회
    onMounted(() => {
      read()
    })
    // 텝이 선택될 때 레이블 목록 재조회
    watch(() => currentLabelType.value, () => {
      read()
      // 체크박스 목록 초기화
      selectedItemList.value = []
    })
    return {
      currentLabelType,
      labelGrid,
      LabelType,
      selectedItemList,
      gridApi,
      gridColumnApi,
      gridOptions,
      read,
    }
  },
  methods: {
    // 레이블 추가
    addRow() {
      const rowData = this.labelGrid.getRowData()
      // 이미 추가를 한 상황이라면 방지
      if (rowData.length > 0 && !_.has(rowData[0], 'id')) return
      // 편집 중인 상황이라면 취소
      this.gridApi.stopEditing(false)
      // 편집내용 롤백
      rowData.forEach((it: any) => {
        if (it.isEditing) {
          _.merge(it, it.default)
          it.isEditing = false
          it.selected = false
        }
      })
      rowData.unshift({
        name: '텍스트',
        color: utils.generateRandomColorCode(),
        description: '',
        isEditing: true,
        labelType: this.currentLabelType
      })
      this.gridApi.setRowData(rowData)
      // 편집 focus
      this.gridApi.startEditingCell({rowIndex: 0, colKey: 'name'})
    },
    // 레이블 생성
    async createRow(data: any) {
      const label: Label = bindLabelInstance(data)
      await labelGrpcService.createLabel(label)
      await this.completeFunction('추가되었습니다')
    },
    // 레이블 편집
    async updateRow(data: any) {
      const updatedFields = utils.getUpdatedFields(data.default, data)
      if (_.isEmpty(updatedFields)) {
        utils.message.showWarningToastMsg("변경사항이 없습니다")
        return
      }
      updatedFields.id = data.id
      const update: UpdateLabel = bindUpdateLabel(updatedFields)
      await labelGrpcService.updateLabel(update)
      await this.completeFunction('수정되었습니다')
    },
    // 레이블 (일괄) 삭제
    async deleteRow(id: string[]) {
      //TODO 확인창 플러그인으로 구현 필요
      let result = confirm("삭제하시겠습니까?")
      if (result) {
        if (id.length == 0)
          id = _.map(this.selectedItemList, 'id')
        await labelGrpcService.deleteLabels(id!)
        await this.completeFunction('삭제되었습니다')
        if (id.length > 0)
          this.selectedItemList = []
      } else {
        return
      }
    },
    // 새로고침
    reloadRow() {
      this.read()
      // 체크박스 목록 초기화
      this.selectedItemList = []
    },
    // 탭 선택 시 '1' : '레이블유형' 컬럼 보이기 설정
    setCurrentLabelType(labelType: LabelType) {
      this.currentLabelType = labelType
      if (labelType === LabelType.LABEL_TYPE_UNSPECIFIED) {
        this.gridColumnApi.setColumnVisible('labelType', true)
      } else {
        this.gridColumnApi.setColumnVisible('labelType', false)
      }
      this.gridApi.sizeColumnsToFit()
    },
    // 함수 호출 후 처리
    completeFunction(msg: string = '처리되었습니다') {
      // 메시지 출력
      utils.message.showSuccessToastMsg(msg)
      // 정보 갱신
      this.reloadRow()
    },
  }
})
</script>
<style lang="sass">
@import "src/assets/sass/grid"
</style>
