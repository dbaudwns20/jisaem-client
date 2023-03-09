<template>
  <AppModal :title="'레이블관리'">
    <template v-slot:modalContent>
      <form @submit.prevent="updateUserLabel" novalidate>
        <LabelSelect :label="'사용자레이블'" ref="labelSelectComp"
                     :label-type="LabelType.LABEL_TYPE_CLASS"
                     v-model="classLabelList" />
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

import classGrpcService from "@/services/class.grpc.service"

import _ from 'lodash'

export default defineComponent({
  name: "ModalManageClassLabel",
  props: {
    classId: {type: String, default: '', required: true},
    labelList: {type: Array, default: () => []}
  },
  components: {
    AppModal,
    LabelSelect
  },
  setup(props, { emit }) {
    const labelSelectComp = ref()
    const classLabelList = ref([] as Label[])
    // 이미 레이블이 존재하는 경우 리스트에 담기
    if (props.labelList.length > 0) {
      _.forEach(props.labelList, (it: any) => {
        classLabelList.value.push(it.labelInfo)
      })
    }
    const updateUserLabel = async () => {
      const classIdList: string[] = _.indexOf(props.classId, ",") ? props.classId.split(',') : [props.classId]
      const labelIdList: string[] = _.map(classLabelList.value, 'id')
      await classGrpcService.updateClassLabel(classIdList, labelIdList)
      await emit("complete-function", '처리되었습니다', true)
    }

    onMounted(() => {
      labelSelectComp.value.setLabelInputFocus()
    })

    return {
      labelSelectComp,
      classLabelList,
      updateUserLabel,
      LabelType
    }
  }
})
</script>
