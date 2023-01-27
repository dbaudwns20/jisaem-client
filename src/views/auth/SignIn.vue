<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="column is-4 is-offset-4">
        <div class="login-container">
          <div class="tabs is-fullwidth is-marginless">
            <ul>
              <li class="tabs-item" :class="{'is-active': loginType === 'user'}" @click="loginType='user'">
                <a>
                  <span>로그인</span>
                </a>
              </li>
              <li class="tabs-item" :class="{'is-active': loginType === 'extra'}" @click="loginType='extra'">
                <a>
                  <span>외부이용자</span>
                </a>
              </li>
            </ul>
          </div>
          <form class="box" @submit.prevent="signIn()" novalidate>
            <Text :label="'아이디'" :placeholder="'아이디를 입력해주세요'"
                  :is-required="true" icons-left="fa-solid fa-user"
                  v-model="username"/>
            <Password :label="'비밀번호'" :placeholder="'비밀번호를 입력해주세요'"
                      :is-required="true"
                      v-model="password"/>
            <div class="field">
              <button class="button is-fullwidth is-info" type="submit">로그인</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Dashboard } from "@/routers/dashboard.router"
import AuthGrpcService from "@/services/auth.grpc.service"
import Text from "@/components/input/Text.vue"
import Password from "@/components/input/Password.vue"
import Validator from "@/utils/validator"
import store from "@/stores/store"
import router from "@/routers/router"

export default defineComponent({
  name: "SignIn",
  components: {
    Text,
    Password
  },
  setup() {
    const username = ref('')
    const password = ref('')
    const loginType = ref('user')
    return {
      username,
      password,
      loginType
    }
  },
  methods: {
    async signIn() {
      if (!Validator.validate()) return
      let res = null
      if (this.loginType === 'extra') {
        res = await AuthGrpcService.signInParent(this.username, this.password)
      } else {
        res = await AuthGrpcService.signInNormal(this.username, this.password)
      }
      await store.commit("sessionStore/signIn", res)
      await router.push(Dashboard.path)
    }
  }
})
</script>
<style lang="scss">
.login-container {
  box-shadow: 0 0.5em 1em -0.5em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
}
.tabs {
  font-weight: bold;
  line-height: 1.8em;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: hsl(0, 0%, 96%);
}
.tabs-item {
  width: 50%;
}
.tabs-item.is-active {
  background: hsl(0, 0%, 100%);
}
.tabs-item:hover {
  text-decoration: underline;
}
.box {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
