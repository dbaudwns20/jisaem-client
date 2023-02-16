<template>
  <AppNavbar />
  <div class="container">
    <section class="hero is-link is-small">
      <div class="hero-body">
        <p class="title">
          사용자
        </p>
      </div>
    </section>
    <div class="container">
      <div class="grid-header">
        <div class="grid-header-buttons">
          <div class="grid-header-left">
            <div class="buttons">
              <button class="button is-small is-success" @click="addNewUser">
                <span class="icon"><i class="fa-solid fa-plus"></i></span>
                <span><strong>추가</strong></span>
              </button>
            </div>
          </div>
          <div class="grid-header-right">
            <div class="buttons">
              <button class="button is-small has-background-grey-lighter" @click="reload">
                <span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>
                <span><strong>새로고침</strong></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <PagingGrid ref="userGrid" :grid-options="gridOptions"
                  @read="read" />
    </div>
  </div>
  <router-view @complete-function="completeFunction" />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, getCurrentInstance, onMounted } from "vue"
import { bindPaginationInstance, Pagination } from "@/models/util/util"
import { ModalCreateUser } from "@/routers/user.router"

import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import PagingGrid from "@/components/grid/PagingGrid.vue"

import userUiService from "@/services/user.ui.service"
import userGrpcService from "@/services/user.grpc.service"

import router from "@/routers/router"
import utils from "@/utils/utils"
import _ from "lodash"

export default defineComponent({
  name: "User",
  components: {
    AppNavbar,
    AppFooter,
    PagingGrid
  },
  setup() {
    const userGrid = ref()
    const gridApi = ref()
    const gridColumnApi = ref()
    const gridOptions = reactive({
      columnDefs: userUiService.setColumns(),
      defaultColDef: {
        resizable: true,
        sortable: true
      },
      // 레이블 인스턴스 Set (기능 호출을 위해)
      context: {
        componentParent: getCurrentInstance()!.proxy
      },
      onGridReady: (params: any) => {
        gridApi.value = params.api
        gridColumnApi.value = params.columnApi
      }
    })
    // 조회
    const read = async (pageInfo: Pagination | null = null) => {
      const id: string[] = ['lwbdkXa9Z4QgvVl9L1M1t']
      const page = bindPaginationInstance(pageInfo)
      const res: any = await userGrpcService.getUserList(id, page)
      // rowData Set
      await userGrid.value.updateRowData(res.list)
      await userGrid.value.setPageInfo(res.pageInfo)
    }
    const reload = () => {
      read(userGrid.value.getPageInfo())
    }
    const addNewUser = () => {
      router.push(ModalCreateUser.path)
    }
    // mount 사이클에서 레이블 조회
    onMounted(() => {
      read()
    })

    // 함수 호출 후 처리
    const completeFunction = (msg: string = '처리되었습니다', isFromModal: boolean = false) => {
      // 모달에서 호출된거라면 모달 닫기
      if (isFromModal) router.go(-1)
      // 메시지 출력
      utils.message.showSuccessToastMsg(msg)
    }
    return {
      userGrid,
      gridApi,
      gridColumnApi,
      gridOptions,
      read,
      reload,
      addNewUser,
      completeFunction
    }
  }
})
</script>

