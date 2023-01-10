<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container is-offset-one-fifth">
        <div class="columns features">
          <div class="column is-half">
            <div class="card is-shady">
              <div class="card-content">
                <div class="content">
                  <h4>학원 관리자 회원가입</h4>
                  <p>학원 관리자 전용 회원가입.</p>
                  <router-link to="/sign_up/manager"
                               tab="span"
                               class="button is-info is-medium">
                    회원가입
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="card is-shady">
              <div class="card-content">
                <div class="content">
                  <h4>학생, 선생님 회원가입</h4>
                  <p>학생, 학원 선생님전용 회원가입.</p>
                  <router-link to="/sign_up/user"
                               tag="span"
                               class="button is-info is-medium">
                    회원가입
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "SignUp",
  components: {
  }
})
</script>

<style scoped>
.box {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
