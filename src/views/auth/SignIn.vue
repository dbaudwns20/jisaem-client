<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <form class="box" @submit.prevent="signIn()">
            <div class="tabs is-right is-small">
              <ul>
                <li>
                  <router-link to="/sign_up">회원가입</router-link>
                </li>
                <li>
                  <router-link to="/find_account">계정찾기</router-link>
                </li>
              </ul>
            </div>
            <div class="field">
              <label class="label">
                이메일
              </label>
              <div class="control">
                <input class="input" type="email"
                       v-model="email" required
                       placeholder="e.g. alex@example.com">
              </div>
            </div>

            <div class="field">
              <label class="label">
                비밀번호
              </label>
              <div class="control">
                <input class="input" type="password"
                       v-model="password" required
                       placeholder="********">
              </div>
            </div>
            <button class="button is-fullwidth is-info is-medium" type="submit">로그인</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "SignIn",
  components: {
  },
  setup() {
    const email: string = ''
    const password: string = ''
    return {
      email, password
    }
  },
  methods: {
    signIn(): void {
      console.log(this.email)
      console.log(this.password)
    }
  }
})
</script>

<style scoped>

</style>
