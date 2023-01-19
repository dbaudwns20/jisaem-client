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
      <PagingGrid :columns="column" />
    </div>
  </div>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import PagingGrid from "@/components/grid/PagingGrid.vue"

import ClassService from "@/services/classService"

export default defineComponent({
  name: "Class",
  components: {
    AppNavbar, AppFooter, PagingGrid
  },
  setup() {
    const column = ref(ClassService.setClassColumn())
    return {
      column
    }
  }
})
</script>

<style scoped>
</style>
