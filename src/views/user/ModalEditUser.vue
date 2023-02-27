<template>
  <AppModal :title="'사용자편집'">
    <template v-slot:modalContent>
      <form @submit.prevent="updateUser" novalidate>
        <Username :label="'아이디'"
                  :is-required="true"
                  :dup-check-target="'user'"
                  :placeholder="'아이디를 입력해주세요'"
                  icons-left="fa-solid fa-user"
                  v-model="editUser.username"/>
        <Text :label="'이름'" icons-left="fa-solid fa-user"
              :is-required="true" :placeholder="'이름을 입력해 주세요'"
              v-model="editUser.name" />
        <div class="field">
          <div class="columns">
            <div class="column">
              <Email :label="'이메일'" :is-login="false"
                     :placeholder="'이메일을 입력해주세요'"
                     v-model="editUser.email" />
            </div>
            <div class="column">
              <Text :label="'전화번호'" icons-left="fa-solid fa-mobile"
                    :placeholder="'(-) 없이 숫자로만 입력해주세요'"
                    v-model="editUser.phone" />
            </div>
          </div>
        </div>
        <Text :label="'학교명'" icons-left="fa-solid fa-school" v-if="isStudent"
              :placeholder="'학교명을 입력해주세요'"
              v-model="editStudentInfo.school" />
        <div class="field" v-if="isStudent">
          <label class="label">
            {{ '메모' }}
          </label>
          <textarea class="textarea has-fixed-size" placeholder="메모를 적어주세요"
                    v-model="editStudentInfo.description"
                    rows="3" />
        </div>
        <div class="field">
          <div class="buttons is-centered">
            <button class="button is-info" type="submit">저장</button>
          </div>
        </div>
      </form>
    </template>
  </AppModal>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue"

import { AuthLevel } from "@/models/auth/auth.level"
import { User } from "@/models/user/user"
import { StudentInfo } from "@/models/user/student.info"
import { bindUpdateUser, getUpdateUserKeys } from "@/models/user/update.user"

import AppModal from "@/components/AppModal.vue"
import Username from "@/components/input/Username.vue"
import Email from "@/components/input/Email.vue"
import Text from "@/components/input/Text.vue"

import userGrpcService from "@/services/user.grpc.service"

import utils from "@/utils/utils"
import _ from 'lodash'

export default defineComponent({
  name: "ModalEditUser",
  props: ['userId', 'userAuthLevel'],
  components: {
    AppModal,
    Username,
    Email,
    Text
  },
  setup(props, { emit }) {
    const editUser = reactive({} as User)
    const editStudentInfo = reactive({} as StudentInfo)
    const defaultUser = reactive({} as User)
    const defaultStudentInfo = reactive({} as StudentInfo)

    const userId: string = props.userId
    const authLevel: AuthLevel = props.userAuthLevel
    const isStudent = utils.authority.isStudent(authLevel)

    const getUser = async () => {
      const res = await userGrpcService.getUser(userId)
      await Object.assign(editUser, res)
      await Object.assign(defaultUser, res)
      await Object.assign(editStudentInfo, res.studentInfo)
      await Object.assign(defaultStudentInfo, res.studentInfo)
    }

    const updateUser = async (form: any) => {
      const updatedUserFields = utils.getUpdatedFields(defaultUser, editUser, getUpdateUserKeys())
      const updatedStudentInfoFields = utils.getUpdatedFields(defaultStudentInfo, editStudentInfo)
      if (_.isEmpty(updatedUserFields) && _.isEmpty(updatedStudentInfoFields)) {
        utils.message.showWarningToastMsg("변경사항이 없습니다")
        return
      }
      if (!utils.validator.validateForm(form.target)) return
      editUser.studentInfo = editStudentInfo
      await userGrpcService.updateUser(userId, bindUpdateUser(editUser))
      await emit("complete-function", '수정되었습니다', true)
    }
    onMounted(() => {
      getUser()
    })
    return {
      editUser,
      editStudentInfo,
      isStudent,
      updateUser
    }
  }
})
</script>
