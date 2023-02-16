<template>
  <ag-grid-vue id="myGrid" class="ag-theme-alpine"
               :rowData="rowData"
               :grid-options="gridOptions"
               :pagination="true"
               :localeText="{noRowsToShow: '조회 결과가 없습니다.'}">
  </ag-grid-vue>
  <div class="grid-footer">
    <nav class="pagination is-small is-centered" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
        <li>
          <a class="pagination-link" :class="{'is-disabled': getCurrentPage() === 1}"
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
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { bindPaginationInstance, Pagination } from "@/models/util/util"

import { AgGridVue } from "ag-grid-vue3"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

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
    const rowData = ref([])
    // 페이지 범위 최대 5개까지
    const pageRange = ref([{page: 0, isCurrent: false}])
    // 페이지 정보
    let pagination: Pagination = reactive(bindPaginationInstance({
      page: 1,
      unit: 20,
      totalCount: 0,
      totalPage: 0,
    }))
    // 그리드 옵션
    const gridOptions = props.gridOptions
    // 기본 페이징 관리 부분 숨기기 (API 컨트롤 불가)
    gridOptions.suppressPaginationPanel = true
    // 그리드 사이즈 변경 시 컬럼 길이 재조정
    gridOptions.onGridSizeChanged = (params: any) => {
      params.api.sizeColumnsToFit()
    }
    const getRowData = () => {
      return rowData.value
    }
    const setRowNum = () => {
      console.log(gridOptions.api.getModel())
    }
    const updateRowData = (newRowData: []) => {
      rowData.value = newRowData
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
      if (!_.inRange(pagination.page, _.min(pageArray)!, _.max(pageArray)! + 1) || pageArray[0] === 0) {
        // 새로은 페이지 범위 생성
        let newPageRange: any[] = []
        let startPage: number = 1
        if (pagination.page - pageArray[0] === 5) {
          startPage = pagination.page
        } else if (pageArray[0] - pagination.page === 1) {
          startPage = pagination.page - 4
        } else if (pagination.page === pagination.totalPage) {
          startPage = 1 + Math.floor(pagination.page / 5) * 5
        }
        const endPage: number = pagination.totalPage < startPage + 4 ? pagination.totalPage + 1 : startPage + 5
        _.forEach(_.range(startPage, endPage), it => {
          newPageRange.push({
            page: it,
            isCurrent: it === pagination.page
          })
        })
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
    return {
      rowData,
      pageRange,
      pagination,
      getRowData,
      updateRowData,
      getPageInfo,
      setPageInfo,
      goToPage,
      getCurrentPage,
      getCurrentPageNums,
      getMaxPage
    }
  }
})
</script>
