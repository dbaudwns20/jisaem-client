<template>
  <div class="grid-header">
    <div class="grid-header-buttons">
      <div class="grid-header-left">
        <slot name="gridHeaderLeftContent"></slot>
      </div>
      <div class="grid-header-right">
        <slot name="gridHeaderRightContent"></slot>
      </div>
    </div>
  </div>
  <ag-grid-vue id="myGrid" class="ag-theme-alpine"
               :rowData="rowData"
               :grid-options="gridOptions"
               :isFullWidthRow="isFullWidth"
               :fullWidthCellRenderer="fullWidthCellRenderer"
               :localeText="{noRowsToShow: '조회 결과가 없습니다.'}">
  </ag-grid-vue>
  <div class="grid-footer">
    <nav class="pagination is-small is-centered" role="navigation" aria-label="pagination">
      <span class="pagination-range">{{ pageRangeText }}</span>
      <span class="pagination-total">{{ totalPageText }}</span>
      <ul class="pagination-list">
        <li>
          <a class="pagination-link" :class="{'is-disabled': getCurrentPage() <= 1}"
             @click="goToPage(pagination.page - 1)">
            <i class="fa-solid fa-angle-left"></i>
          </a>
        </li>
        <li v-if="pagination.page > 5">
          <a class="pagination-link" @click="goToPage(1)">1</a>
          <a class="pagination-link" @click="goToPage(null, false)">&hellip;</a>
        </li>
        <li v-for="pageInfo in pageRange" :key="pageInfo.page">
          <a class="pagination-link" :class="{'is-current': pageInfo.isCurrent}" @click="goToPage(pageInfo.page)">
            {{ pageInfo.page }}
          </a>
        </li>
        <li v-if="pagination.totalPage > 5 && pageRange.length > 1">
          <a class="pagination-link" v-if="getMaxPage() < pagination.totalPage"
             @click="goToPage(null, true)">&hellip;</a>
          <a class="pagination-link" v-if="pagination.page > 5 && getMaxPage() < pagination.totalPage"
             @click="goToPage(pagination.totalPage)">{{ pagination.totalPage }}</a>
        </li>
        <li>
          <a class="pagination-link" :class="{'is-disabled': getCurrentPage() === pagination.totalPage}"
             @click="goToPage(pagination.page + 1)">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="grid-search" :class="{ 'is-active': showGridSearch }">
    <div class="grid-search-content">
      <slot name="gridSearchContent"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { bindPaginationInstance, Pagination } from "@/models/util/util"

import { AgGridVue } from "ag-grid-vue3"
import { RowNode } from "ag-grid-community"

import _ from 'lodash'

