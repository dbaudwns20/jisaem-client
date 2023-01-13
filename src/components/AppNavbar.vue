<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../../../../..">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox">
        </a>

        <div class="navbar-burger burger" data-target="navMenu">
          <span>하하</span>
          <span>호호</span>
          <span>히히</span>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Account
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Profile
            </a>
            <a class="navbar-item">
              Settings
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AppNavbar'
})
</script>
