<template>
  <AppModal>
    <template v-slot:modalContent>
      <form @submit.prevent="updatePassword($event)" novalidate>
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
  setup() {
    const prevPassword = ref('')
    const newPassword = ref('')
    return {
      prevPassword,
      newPassword,
    }
  },
  methods: {
    async updatePassword(form: any) {
      if (!utils.validator.validateForm(form.target)) return
      await authGrpcService.passwordUpdate(this.prevPassword, this.newPassword)
      this.$emit("complete-function", '수정되었습니다', true)
    }
  }
})
</script>

<style scoped>

</style>
