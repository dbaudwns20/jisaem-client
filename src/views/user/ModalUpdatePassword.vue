<template>
  <AppModal :title="isParent ? '부모님비밀번호 변경' : '비밀번호 변경'">
    <template v-slot:modalContent>
      <form @submit.prevent="updatePassword" novalidate>
        <Password :label="'신규비밀번호'" ref="passwordComp"
                  :is-required="true"
                  :is-login="false"
                  v-model="newPassword" />
        <div class="buttons is-centered">
          <button class="button is-info" type="submit">비밀번호 변경</button>
        </div>
      </form>
    </template>
  </AppModal>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import AppModal from "@/components/AppModal.vue"
import Password from "@/components/input/Password.vue"

import userGrpcService from "@/services/user.grpc.service"

import utils from "@/utils/utils"

export default defineComponent({
  Name: 'ModalUpdatePassword',
  props: ['userId', 'isParent'], // TODO 이거 함수?
  components: {
    AppModal, Password
  },
  setup(props, { emit }) {
    const passwordComp = ref()
    const newPassword = ref('')
    const userIdList: string[] = props.userId.indexOf(",") > 0 ? props.userId.split(",") : [props.userId]

    const updatePassword = async (form: any) => {
      if (!utils.validator.validateForm(form.target)) return
      if (props.isParent)
        await userGrpcService.updateUserParentPassword(userIdList, newPassword.value)
      else
        await userGrpcService.updateUserPassword(userIdList, newPassword.value)
      emit("complete-function", '비밀번호가 변경되었습니다', true, true)
    }

    onMounted(() => {
      passwordComp.value.focusin()
    })

    return {
      passwordComp,
      newPassword,
      updatePassword
    }
  }
})
</script>
