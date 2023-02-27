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
          <router-link :to="userPath" tag="a" class="navbar-item">
            <strong>사용자</strong>
          </router-link>
          <router-link :to="labelPath" tag="a" class="navbar-item">
            <strong>레이블</strong>
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link :to="profilePath" tag="a" class="button is-info is-light has-tooltip-arrow has-tooltip-bottom"
                           data-tooltip="내정보">
                <span class="icon"><i class="fa-solid fa-circle-user"></i></span>
              </router-link>
              <a class="button is-info is-light has-tooltip-arrow has-tooltip-bottom" @click="signOut"
                 data-tooltip="로그아웃">
                <span class="icon"><i class="fa-solid fa-right-to-bracket"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Profile } from "@/routers/auth.router"
import { Label } from "@/routers/label.router"
import { User } from "@/routers/user.router"
import store from "@/stores/store"

export default defineComponent({
  name: 'AppNavbar',
  setup() {
    return {
      labelPath: Label.path,
      profilePath: Profile.path,
      userPath: User.path
    }
  },
  methods: {
    signOut() {
      store.dispatch('sessionStore/signOut')
    }
  }
})
</script>
