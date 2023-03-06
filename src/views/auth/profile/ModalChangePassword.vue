<template>
  <AppModal :title="'비밀번호변경'">
    <template v-slot:modalContent>
      <form @submit.prevent="updatePassword" novalidate>
        <Password :label="'기존비밀번호'"
                  :is-required="true"
                  :is-login="true"
                  v-model="prevPassword" />
        <Password :label="'신규비밀번호'"
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
import { defineComponent, ref } from 'vue'
import AppModal from "@/components/AppModal.vue"
import Password from "@/components/input/Password.vue"
import authGrpcService from "@/services/auth.grpc.service"

import utils from "@/utils/utils"

export default defineComponent({
  name: "ModalChangePassword",
  components: {
    AppModal,
    Password
  },
  setup(props, { emit }) {
    const prevPassword = ref('')
    const newPassword = ref('')

    const updatePassword = async (form: any) => {
      if (!utils.validator.validateForm(form.target)) return
      await authGrpcService.passwordUpdate(prevPassword.value, newPassword.value)
      await emit("complete-function", '수정되었습니다', true)
    }

    return {
      prevPassword,
      newPassword,
      updatePassword
    }
  }
})
</script>
