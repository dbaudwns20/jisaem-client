<template>
  <div ref="userDetail" class="grid-detail-row">
    <ul>
      <li>
        <label>
          아이디
        </label>
        <span>{{ params.data.username }}</span>
      </li>
      <li>
        <label>
          이름
        </label>
        <span>{{ params.data.name }}</span>
      </li>
      <li>
        <label>
          전화번호
        </label>
        <span>{{ params.data.phone }}</span>
      </li>
      <li>
        <label>
          이메일
        </label>
        <span>{{ params.data.email }}</span>
      </li>
      <li>
        <label>
          생성일
        </label>
        <span>{{ covertDateToString(params.data.createdAt) }}</span>
      </li>
      <li v-if="isStudent">
        <label>
          학교
        </label>
        <span>{{ params.data.studentInfo?.school }}</span>
      </li>
      <li v-if="isStudent" class="li2">
        <label>
          메모
        </label>
        <span>{{ params.data.studentInfo?.description }}</span>
      </li>
      <li class="li4" v-if="params.data.userLabelList.length > 0">
        <label>
          레이블
        </label>
        <LabelElementList :params="{data: {userLabelList: params.data.userLabelList},
                                    size: 'is-small',
                                    labelClass: 'detail-label-list'}" />
      </li>
    </ul>
    <ul v-if="params.data.parentInfo?.active">
      <li>
        <label>
          부모님아이디
        </label>
        <span>{{ params.data.parentInfo?.username }}</span>
      </li>
      <li>
        <label>
          부모님전화번호
        </label>
        <span>{{ params.data.parentInfo?.phone }}</span>
      </li>
    </ul>
    <div class="buttons is-right">
      <button class="button is-small has-tooltip-arrow" data-tooltip="편집" @click="editUser">
        <span class="icon"><i class="fas fa-pencil"></i></span>
      </button>
      <button class="button is-small has-tooltip-arrow" data-tooltip="삭제" @click="deleteUser">
        <span class="icon"><i class="fas fa-trash"></i></span>
      </button>
      <button class="button is-small has-tooltip-arrow" data-tooltip="비밀번호변경" @click="updatePassword(false)">
        <span class="icon"><i class="fa-solid fa-lock"></i></span>
      </button>
      <button v-if="isStudent && !params.data.parentInfo?.active" class="button is-small has-tooltip-arrow" data-tooltip="부모님정보생성" @click="addUserParentInfo">
        <span class="icon"><i class="fa-solid fa-user-plus"></i></span>
      </button>
      <button v-if="isStudent && params.data.parentInfo?.active" class="button is-small has-tooltip-arrow" data-tooltip="부모님정보편집" @click="editUserParentInfo">
        <span class="icon"><i class="fa-solid fa-user-pen"></i></span>
      </button>
      <button v-if="isStudent && params.data.parentInfo?.active" class="button is-small has-tooltip-arrow" data-tooltip="부모님정보삭제" @click="deleteUserParentInfo">
        <span class="icon"><i class="fa-solid fa-user-xmark"></i></span>
      </button>
      <button v-if="isStudent && params.data.parentInfo?.active" class="button is-small has-tooltip-arrow" data-tooltip="부모님비밀번호변경" @click="updatePassword(true)">
        <span class="icon"><i class="fa-solid fa-user-lock"></i></span>
      </button>
      <button class="button is-small has-tooltip-arrow" data-tooltip="레이블관리" @click="manageUserLabel">
        <span class="icon"><i class="fa-solid fa-tags"></i></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import LabelElementList from "@/components/label/LabelElementList.vue"
import utils from "@/utils/utils"

const props = defineProps(['params'])
const params = props.params
const userDetail = ref()
// 유져페이지 페이지 컴포넌트
const parentComp = params.context.componentParent
// 학생여부
const isStudent = ref(utils.authority.isStudent(params.data.authLevel))
const covertDateToString = (date: Date): string => {
  return utils.convertDateToString(date)
}
const editUser = () => {
  parentComp.editUser(params.data.id, params.data.authLevel)
}
const deleteUser = () => {
  parentComp.deleteUser(params.data.id)
}
const addUserParentInfo = () => {
  parentComp.addUserParentInfo(params.data.id)
}
const editUserParentInfo = () => {
  parentComp.editUserParentInfo(params.data.id, params.data.parentInfo)
}
const deleteUserParentInfo = () => {
  parentComp.deleteUserParentInfo(params.data.id)
}
const updatePassword = (isParent: boolean) => {
  parentComp.updatePassword(isParent, params.data.id)
}
const manageUserLabel = () => {
  parentComp.manageUserLabel(params.data.id, params.data.userLabelList)
}
</script>
