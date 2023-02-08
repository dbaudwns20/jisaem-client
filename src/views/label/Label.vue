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
import { LabelType } from "@/models/enum/label.type"
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
      rowSelection: 'multiple', // 체크박스 다중 선택
      editType: 'fullRow', // 편집 타입
      defaultColDef: {
        resizable: true,
        sortable: false
      },
      // 레이블 인스턴스 Set (기능 호출을 위해)
      context: {
        componentParent: getCurrentInstance()!.proxy
      },
      onGridReady: (params: any) => {
        gridApi.value = params.api
        gridColumnApi.value = params.columnApi
      },
      // 체크박스 선택 이벤트
      onRowSelected: (params: any) => {
        selectedItemList.value = []
        _.forEach(params.api.getSelectedNodes(), (it: any) => {
          selectedItemList.value.push(it.data)
        })
      },
      // 셀 키보드 입력 시
      onCellKeyDown: (params: any) => {
        // 다른 행이 편집중인 상황에서 엔터키를 눌렀을 경우
        if (params.event.key === 'Enter') {
          labelGrid.value.getRowData().forEach((it: any) => {
            if (it.isEditing) {
              // 편집내용을 롤백한다
              if (!_.has(it, 'uid')) {
                const rowData = labelGrid.value.getRowData()
                rowData.shift()
                params.api.setRowData(rowData)
              } else {
                _.merge(it, it.default)
                it.isEditing = false
              }
            }
          })
          params.api.refreshCells(params)
        } else {
          // Cell Editor 에 입력된 값 실시간으로 data 필드에 반영
          params.data[params.colDef.field] = params.event.target.value
          params.data.isDisabled = _.isEmpty(params.data.name) || _.isEmpty(params.data.color)
          params.api.refreshCells(params)
        }
      },
      // 셀 클릭 시 편집 중인 상태라면 초기화
      onCellClicked: (params: any) => {
        if (params.api.getEditingCells().length === 0) {
          params.api.stopEditing(false)
          labelGrid.value.getRowData().forEach((it: any) => {
            if (it.isEditing) {
              if (!_.has(it, 'uid')) {
                const rowData = labelGrid.value.getRowData()
                rowData.shift()
                params.api.setRowData(rowData)
              } else {
                _.merge(it, it.default)
                it.isEditing = false
              }
            }
          })
          params.api.redrawRows()
        }
      }
    })
    // 데이터 롤백용 데이터 추가
    const setDefault = (res: any, rowData: []) => {
      rowData.forEach((it: any) => {
        for (const label of res) {
          if (it.uid === label.uid) {
            it.isEditing = false
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
      await setDefault(_.cloneDeep(res), gridApi.value.gridOptionsService.gridOptions.rowData)
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
      if (rowData.length > 0 && !_.has(rowData[0], 'uid')) return
      // 편집 중인 상황이라면 취소
      this.gridApi.stopEditing(false)
      // 편집내용 롤백
      rowData.forEach((it: any) => {
        if (it.isEditing) {
          _.merge(it, it.default)
          it.isEditing = false
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
      updatedFields.uid = data.uid
      const update: UpdateLabel = bindUpdateLabel(updatedFields)
      await labelGrpcService.updateLabel(update)
      await this.completeFunction('수정되었습니다')
    },
    // 레이블 (일괄) 삭제
    async deleteRow(uid: string[]) {
      //TODO 확인창 플러그인으로 구현 필요
      let result = confirm("삭제하시겠습니까?")
      if (result) {
        if (uid.length == 0)
          uid = _.map(this.selectedItemList, 'uid')
        await labelGrpcService.deleteLabels(uid!)
        await this.completeFunction('삭제되었습니다')
        if (uid.length > 0)
          this.selectedItemList = []
      } else {
        return
      }
    },
    // 새로고침
    reloadRow() {
      this.read()
    },
    setCurrentLabelType(labelType: LabelType) {
      this.currentLabelType = labelType
      if (labelType === LabelType.LABEL_TYPE_UNSPECIFIED) {
        this.gridColumnApi.setColumnVisible('1', true)
      } else {
        this.gridColumnApi.setColumnVisible('1', false)
      }
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
<style lang="scss">
@import "./src/assets/scss/grid";
</style>
