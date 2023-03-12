<template>
  <AppModal :title="'클래스 신규'">
    <template v-slot:modalContent>
      <form @submit.prevent="createClass" novalidate>
        <Text :label="'클래스명'" icons-left="fa-solid fa-user"
              :is-required="true" :placeholder="'클래스명을 입력해주세요'"
              v-model="newClass.name" />
        <DateRangePicker :label-from="'시작일'"
                         :label-to="'종료일'"
                         v-model:from="newClass.startDate"
                         v-model:to="newClass.endDate" />
        <div class="field">
          <label class="label">
            {{ '설명' }}
          </label>
          <textarea class="textarea has-fixed-size" placeholder="설명을 입력해주세요"
                    v-model="newClass.description"
                    rows="3" />
        </div>
        <div class="field">
          <div class="buttons is-centered">
            <button class="button is-info" type="submit">저장</button>
          </div>
        </div>
      </form>
    </template>
  </AppModal>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { bindClassInstance, Class } from "@/models/class/class"

import AppModal from '@/components/AppModal.vue'
import Text from "@/components/input/Text.vue"
import DateRangePicker from "@/components/input/DateRangePicker.vue"

import classGrpcService from "@/services/class.grpc.service"

import utils from "@/utils/utils"

export default defineComponent({
  name: "ModalCreateClass",
  components: {
    AppModal,
    Text,
    DateRangePicker
  },
  setup(props, { emit }) {
    const newClass = reactive({} as Class)
    const createClass = async (form: any) => {
      if (!utils.validator.validateForm(form.target)) return
      await classGrpcService.createClass(bindClassInstance(newClass))
      await emit("complete-function", '생성되었습니다', true)
    }
    return {
      newClass,
      createClass
    }
  }
})
</script>
