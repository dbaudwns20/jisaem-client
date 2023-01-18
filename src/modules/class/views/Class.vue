<template>
  <AppNavbar />
  <div class="container">
    <section class="hero is-link is-small">
      <div class="hero-body">
        <p class="title">
          클래스
        </p>
      </div>
    </section>
    <div class="container">
      <section class="section">
      </section>
    </div>
  </div>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
  name: "Class",
  components: {
    AppNavbar, AppFooter
  }
})
</script>

<style scoped>
</style>
