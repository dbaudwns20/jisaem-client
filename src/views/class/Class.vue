<template>
  <AppNavbar />
  <div class="container">
    <section class="hero is-link is-small">
      <div class="hero-body">
        <div class="level">
          <div class="level-left">
            <p class="title">
              클래스
            </p>
          </div>
          <div class="level-right">
            <div class="buttons">
              <button class="button is-primary is-small">추가</button>
              <button class="button is-danger is-small">삭제</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PagingGrid :columns="column" />
  </div>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import PagingGrid from "@/components/grid/PagingGrid.vue"

import ClassService from "@/services/class.ui.service"

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
