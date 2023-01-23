<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <form class="box" @submit.prevent="signIn()" novalidate>

            <Text :label="'아이디'" :placeholder="'아이디를 입력해주세요'"
                  :is-required="true" icons-left="fa-solid fa-user"
                  v-model="username" />

            <Password :label="'비밀번호'" :placeholder="'비밀번호를 입력해주세요'"
                      :is-required="true"
                      v-model="password" />

            <div class="control">
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
import Text from "@/components/input/Text.vue"
import Password from "@/components/input/Password.vue"
import router from "@/routers/router"
import Validator from "@/utils/validator"
import {AuthClient} from "@/services/authService";
export default defineComponent({
  name: "SignIn",
  components: {
    Text,
    Password
  },
  setup() {
    const username = ref('')
    const password = ref('')
    AuthClient.signInNormal("username", "password12#")
    const signIn = () => {
      if (!Validator.validate()) return

      if (username.value === 'dbaudwns20' && password.value == 'QAZwsx1@') {
        router.push("/dashboard")
      }
    }
    return {
      username,
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
