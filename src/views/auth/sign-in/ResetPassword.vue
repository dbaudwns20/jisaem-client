<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="column is-4 is-offset-4">
        <div class="container">
          <div class="box">
            <form class="container" @submit.prevent="updatePassword($event)" novalidate>
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { SignInNormal, SignInParent } from "@/routers/auth.router"
import { Dashboard } from "@/routers/dashboard.router"

import AuthGrpcService from "@/services/auth.grpc.service"
import Password from "@/components/input/Password.vue"

import utils from "@/utils/utils"
import store from "@/stores/store"
import router from "@/routers/router"

export default defineComponent({
  name: "SignIn",
  components: {
    Password
  },
  setup() {
    const password = ref('')
    return {
      password,
    }
  },
  methods: {
    goBack() {
      router.back()
    }
  }
})
</script>
<style lang="scss">

</style>
