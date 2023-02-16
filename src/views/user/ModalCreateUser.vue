<template>
  <AppModal>
    <template v-slot:modalContent>
      <form @submit.prevent="createUser" novalidate>
        <Username :label="'아이디'"
                  :is-required="true"
                  :is-dup-check="true"
                  :placeholder="'아이디를 입력해주세요'"
                  icons-left="fa-solid fa-user"
                  v-model="newUser.username"/>
        <Password :label="'비밀번호'"
                  :is-required="true"
                  :is-login="false"
                  v-model="newUser.password" />
        <Text :label="'이름'" icons-left="fa-solid fa-user"
              :is-required="true" :placeholder="'이름을 입력해 주세요'"
              v-model="newUser.name" />
        <Email :label="'이메일'" :is-login="false"
               :placeholder="'이메일을 입력해주세요'"
               v-model="newUser.email" />
        <Text :label="'전화번호'" icons-left="fa-solid fa-mobile"
              :placeholder="'(-) 없이 숫자로만 입력해주세요'"
              v-model="newUser.phone" />
        <div class="field">
          <button class="button is-fullwidth is-info" type="submit"><strong>생성</strong></button>
        </div>
      </form>
    </template>
  </AppModal>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { User } from "@/models/user/user"
import { LabelType } from "@/models/enum/label.type"

import AppModal from "@/components/AppModal.vue"
import Username from "@/components/input/Username.vue"
import Password from "@/components/input/Password.vue"
import Email from "@/components/input/Email.vue"
import Text from "@/components/input/Text.vue"

import utils from "@/utils/utils"

export default defineComponent({
  name: "ModalCreateUser",
  components: {
    AppModal,
    Username,
    Password,
    Email,
    Text
  },
  setup() {
    const newUser = reactive({} as User)

    const createUser = async (form: any) => {
      if (!utils.validator.validateForm(form.target)) return
    }

    return {
      newUser,
      labelType: LabelType,
      createUser
    }
  }
})
</script>
