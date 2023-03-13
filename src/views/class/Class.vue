<template>
  <AppNavbar />
  <div class="container">
    <section class="hero is-link is-small">
      <div class="hero-body">
        <p class="title">
          클래스
        </p>
      </div>
    </section>
    <div class="container">
      <div class="tabs is-boxed is-fullwidth is-marginless">
        <ul>
          <li :class="{ 'is-active': !isClosed }" @click="setIsClose(false)"><a><strong>수업중</strong></a></li>
          <li :class="{ 'is-active': isClosed }" @click="setIsClose(true)"><a><strong>수업종료</strong></a></li>
        </ul>
      </div>
      <PagingGrid ref="classGrid" :grid-options="gridOptions" @read="read">
        <template v-slot:gridHeaderLeftContent>
          <div class="buttons">
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="추가"
                    @click="newClass">
              <span class="icon"><i class="fa-solid fa-plus"></i></span>
            </button>
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="삭제" v-if="selectedItemList.length > 0"
                    @click="deleteClass(null)">
              <span class="icon"><i class="fa-solid fa-trash"></i></span>
            </button>
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="레이블관리"
                    v-if="selectedItemList.length > 0" @click="manageClassLabel(null)">
              <span class="icon"><i class="fa-solid fa-tags"></i></span>
            </button>
          </div>
        </template>
        <template v-slot:gridHeaderRightContent>
          <div class="buttons">
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="검색조건"
                    @click="classGrid.setShowGridSearch">
              <span class="icon"><i class="fa-solid fa-magnifying-glass"></i></span>
            </button>
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="새로고침"
                    @click="reload">
              <span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>
            </button>
          </div>
        </template>
        <template v-slot:gridSearchContent>
          <nav class="panel">
            <p class="panel-heading">검색조건</p>
            <div class="panel-block">
              <Text :label="'이름'" icons-left="fa-solid fa-user"
                    :placeholder="'이름을 입력해주세요'" :is-small="true" />
            </div>
            <div class="panel-block">
              <LabelSelect :label="'레이블'" :is-small="true"
                           :label-type="labelType.LABEL_TYPE_CLASS"
                           v-model="classLabels" />
            </div>
            <div class="panel-block">
              <button class="button is-small is-link is-outlined is-fullwidth" @click="read(null)">
                조회
              </button>
            </div>
          </nav>
        </template>
      </PagingGrid>
    </div>
  </div>
  <router-view @complete-function="completeFunction" />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, watch } from 'vue'
import { bindPaginationInstance, Pagination } from "@/models/util/util"
import { Label } from "@/models/label/label"
import { LabelType } from "@/models/label/label.type"
import { ModalCreateClass, ModalManageClassLabel, ClassDetail } from "@/routers/class.router"

import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import PagingGrid from "@/components/grid/PagingGrid.vue"
import Text from "@/components/input/Text.vue"
import LabelSelect from "@/components/label/LabelSelect.vue"

import classUiService from "@/services/class.ui.service"
import classGrpcService from "@/services/class.grpc.service"

import utils from "@/utils/utils"
import router from "@/routers/router"
import _ from "lodash"

export default defineComponent({
  name: "Class",
  components: {
    AppNavbar,
    AppFooter,
    PagingGrid,
    Text,
    LabelSelect
  },
  setup() {
    const classGrid = ref()
    const classLabels = ref([] as Label[])
    const selectedItemList = ref([] as object[])
    const isClosed = ref(false)

    // AG Grid
    const gridApi = ref()
    const gridColumnApi = ref()
    const gridOptions = reactive({
      columnDefs: classUiService.setColumns(),
      defaultColDef: {
        resizable: true,
        sortable: true
      },
      // 레이블 인스턴스 Set (기능 호출을 위해)
      context: {
        componentParent: getCurrentInstance()!.proxy
      },
      // row detail component
      // 체크박스 선택 이벤트
      onRowSelected: (params: any) => {
        const idx = _.findIndex(selectedItemList.value, {id: params.data.id})
        if (idx === -1) {
          selectedItemList.value.push(params.data)
        } else {
          selectedItemList.value.splice(idx, 1)
        }
      },
      onCellDoubleClicked: (params: any) => {
        ClassDetail.props.classId = params.data.id
        router.push(ClassDetail)
      },
      onGridReady: (params: any) => {
        gridApi.value = params.api
        gridColumnApi.value = params.columnApi
      }
    })

    // 조회
    const read = async (pageInfo: Pagination | null = null) => {
      // parameter set
      const classLabelList: string[] = _.map(classLabels.value, 'id')
      const page = bindPaginationInstance(pageInfo)
      const res: any = await classGrpcService.getClassList(classLabelList, isClosed.value, page)
      // 1. pagination set
      await classGrid.value.setPageInfo(res.pageInfo)
      // 2. rowData Set
      await classGrid.value.updateRowData(res.list)
    }
    // 클래스 신규
    const newClass = () => {
      router.push(ModalCreateClass.path)
    }
    // 클래스 삭제
    const deleteClass = async (classId: string | null) => {
      let result = confirm("삭제하시겠습니까?") // TODO manage text one place
      if (result) {
        let idList: string[] = []
        if (_.isNull(classId))
          idList = _.map(selectedItemList.value, 'id')
        else
          idList.push(classId)
        await classGrpcService.deleteClass(idList)
        completeFunction('삭제되었습니다')
      } else {
        return
      }
    }
    const manageClassLabel = (classId: string | null, classLabelList: any = null) => {
      if (_.isNull(classId)) {
        ModalManageClassLabel.props.classId = _.map(selectedItemList.value, 'id').join(",")
        ModalManageClassLabel.props.labelList = []
      } else {
        ModalManageClassLabel.props.classId = classId
        ModalManageClassLabel.props.labelList = classLabelList
      }
      router.push(ModalManageClassLabel)
    }

    const setIsClose = (val: boolean) => {
      isClosed.value = val
      read()
    }

    watch(() => selectedItemList.value, () => {
      // 그리드에 선택한 목록 공유
      classGrid.value.setSelectedItemList(selectedItemList.value)
      }, {deep: true}
    )

    // mount 사이클에서 사용자 조회
    onMounted(() => {
      read()
    })

    // 함수 호출 후 처리
    const completeFunction = (msg: string = '처리되었습니다', isFromModal: boolean = false) => {
      // 모달에서 호출된거라면 모달 닫기
      if (isFromModal) router.go(-1)
      // 메시지 출력
      utils.message.showSuccessToastMsg(msg)
      //
      selectedItemList.value = []
      // 페이지 리로드
      read()
    }

    return {
      classGrid,
      classLabels,
      selectedItemList,
      isClosed,
      gridOptions,
      setIsClose,
      read,
      newClass,
      deleteClass,
      manageClassLabel,
      completeFunction,
      labelType: LabelType
    }
  }
})
</script>
