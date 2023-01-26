<template>
  <AppNavbar/>
  <div class="container">
    <section class="hero is-link is-small">
      <div class="hero-body">
        <p class="title">
          내정보
        </p>
      </div>
    </section>
    <hr/>
    <div class="columns">
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-square">
              <img src="@/assets/user_image_sample.png" alt="Profile Photo">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title">유명준 <small>학생</small></p>
                <p>
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span>dbaudwns20@gmail.com</span>
                  </span>
                </p>
                <p>
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fa-solid fa-mobile"></i>
                    </span>
                    <span>010-5464-8509</span>
                  </span>
                </p>
              </div>
            </div>
            <div class="content">
              중흥고등학교 3학년 졸업생, 빡대가리임 공부 존나 못함...중흥고등학교 3학년 졸업생, 빡대가리임 공부 존나 못함...중흥고등학교 3학년 졸업생, 빡대가리임 공부 존나 못함...중흥고등학교 3학년 졸업생, 빡대가리임 공부 존나 못함...중흥고등학교 3학년 졸업생, 빡대가리임 공부 존나 못함...
            </div>
          </div>
          <div style="font-size: small; display: flex; text-align: left;">
            <span class="card-footer-item">가입일자: 2022-12-31</span>
            <span class="card-footer-item">수정일자: 2023-01-22</span>
          </div>
          <footer class="card-footer" style="font-size: small">
            <a href="#" class="card-footer-item" @click="doConfirmPassword('profile')">개인정보수정</a>
            <a href="#" class="card-footer-item">비밀번호변경</a>
            <a href="#" class="card-footer-item">회원탈퇴</a>
          </footer>
        </div>
      </div>
      <div class="column">
        <form class="box">
          <Text :label="'이름'" :placeholder="'이름을 입력해주세요'"
                :is-read-only="true"
                :is-required="true" icons-left="fa-solid fa-user" />
          <Email :label="'이메일'" :is-read-only="true" />
          <Text :label="'전화번호'" :placeholder="'전화번호를 입력해주세요'"
                :is-read-only="true"
                icons-left="fa-solid fa-mobile" />
          <hr>
          <Text :label="'학교'" :placeholder="'학교명을 입력해주세요'"
                :is-read-only="true"
                icons-left="fa-solid fa-school-flag" />
          <Text :label="'부모님계정'" :placeholder="'부모님계정을 입력해주세요'"
                :is-read-only="true"
                icons-left="fa-solid fa-user" />
          <div class="field">
            <label class="label">부가정보</label>
            <textarea class="textarea has-fixed-size" placeholder="부가정보를 입력해주세요"
                      readonly></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
  <AppFooter/>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import Text from "@/components/input/Text.vue"
import Email from "@/components/input/Email.vue"
import { User } from "@/models/auth/user"
import { StudentInfo } from "@/models/auth/studentInfo"
import AuthGrpcService from "@/services/auth.grpc.service"

import router from "@/routers/router"

export default defineComponent({
  name: "Profile",
  inheritAttrs: false,
  components: {
    AppNavbar,
    AppFooter,
    Text,
    Email
  },
  setup() {
    let profileInfo
    const getProfile = () => {
      profileInfo = reactive(AuthGrpcService.profileGet())
    }
    getProfile()
    console.log(profileInfo)
    return {
      profileInfo
    }
  },
  methods: {
    doConfirmPassword(target: string): void {
      router.push("profile/confirm_password")
    }
  }
})
</script>

<style>
.content {
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical
}
</style>
