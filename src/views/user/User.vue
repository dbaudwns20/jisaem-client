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
          <li :class="{ 'is-active': isUnspecified(currentAuthLevel) }" @click="setCurrentAuthLevel(authLevel.AUTH_LEVEL_UNSPECIFIED)"><a><strong>전체</strong></a></li>
          <li :class="{ 'is-active': isStudent(currentAuthLevel) }" @click="setCurrentAuthLevel(authLevel.AUTH_LEVEL_STUDENT)"><a><strong>학생</strong></a></li>
          <li :class="{ 'is-active': isTeacher(currentAuthLevel) }" @click="setCurrentAuthLevel(authLevel.AUTH_LEVEL_TEACHER)"><a><strong>선생님</strong></a></li>
          <li :class="{ 'is-active': isManager(currentAuthLevel) }" @click="setCurrentAuthLevel(authLevel.AUTH_LEVEL_MANAGER)"><a><strong>관리자</strong></a></li>
        </ul>
      </div>
      <PagingGrid ref="userGrid" :grid-options="gridOptions" @read="read">
        <template v-slot:gridHeaderLeftContent>
          <div class="buttons">
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="추가"
                    v-if="currentAuthLevel !== authLevel.AUTH_LEVEL_UNSPECIFIED" @click="addNewUser">
              <span class="icon"><i class="fa-solid fa-plus"></i></span>
            </button>
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="삭제"
                    v-if="selectedItemList.length > 0" @click="deleteUser(null)">
              <span class="icon"><i class="fa-solid fa-trash"></i></span>
            </button>
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="레이블관리"
                    v-if="selectedItemList.length > 0" @click="manageUserLabel(null)">
              <span class="icon"><i class="fa-solid fa-tags"></i></span>
            </button>
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="비밀번호변경"
                    v-if="selectedItemList.length > 0" @click="updatePassword(false, null)">
              <span class="icon"><i class="fa-solid fa-lock"></i></span>
            </button>
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="부모님정보삭제"
                    v-if="selectedItemList.length > 0 && showParentFunctionButtons"
                    @click="deleteUserParentInfo(null)">
              <span class="icon"><i class="fa-solid fa-user-xmark"></i></span>
            </button>
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="부모님비밀번호변경"
                    v-if="selectedItemList.length > 0 && showParentFunctionButtons"
                    @click="updatePassword(true, null)">
              <span class="icon"><i class="fa-solid fa-user-lock"></i></span>
            </button>
          </div>
        </template>
        <template v-slot:gridHeaderRightContent>
          <div class="buttons">
            <button class="button is-small has-background-grey-lighter has-tooltip-arrow"
                    data-tooltip="검색조건"
                    @click="userGrid.setShowGridSearch">
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
                           v-model="userLabels" />
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
import { defineComponent, getCurrentInstance, onMounted, reactive, ref, watch } from "vue"
import { Label } from "@/models/label/label"
import { bindPaginationInstance, Pagination } from "@/models/util/util"
import { AuthLevel } from "@/models/auth/auth.level"
import { UpdateUser} from "@/models/user/update.user"
import {
  ModalCreateParent,
  ModalCreateUser,
  ModalManageUserLabel,
  ModalUpdatePassword
} from "@/routers/user.router"

import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import PagingGrid from "@/components/grid/PagingGrid.vue"
import UserDetail from "@/views/user/UserDetail.vue"
import LabelSelect from "@/components/label/LabelSelect.vue"
import Text from "@/components/input/Text.vue"

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
    PagingGrid,
    Text,
    LabelSelect
  },
  setup() {
    const userGrid = ref()
    const currentAuthLevel = ref(AuthLevel.AUTH_LEVEL_UNSPECIFIED)
    const selectedItemList = ref([] as object[])
    const showParentFunctionButtons = ref(false)
    const userLabels = ref([] as Label[])

    // AG Grid
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
        if (utils.authority.isStudent(currentAuthLevel.value)) {
          showParentFunctionButtons.value = _.filter(selectedItemList.value, (it: any) => {
            return it.parentInfo?.active
          }).length > 0
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
      const userLabelIdList: string[] = _.map(userLabels.value, 'id')
      const page = bindPaginationInstance(pageInfo)
      const res: any = await userGrpcService.getUserList(userLabelIdList, currentAuthLevel.value, page)
      // 1. pagination set
      await userGrid.value.setPageInfo(res.pageInfo)
      // 2. rowData Set
      await userGrid.value.updateRowData(res.list)
    }
    // 사용자 신규
    const addNewUser = () => {
      ModalCreateUser.props.userAuthLevel = currentAuthLevel.value
      router.push(ModalCreateUser.path)
    }
    // 사용자 편집
    const editUser = async (userId: string, updateUser: UpdateUser) => {
      await userGrpcService.updateUser(userId, updateUser)
      completeFunction('수정되었습니다')
    }
    // 사용자 삭제
    const deleteUser = async (userId: string | null) => {
      let result = confirm("삭제하시겠습니까?") // TODO manage text one place
      if (result) {
        let idList: string[] = []
        if (_.isNull(userId))
          idList = _.map(selectedItemList.value, 'id')
        else
          idList.push(userId)
        await userGrpcService.deleteUser(idList)
        completeFunction('삭제되었습니다')
      } else {
        return
      }
    }
    // 사용자 or 부모님 비밀번호 변경
    const updatePassword = (isParent: boolean, userId: string | null) => {
      if (_.isNull(userId)) {
        if (isParent)
          ModalUpdatePassword.props.userId = _.map(_.filter(selectedItemList.value, (it: any) => {return it.parentInfo?.active}), 'id').join(",")
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
        completeFunction('삭제되었습니다')
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
    // 텝이 선택될 때 사용자 목록 재조회
    const setCurrentAuthLevel = (authLevel: AuthLevel) => {
      currentAuthLevel.value = authLevel
      // 그리드 컬럼 숨김
      gridColumnApi.value.setColumnVisible('isParentInfo', utils.authority.isStudent(authLevel))
      gridApi.value.sizeColumnsToFit()
      // 체크박스 목록 초기화
      selectedItemList.value = []
      // 부모님정보 기능 버튼 보이기 초기화
      showParentFunctionButtons.value = false
      // 리스트 조회
      read()
    }

    watch(() => selectedItemList.value, () => {
        // 그리드에 선택한 목록 공유
        userGrid.value.setSelectedItemList(selectedItemList.value)
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
      // 체크박스 목록 초기화
      selectedItemList.value = []
      // 페이지 리로드
      read()
    }
    return {
      userGrid,
      userLabels,
      currentAuthLevel,
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
      deleteUserParentInfo,
      updatePassword,
      manageUserLabel,
      editUser,
      deleteUser,
      completeFunction,
      authLevel: AuthLevel,
      isUnspecified: utils.authority.isUnspecified,
      isStudent: utils.authority.isStudent,
      isParent: utils.authority.isParent,
      isTeacher: utils.authority.isTeacher,
      isManager: utils.authority.isManager,
    }
  }
})
</script>
<style lang="sass">
@import "~@/assets/sass/grid.sass"
</style>
