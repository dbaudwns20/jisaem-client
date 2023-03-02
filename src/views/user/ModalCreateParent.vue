<template>
  <AppModal :title="'부모님정보 생성'">
    <template v-slot:modalContent>
      <form @submit.prevent="createParent" novalidate>
        <Username :label="'아이디'"
                  :is-required="true"
                  :dup-check-target="'parent'"
                  :placeholder="'아이디를 입력해주세요'"
                  icons-left="fa-solid fa-user"
                  v-model="newParentInfo.username"/>
        <Password :label="'비밀번호'" :show-inline="true"
                  :is-required="true"
                  :is-login="false"
                  v-model="newParentInfo.password"/>
        <Phone :label="'전화번호'"
               v-model="newParentInfo.phone" />
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
import { defineComponent, reactive } from 'vue'
import { ParentInfo } from "@/models/user/parent.info"

import AppModal from "@/components/AppModal.vue"
import Username from "@/components/input/Username.vue"
import Password from "@/components/input/Password.vue"
import Phone from "@/components/input/Phone.vue"

import userGrpcService from '@/services/user.grpc.service'

import utils from "@/utils/utils"

export default defineComponent({
  name: "ModalCreateUser",
  props: ['userId'],
  components: {
    AppModal,
    Username,
    Password,
    Phone
  },
  setup(props, { emit }) {
    const newParentInfo = reactive({} as ParentInfo)

    const createParent = async (form: any) => {
      if (!utils.validator.validateForm(form.target)) return
      await userGrpcService.createParent(newParentInfo, props.userId)
      await emit("complete-function", '생성되었습니다', true)
    }

    return {
      newParentInfo,
      createParent
    }
  }
})
</script>
