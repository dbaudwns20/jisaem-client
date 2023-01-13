<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <form class="box" @submit.prevent="signIn()">
            <Email v-model="email" />
            <div class="control">
              <button class="button is-fullwidth is-info" type="submit">비밀번호 초기화</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Email from "@/components/input/Email.vue"

export default defineComponent({
  name: "SignIn",
  components: {
    Email
  },
  setup() {
    const email: string = ''
    return {
      email
    }
  },
  methods: {
    signIn(): void {
      console.log(this.email)
    }
  }
})
</script>

<style scoped>

</style>
