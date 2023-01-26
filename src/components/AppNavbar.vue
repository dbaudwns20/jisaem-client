<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">

      <div class="navbar-brand">
        <router-link to="/dashboard" tag="a" class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/class" tag="a" class="navbar-item">
            <strong>클래스</strong>
          </router-link>
          <a class="navbar-item">
            <strong>사용자</strong>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/profile" tag="a" class="button is-info">
                <strong>내정보</strong>
              </router-link>
              <a class="button is-primary" @click="signOut">
                <strong>로그아웃</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import router from "@/routers/router"
import store from "@/stores/store"
import AuthGrpcService from "@/services/auth.grpc.service";

export default defineComponent({
  name: 'AppNavbar',
  setup() {

  },
  methods: {
    async signOut() {
      await AuthGrpcService.signOut()
      await store.dispatch("sessionStore/signOut")
      await router.push('/sign_in')
    }
  }
})
</script>
