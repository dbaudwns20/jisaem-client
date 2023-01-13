<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <form class="box" @submit.prevent="signUp()" novalidate>
            <hr />
            <Email :label="'이메일'" :placeholder="'이메일을 입력해주세요'"
                   :is-required="true" :is-login="false"
                   v-model="email"/>

            <Password :label="'비밀번호'" :placeholder="'영문자, 숫자, 특수문자를 포함 최소 8~20자'"
                      :is-required="true" :is-login="false"
                      v-model="password"/>

            <div class="field">
              <label class="label">학원명</label>
              <input class="input" type="text" placeholder="학원명을 입력해주세요">
            </div>

            <div class="field">
              <label class="label">학원주소</label>
              <input class="input" type="text" placeholder="학원주소를 입력해주세요">
            </div>

            <div class="field">
              <label class="label">학원전화번호</label>
              <input class="input" type="tel"
                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                     placeholder="학원전화번호를 입력해주세요">
            </div>


            <div class="field">
              <ul>
                <li style="list-style: none;">
                  <label class="checkbox">
                    <input type="checkbox">
                    &nbsp;전체 동의
                  </label>
                </li>
                <hr style="margin: 5px 0 5px 0" />
                <li style="list-style: none;">
                  <label class="checkbox">
                    <input type="checkbox">
                    &nbsp;<a href="#">이용약관</a> 동의
                  </label>
                </li>
                <li style="list-style: none;">
                  <label class="checkbox">
                    <input type="checkbox">
                    &nbsp;<a href="#">개인정보 수집 및 이용</a> 동의
                  </label>
                </li>
              </ul>
            </div>

            <div class="control">
              <button class="button is-fullwidth is-info" type="submit">회원가입</button>
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
import Validator from "@/utils/Validator"

export default defineComponent({
  name: 'SignUpManager',
  components: {
    Email,
    Password
  },
  setup() {
    const email = ref(null)
    const password = ref(null)

    const signUp = (): void => {
      if (!Validator.validate()) return
      console.log(email.value)
      console.log(password.value)
    }

    return {
      email,
      password,
      signUp
    }
  }
})
</script>
