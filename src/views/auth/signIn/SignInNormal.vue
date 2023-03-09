<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <form class="login-form" @submit.prevent="signIn($event)" novalidate>
        <div class="field">
          <div class="level is-mobile label">
            <p class="level-left"><label class="label required">아이디</label></p>
            <p class="level-right">
              <router-link :to="signInParentPath" tag="a" tabindex="-1">
                <small>부모님 계정이신가요?</small>
              </router-link>
            </p>
          </div>
          <Username :placeholder="'아이디를 입력해주세요'"
                    :is-required="true"
                    :is-login="true"
                    v-model="username" />
        </div>
        <Password :label="'비밀번호'"
                  :placeholder="'비밀번호를 입력해주세요'"
                  :is-required="true"
                  v-model="password" />
        <div class="field">
          <button class="button is-fullwidth is-info" type="submit"><strong>로그인</strong></button>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { SignInParent } from '@/routers/auth.router'
import { Dashboard } from '@/routers/dashboard.router'

import Username from '@/components/input/Username.vue'
import Password from '@/components/input/Password.vue'

import authGrpcService from '@/services/auth.grpc.service'

import utils from '@/utils/utils'
import store from '@/stores/store'
import router from '@/routers/router'

export default defineComponent({
  name: 'SignIn',
  components: {
    Username,
    Password
  },
  setup() {
    const username = ref('')
    const password = ref('')
    return {
      username,
      password,
      signInParentPath: SignInParent.path
    }
  },
  methods: {
    async signIn(form: any) {
      if (!utils.validator.validateForm(form.target)) return
      const res = await authGrpcService.signInNormal(this.username, this.password)
      store.commit('sessionStore/signIn', res)
      await router.push(Dashboard.path)
    }
  }
})
</script>
