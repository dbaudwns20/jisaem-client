<template>
  <div class="grid-detail-row">
    <form class="detail-content" @submit.prevent="saveEditUser" novalidate>
      <div class="field is-horizontal is-full" v-if="userInfo?.userLabelList?.length > 0">
        <div class="field-label is-small">
          <label class="label">레이블</label>
        </div>
        <div class="field-body">
          <div class="field">
            <LabelElementList :params="{data: {userLabelList: userInfo.userLabelList},
                                        size: 'is-small',
                                        labelClass: 'detail-label-list'}"/>
          </div>
        </div>
      </div>
     <Username v-model="userInfo.username" :key="componentKey"
                ref="usernameComp"
                :label="'아이디'"
                :is-disabled="!isEdit"
                :is-required="true"
                :is-horizontal="true"
                :dup-check-target="'user'"
                :placeholder="'아이디를 입력해주세요'" />
      <Text v-model="userInfo.name" :key="componentKey"
            icons-left="fa-solid fa-user"
            :is-horizontal="true"
            :is-required="true"
            :is-disabled="!isEdit"
            :placeholder="'이름을 입력해주세요'"
            :label="'이름'" />
      <Phone v-model="userInfo.phone" :key="componentKey"
             :placeholder="'(-) 없이 숫자로만 입력해주세요'"
             :label="'전화번호'"
             :is-disabled="!isEdit"
             :is-horizontal="true" />
      <Email v-model="userInfo.email" :key="componentKey"
             :placeholder="'이메일을 입력해주세요'"
             :label="'이메일'"
             :is-disabled="!isEdit"
             :is-horizontal="true" />
      <Text v-model="studentInfo.school" v-if="isStudent" :key="componentKey"
            icons-left="fa-solid fa-school"
            :is-horizontal="true"
            :is-disabled="!isEdit"
            :placeholder="'학교를 입력해주세요'"
            :label="'학교'" />
      <div class="field is-horizontal" v-if="isStudent">
        <div class="field-label is-small">
          <label class="label">메모</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea has-fixed-size is-small"
                        rows="2"
                        placeholder="메모를 적어주세요"
                        :disabled="!isEdit"
                        v-model="studentInfo.description">
              </textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-parent-fields" v-if="isStudent && parentInfo.active">
        <Username v-model="parentInfo.username" :key="componentKey"
                  :label="'부모님아이디'"
                  :is-required="true"
                  :is-horizontal="true"
                  :is-disabled="!isEdit"
                  :dup-check-target="'user'"
                  :placeholder="'부모님아이디를 입력해주세요'" />
        <Phone v-model="parentInfo.phone" :key="componentKey"
               :placeholder="'(-) 없이 숫자로만 입력해주세요'"
               :label="'부모님전화번호'"
               :is-disabled="!isEdit"
               :is-horizontal="true" />
      </div>
      <div class="detail-content-buttons">
        <div class="buttons is-right">
          <button class="button is-info is-light is-small has-tooltip-arrow" data-tooltip="편집"
                  v-if="!isEdit"
                  @click="doEditUser">
            <span class="icon"><i class="fas fa-pencil"></i></span>
          </button>
          <button class="button is-info is-light is-small has-tooltip-arrow" data-tooltip="저장"
                  v-if="isEdit" type="submit">
            <span class="icon"><i class="fa-solid fa-floppy-disk"></i></span>
          </button>
          <button class="button is-info is-light is-small has-tooltip-arrow" data-tooltip="취소"
                  v-if="isEdit"
                  @click="doEditUser">
            <span class="icon"><i class="fa-solid fa-xmark"></i></span>
          </button>
          <button class="button is-info is-light is-small has-tooltip-arrow" data-tooltip="삭제" @click="deleteUser">
            <span class="icon"><i class="fas fa-trash"></i></span>
          </button>
          <button class="button is-info is-light is-small has-tooltip-arrow" data-tooltip="비밀번호변경" @click="updatePassword($event, false)">
            <span class="icon"><i class="fa-solid fa-lock"></i></span>
          </button>
          <button v-if="isStudent && !parentInfo.active" class="button is-info is-light is-small has-tooltip-arrow" data-tooltip="부모님정보생성" @click="addUserParentInfo">
            <span class="icon"><i class="fa-solid fa-user-plus"></i></span>
          </button>
          <button v-if="isStudent && parentInfo.active" class="button is-info is-light is-small has-tooltip-arrow" data-tooltip="부모님정보삭제" @click="deleteUserParentInfo">
            <span class="icon"><i class="fa-solid fa-user-xmark"></i></span>
          </button>
          <button v-if="isStudent && parentInfo.active" class="button is-info is-light is-small has-tooltip-arrow" data-tooltip="부모님비밀번호변경" @click="updatePassword($event, true)">
            <span class="icon"><i class="fa-solid fa-user-lock"></i></span>
          </button>
          <button class="button is-info is-light is-small has-tooltip-arrow" data-tooltip="레이블관리" @click="manageUserLabel">
            <span class="icon"><i class="fa-solid fa-tags"></i></span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted} from "vue"
