<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ modalTitle }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <slot name="modalContent"></slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from "@/router";

export default defineComponent({
  name: 'AppModal',
  setup() {
    let modalTitle: string = '제목없음'
    router.afterEach((to, from) => {
      modalTitle = to.meta.modalTitle as string
    })
    return {
      modalTitle
    }
  },
  methods: {
    closeModal(): void {
      router.go(-1)
    }
  }
})
</script>
