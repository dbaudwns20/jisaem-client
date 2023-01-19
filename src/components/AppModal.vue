<!--
<AppModal>
    <template v-slot:modalContent>
    .. 모달 내용
    </template>
</AppModal>

부모컴포넌트 <router-view></router-view> 선언 필요
-->
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
import { defineComponent, ref } from 'vue'
import router from "@/routers/router";

export default defineComponent({
  name: 'AppModal',
  setup() {
    let modalTitle = ref('')
    router.afterEach((to, from) => {
      modalTitle.value = to.meta.modalTitle as string
    })

    const closeModal = (): void => {
      router.go(-1)
    }

    return {
      modalTitle,
      closeModal
    }
  }
})
</script>