export default defineComponent({
  name: "PagingGrid",
  components: {
    'ag-grid-vue': AgGridVue,
  },
  props: {
    gridOptions: { type: Object, required: true },
  },
  emits: ['read'],
  setup(props, { emit }) {
    // 그리드 데이터
    const rowData = ref([] as any[])
    const pageRangeText = ref('0 - 0')
    const totalPageText = ref('총 0 건')
    // 페이지 범위 최대 5개까지
    const pageRange = ref([{page: 0, isCurrent: false}])
    // 페이지 정보
    let pagination: Pagination = reactive(bindPaginationInstance({
      page: 1,
      unit: 20,
      totalCount: 0,
      totalPage: 1
    }))
    // 체크 리스트
    let selectedItemList: any = []
    // 그리드 검색조건
    const showGridSearch = ref(false)
    // 그리드 옵션
    const gridOptions = props.gridOptions
    // 체크박스 다중 선택
    gridOptions.rowSelection = 'multiple'
    // 행 클릭 시 체크박스가 선택되지 않음
    gridOptions.suppressRowClickSelection = true
    // 셀 마우스 오버 시 hover 스타일이 적용되지 않음
    gridOptions.suppressRowHoverHighlight = true
    // 그리드 사이즈 변경 시 컬럼 길이 재조정
    gridOptions.onGridSizeChanged = (params: any) => {
      params.api.sizeColumnsToFit()
      // detail 이 확장된 경우 높이 재조정
      params.api.forEachNode((rowNode: RowNode) => {
        if (rowNode.data.isFullWidth) setDetailRowHeight(rowNode)
      })
    }
    gridOptions.onSortChanged = (params: any) => {
      // sorting event
    }
    // 행이 선택될 때 클래스 추가 (커스텀)
    gridOptions.rowClassRules = {
      'row-clicked': (params: any) => params.data.selected
    }
    // 셀 클릭 시
    gridOptions.onCellClicked = (params: any) => {
      // 선택 영역 표시
      gridOptions.api.forEachNode((rowNode: RowNode) => {
        const newData: any = rowNode.data
        // 디테일 영역은 적용되지 않도록 분기
        if (!rowNode.data.isFullWidth) {
          newData.selected = params.data.id === newData.id
          rowNode.setData(newData)
        }
      })
      // 첫번째 셀 (디테일 확장) 버튼을 클릭하면
      if (params.column.colId === '0') {
        if (!params.data.isExpanded) {
          collapseExpandingRow(params)
          expandRow(params)
        } else {
          collapseRow(params)
        }
      }
    }
    // 행이 detail(isFullWidth) 인지 체크
    const isFullWidth = (params: any) => {
      // 체크박스로 선택된 대상이라면 체크 유지
      _.forEach(selectedItemList, (item: any) => {
        if (item.id === params.rowNode.data.id && !params.rowNode.data?.isFullWidth)
          params.rowNode.selected = !params.rowNode.selected
      })
      if (params.rowNode.data?.isFullWidth) {
        // 확장된 상태에서 '전체선택' 시 선택 방지
        params.rowNode.selectable = false
        // detail 영역 높이 설정
        setDetailRowHeight(params.rowNode)
        return true
      }
    }
    // detail 영역 높이 설정
    const setDetailRowHeight = (rowNode: RowNode) => {
      // 인터벌을 줘서 querySelect 하기
      setTimeout(() => {
        const detailParent: any = document.querySelectorAll(`div[row-index="${rowNode.rowIndex}"]`)
        if (detailParent[0]?.childElementCount === 1) {
          const detailHeight: number = detailParent[0].childNodes[0].offsetHeight + 45
          rowNode.setRowHeight(detailHeight)
          gridOptions.api.onRowHeightChanged()
          gridOptions.api.ensureIndexVisible(rowNode.rowIndex, 'middle')
        }
      }, 100)
    }
    // 다른 셀이 확장되어있다면 접기
    const collapseExpandingRow = (params: any) => {
      setTimeout(() => {
        let expandedRow: RowNode | undefined = undefined
        for (const rowNode of params.api.getModel().rowsToDisplay) {
          if (rowNode.data.isExpanded && rowNode.rowIndex !== params.rowIndex) {
            expandedRow = rowNode
            break
          }
        }
        if (_.isUndefined(expandedRow)) return
        collapseRow(expandedRow)
      })
    }
    // 행 확장
    const expandRow = (params: any) => {
      const detailData = _.cloneDeep(params.data)
      detailData.isFullWidth = true
      detailData.selected = false
      params.data.isExpanded = true
      const newRowData = _.cloneDeep(getRowData())
      newRowData.splice(params.rowIndex + 1, 0, detailData)
      updateRowData(newRowData)
    }
    // 행 접기
    const collapseRow = (params: any) => {
      params.data.isExpanded = false
      const newRowData = _.cloneDeep(getRowData())
      newRowData.splice(params.rowIndex + 1, 1)
      updateRowData(newRowData)
      // 닫은 스크롤 위치 고정
      setTimeout(() => {
        gridOptions.api.ensureIndexVisible(params.rowIndex, 'middle')
      })
    }
    // 상세 컴포넌트 설정
    const fullWidthCellRenderer = gridOptions.fullWidthCellRenderer
    // 현재 그리드 리스트 가져오기
    const getRowData = () => {
      return rowData.value
    }
    // 페이지정보 텍스트 Set
    const setPageText = () => {
      if (rowData.value.length < 1) {
        pageRangeText.value = '0 - 0'
        totalPageText.value = '총 0 건'
      } else {
        pageRangeText.value = rowData.value[0].cellNo + " - " + rowData.value[rowData.value.length - 1].cellNo
        totalPageText.value = "총 " + pagination.totalCount + " 건"
      }
    }
    // 그리드 리스트 업테이트
    const updateRowData = (newRowData: any[]) => {
      // 기본 데이터 set
      let cellNo: number = 1 + (getCurrentPage() - 1) * pagination.unit
      for (const rowData of newRowData) {
        if (rowData.isFullWidth) continue
        rowData.cellNo = cellNo
        cellNo++
      }
      rowData.value = newRowData
      setPageText()
    }
    // 현재 페이지 가져오기
    const getCurrentPage = (): number => {
      const currentPage = _.find(pageRange.value, {isCurrent: true})
      return _.isUndefined(currentPage) ? 0 : currentPage.page
    }
    // 현 페이지 범위 가져오기
    const getCurrentPageNums= (): number[] => {
      return _.map(pageRange.value, 'page')
    }
    // 현 페이지 범위 최댓값 가져오기
    const getMaxPage = (): number => {
      return _.max(getCurrentPageNums())!
    }
    // 현 페이지 정보 가져오기
    const getPageInfo = (): Pagination => {
      return pagination
    }
    // 그리드 페이징 버튼 범위 설정, 페이징 버튼은 최대 5개까지 보여진다
    const setPageInfo = (newPagination: Pagination) => {
      // 신규 데이터 기존 데이터에 merge
      _.merge(pagination, newPagination)
      const pageArray: number[] = getCurrentPageNums()
      // 이동할려는 페이지가 현 페이지 범위내에 존재하지 않는다면 or 디폴트 데이터인 경우
      if (!_.inRange(pagination.page, _.min(pageArray)!, _.max(pageArray)! + 1) || pageArray[0] === 0 || getMaxPage() != pagination.totalPage) {
        // 새로은 페이지 범위 생성
        const newPageRange: any[] = []
        let startPage: number = 1
        if (pagination.page - pageArray[0] === 5) {
          startPage = pagination.page
        } else if (pageArray[0] - pagination.page === 1) {
          startPage = pagination.page - 4
        } else if (pagination.page === pagination.totalPage) {
          startPage = 1 + Math.floor(pagination.page / 5) * 5
        }
        const endPage: number = pagination.totalPage < startPage + 4 ? pagination.totalPage + 1 : startPage + 5
        if (startPage === 1 && endPage === 1) {
          newPageRange.push({
            page: 0,
            isCurrent: true
          })
        } else {
          _.forEach(_.range(startPage, endPage), it => {
            newPageRange.push({
              page: it,
              isCurrent: it === pagination.page
            })
          })
        }
        pageRange.value = newPageRange
      } else {
        _.forEach(pageRange.value, it => { it.isCurrent = it.page === pagination.page })
      }
    }
    // 페이지 이동
    const goToPage = (page: number | null, isForward: boolean | null = null) => {
       // 같은 페이지, 1페이지 ~ 마지막페이지 범위에서 벗어나는 경우
      if (!_.isNull(page) && (pagination.page === page || page! < 1 || page! > pagination.totalPage)) return
      if (_.isNull(page) && !_.isNull(isForward)) {
        const pageArray: number[] = getCurrentPageNums()
        page = isForward ? pageArray[4] + 1 : pageArray[0] - 1
      }
      pagination.page = page!
      emit('read', pagination)
    }
    // 체크박스 리스트 동기화
    const setSelectedItemList = (list: any) => {
      selectedItemList = list
    }
    //
    const setShowGridSearch = () => {
      showGridSearch.value = !showGridSearch.value
    }
    return {
      rowData,
      pageRangeText,
      totalPageText,
      pageRange,
      pagination,
      fullWidthCellRenderer,
      showGridSearch,
      isFullWidth,
      getRowData,
      updateRowData,
      getPageInfo,
      setPageInfo,
      goToPage,
      getCurrentPage,
      getCurrentPageNums,
      getMaxPage,
      setSelectedItemList,
      setShowGridSearch
    }
  }
})
</script>
