<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <form class="box" @submit.prevent="signIn()">
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
.box {
  min-width: 300px;
}
</style>
