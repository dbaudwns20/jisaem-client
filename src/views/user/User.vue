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
      <div class="tabs is-boxed is-fullwidth is-marginless">
        <ul>
          <li :class="{ 'is-active': currentAuthLabel === authLevel.AUTH_LEVEL_UNSPECIFIED }" @click="setCurrentAuthLevel(authLevel.AUTH_LEVEL_UNSPECIFIED)"><a><strong>전체</strong></a></li>
          <li :class="{ 'is-active': currentAuthLabel === authLevel.AUTH_LEVEL_STUDENT }" @click="setCurrentAuthLevel(authLevel.AUTH_LEVEL_STUDENT)"><a><strong>학생</strong></a></li>
          <li :class="{ 'is-active': currentAuthLabel === authLevel.AUTH_LEVEL_TEACHER }" @click="setCurrentAuthLevel(authLevel.AUTH_LEVEL_TEACHER)"><a><strong>선생님</strong></a></li>
          <li :class="{ 'is-active': currentAuthLabel === authLevel.AUTH_LEVEL_MANAGER }" @click="setCurrentAuthLevel(authLevel.AUTH_LEVEL_MANAGER)"><a><strong>관리자</strong></a></li>
        </ul>
      </div>
      <div class="grid-header">
        <div class="grid-header-buttons">
          <div class="grid-header-left">
            <div class="buttons">
              <button class="button is-small has-tooltip-arrow"
                      data-tooltip="추가"
                      v-if="currentAuthLabel !== authLevel.AUTH_LEVEL_UNSPECIFIED" @click="addNewUser">
                <span class="icon"><i class="fa-solid fa-plus"></i></span>
              </button>
              <button class="button is-small has-tooltip-arrow"
                      data-tooltip="삭제"
                      v-if="selectedItemList.length > 0" @click="deleteUser(null)">
                <span class="icon"><i class="fa-solid fa-trash"></i></span>
              </button>
              <button class="button is-small has-tooltip-arrow"
                      data-tooltip="레이블관리"
                      v-if="selectedItemList.length > 0" @click="manageUserLabel(null)">
                <span class="icon"><i class="fa-solid fa-tags"></i></span>
              </button>
              <button class="button is-small has-tooltip-arrow"
                      data-tooltip="비밀번호변경"
                      v-if="selectedItemList.length > 0" @click="updatePassword(false, null)">
                <span class="icon"><i class="fa-solid fa-lock"></i></span>
              </button>
              <button class="button is-small has-tooltip-arrow"
                      data-tooltip="부모님정보삭제"
                      v-if="selectedItemList.length > 0 && showParentFunctionButtons"
                      @click="deleteUserParentInfo(null)">
                <span class="icon"><i class="fa-solid fa-user-xmark"></i></span>
              </button>
              <button class="button is-small has-tooltip-arrow"
                      data-tooltip="부모님비밀번호변경"
                      v-if="selectedItemList.length > 0 && showParentFunctionButtons"
                      @click="updatePassword(true, null)">
                <span class="icon"><i class="fa-solid fa-user-lock"></i></span>
              </button>
            </div>
          </div>
          <div class="grid-header-right">
            <div class="buttons">
              <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                      data-tooltip="새로고침"
                      @click="reload">
                <span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>
              </button>
              <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                      data-tooltip="검색조건"
                      @click="reload">
                <span class="icon"><i class="fa-solid fa-magnifying-glass"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <PagingGrid ref="userGrid" :grid-options="gridOptions" @read="read" />
    </div>
  </div>
  <router-view :auth-level="currentAuthLabel"
               @complete-function="completeFunction" />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, watch } from "vue"
import { bindPaginationInstance, Pagination } from "@/models/util/util"
import { AuthLevel } from "@/models/auth/auth.level"
import { ParentInfo } from "@/models/user/parent.info"
import {
  ModalCreateParent,
  ModalCreateUser,
  ModalEditParent,
  ModalEditUser,
  ModalManageUserLabel,
  ModalUpdatePassword
} from "@/routers/user.router"

