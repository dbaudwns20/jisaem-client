<template>
  <AppModal :title="'아이디변경'">
    <template v-slot:modalContent>
      <form @submit.prevent="updateUsername($event)" novalidate>
        <Username :label="'아이디'"
                  :is-required="true"
                  :dup-check-target="dupCheckTarget"
                  :placeholder="'변경할 아이디를 입력해주세요'"
                  v-model="newUsername"/>
        <div class="buttons is-centered">
          <button class="button is-info" type="submit">아이디 변경</button>
        </div>
      </form>
    </template>
  </AppModal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppModal from "@/components/AppModal.vue"
import Username from "@/components/input/Username.vue"
import AuthGrpcService from "@/services/auth.grpc.service"

import utils from "@/utils/utils"

export default defineComponent({
  name: "ModalChangeUsername",
  components: {
    AppModal,
    Username
  },
  setup(props, { emit }) {
    const newUsername = ref('')
    const dupCheckTarget = ref(utils.authority.isParent() ? 'parent' : 'user')

    const updateUsername = async (form: any) => {
      if (!utils.validator.validateForm(form.target)) return
      await AuthGrpcService.usernameUpdate(newUsername.value)
      await emit("complete-function", '수정되었습니다', true)
    }

    return {
      newUsername,
      dupCheckTarget,
      updateUsername
    }
  }
})
</script>
