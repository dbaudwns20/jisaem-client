<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <form class="box" @submit.prevent="signIn()" novalidate>

            <Email :label="'이메일'" :placeholder="'이메일을 입력해 주세요'"
                   :is-required="true"
                   v-model="email" />

            <Password :label="'비밀번호'" :placeholder="'비밀번호를 입력해 주세요'"
                      :is-required="true"
                      v-model="password" />

            <div class="control">
              <button class="button is-fullwidth is-info" type="submit">로그인</button>
            </div>

            <div class="level-right">
              <router-link to="/sign_up"
                           tag="p"
                           class="level-item">
                회원가입
              </router-link>
              <router-link to="/reset_password"
                           tag="p"
                           class="level-item">
                비밀번호 재설정
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Email from "@/components/input/Email.vue"
import Password from "@/components/input/Password.vue"
import router from "@/router"
import Validator from "@/utils/Validator"

export default defineComponent({
  name: "SignIn",
  components: {
    Email,
    Password
  },
  setup() {
    let email = ref('')
    let password = ref('')

    const signIn = () => {
      if (!Validator.validate()) return
      console.log(email.value)
      console.log(password.value)
      if (email.value === 'dbaudwns20@gmail.com' && password.value == 'QAZwsx1@') {
        router.push("/dashboard")
      }
    }
    return {
      email,
      password,
      signIn
    }
  },
})
</script>

<style scoped>
.box {
  min-width: 300px;
}
</style>
