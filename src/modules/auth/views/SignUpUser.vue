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
              <ul>
                <li style="list-style: none;">
                  <label class="checkbox">
                    <input type="checkbox" @change="allAgree($event.target.checked)">
                    &nbsp;전체 동의
                  </label>
                </li>
                <hr style="margin: 5px 0 5px 0" />
                <li style="list-style: none;">
                  <label class="checkbox">
                    <input type="checkbox" v-model="termsOfUse">
                    &nbsp;<a href="#">이용약관</a> 동의
                  </label>
                </li>
                <li style="list-style: none;">
                  <label class="checkbox">
                    <input type="checkbox" v-model="personalInformation">
                    &nbsp;<a href="#">개인정보 수집 및 이용</a> 동의
                  </label>
                </li>
              </ul>
            </div>

            <div class="control">
              <button class="button is-fullwidth is-info" type="submit" :disabled="!isEnabled">회원가입</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Email from "@/components/input/Email.vue"
import Password from "@/components/input/Password.vue"
import Validator from "@/utils/Validator"

export default defineComponent({
  name: 'SignUpUser',
  components: {
    Email,
    Password
  },
  setup(props, context) {
    const email = ref('')
    const password = ref('')
    const termsOfUse = ref(false)
    const personalInformation = ref(false)
    const isEnabled = ref(false)

    const signUp = (): void => {
      if (!Validator.validate()) return
      console.log(email.value)
      console.log(password.value)
    }

    const allAgree = (value: boolean): void => {
      termsOfUse.value = value
      personalInformation.value = value
    }

    watch(() =>
      termsOfUse.value, (newValue: any, oldValue: any): void => {
        if (newValue && personalInformation.value)
          isEnabled.value = true
        else if (!newValue)
          isEnabled.value = false
      }
    )

    watch(() =>
      personalInformation.value, (newValue: any, oldValue: any): void => {
        if (newValue && termsOfUse.value)
          isEnabled.value = true
        else if (!newValue)
          isEnabled.value = false
      }
    )
    return {
      email,
      password,
      termsOfUse,
      personalInformation,
      isEnabled,
      signUp,
      allAgree
    }
  }
})
</script>

<style>
</style>