import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import PagingGrid from "@/components/grid/PagingGrid.vue"
import UserDetail from "@/views/user/UserDetail.vue"

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
    const currentAuthLabel = ref(AuthLevel.AUTH_LEVEL_UNSPECIFIED)
    const selectedItemList = ref([] as object[])
    const showParentFunctionButtons = ref(false)
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
      // row detail component
      fullWidthCellRenderer: UserDetail,
      // 체크박스 선택 이벤트
      onRowSelected: (params: any) => {
        const idx = _.findIndex(selectedItemList.value, {id: params.data.id})
        if (idx === -1) {
          selectedItemList.value.push(params.data)
        } else {
          selectedItemList.value.splice(idx, 1)
        }
        // 부모님정보 기능 버튼이 보임여부 설정
        if (currentAuthLabel.value === AuthLevel.AUTH_LEVEL_STUDENT) {
          showParentFunctionButtons.value = _.filter(selectedItemList.value, (it: any) => { return it.parentInfo?.active }).length > 0
        }
      },
      onGridReady: (params: any) => {
        gridApi.value = params.api
        gridColumnApi.value = params.columnApi
      }
    })
    // 그리드 새로고침
    const reload = () => {
      read(userGrid.value.getPageInfo())
      // 체크박스 목록 초기화
      selectedItemList.value = []
    }
    // 조회
    const read = async (pageInfo: Pagination | null = null) => {
      // parameter set
      const id: string[] = ['lwbdkXa9Z4QgvVl9L1M1t']
      const page = bindPaginationInstance(pageInfo)
      const res: any = await userGrpcService.getUserList(id, currentAuthLabel.value, page)
      // rowData Set
      await userGrid.value.updateRowData(res.list)
      await userGrid.value.setPageInfo(res.pageInfo)
    }
    // 사용자 신규
    const addNewUser = () => {
      router.push(ModalCreateUser.path)
    }
    // 사용자 편집
    const editUser = (userId: string, userAuthLevel: AuthLevel) => {
      ModalEditUser.props.userId = userId
      ModalEditUser.props.userAuthLevel = userAuthLevel
      router.push(ModalEditUser)
    }
    // 사용자 삭제
    const deleteUser = async (userId: string | null) => {
      let result = confirm("삭제하시겠습니까?")
      if (result) {
        let idList: string[] = []
        if (_.isNull(userId))
          idList = _.map(selectedItemList.value, 'id')
        else
          idList.push(userId)
        await userGrpcService.deleteUser(idList)
        await completeFunction('삭제되었습니다')
        selectedItemList.value = []
      } else {
        return
      }
    }
    // 사용자 or 부모님 비밀번호 변경
    const updatePassword = (isParent: boolean, userId: string | null) => {
      if (_.isNull(userId)) {
        if (isParent)
          ModalUpdatePassword.props.userId = _.map(_.filter(selectedItemList.value, (it: any) => {
            return it.parentInfo?.active
          }), 'id').join(",")
        else
          ModalUpdatePassword.props.userId = _.map(selectedItemList.value, 'id').join(",")
      } else
        ModalUpdatePassword.props.userId = userId!
      ModalUpdatePassword.props.isParent = isParent
      router.push(ModalUpdatePassword)
    }
    // 부모님정보 생성
    const addUserParentInfo = (userId: string) => {
      ModalCreateParent.props.userId = userId
      router.push(ModalCreateParent)
    }
    // 부모님정보 편집
    const editUserParentInfo = (userId: string, parentInfo: ParentInfo) => {
      ModalEditParent.props.userId = userId
      ModalEditParent.props.userParentInfo = parentInfo
      router.push(ModalEditParent)
    }
    // 부모님정보 삭제
    const deleteUserParentInfo = async (userId: string | null) => {
      let result = confirm("삭제하시겠습니까?")
      if (result) {
        let idList: string[] = []
        if (_.isNull(userId))
          idList = _.map(_.filter(selectedItemList.value, (it: any) => {return it.parentInfo?.active}), 'id')
        else
          idList.push(userId)
        await userGrpcService.deleteUserParentInfo(idList)
        await completeFunction('삭제되었습니다')
        selectedItemList.value = []
      } else {
        return
      }
    }
    // 레이블 관리
    const manageUserLabel = (userId: string | null, userLabelList: any = null) => {
      if (_.isNull(userId)) {
        ModalManageUserLabel.props.userId = _.map(selectedItemList.value, 'id').join(",")
        ModalManageUserLabel.props.labelList = []
      } else {
        ModalManageUserLabel.props.userId = userId!
        ModalManageUserLabel.props.labelList = userLabelList
      }
      router.push(ModalManageUserLabel)
    }
    const setCurrentAuthLevel = (authLevel: AuthLevel) => {
      currentAuthLabel.value = authLevel
      if (authLevel === AuthLevel.AUTH_LEVEL_STUDENT)
        gridColumnApi.value.setColumnVisible('isParentInfo', true)
      else
        gridColumnApi.value.setColumnVisible('isParentInfo', false)
      gridApi.value.sizeColumnsToFit()
    }
    // 텝이 선택될 때 사용자 목록 재조회
    watch(() => currentAuthLabel.value, () => {
      read()
      // 체크박스 목록 초기화
      selectedItemList.value = []
    })
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
      // 체크박스 목록 초기화
      selectedItemList.value = []
      // 페이지 리로드
      read()
    }
    return {
      userGrid,
      currentAuthLabel,
      selectedItemList,
      showParentFunctionButtons,
      gridApi,
      gridColumnApi,
      gridOptions,
      setCurrentAuthLevel,
      read,
      reload,
      addNewUser,
      addUserParentInfo,
      editUserParentInfo,
      deleteUserParentInfo,
      updatePassword,
      manageUserLabel,
      editUser,
      deleteUser,
      completeFunction,
      authLevel: AuthLevel
    }
  }
})
</script>
<style lang="sass">
@import "~@/assets/sass/grid.sass"
</style>
