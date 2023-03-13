<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <form class="login-form" @submit.prevent="signIn($event)" novalidate>
        <Username :label="'아이디'" ref="usernameComp"
                  :placeholder="'부모님계정을 입력해주세요'"
                  :is-required="true"
                  :is-login="true"
                  v-model="username"/>
        <Password :label="'비밀번호'"
                  :placeholder="'비밀번호를 입력해주세요'"
                  :is-required="true"
                  v-model="password" />
        <div class="field">
          <button class="button is-fullwidth is-link" type="submit"><strong>로그인</strong></button>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { SignInNormal } from '@/routers/auth.router'
import { Dashboard } from '@/routers/dashboard.router'

import Username from '@/components/input/Username.vue'
import Password from '@/components/input/Password.vue'

import authGrpcService from '@/services/auth.grpc.service'

import utils from '@/utils/utils'
import store from '@/stores/store'
import router from '@/routers/router'

export default defineComponent({
  name: 'SignInParent',
  components: {
    Username,
    Password
  },
  setup() {
    const username = ref('')
    const password = ref('')
    const usernameComp = ref()

    const signIn = async (form: any) => {
      if (!utils.validator.validateForm(form.target)) return
      const res = await authGrpcService.signInParent(username.value, password.value)
      store.commit('sessionStore/signIn', res)
      await router.push(Dashboard.path)
    }

    onMounted(() => {
      usernameComp.value.focusin()
    })

    return {
      username,
      password,
      usernameComp,
      signIn,
      signInPath: SignInNormal.path
    }
  },
  methods: {

  }
})
</script>
