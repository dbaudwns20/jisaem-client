<template>
  <section class="hero is-fullheight" v-if="!isShow">
    <div class="hero-body">
      <div class="container">
        <div class="columns">

          <div class="column is-half" @click="goSignUpManager">
            <div class="card is-shady">
              <div class="card-content">
                <div class="content">
                  <h4>학원 관리자 회원가입</h4>
                  <p>학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.학원 관리자 전용 회원가입.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-half" @click="goSignUpUser">
            <div class="card is-shady">
              <div class="card-content">
                <div class="content">
                  <h4>학생, 선생님 회원가입</h4>
                  <p>학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.학생, 학원 선생님전용 회원가입.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <router-view v-if="isShow"></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import router from "@/router";

export default defineComponent({
  name: "SignUp",
  inheritAttrs: false,
  setup() {
    const isShow = ref(false)
    router.afterEach((to, from) => {
      if (to.name === 'SignUp') {
        isShow.value = false
      }
      console.log(to)
      console.log(from)
    })

    const goSignUpManager = () => {
      router.push("/sign_up/manager")
      isShow.value = true
    }

    const goSignUpUser = () => {
      router.push("/sign_up/user")
      isShow.value = true
    }

    return {
      isShow,
      goSignUpManager,
      goSignUpUser
    }
  }
})
</script>

<style scoped>
.card {
  height: 250px;
}

.card:hover {
  cursor: pointer;
  background-color: hsl(0, 0%, 96%);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>
