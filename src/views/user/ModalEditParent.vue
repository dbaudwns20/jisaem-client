<template>
  <AppModal :title="'부모님정보편집'">
    <template v-slot:modalContent>
      <form @submit.prevent="updateParent" novalidate>
        <Username :label="'아이디'"
                  :is-required="true"
                  :dup-check-target="'parent'"
                  :placeholder="'아이디를 입력해주세요'"
                  icons-left="fa-solid fa-user"
                  v-model="editParentInfo.username"/>
        <Phone :label="'전화번호'"
               v-model="editParentInfo.phone" />
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
import { defineComponent, reactive } from "vue"
import { ParentInfo } from "@/models/user/parent.info"

import AppModal from "@/components/AppModal.vue"
import Username from "@/components/input/Username.vue"
import Phone from "@/components/input/Phone.vue"

import userGrpcService from "@/services/user.grpc.service"

import utils from "@/utils/utils"
import _ from "lodash"

export default defineComponent({
  Name: 'ModalEditParent',
  components: {
    AppModal, Username, Phone
  },
  props: ['userId', 'userParentInfo'],
  setup(props, { emit }) {
    const editParentInfo = reactive(props.userParentInfo as ParentInfo)
    const defaultParentInfo = _.cloneDeep(editParentInfo)

    const updateParent = async (form: any) => {
      const updatedUserFields = utils.getUpdatedFields(defaultParentInfo, editParentInfo)
      if (_.isEmpty(updatedUserFields)) {
        utils.message.showWarningToastMsg("변경사항이 없습니다")
        return
      }
      if (!utils.validator.validateForm(form.target)) return
      await userGrpcService.updateUserParentInfo(props.userId, updatedUserFields)
      await emit("complete-function", '수정되었습니다', true)
    }
    return {
      editParentInfo,
      updateParent
    }
  }
})
</script>