import { bindUpdateUser } from "@/models/user/update.user"
import { User } from "@/models/user/user"
import { getStudentInfoKeys, StudentInfo } from "@/models/user/student.info"
import { getParentInfoKeys, ParentInfo } from "@/models/user/parent.info"

import LabelElementList from "@/components/label/LabelElementList.vue"
import Username from "@/components/input/Username.vue"
import Text from "@/components/input/Text.vue"
import Phone from "@/components/input/Phone.vue"
import Email from "@/components/input/Email.vue"

import userGrpcService from "@/services/user.grpc.service"

import utils from "@/utils/utils"
import _ from "lodash"

const props = defineProps(['params'])
const params = props.params
const componentKey = ref(false)
const isEdit = ref(false)
// 학생여부
const isStudent: boolean = utils.authority.isStudent(params.data.authLevel)
// 사용자 정보
const userInfo = reactive({} as User)
const studentInfo = reactive({} as StudentInfo)
const parentInfo = reactive({} as ParentInfo)
// 사용자 정보 기본값
const defaultUserInfo = reactive({} as User)
const defaultStudentInfo = reactive({} as StudentInfo)
const defaultParentInfo = reactive({} as ParentInfo)
// 사용자페이지 페이지 컴포넌트
const parentComp = params.context.componentParent

// component
const usernameComp = ref()

// 컴포넌트 리로드
const reloadComponents = () => componentKey.value = !componentKey.value

// 편집 or 취소
const doEditUser = () => {
  isEdit.value = !isEdit.value
  // 취소 시 데이터 롤백
  if (!isEdit.value) {
    Object.assign(userInfo, defaultUserInfo)
    Object.assign(studentInfo, defaultStudentInfo)
    Object.assign(parentInfo, defaultParentInfo)
    // 컴포넌트 리로드
    reloadComponents()
  } else {
    // 첫번째 필드에 focus
    usernameComp.value.focusin()
  }
}
// 편집내용 저장
const saveEditUser = (form: any) => {
  const updatedUserFields = utils.getUpdatedFields(defaultUserInfo, userInfo)
  const updatedStudentInfoFields = utils.getUpdatedFields(defaultStudentInfo, studentInfo, getStudentInfoKeys())
  const updatedParentInfoFields = utils.getUpdatedFields(defaultParentInfo, parentInfo, getParentInfoKeys())
  if (_.isEmpty(updatedUserFields) && _.isEmpty(updatedStudentInfoFields) && _.isEmpty(updatedParentInfoFields)) {
    utils.message.showWarningToastMsg("변경사항이 없습니다")
    return
  }
  if (!utils.validator.validateForm(form.target)) return
  const reqData = updatedUserFields
  if (!_.isEmpty(updatedStudentInfoFields))
    _.merge(updatedUserFields, {studentInfo: updatedStudentInfoFields})
  if (!_.isEmpty(updatedParentInfoFields))
    _.merge(updatedUserFields, {parentInfo: updatedParentInfoFields})
  // Api 호출
  parentComp.editUser(userInfo.id, bindUpdateUser(reqData))
}
// 사용자 삭제
const deleteUser = (event: any) => {
  event.preventDefault()
  parentComp.deleteUser(userInfo.id)
}
// 부모님정보 생성
const addUserParentInfo = (event: any) => {
  event.preventDefault()
  parentComp.addUserParentInfo(userInfo.id)
}
// 부모님정보 삭제
const deleteUserParentInfo = (event: any) => {
  event.preventDefault()
  parentComp.deleteUserParentInfo(userInfo.id)
}
// 사용자 or 부모님 비밀번호 업데이트
const updatePassword = (event: any, isParent: boolean) => {
  event.preventDefault()
  parentComp.updatePassword(isParent, userInfo.id)
}
// 레이블 관리
const manageUserLabel = (event: any) => {
  event.preventDefault()
  parentComp.manageUserLabel(userInfo.id, userInfo.userLabelList)
}
// 이용자 조회
const getUser = async () => {
  const res = await userGrpcService.getUser(params.data.id)
  Object.assign(userInfo, res)
  Object.assign(studentInfo, res.studentInfo)
  Object.assign(parentInfo, res.parentInfo)
  Object.assign(defaultUserInfo, _.cloneDeep(userInfo))
  Object.assign(defaultStudentInfo, _.cloneDeep(studentInfo))
  Object.assign(defaultParentInfo, _.cloneDeep(parentInfo))
}
onMounted(() => {
  getUser()
})
</script>
