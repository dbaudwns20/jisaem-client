<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="column is-4 is-offset-4">
        <div class="container">
          <div class="box">
            <form @submit.prevent="signIn($event)" novalidate>
              <div class="field">
                <div class="level is-mobile label">
                  <p class="level-left"><label class="label">아이디</label></p>
                  <p class="level-right">
                    <router-link :to="signInParentPath" tag="a" tabindex="-1">
                      <small>부모 계정이신가요?</small>
                    </router-link>
                  </p>
                </div>
                <Username :placeholder="'아이디를 입력해주세요'" icons-left="fa-solid fa-user"
                          :is-required="true" v-model="username"/>
              </div>
              <div class="field">
                <div class="level is-mobile label">
                  <p class="level-left"><label class="label">비밀번호</label></p>
                  <p class="level-right">
                    <router-link :to="resetPasswordPath" tag="a" tabindex="-1">
                      <small>비밀번호 초기화</small>
                    </router-link>
                  </p>
                </div>
                <Password :placeholder="'비밀번호를 입력해주세요'" :is-required="true" v-model="password"/>
              </div>
              <div class="field">
                <button class="button is-fullwidth is-info" type="submit"><strong>로그인</strong></button>
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
import { SignInParent, ResetPassword } from "@/routers/auth.router"
import { Dashboard } from "@/routers/dashboard.router"

import AuthGrpcService from "@/services/auth.grpc.service"
import Username from "@/components/input/Username.vue"
import Password from "@/components/input/Password.vue"

import utils from "@/utils/utils"
import store from "@/stores/store"
import router from "@/routers/router"

export default defineComponent({
  name: "SignIn",
  components: {
    Username,
    Password
  },
  setup() {
    const username = ref('')
    const password = ref('')
    const signInParentPath = SignInParent.path
    const resetPasswordPath = ResetPassword.path
    return {
      username,
      password,
      signInParentPath,
      resetPasswordPath
    }
  },
  methods: {
    async signIn(form: any) {
      if (!utils.validator.validateForm(form.target)) return
      const res = await AuthGrpcService.signInNormal(this.username, this.password)
      await store.commit("sessionStore/signIn", res)
      await router.push(Dashboard.path)
    }
  }
})
</script>
<style lang="scss">

</style>
