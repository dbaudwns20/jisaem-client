<template>
  <AppModal :title="'레이블관리'">
    <template v-slot:modalContent>
      <form @submit.prevent="updateUserLabel" novalidate>
        <LabelSelect :label="'사용자레이블'" ref="labelSelectComp"
                     :label-type="LabelType.LABEL_TYPE_USER"
                     v-model="userLabelList" />
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
import { defineComponent, ref, onMounted } from 'vue'
import { Label } from "@/models/label/label"
import { LabelType } from "@/models/label/label.type"

import AppModal from "@/components/AppModal.vue"
import LabelSelect from '@/components/label/LabelSelect.vue'

import userGrpcService from "@/services/user.grpc.service"

import _ from 'lodash'

export default defineComponent({
  name: "ModalManageUserLabel",
  props: {
    userId: {type: String, required: true},
    labelList: {type: Array, default: () => []}
  },
  components: {
    AppModal,
    LabelSelect
  },
  setup(props, { emit }) {
    const labelSelectComp = ref()
    const userLabelList = ref([] as Label[])
    // 이미 레이블이 존재하는 경우 리스트에 담기
    if (props.labelList.length > 0) {
      _.forEach(props.labelList, (it: any) => {
        userLabelList.value.push(it.labelInfo)
      })
    }
    const updateUserLabel = async () => {
      const userIdList: string[] = _.indexOf(props.userId, ",") ? props.userId.split(',') : [props.userId]
      const labelIdList: string[] = _.map(userLabelList.value, 'id')
      await userGrpcService.updateUserLabel(userIdList, labelIdList)
      emit("complete-function", '처리되었습니다', true, true)
    }

    onMounted(() => {
      labelSelectComp.value.setLabelInputFocus()
    })

    return {
      labelSelectComp,
      userLabelList,
      updateUserLabel,
      LabelType
    }
  }
})
</script>
