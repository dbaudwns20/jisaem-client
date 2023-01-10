<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  created () {
    // 로그인 페이지로 강제 라우팅
    this.$router.push('/sign_in')
  }
})

</script>
