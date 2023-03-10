<template>
  <AppModal :title="'사용자신규'">
    <template v-slot:modalContent>
      <form @submit.prevent="createUser" novalidate v-if="isStudent">
        <Username :label="'아이디'" ref="usernameComp"
                  :is-required="true"
                  :dup-check-target="'user'"
                  :placeholder="'아이디를 입력해주세요'"
                  v-model="newUser.username"/>
        <Password :label="'비밀번호'" :show-inline="true"
                  :is-required="true"
                  :is-login="false"
                  v-model="newUser.password" />
        <Text :label="'이름'" icons-left="fa-solid fa-user"
              :is-required="true" :placeholder="'이름을 입력해주세요'"
              v-model="newUser.name" />
        <div class="field">
          <div class="columns">
            <div class="column">
              <Email :label="'이메일'"
                     :placeholder="'이메일을 입력해주세요'"
                     v-model="newUser.email" />
            </div>
            <div class="column">
              <Phone :label="'전화번호'"
                     v-model="newUser.phone" />
            </div>
          </div>
        </div>
        <Text :label="'학교명'" icons-left="fa-solid fa-school"
              :placeholder="'학교명을 입력해주세요'"
              v-model="newStudentInfo.school" />
        <div class="field">
          <label class="label">
            {{ '메모' }}
          </label>
          <textarea class="textarea has-fixed-size" placeholder="메모를 적어주세요"
                    v-model="newStudentInfo.description"
                    rows="3" />
        </div>
        <div class="field">
          <div class="buttons is-centered">
            <button class="button is-info" type="submit">저장</button>
          </div>
        </div>
      </form>
      <form @submit.prevent="createUser" novalidate v-if="!isStudent">
        <Username :label="'아이디'" ref="usernameComp"
                  :is-required="true"
                  :dup-check-target="'user'"
                  :placeholder="'아이디를 입력해주세요'"
                  v-model="newUser.username"/>
        <Password :label="'비밀번호'" :show-inline="true"
                  :is-required="true"
                  :is-login="false"
                  v-model="newUser.password" />
        <Text :label="'이름'" icons-left="fa-solid fa-user"
              :is-required="true" :placeholder="'이름을 입력해주세요'"
              v-model="newUser.name" />
        <Email :label="'이메일'"
               :placeholder="'이메일을 입력해주세요'"
               v-model="newUser.email" />
        <Phone :label="'전화번호'"
               v-model="newUser.phone" />
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
import { defineComponent, reactive, ref, onMounted } from 'vue'
import { bindUserInstance, User } from "@/models/user/user"
import { StudentInfo } from "@/models/user/student.info"

import AppModal from "@/components/AppModal.vue"
import Username from "@/components/input/Username.vue"
import Password from "@/components/input/Password.vue"
import Email from "@/components/input/Email.vue"
import Text from "@/components/input/Text.vue"
import Phone from "@/components/input/Phone.vue"

import userGrpcService from '@/services/user.grpc.service'

import utils from "@/utils/utils"
import _ from 'lodash'

export default defineComponent({
  name: "ModalCreateUser",
  props: {
    userAuthLevel: { type: Number, required: true}
  },
  components: {
    AppModal,
    Username,
    Password,
    Email,
    Text,
    Phone
  },
  setup(props, { emit }) {
    const usernameComp = ref()
    const newUser = reactive({} as User)
    const newStudentInfo = reactive({} as StudentInfo)

    const createUser = async (form: any) => {
      if (!utils.validator.validateForm(form.target)) return
      if (!_.isEmpty(newStudentInfo.school) || !_.isEmpty(newStudentInfo.description)) {
        newUser.studentInfo = newStudentInfo
      }
      await userGrpcService.createUser(bindUserInstance(newUser), props.userAuthLevel)
      await emit("complete-function", '생성되었습니다', true)
    }

    onMounted(() => {
      usernameComp.value.focusin()
    })

    return {
      usernameComp,
      newUser,
      newStudentInfo,
      createUser,
      isStudent: utils.authority.isStudent(props.userAuthLevel)
    }
  }
})
</script>
