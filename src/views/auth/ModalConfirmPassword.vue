<template>
  <AppModal>
    <template v-slot:modalContent>
      <Password />
    </template>
  </AppModal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppModal from "@/components/AppModal.vue"
import Password from "@/components/input/Password.vue"

export default defineComponent({
  name: "ModalConfirmPassword",
  components: {
    AppModal,
    Password
  }
})
</script>

<style scoped>

</style>
